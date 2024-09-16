import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebaseConfig"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const GameLobby = () => {
  useEffect(()=> {
    console.log(auth.currentUser)
  },[])

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-gray-100 p-6">
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
        <Link to="/login" className="block">
          <Button className="w-full text-lg">
            Jugar
          </Button>
        </Link>
        <Link to="/register" className="block">
          <Button className="w-full text-lg " variant="secondary">
            Registrarte
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default GameLobby