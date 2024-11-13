import { useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import logo from "@/assets/svg/Logo blanco.svg"
import ThemeButton from "@/components/common/ThemeButton"

const FinishGame = () => {
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
  
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          staggerChildren: 0.2
        }
      }
    }
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }
  
    return (
      <div className="min-h-screen bg-background-primary">
        <motion.div
          className="flex flex-col justify-between items-center text-center p-4 h-full bg-background-primary"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col absolute top-16 left-1/2 -translate-x-1/2  gap-7 w-11/12">
            <div className="flex flex-col gap-2">
              <motion.h2 
                className="text-4xl font-bold text-primary text-white"
                variants={itemVariants}
              >
                ¡Felicitaciones!
              </motion.h2>
              <motion.h2 
                className="text-4xl font-bold mb-4 text-primary text-white"
                variants={itemVariants}
              >
                Completaste
              </motion.h2>
            </div>
            <motion.img src={logo} className="w-full" />
            <motion.div variants={itemVariants}>
              <ThemeButton size="lg" onClick={() => console.log("Continue clicked")}>
                Continuar
              </ThemeButton>
            </motion.div>
          </div>
          <p className="absolute bottom-7 text-white">
            Gracias por jugar!
          </p>
        </motion.div>
      </div>
    )
}

export default FinishGame