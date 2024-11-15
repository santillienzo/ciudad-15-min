import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "./motionsVariant"
import bloombergLogo from "@/assets/img/Bloomberg.png"
import mendozaLogo from "@/assets/img/municipalidad.png"
import ThemeButton from "@/components/common/ThemeButton"

interface Props {
  nextPage: () => void
}

const FinishPageTwo = ({nextPage}: Props) => {
  return (
    <motion.div
      className="flex flex-col justify-between items-center text-center h-full bg-background-primary"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <div className="flex flex-col gap-2 h-[70vh] justify-center w-full">
            <motion.h2 
                className="text-xl font-bold text-primary text-white mb-10 w-11/12 mx-auto"
                variants={itemVariants}
            >
                Agradecimiento especial a Bloomberg Philanthropies y a la municipalidad  de Mendoza  por hacer posible este evento.
            </motion.h2>
            <motion.img 
                src={bloombergLogo}  
                className="w-11/12 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <motion.img 
                src={mendozaLogo}  
                className="w-11/12 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            />
        </div>
        <motion.div variants={itemVariants}>
            <ThemeButton size="lg" onClick={nextPage} className="w-">
                Continuar
            </ThemeButton>
        </motion.div>
    </motion.div>
  )
}

export default FinishPageTwo