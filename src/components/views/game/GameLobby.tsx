import { useAuth } from "@/components/contexts/AuthContext";
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"

const GameLobby = () => {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();
  
  const toPlayRedirect = isAuth() ? '/game' : '/login'

  const handleLogout = () => logout(()=> navigate("/login"))

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-background p-6">
      {/* Cartel de Bienvenida */}
      <div className="flex flex-col justify-center items-center mt-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenido a <span className="text-blue-600">'En busca de la ciudad en 15 minutos'</span>
        </h1>
        <p className="text-lg text-gray-600">
          ¡Prepárate para una emocionante aventura!
        </p>
      </div>

      {/* Botones en la parte inferior con safe-area-inset */}
      <div className="w-full max-w-md space-y-4 mb-32">
        <Link to={toPlayRedirect} className="block">
          <Button className="w-full text-lg">
            Jugar
          </Button>
        </Link>
        {
          !isAuth() ?
            <Link to="/register" className="block">
              <Button className="w-full text-lg " variant="secondary">
                Registrarte
              </Button>
            </Link> : <Button className="w-full text-lg flex gap-4" variant='secondary' onClick={handleLogout}>
              <LogOut /> <span>Cerrar sesión</span>
            </Button>
        }
      </div>
    </div>
  )
}

export default GameLobby