// import Logo from "../../../assets/Logo.svg";
import buildingLeft from "@/assets/svg/Edificios 1.svg";
import { motion } from "framer-motion";
import { variants } from "@/lib/motionVariants";
import { RiCircleFill } from "react-icons/ri";
import Countdown from "./Countdown";
import { Divider } from "@chakra-ui/react";

const Motivation = () => {
  return (
    <section
      id="motivacion"
      className="relative scroll-smooth bg-[#4AAFB2] flex flex-col md:flex-row justify-center items-center min-h-screen w-full overflow-hidden pt-16 md:p-0"
    >
      <div 
        className="mb-16  md:mb-0 flex w-[90%] justify-end items-center h-full relative"
      >
        <div className="flex flex-col w-1/2 max-sm:w-full gap-8 z-10">
          <motion.div
              className="flex flex-col justify-evenly mt-4 items-center"
              initial={'rightHidden'}
              whileInView={'visible'}
              viewport={{ once: true }}
              variants={variants}
          >
              <p className="text-[#FBD491] font-bold font-poppins text-base text-lg lg:text-xl pt-2 text-center">
                Viernes 22/11
                <RiCircleFill className="h-2 inline-flex mb-1" />
                18hs
                <RiCircleFill className="h-2 inline-flex mb-1" />
                Plaza Independencia
              </p>
              <div className="mt-4">
              <Countdown
                id="countdown"
                limitDate="Nov 22, 2024 18:00:00"
                finalMessage=""
              /> 
            </div>
          </motion.div>
          <Divider/>
          <motion.p 
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="font-semibold text-xl text-button-cta-primary-foreground"
          >
            La{" "}
            <span className="text-button-cta-primary"> ciudad de Mendoza </span>
            enfrenta importantes desafíos relacionados con la movilidad y el
            medio ambiente.
          </motion.p>

          <motion.p 
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="font-semibold text-xl text-button-cta-primary-foreground"
          > 
            Este evento busca concientizar a la población sobre{" "}
            <span className="text-button-cta-primary"> alternativas </span>{" "}
            para usar menos el auto y tener una ciudad{" "}
            <span className="text-button-cta-primary">
              más sustentable
            </span>
            Te proponemos un juego interactivo por las calles de la ciudad de Mendoza, 
            para que veas que es posible acceder caminando a todos los servicios esenciales, {" "}
            <span className="text-button-cta-primary">
              en menos de 15 minutos. 
            </span>
          </motion.p>

          <motion.p 
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="font-semibold text-xl text-button-cta-primary-foreground"
          >
            Nuestro proyecto resultó ganador en el concurso del Fondo de Juventud y 
            Acción Climática, impulsado por la Municipalidad de <span className="text-button-cta-primary">Ciudad de Mendoza</span>  y 
            financiado por la <span className="text-button-cta-primary">Fundación Bloomberg Philanthropies</span> en la Ciudad de Mendoza.
          </motion.p>
        </div>
      </div>
      <motion.img 
        src={buildingLeft}
        alt="Edificio"
        className="md:absolute bottom-0 left-0 w-full md:w-1/2 m-0 p-0"
        initial={'leftHidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
        variants={variants}
      />
    </section>
  );
};

export default Motivation;
