import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

const FinishGame = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
      // Simulate the event completion
      const timer = setTimeout(() => {
        setShow(true)
        // Trigger confetti effect
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }, 1000)
  
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary/20 to-background">
        {show && (
          <motion.div
            className="text-center p-8 rounded-lg bg-card shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold mb-4 text-primary"
              variants={itemVariants}
            >
              ¡Felicitaciones! Completaste el desafío
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-muted-foreground"
              variants={itemVariants}
            >
              Gracias por jugar!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" onClick={() => console.log("Continue clicked")}>
                Continuar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    )
}

export default FinishGame