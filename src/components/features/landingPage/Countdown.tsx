import React, { useEffect, useState, useRef } from "react";
// import ClockLoader from "../../../assets/clock-loader.svg";
import CalendarSkeleton from "@/components/common/CalendarSkeleton";

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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
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

      /* CALCULO DE LOS MINUTOS */

      const minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2);

      /* CALCULO DE LOS SEGUNDOS */

      const seconds = (
        "0" + Math.floor((limitTime % (1000 * 60)) / 1000)
      ).slice(-2);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

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
      className=" flex items-center justify-center flex-col w-full overflow-x-hidden"
    >
      <div className="flex items-center justify-between h-full max-md:px-16 overflow-hidden max-w-full">
        <div className="text-center flex items-center">
          {isLoading ? (
              <CalendarSkeleton
              />
          ) : (
            <div className=" flex justify-center space-x-2 sm:space-x-4 text-center bg-cover text-[#FDB913] bg-center">
            {/* Días */}
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-sm tracking-widest mt-2">Días</span>
              </div>
      
            {/* Separador */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold">:</span>
      
            {/* Horas */}
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-sm tracking-widest mt-2">Horas</span>
              </div>
      
            {/* Separador */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold">:</span>
      
            {/* Minutos */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-sm tracking-widest mt-2">Minutos</span>
            </div>
      
            {/* Separador */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold">:</span>
      
            {/* Segundos */}
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-sm tracking-widest mt-2">Segundos</span>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
