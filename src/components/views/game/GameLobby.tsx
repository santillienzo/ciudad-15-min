import ThemeButton from "@/components/common/ThemeButton";
import { useAuth } from "@/components/contexts/AuthContext";
import { LogOut } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"
import logo from '@/assets/svg/Logo blanco.svg'
import { motion } from "framer-motion";
import logoMuni  from '@/assets/img/municipalidad.webp'
import logoBloomberg  from '@/assets/img/Bloomberg.webp'
import logoBloomberg2  from '@/assets/img/Bloomberg_2.webp'
import { useState } from "react";
import LogoutModal from "@/components/features/game/LogoutModal";
import { Button } from "@/components/ui/button";
import { startGame } from "@/lib/userActions";
import { toast } from "sonner";


const GameLobby = () => {
  const { isAuth, logout, userData, user, updateUserData } = useAuth();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleStartGame = () => {
    if (!isAuth() || !user || !userData) return

    if (userData.startedGame) {
      navigate('/juego')
      return
    }

    try {
      const startGamePromise = startGame({userId: user.uid})
      toast.promise(startGamePromise, {
        loading: 'Cargando ubicaciones...',
        success: ()=> {
          updateUserData({...userData, startedGame: true})
          navigate('/juego')
          return 'Es hora de empezar!'
        },
        error: 'Error al iniciar el juego'
      })
    } catch (error) {
      toast.error('Error al iniciar el juego: ' + error)
    }
  }

  const handleLogout = () => logout(()=> navigate("/iniciar-sesion"))

  const redirectToQrGenerator = () => {
    navigate('/generador-qr');
  }
  
  const redirectToGameQrGenerator = () => {
    navigate('/generador-juego-qr');
  }

  const redirectToFinishGameQrGenerator = () => {
    navigate('/generador-finalizar-qr');
  }
  
  const redirectToUsers = () => {
    navigate('/usuarios');
  }

  const redirectToRanking = () => {
    navigate('/ranking');
  }

  const handleOpenLogoutModal = () => setIsLogoutModalOpen(true)
  const handleCloseLogoutModal = () => setIsLogoutModalOpen(false)

  return (
    <motion.div 
      className="h-screen flex flex-col justify-between items-center bg-background-primary p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 flex justify-center gap-3 p-4 w-full">
        <motion.div 
          className="flex items-center p-1"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoMuni} className="h-8 sm:h-9 md:h-12" alt="Logo de la Municipalidad de la Ciudad de Mendoza" />
        </motion.div>
        <motion.div 
          className="p-1"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={logoBloomberg2} className="h-9  sm:h-10  md:h-14" alt="Logo de Bloomberg" />
        </motion.div>
        <motion.div 
          className="p-1"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={logoBloomberg} className="h-9 sm:h-10 md:h-14" alt="Logo de Bloomberg" />
        </motion.div>
      </div>
      {/* Cartel de Bienvenida */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut"
        }}
        className="flex flex-col justify-center items-center mt-20 text-center text-background-primary-foreground w-full"
      >
        <h3 className="text-3xl font-bold mb-4">
          Bienvenido a 
        </h3>
        <img 
          className="w-[90%] sm:w-2/3 md:w-96"
          src={logo} 
          alt="logo de En Busca de la Ciudad en 15 minutos" 
        />
      </motion.div>

      {/* Botones en la parte inferior con safe-area-inset */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut"
        }}
        className="w-full max-w-md space-y-4 mb-32 z-10"
      >
        {
          isAuth() ? (
            <ThemeButton className="w-full text-lg" onClick={handleStartGame}>
              Jugar
            </ThemeButton>
          ) : (
            <Link to="/iniciar-sesion" className="block">
              <ThemeButton className="w-full text-lg">
                Iniciar sesión
              </ThemeButton>
            </Link>
          )
        }
        {
          userData?.isAdmin && (
            <>
              <Button variant="default" className="w-full text-lg text-white rounded-xl" onClick={redirectToQrGenerator}>
                Generador de QR
              </Button>
              <Button variant="default" className="w-full text-lg text-white rounded-xl" onClick={redirectToGameQrGenerator}>
                Generador de QR para el juego
              </Button>
              <Button variant="default" className="w-full text-lg text-white rounded-xl" onClick={redirectToFinishGameQrGenerator}>
                Generador de QR para finalizar el juego
              </Button>
              <Button variant="default" className="w-full text-lg text-white rounded-xl" onClick={redirectToUsers}>
                Usuarios
              </Button>
              <Button variant="default" className="w-full text-lg text-white rounded-xl" onClick={redirectToRanking}>
                Ranking
              </Button>
            </>
          )
        }
        {
          !isAuth() ?
            <Link to="/registrarse" className="block shadow-2xl">
              <ThemeButton className="w-full text-lg " variant="secondary">
                Registrarte
              </ThemeButton>
            </Link> : <ThemeButton className="w-full text-lg flex gap-4" variant='secondary' onClick={handleOpenLogoutModal}>
              <LogOut /> <span>Cerrar sesión</span>
            </ThemeButton>
        }
      </motion.div>

      <LogoutModal isOpen={isLogoutModalOpen} onClose={handleCloseLogoutModal} handleLogout={handleLogout} />

      </motion.div>
  )
}

export default GameLobby