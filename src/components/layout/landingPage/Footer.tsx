import React from "react";
import { Instagram } from "lucide-react";
import logo from "@/assets/svg/Logo blanco.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 md:p-10">
      {/* Contenedor principal */}
      <div className="container mx-auto">
        {/* Grid para organizadores, redes sociales y logo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          
          {/* Organizadores del evento */}
          <div>
            <h3 className="text-xl md:text-lg font-semibold mb-4">Organizadores del evento</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-bold">Sánchez Arnau Amparo Pilar</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Copia Leiva Marcos Ezequiel</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Luján Mariana</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Viazzo Sophía</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Pennesi Leonardo</span>
                <p className="text-gray-400 text-sm">Arquitecto</p>
              </li>
              <li>
                <span className="font-bold">Lorena Córica</span>
                <p className="text-gray-400 text-sm">Arquitecta</p>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl md:text-lg font-semibold mb-4">Redes Sociales</h3>
            <a 
              href="https://www.instagram.com/ciudad_15mza/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className="h-6 w-6 text-pink-500" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Logo del evento */}
          <div className="flex justify-center lg:justify-end">
            <img src={logo} alt="Logo del Evento" className="w-2/3 md:w-full" />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Contenedor de copyright y autor */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">© 2024 - En busca de la Ciudad de 15 Minutos</p>

          {/* Autor con enlace a LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/enzo-santilli/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-400 hover:text-white mt-4 md:mt-0"
          >
            Página web diseñada por Enzo Santilli
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
