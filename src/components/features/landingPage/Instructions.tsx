import instruccionesImg from "@/assets/img/instrucciones.png";
import { ScanQrCode, SquarePen, Undo2 } from "lucide-react";

const Instructions = () => {
  return (
    <section id="instrucciones" className="bg-pink-500 text-white p-8 md:p-16 w-full h-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Instrucciones</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de texto */}
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-background-secondary">
                <SquarePen />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Regístrate</h3>
              <p className="text-xl">Ingresa tus datos y espera la cuenta regresiva para el evento. ¡Prepárate para el desafío en la ciudad de Mendoza!</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-3 rounded-full bg-background-primary">
                <ScanQrCode />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Explorá y Escaneá</h3>
              <p className="text-xl">Durante el evento, usa el mapa interactivo para caminar hacia los lugares cercanos de la ciudad y escanear los códigos QR.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-3 rounded-full bg-pink-900">
                <Undo2 />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Regresá y Ganá</h3>
              <p className="text-xl">Vuelve al punto de inicio en la Plaza Independencia y escanea el QR final en el tiempo determinado. ¡Todos los que lo logran participan en un sorteo!</p>
            </div>
          </div>
        </div>

        {/* Imagen (oculta en pantallas pequeñas) */}
        <div className="hidden md:flex justify-center">
          <img src={instruccionesImg} alt="Instrucciones" className="object-contain w-96" />
        </div>
      </div>
    </section>
  );
};

export default Instructions;
