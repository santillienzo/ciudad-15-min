// import { Button } from "@/components/ui/button";
import { Button } from "@chakra-ui/react";
import Logo from "@/assets/svg/Logo blanco.svg";
import { Box } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import buildingsImg from "../../../assets/svg/Edificios.svg";
import logoMuni  from '@/assets/img/municipalidad.png'
import logoBloomberg  from '@/assets/img/Bloomberg.png'
import logoBloomberg2  from '@/assets/img/Bloomberg_2.png'
import {motion} from 'framer-motion'
import { variants } from "@/lib/motionVariants";
import { gameSettings } from "@/lib/utils";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background-primary flex items-center flex-col w-full min-h-screen md:min-h-[110vh] overflow-x-hidden"
    >
        <div className="absolute top-0 left-0 flex justify-end xl:justify-between gap-3 p-4 w-full">
          <div className="flex items-center p-1">
            <img src={logoMuni} className="h-8 sm:h-9 md:h-12" alt="Logo de la Municipalidad de la Ciudad de Mendoza" />
          </div>
          <div className="flex items-center gap-3">
            <div className="p-1">
              <img src={logoBloomberg2} className="h-9  sm:h-10  md:h-14" alt="Logo de Bloomberg" />
            </div>
            <div className="p-1">
              <img src={logoBloomberg} className="h-9 sm:h-10 md:h-14" alt="Logo de Bloomberg" />
            </div>
          </div>
        </div>
        <Box
          as="div"
          className="z-40 flex-1 text-center flex flex-col w-full justify-center items-center p-4 py-16 md:pb-32 md:pt-16 "
        >
            <motion.img
              initial={'rightHidden'}
              whileInView={'visible'}
              viewport={{ once: true }}
              variants={variants}
              src={Logo} 
              alt="Logo de la Ciudad en 15 minutos" 
              className="w-11/12 md:w-1/3" 
            />
            <div className="text-2xl sm:text-3xl md:text-4xl my-10 md:my-6 space-y-2 w-11/12 md:w-full text-center text-secondary font-bold leading-tight">
              <motion.p
                initial={{y: -300}}
                animate={{y: 0}}
                transition={{duration: .5}}
                className=""
              >
                Sabías que la ciudad de Mendoza es de{" "}
                <span
                  className="text-button-cta-primary"
                > 15 minutos? </span>
              </motion.p>
              <motion.p
                initial={{y: -300}}
                animate={{y: 0}}
                transition={{duration: .5}}
                className=""
              >
                Descubrila
                <span className="text-button-cta-primary"> jugando </span>
                con tu familia y amigos.
              </motion.p>
            </div>

            {/* <Box
              as="div"
              className="flex flex-col justify-evenly mt-4 items-center"
            >
              <Text className="text-[#FBD491] font-bold font-poppins text-base md:text-lg lg:text-xl pt-2 text-center">
                Viernes 22/11
                <RiCircleFill className="h-2 inline-flex mb-1" />
                18hs
                <RiCircleFill className="h-2 inline-flex mb-1" />
                Plaza Independencia
              </Text> */}
              {/* <Box className="mt-4"> */}
              {/* <Countdown
                id="countdown"
                limitDate="Nov 22, 2024 18:00:00"
                finalMessage=""
              /> */}
              {/* </Box> */}
            {/* </Box> */}
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
                {
                  new Date() > new Date(gameSettings.date.start) ? (
                    <Button
                      rightIcon={<RiArrowRightUpLine />}
                      className="bg-button-cta-primary text-button-cta-secondary-foreground rounded w-full sm:w-auto m-auto mt-4"
                      onClick={()=> window.location.href = "/lobby"}
                    >
                      Ir al juego
                    </Button>
                  ) : (
                    <Button
                      rightIcon={<RiArrowRightUpLine />}
                      className="bg-button-cta-primary text-button-cta-secondary-foreground rounded w-full sm:w-auto m-auto mt-4"
                      onClick={()=> window.location.href = "#participar"}
                    >
                      Quiero participar
                    </Button>
                  )
                }

              </motion.div>

              <motion.div
                initial={{x: 200}}
                animate={{x: 0}}
                transition={{duration: .5}}
              >
                <Button
                  rightIcon={<GoPlus className="z-10" />}
                  className="rounded w-full m-auto mt-4 text-button-cta-secondary-foreground relative overflow-hidden"
                  variant="outline"
                  color="#ebebeb"
                  _hover={{
                    color: "#404040",
                    bg: "#E2E8F0",
                  }}
                  onClick={()=> window.location.href = '#motivacion'}
                >
                  <span className="z-10">
                    Más Info
                  </span>
                </Button>
              </motion.div>
            </Box>
        </Box>
        {/* Imagen oculta en mobile y que ocupa todo el ancho en desktop */}
        <motion.img
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2}}
          src={buildingsImg}
          className="block absolute bottom-0 left-0 w-full h-auto z-30 "
        />
    </section>
  );
};

export default Home;