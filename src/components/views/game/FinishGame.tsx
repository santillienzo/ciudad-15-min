import FinishPageOne from "@/components/features/game/finishPages/FinishPageOne"
import FinishPageThree from "@/components/features/game/finishPages/FinishPageThree"
import FinishPageTwo from "@/components/features/game/finishPages/FinishPageTwo"
import { useState } from "react"
import UClogo from "@/assets/img/uncuyo_blanco.png"
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

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

const FinishGame = () => {
  const [page, setPage] = useState(1)


  const nextPage = () => {
    setPage(page + 1)
  }
  

    return (
      <motion.div className="min-h-screen bg-background-primary w-full" variants={containerVariants}>
        {page === 1 && <FinishPageOne nextPage={nextPage} />}
        {page === 2 && <FinishPageTwo nextPage={nextPage} />}
        {page === 3 && <FinishPageThree/>}
        <motion.div variants={itemVariants} className="absolute bottom-5 h-[12vmin] flex justify-center w-full">
          <img src={UClogo} alt="arbol" className="h-full" />
        </motion.div>
      </motion.div>
    )
}

export default FinishGame