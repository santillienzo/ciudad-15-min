import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginData, loginUser } from "@/lib/auth";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ILoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registeredUser = loginUser(formData)

    toast.promise(registeredUser, {
      loading: 'Controlando info...',
      success: () => {
        navigate('/game-lobby')
        return `Iniciaste sesión correctamente`;
      },
      error: (error) => {
        return error.message
      }
    });
  }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
    {/* Título de Registro */}
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Iniciar sesión</h1>

    {/* Texto de redirección al login */}
    <p className="text-gray-600 mb-6">
      ¿No tenés cuenta?{" "}
      <Link to="/register" className="text-blue-600 hover:underline">
        Registrate
      </Link>
    </p>
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="gaston@gmail.com"
            className="w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <Input
            type="password"
            name="password"
            placeholder="***********"
            className="w-full"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Botón de Registro */}
        <Button className="w-full mt-6 text-lg" type="submit">
          Registrarse
        </Button>
      </form>
    </div>
  )
}

export default Login