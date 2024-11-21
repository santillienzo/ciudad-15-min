import instruccionesImg from "@/assets/img/instrucciones.webp";
import { variants } from "@/lib/motionVariants";
import { ScanQrCode, SquarePen, Undo2 } from "lucide-react";
import {motion} from 'framer-motion'

const Instructions = () => {
  return (
    <section id="instrucciones" className="bg-pink-500 text-white p-8 md:p-16 w-full h-auto overflow-hidden">
      <motion.h2 
        initial={'bottomHidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
        variants={variants}
        className="text-4xl font-bold text-center mb-8"
      >Instrucciones</motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de texto */}
        <div className="space-y-6">
          <motion.div 
            initial={'leftHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="flex items-start"
          >
            <div className="p-3 rounded-full bg-background-secondary">
                <SquarePen />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Registrate</h3>
              <p className="text-xl">Ingresá tus datos y esperá la cuenta regresiva para el evento. ¡Preparáte para el desafío en la ciudad de Mendoza!</p>
            </div>
          </motion.div>

          <motion.div 
            initial={'leftHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="flex items-start"
          >
            <div className="p-3 rounded-full bg-background-primary">
                <ScanQrCode />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Explorá y Escaneá</h3>
              <p className="text-xl">Durante el evento, usá el mapa interactivo para caminar hacia los lugares cercanos de la ciudad y escaneá los códigos QR.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={'leftHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className="flex items-start"
          >
            <div className="p-3 rounded-full bg-pink-900">
                <Undo2 />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Regresá y Ganá</h3>
              <p className="text-xl">Volvé al punto de inicio en la Plaza Independencia y escaneá el QR final en el tiempo determinado. ¡Todos los que lo logran participan en un sorteo!</p>
            </div>
          </motion.div>
        </div>

        {/* Imagen (oculta en pantallas pequeñas) */}
        <div className="hidden md:flex justify-center">
          <motion.img 
            initial={'rightHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            src={instruccionesImg} 
            alt="Instrucciones" 
            className="object-contain w-96" 
          />
        </div>
      </div>
    </section>
  );
};

export default Instructions;
