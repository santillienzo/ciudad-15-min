// import { Button } from "@/components/ui/button";
import { Button } from "@chakra-ui/react";
import Countdown from "./Countdown";
import { Box, Text } from "@chakra-ui/react";
import { RiArrowRightUpLine, RiCircleFill, RiMapPinLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import buildingsImg from "../../../assets/svg/Edificios.svg";
import logoMuni  from '@/assets/img/municipalidad.png'
import logoBloomberg  from '@/assets/img/Bloomberg.png'
import logoBloomberg2  from '@/assets/img/Bloomberg_2.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-background-primary flex items-center justify-center flex-col w-full min-h-screen overflow-x-hidden relative"
    >
      <Box
        as="div"
        className="flex flex-col items-center justify-center min-h-[100vh] w-full px-4 sm:px-6 md:px-16 relative"
      >
        <div className="absolute top-0 right-0 flex gap-3 p-4">
          <div className="bg-white shadow-lg p-1 rounded-xl">
            <img src={logoMuni} className="h-10" alt="Logo de la Municipalidad de la Ciudad de Mendoza" />
          </div>
          <div className="bg-white shadow-lg p-1 rounded-xl">
            <img src={logoBloomberg} className="h-10" alt="Logo de Bloomberg" />
          </div>
          <div className="bg-white shadow-lg p-1 rounded-full">
            <img src={logoBloomberg2} className="h-10" alt="Logo de Bloomberg" />
          </div>
        </div>
        <Box
          as="div"
          className="z-40 text-center flex flex-col md:flex-row-reverse w-full justify-center items-center"
        >
          <Box
            as="div"
            className="flex flex-col w-full flex-grow h-full p-4 items-center pb-16 md:pb-32 pt-16 md:pt-32"
          >
            <motion.p
              initial={{y: -300}}
              animate={{y: 0}}
              transition={{duration: .5}}
              className="text-2xl sm:text-3xl md:text-4xl pb-5 w-[80%] text-center text-secondary font-bold leading-tight"
            >
              Transformemos{" "}
              <span
                
                className="text-button-cta-primary"
              > juntos </span>{" "}
              Mendoza en una ciudad más
              <span className="text-button-cta-primary"> saludable </span>,
              <span className="text-button-cta-primary"> equitativa </span> y
              <span className="text-button-cta-primary"> sostenible </span>
            </motion.p>

            <Box
              as="div"
              className="flex flex-col justify-evenly mt-4 items-center"
            >
              <Box
                as="span"
                className="w-14 h-14 bg-button-cta-primary rounded-full flex items-center justify-center"
              >
                <RiMapPinLine className="text-slate-200 w-7 h-7" />
              </Box>
              <Text className="text-[#FBD491] font-bold font-poppins text-base md:text-lg lg:text-xl pt-2 text-center">
                Viernes 22/11
                <RiCircleFill className="h-2 inline-flex mb-1" />
                18hs
                <RiCircleFill className="h-2 inline-flex mb-1" />
                Plaza Independencia
              </Text>
              {/* <Box className="mt-4"> */}
              <Countdown
                id="countdown"
                limitDate="Nov 22, 2024 18:00:00"
                finalMessage=""
              />
              {/* </Box> */}
            </Box>
            <Box className="flex flex-col">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1, 1.05, 1]  // Definimos la escala en el 'animate'
                }}
                transition= {{
                  duration: 1,    // Duración de cada latido
                  ease: "easeInOut", // Suavizado
                  repeat: Infinity, // Repite la animación indefinidamente
                  repeatType: "loop", // Vuelve a empezar después de cada ciclo
                  repeatDelay: 1,
                  delay: 1
                }}
              >
                <Button
                  rightIcon={<RiArrowRightUpLine />}
                  className="bg-button-cta-primary text-button-cta-secondary-foreground rounded w-full sm:w-auto m-auto mt-4"
                >
                  <a href={"#participar"}>Quiero participar</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{x: 200}}
                animate={{x: 0}}
                transition={{duration: .5}}
              >
                <Button
                  rightIcon={<GoPlus />}
                  className="rounded w-full m-auto mt-4 text-button-cta-secondary-foreground"
                  variant="outline"
                  color="#E2E8F0"
                  _hover={{
                    color: "#404040",
                    bg: "#E2E8F0",
                  }}
                >
                  <a href={"#motivacion"} className="">
                    Más Info
                  </a>
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Box>

        {/* Imagen oculta en mobile y que ocupa todo el ancho en desktop */}
        <motion.img
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 3}}
          src={buildingsImg}
          className="block absolute bottom-0 left-0 w-full h-auto z-30 "
        />
      </Box>
      
    </section>
  );
};

export default Home;