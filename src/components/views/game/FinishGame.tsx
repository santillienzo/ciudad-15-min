import FinishPageOne from "@/components/features/game/finishPages/FinishPageOne"
import FinishPageThree from "@/components/features/game/finishPages/FinishPageThree"
import FinishPageTwo from "@/components/features/game/finishPages/FinishPageTwo"
import { useState } from "react"
import UClogo from "@/assets/img/uncuyo_blanco.webp"
import { motion } from "framer-motion"
import { itemVariants } from "@/components/features/game/finishPages/motionsVariant"
import { containerVariants } from "@/components/features/game/finishPages/motionsVariant"

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