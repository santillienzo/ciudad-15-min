import ThemeButton from "@/components/common/ThemeButton";
import { useAuth } from "@/components/contexts/AuthContext";
import { LogOut } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"
import logo from '@/assets/svg/Logo blanco.svg'


const GameLobby = () => {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();
  
  const toPlayRedirect = isAuth() ? '/juego' : '/iniciar-sesion'

  const handleLogout = () => logout(()=> navigate("/iniciar-sesion"))

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-background-primary p-6">
      {/* Cartel de Bienvenida */}
      <div className="flex flex-col justify-center items-center mt-20 text-center text-background-primary-foreground w-full">
        <h3 className="text-3xl font-bold mb-4">
          Bienvenido a 
        </h3>
        <img 
          className="w-[90%] sm:w-2/3 md:w-96"
          src={logo} 
          alt="logo de En Busca de la Ciudad en 15 minutos" 
        />
      </div>

      {/* Botones en la parte inferior con safe-area-inset */}
      <div className="w-full max-w-md space-y-4 mb-32 z-10">
        <Link to={toPlayRedirect} className="block">
          <ThemeButton className="w-full text-lg">
            Jugar
          </ThemeButton>
        </Link>
        {
          !isAuth() ?
            <Link to="/registrarse" className="block">
              <ThemeButton className="w-full text-lg " variant="secondary">
                Registrarte
              </ThemeButton>
            </Link> : <ThemeButton className="w-full text-lg flex gap-4" variant='secondary' onClick={handleLogout}>
              <LogOut /> <span>Cerrar sesión</span>
            </ThemeButton>
        }
      </div>
    </div>
  )
}

export default GameLobby