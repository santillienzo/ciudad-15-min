import { useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/components/contexts/AuthContext";
import ThemeButton from "@/components/common/ThemeButton";
import ThemeInput from "@/components/common/ThemeInput";

const RecoverPassword = () => {
    const {recoverPassword} = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
  
    const handleEmail = (e: ChangeEvent<HTMLInputElement> ) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const response = recoverPassword(email)
  
      toast.promise(response, {
        loading: 'Enviando email...',
        success: () => {
          navigate('/login')
          return `El email se envió correctamente. Revisa tu bandeja de entrada`;
        },
        error: (error) => {
          return error.message
        }
      });
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-background-primary p-6 text-background-primary-foreground">
        {/* Título de Registro */}
        <h1 className="text-4xl font-bold mb-6">Recuperar contraseña</h1>
        <p className="mb-6">
            Ingresa tu correo electrónico para buscar tu cuenta.
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
                    value={email}
                    onChange={handleEmail}
                />
            </div>
    
            {/* Botón de Registro */}
            <ThemeButton className="w-full mt-6 text-lg" type="submit">
                Recuperar contraseña
            </ThemeButton>
            </form>
        </div>
    )
}

export default RecoverPassword