import { motion } from "framer-motion";
import logoExample from '@/assets/img/example.logo.jpg'

const images = [
  logoExample, // Añade más imágenes según sea necesario
  logoExample, // Añade más imágenes según sea necesario
  logoExample, // Añade más imágenes según sea necesario
  logoExample, // Añade más imágenes según sea necesario
  logoExample, // Añade más imágenes según sea necesario
  logoExample, // Añade más imágenes según sea necesario
];

const Sponsors = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // Ajusta la duración para controlar la velocidad del carrusel
        }}
      >
        {images.concat(images).map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className="w-40 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsors;
