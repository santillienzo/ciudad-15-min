// import Logo from "../../../assets/Logo.svg";
import Logo from "@/assets/svg/Logo blanco.svg";
import buildingLeft from "@/assets/svg/Edificios 1.svg";
import { motion } from "framer-motion";
import { variants } from "@/lib/motionVariants";

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
          <motion.img
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            src={Logo} 
            alt="Logo de la Ciudad en 15 minutos" 
            className="w-96" 
          />
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
            acceso equitativo a los servicios esenciales.
          </motion.p>

          <motion.p 
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="font-semibold text-xl text-button-cta-primary-foreground"
          > 
            Esta campaña busca sensibilizar a la población sobre la{" "}
            <span className="text-button-cta-primary"> movilidad activa </span>{" "}
            y la{" "}
            <span className="text-button-cta-primary">
              {" "}
              reducción del uso del automóvil
            </span>
            , promoviendo una cultura de caminatas y ciclismo que favorezca
            tanto al medio ambiente como a la salud pública.
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
