import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from 'react';
import { auth, db } from '@/lib/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from "sonner";
import { FirebaseError } from "firebase/app";
import { firebaseErrorHandler } from "@/lib/handleError";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Guardar información adicional en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        fechaNacimiento: formData.fechaNacimiento,
        dni: formData.dni,
        email: formData.email,
      });
    } catch (error: unknown) {
      let errorMsg = "Hubo un error"

      if (error instanceof FirebaseError) {
        // Aquí puedes manejar el error específico de Firebase
        errorMsg = firebaseErrorHandler(error.code);
      } else if (error instanceof Error) {
        // Para otros errores de tipo estándar de JavaScript
        console.error('Error general:', error.message);
      } else {
        console.error('Error desconocido:', error);
      }
    
      throw new Error(errorMsg);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registeredUser = registerUser()

    toast.promise(registeredUser, {
      loading: 'Loading...',
      success: () => {
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
              name="nombre"
              placeholder="Gastón"
              className="w-full"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <Input
              type="text"
              name="apellido"
              placeholder="Suarez"
              className="w-full"
              value={formData.apellido}
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
            name="fechaNacimiento"
            className="w-full"
            value={formData.fechaNacimiento}
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