import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { containerVariants, itemVariants } from "./motionsVariant"
import ThemeButton from "@/components/common/ThemeButton"
import la_social from '@/assets/img/sponsors/logo_la_social.webp'
import cachipum from '@/assets/img/sponsors/logo_cachipum.webp'
import logo_don_justo from '@/assets/img/sponsors/logo_don_justo.webp'
import logo_latinad from '@/assets/img/sponsors/logo_latinad_blanco.svg'
import logo_evolution from '@/assets/img/sponsors/logo_evolution.webp'

const principalSponsor = {
  name: 'Bicicletas Evolution',
  logo: logo_evolution,
  instagram: 'https://www.instagram.com/bicicletas_evolutionok/'
}

const sponsors = [
    {
      name: 'La Social - Pizzería de Barrio',
      logo: la_social,
      instagram: 'https://www.instagram.com/lasocialpizzeria/'
    },
    {
      name: 'Cachipum',
      logo: cachipum,
      instagram: 'https://www.instagram.com/cachipum.mza/'
    },
    {
      name: 'Don Justo',
      logo: logo_don_justo,
      instagram: 'https://www.instagram.com/distribuidoradonjusto/'
    },
    {
      name: 'LatinAd',
      logo: logo_latinad,
      instagram: 'https://latinad.com/'
    }
  ];



const FinishPageThree = () => {
    const navigate = useNavigate()
    
    const redirectToHome = () => {
        navigate("/lobby")
    }

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
                Agradecer  también a nuestros sponsors por su apoyo y confianza.
            </motion.h2>
            {/* Principal Sponsor */}
                {/* <h3 className="text-xl font-semibold text-center mb-4">Principal Sponsor</h3> */}
            <motion.div className=" rounded-lg flex flex-col items-center justify-center transform" variants={itemVariants}>
                <img 
                    src={principalSponsor.logo} 
                    alt={principalSponsor.name} 
                    width={300} 
                    height={150} 
                    className="mb-6"
                />
            </motion.div>
            {/* Other Sponsors */}
            {/* <h3 className="text-xl font-semibold text-center mb-4">Sponsors</h3> */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4" variants={itemVariants}>
                {sponsors.map((sponsor, index) => (
                    <motion.div key={index} className=" rounded-lg p-4 flex flex-col items-center justify-center transform" variants={itemVariants}>
                        <div className="w-32 h-20 flex items-center justify-center mb-6">
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name} 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        <motion.div variants={itemVariants}>
            <ThemeButton size="lg" onClick={redirectToHome} className="w-">
                Volver al inicio
            </ThemeButton>
        </motion.div>
    </motion.div>
  )
}

export default FinishPageThree