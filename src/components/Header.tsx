import { RiMenuFill, RiCloseCircleLine } from "react-icons/ri";
import Logo from "../assets/Logo.svg";
import { useState } from "react";

const Header = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);

  return (
    <header className="bg-slate-200 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-10vh z-999">
      <div className="xl:w-1/6 text-center">
        <img src={Logo} alt="Ciudad en 15 minutos Logo" />
      </div>

      <nav
        className={`bg-slate-200 fixed w-[80%] md:w-[45%] xl:w-full h-full top-0 ${
          menuMobile ? "left-0" : "-left-full"
        } -rigth-full top-[10vh] xl:static flex-1 justify-center flex flex-col xl:flex-row items-center gap-10 transition-all duration-700 ease-in-out`}
      >
        <ul className="flex gap-10 xl:flex-row max-lg:flex-col max-md:flex-col max-sm:flex-col max-lg:w-full items-center">
          <li className="">
            <a href="#" className="font-semibold">
              INICIO
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              CONTADOR
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              NUESTROS SPONSORS
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              EVENTO
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              REGLAS
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          setMenuMobile(!menuMobile);
        }}
        className="xl:hidden text-2xl p-2"
      >
        {menuMobile ? <RiCloseCircleLine /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Header;
