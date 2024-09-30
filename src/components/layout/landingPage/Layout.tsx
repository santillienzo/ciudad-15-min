// Archivo donde se renderiza "una vez" el Header y el Footer para todas las vistas de la web

import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box>
      {" "}
      <Header />
        <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
