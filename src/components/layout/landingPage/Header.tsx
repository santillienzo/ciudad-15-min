import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Estilos de iconos
const iconVariants = {
  hidden: { rotate: 0, scale: 1 },
  visible: { rotate: 180, scale: 1.2 },
  exit: { rotate: -180, scale: 1 },
};

const Header = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const menuMobileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const d = document;

    const handleClickOutsideMenuMobile = (e: MouseEvent) => {
      // Si el clic está fuera del menú y el menú está abierto, ciérralo
      if (
        menuMobileRef.current &&
        !menuMobileRef.current.contains(e.target as Node) &&
        menuMobile
      ) {
        setMenuMobile(false);
      }
    };

    // Agregar el event listener cuando el menú está abierto
    d.addEventListener("mousedown", handleClickOutsideMenuMobile);

    // Limpiar el event listener cuando el componente se desmonte o cuando se cierre el menú
    return () => {
      d.removeEventListener("mousedown", handleClickOutsideMenuMobile);
    };
  }, [menuMobile]);

  const handleClick = () => {
    setMenuMobile(false);
  };

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Motivación" },
    { href: "#evento", label: "Quiero saber más" },
    { href: "#participar", label: "Participá" },
    // { href: "#participation", label: "Reglas" },
  ];

  return (
    <header className="fixed max-sm:bg-transparent flex items-center justify-between xl:justify-start w-full py-4 px-6 md:px-8 h-16 md:h-20 z-50 top-0 left-0">
      <nav
        ref={menuMobileRef}
        className={`bg-background-primary fixed w-[80%] md:w-[60%] xl:w-full shadow-xl h-full top-0 ${
          menuMobile ? "left-0" : "-left-full"
        } xl:static xl:h-auto flex-1 justify-center flex flex-col xl:flex-row items-center gap-10 transition-all duration-500 ease-in-out z-40`}
      >
        <ul className="fixed flex flex-col xl:flex-row items-center gap-8 xl:gap-5 mt-20 xl:mt-0 text-button-cta-secondary-foreground">
          {navItems.map(({ href, label }) => (
            <a
              onClick={handleClick}
              key={label}
              href={href}
              className="font-semibold text-md"
            >
              <li className="relative group transition-all duration-300 ease-linear p-3 rounded text-secondary">
                {label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </li>
            </a>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => {
          setMenuMobile(!menuMobile);
        }}
        className="xl:hidden text-2xl p-2 z-50 fixed bg-button-cta-primary-foreground rounded-full"
      >
        {menuMobile ? (
          <motion.div
            key="close-icon"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            <RiCloseLine className="text-button-cta-secondary-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="menu-icon"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            <RiMenuFill className="text-button-cta-secondary-foreground" />
          </motion.div>
        )}
      </button>
    </header>
  );
};

export default Header;
