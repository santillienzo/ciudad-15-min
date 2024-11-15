import { useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import logo from "@/assets/svg/Logo blanco.svg"
import ThemeButton from "@/components/common/ThemeButton"
import { containerVariants, itemVariants } from "./motionsVariant"

interface Props {
  nextPage: () => void
}

const FinishPageOne = ({nextPage}: Props) => {
      useEffect(() => {
        // Simulate the event completion
        const timer = setTimeout(() => {
          // Trigger confetti effect
          confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
          })
        }, 200)
    
        return () => clearTimeout(timer)
      }, [])
  
    return <motion.div
      className="flex flex-col justify-between items-center text-center h-full bg-background-primary"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
    <div className="flex flex-col gap-2 h-[70vh] justify-center w-full">
        <motion.h2 
            className="text-5xl font-bold text-primary text-white mb-10"
            variants={itemVariants}
        >
            ¡Felicitaciones! <br />
            <span className="text-xl">Completaste el desafío</span>
        </motion.h2>
        <motion.img src={logo} className="w-11/12 mx-auto" />
    </div>
    <motion.div variants={itemVariants}>
        <ThemeButton size="lg" onClick={nextPage} className="w-">
            Continuar
        </ThemeButton>
    </motion.div>
  </motion.div>
}

export default FinishPageOne

