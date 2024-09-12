import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { auth, db } from '@/lib/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
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
    <form className="w-full max-w-md space-y-4">
        <div className="flex gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
                </label>
                <Input type="text" placeholder="Gastón" className="w-full" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Apellido
                </label>
                <Input type="text" placeholder="Suarez" className="w-full" />
            </div>
        </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input type="email" placeholder="gaston@gmail.com" className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fecha de Nacimiento
        </label>
        <Input type="date" className="w-full" placeholder="16 abr. 2024"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          DNI
        </label>
        <Input type="text" placeholder="42125495" className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contraseña
        </label>
        <Input type="password" placeholder="****................." className="w-full" />
      </div>

      {/* Botón de Registro */}
      <Button className="w-full mt-6 text-lg">
        Registrarse
      </Button>
    </form>
  </div>
  )
}

export default Register