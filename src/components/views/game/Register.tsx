import RegisterForm from "@/components/common/forms/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background-primary p-6 text-background-primary-foreground">
    {/* Título de Registro */}
    <h1 className="text-4xl font-bold mb-6">Registro</h1>

    {/* Texto de redirección al login */}
    <p className="mb-6">
      ¿Ya tenés una cuenta?{" "}
      <Link to="/login">
        Iniciá sesión
      </Link>
    </p>

    {/* Formulario de Registro */}
    <RegisterForm/>
  </div>
  )
}

export default Register