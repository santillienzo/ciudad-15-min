import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginData } from "@/lib/auth";
import { toast } from "sonner";
import { useAuth } from "@/components/contexts/AuthContext";
import ThemeButton from "@/components/common/ThemeButton";
import ThemeInput from "@/components/common/ThemeInput";

const Login = () => {
  const {login} = useAuth()
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

    const registeredUser = login(formData)

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-background-primary p-6 text-background-primary-foreground">
    {/* Título de Registro */}
    <h1 className="text-4xl font-bold mb-6">Iniciar sesión</h1>

    {/* Texto de redirección al login */}
    <p className="mb-6">
      ¿No tenés cuenta?{" "}
      <Link to="/register">
        Registrate
      </Link>
    </p>
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            Email
          </label>
          <ThemeInput
            type="email"
            name="email"
            placeholder="gaston@gmail.com"
            className="w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            Contraseña
          </label>
          <ThemeInput
            type="password"
            name="password"
            placeholder="***********"
            className="w-full"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Botón de Registro */}
        <ThemeButton className="w-full mt-6 text-lg" type="submit">
          Iniciar sesión
        </ThemeButton>
        <Link to="/recover-password" className="w-full mt-6 block text-center">
          Olvidé mi contraseña
        </Link>
      </form>
    </div>
  )
}

export default Login