import { ChangeEvent, FormEvent, useState } from 'react';
import ThemeButton from "@/components/common/ThemeButton";
import ThemeInput from "@/components/common/ThemeInput";

import { toast } from "sonner";
import { IRegisterData } from "@/lib/auth";
import { useAuth } from "@/components/contexts/AuthContext";

type Props = {
    variant?: 'primary' | 'secondary',
    successCallback?: ()=> string,
}

const RegisterForm = ({variant = 'primary', successCallback}:Props) => {

    const {register} = useAuth();
    
    const [formData, setFormData] = useState<IRegisterData>({
        name: '',
        lastname: '',
        dni: '',
        birthday: '',
        email: '',
        password: '',
    });

    const success = () => {

        return `Te registraste correctamente en el evento`;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const registeredUser = register(formData)

        toast.promise(registeredUser, {
        loading: 'Controlando info...',
        success: successCallback || success,
        error: (error) => {
            return error.message
        }
        });
    }

    return (
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
              Nombre
            </label>
            <ThemeInput
              type="text"
              variant={variant}
              name="name"
              placeholder="Juan"
              className="w-full "
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
              Apellido
            </label>
            <ThemeInput
              type="text"
              variant={variant}
              name="lastname"
              placeholder="Pérez"
              className="w-full"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            Email
          </label>
          <ThemeInput
            type="email"
            variant={variant}
            name="email"
            placeholder="juan@gmail.com"
            className="w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            Fecha de Nacimiento
          </label>
          <ThemeInput
            type="date"
            variant={variant}
            name="birthday"
            className="w-full"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            DNI
          </label>
          <ThemeInput
            type="text"
            variant={variant}
            name="dni"
            placeholder="42125495"
            className="w-full"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-button-cta-primary-foreground mb-1">
            Contraseña
          </label>
          <ThemeInput
            type="password"
            variant={variant}
            name="password"
            placeholder="***********"
            className="w-full"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Botón de Registro */}
        <ThemeButton className="w-full mt-6 text-lg" type="submit">
          Registrarse
        </ThemeButton>
      </form>
    )
}

export default RegisterForm