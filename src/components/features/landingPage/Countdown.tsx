import React, { useEffect, useState, useRef } from "react";
// import ClockLoader from "../../../assets/clock-loader.svg";
import { Spinner } from "@chakra-ui/react";

interface CountdownProps {
  id: string;
  limitDate: string;
  finalMessage: string;
}

const Countdown: React.FC<CountdownProps> = ({
  id,
  limitDate,
  finalMessage,
}) => {
  const [timeLeft, setTimeLeft] = useState<JSX.Element | string>("");
  const [isLoading, setIsLoading] = useState(true);
  const countdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const countdownDate = new Date(limitDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const limitTime = countdownDate - now;

      if (limitTime < 0) {
        clearInterval(intervalId);
        if (countdownRef.current) {
          countdownRef.current.innerHTML = `<h3>${finalMessage}</h3>`;
        }
        return;
      }

      const days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
      const hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2);
      const minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2);

      /* CALCULO DE LOS SEGUNDOS */

      // const seconds = (
      //   "0" + Math.floor((limitTime % (1000 * 60)) / 1000)
      // ).slice(-2);

      setTimeLeft(
        // <div className="max-sm:flex max-xl:flex-col max-md:flex-col max-sm:flex-col">
        <div className="flex font-poppins">
          <span className="text-2xl max-sm:text-2xl pr-1 font-poppins">{days}</span> días{" "}
          <span className="font-bold text-2xl max-sm:text-2xl pl-2 pr-1 font-poppins">
            {hours}
          </span>{" "}
          horas{" "}
          <span className="font-bold text-2xl max-sm:text-2xl pl-2 pr-1 font-poppins">
            {minutes}
          </span>{" "}
          minutos{" "}
          {/* <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent font-bold text-7xl max-sm:text-5xl">
            {seconds}
          </span>{" "}
          Segundos{" "} */}
        </div>
        // `${days} Días ${hours} Horas ${minutes} Minutos y ${seconds} segundos`
      );

      setIsLoading(false);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [limitDate, finalMessage]);

  return (
    <section
      id={id}
      ref={countdownRef}
      className="bg-background-primary flex items-center justify-center flex-col w-full overflow-x-hidden"
    >
      <div className="flex items-center justify-between h-full max-md:px-16">
        <div className="text-center">
          {isLoading ? (
            <div className="loader flex justify-center items-center overflow-hidden">
              {/* <span className="text-white text-3xl">
                <img src={ClockLoader} alt="Loader" />
              </span> */}

              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color={`hsl(84.22, 53.17%, 59.8%)`}
                size="xl"
              />
            </div>
          ) : (
            <h2 className="text-2xl max-sm:text-2xl font-bold p-5 text-button-cta-primary">
              {timeLeft}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
