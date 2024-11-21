import { Instagram } from "lucide-react";
import logo from "@/assets/svg/Logo blanco.svg";
import logoUNC from "@/assets/img/uncuyo_blanco.webp";

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
                <span className="font-bold">Amparo Sánchez</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Ezequiel Copia</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Mariana Luján</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Sophía Viazzo</span>
                <p className="text-gray-400 text-sm">Estudiante de Arquitectura Fing Uncuyo</p>
              </li>
              <li>
                <span className="font-bold">Leonardo Pennesi</span>
                <p className="text-gray-400 text-sm">Arquitecto</p>
              </li>
              <li>
                <span className="font-bold">Lorena Córica</span>
                <p className="text-gray-400 text-sm">Arquitecta responsable institucional de la Facultad de Ingeniería de la universidad Nacional de Cuyo</p>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-8">
              <h3 className="text-xl md:text-lg font-semibold mb-4">Instituciones vinculantes</h3>
              <img src={logoUNC} alt="Logo de la Universidad Nacional de Cuyo" className="h-10" />
            </div>
            <div>
                <h3 className="text-xl md:text-lg font-semibold mb-4">Redes Sociales</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">En Busca de la Ciudad en 15 Minutos</h4>
                  <a 
                    href="https://www.instagram.com/ciudad_15mza/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <Instagram className="h-6 w-6 text-pink-500" />
                    <span>Instagram (@ciudad_15mza)</span>
                  </a>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Bloomberg Philanthropies</h4>
                  <a 
                    href="https://www.instagram.com/bloombergdotorg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <Instagram className="h-6 w-6 text-pink-500" />
                    <span>Instagram (@bloombergdotorg)</span>
                  </a>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Ciudad de Mendoza</h4>
                  <a 
                    href="https://www.instagram.com/mendozaciudad/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <Instagram className="h-6 w-6 text-pink-500" />
                    <span>Instagram (@mendozaciudad)</span>
                  </a>
                </div>
              </div>
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
