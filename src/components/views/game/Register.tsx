import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from 'react';

import { toast } from "sonner";
import { IRegisterData, registerUser } from "@/lib/auth";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IRegisterData>({
    name: '',
    lastname: '',
    dni: '',
    birthday: '',
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

    const registeredUser = registerUser(formData)

    toast.promise(registeredUser, {
      loading: 'Controlando info...',
      success: () => {
        navigate('/game-lobby')
        return `Te registraste correctamente`;
      },
      error: (error) => {
        return error.message
      }
    });
  }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
    {/* Título de Registro */}
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Registro</h1>

    {/* Texto de redirección al login */}
    <p className="text-gray-600 mb-6">
      ¿Ya tenés una cuenta?{" "}
      <Link to="/login" className="text-blue-600 hover:underline">
        Iniciá sesión
      </Link>
    </p>

    {/* Formulario de Registro */}
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Gastón"
              className="w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <Input
              type="text"
              name="lastname"
              placeholder="Suarez"
              className="w-full"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

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
            Fecha de Nacimiento
          </label>
          <Input
            type="date"
            name="birthday"
            className="w-full"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            DNI
          </label>
          <Input
            type="text"
            name="dni"
            placeholder="42125495"
            className="w-full"
            value={formData.dni}
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

export default Register