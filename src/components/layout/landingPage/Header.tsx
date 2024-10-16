import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#motivacion", label: "Motivación" },
    { href: "#saber-mas", label: "Quiero saber más" },
    { href: "#participar", label: "Participá" },
    // { href: "#participation", label: "Reglas" },
  ];

  // Estilos de iconos
  const iconVariants = {
    hidden: { rotate: 0, scale: 1 },
    visible: { rotate: 180, scale: 1.2 },
    exit: { rotate: -180, scale: 1 },
  };

  return (
    <>
      <header className="fixed max-sm:hidden flex items-center justify-between xl:justify-start w-full py-4 px-6 md:px-8 h-16 md:h-20 z-50 top-0 left-0">
        {/* Desktop Menu */}
        <nav className="hidden xl:flex w-full justify-center gap-10 items-center">
          <ul className="flex flex-row items-center gap-8 text-button-cta-secondary-foreground">
            {navItems.map(({ href, label }) => (
              <a key={label} href={href} className="font-semibold text-md">
                <li className="relative group transition-all duration-300 ease-linear p-3 rounded text-secondary">
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </header>

      <Box className="relative z-[10000]">
        {" "}
        {/* Wrapper para garantizar que el botón esté por encima del Drawer */}
        <button
          onClick={isOpen ? onClose : onOpen}
          className="xl:hidden text-2xl p-2 z-[10000] fixed left-4 top-4 bg-button-cta-primary-foreground rounded-full pointer-events-auto"
          style={{ zIndex: 10000 }} // Aseguramos un z-index extremadamente alto
        >
          {isOpen ? (
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
      </Box>

      {/* Mobile Drawer - Hidden on large screens */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay className="z-[9999]" />{" "}
        {/* Aseguramos un z-index menor que el botón */}
        <DrawerContent className="relative z-[9999]">
          <DrawerBody className="flex items-center justify-center bg-background-primary">
            <ul className="flex flex-col items-center gap-8 mt-10 text-white">
              {navItems.map(({ href, label }) => (
                <a key={label} href={href} onClick={onClose}>
                  <Text className="font-semibold text-md p-2">{label}</Text>
                </a>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
