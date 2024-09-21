// import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Countdown from "./Countdown";
// import { Link } from "react-router-dom";
import { Box, Stack, Text } from "@chakra-ui/react";
import MainLogo from "../../../assets/svg/Logo blanco.svg";
import CiudadLogo from "../../../assets/svg/ciudad.png";
import { RiCircleFill, RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack
      id="home"
      className="bg-background-primary flex items-center justify-center flex-col w-full h-screen overflow-x-hidden"
    >
      <Box className="flex items-center justify-center h-full px-6 md:px-16">
        <Box className="text-center max-w-4xl mx-auto">
          <Box className="flex flex-col gap-3">
            <h3 className="text-white font-bold font-poppins">Bienvenidos a</h3>
            <img
              src={MainLogo}
              alt="En busca de la ciudad en 15 minutos"
              className="w-full h-auto max-w-xs m-auto"
            />
            <span className="w-14 h-14 bg-button-cta-primary rounded-full flex items-center justify-center m-auto">
              <RiMapPinLine className="text-slate-200 w-7 h-7" />
            </span>
            <Text className="text-button-cta-primary font-bold font-poppins">
              {" "}
              Viernes 22/11
              <RiCircleFill className="h-2 inline-flex mb-1" />
              17hs
              <RiCircleFill className="h-2 inline-flex mb-1" />
              Plaza independencia
            </Text>
          </Box>

          {/* <h3 className="text-lg sm:text-xl md:text-2xl font-bold xl:p-6 text-nowrap bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
            Bienvenidos a
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold drop-shadow-xl bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
            En busca{" "}
            <span className="text-nowrap">de la ciudad</span>{" "}
            <span className="text-nowrap">en 15 minutos</span>
          </h1> */}

          <Box className="">
            <Countdown
              id="countdown"
              limitDate="Nov 22, 2024 21:00:00"
              finalMessage="JUGAR!!"
            />
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col gap-5 max-sm:w-80">
        <Button className="bg-button-cta-primary rounded">
          <Link
            to={"/login"}
            className="text-button-cta-primary-foreground rounded"
          >
            Jugar
          </Link>
        </Button>

        <Button className="bg-button-cta-primary-foreground text-button-cta-secondary-foreground rounded">
          <Link to={"/register"}>Registrarme</Link>
        </Button>
      </Box>
      <Box
        className="w-screen h-screen"
        style={{
          backgroundImage: `url(${CiudadLogo})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto",
        }}
      ></Box>
      {/* <span className="animate-bounce mt-10 md:mt-12 bg-white p-3 md:p-4 rounded-full">
        <a href="#sponsors">
          <RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
        </a>
      </span> */}
    </Stack>
  );
};

export default Home;
