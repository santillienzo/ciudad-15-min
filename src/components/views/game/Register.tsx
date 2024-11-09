import RegisterForm from "@/components/common/forms/RegisterForm";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const successCallback = () => {
    redirectToLobby()
    return `Te registraste correctamente en el evento`;
  }

  const redirectToLobby = ()=> {
    navigate('/lobby-juego');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background-primary p-6 text-background-primary-foreground">
    <button onClick={redirectToLobby} className='text-white z-50 absolute top-[10px] right-[10px] w-[60px] h-[60px] rounded-full cursor bg-background-secondary flex items-center justify-center'>
      <House size={26}/>
    </button>
    {/* Título de Registro */}
    <h1 className="text-4xl font-bold mb-6">Registro</h1>

    {/* Texto de redirección al login */}
    <p className="mb-6">
      ¿Ya tenés una cuenta?{" "}
      <Link to="/iniciar-sesion">
        Iniciá sesión
      </Link>
    </p>

    {/* Formulario de Registro */}
    <RegisterForm successCallback={successCallback}/>
  </div>
  )
}

export default Register