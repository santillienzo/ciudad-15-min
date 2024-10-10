import { Box, Stack, Text } from "@chakra-ui/react";
// import Logo from "../../../assets/Logo.svg";
import { Image } from "@chakra-ui/react";
import Logo from "@/assets/svg/Logo blanco.svg";
import buildingLeft from "@/assets/svg/Edificios 1.svg";

const AboutUs = () => {
  return (
    <Stack
      id="sobre-nosotros"
      className="relative scroll-smooth bg-[#4AAFB2] flex justify-center items-center h-screen w-full overflow-hidden"
    >
      <Box className="flex w-[90%] justify-end items-center h-full relative">
        <Box className="flex flex-col w-1/2 max-sm:w-full gap-8 z-10">
          <Image src={Logo} alt="Edificio" className="w-96" />

          <Text className="font-semibold text-xl text-button-cta-primary-foreground">
            La{" "}
            <span className="text-button-cta-primary"> ciudad de Mendoza </span>
            enfrenta importantes desafíos relacionados con la movilidad y el
            acceso equitativo a los servicios esenciales.
          </Text>

          <Text className="font-semibold text-xl text-button-cta-primary-foreground">
            Esta campaña busca sensibilizar a la población sobre la{" "}
            <span className="text-button-cta-primary"> movilidad activa </span>{" "}
            y la{" "}
            <span className="text-button-cta-primary">
              {" "}
              reducción del uso del automóvil
            </span>
            , promoviendo una cultura de caminatas y ciclismo que favorezca
            tanto al medio ambiente como a la salud pública.
          </Text>
        </Box>
      </Box>
      <Box className="w-1/2 max-sm:hidden">
        <Image
          src={buildingLeft}
          alt="Edificio"
          className="absolute bottom-0 left-0 w-1/2 m-0 p-0"
        />
      </Box>
    </Stack>
  );
};

export default AboutUs;
