import CustomAccordion from "@/components/common/CustomAccordion";
import { Box, Image, Stack } from "@chakra-ui/react";
import "../../../lib/accordionSections";
import { accordionSections } from "../../../lib/accordionSections";
import EdificioArbol from "@/assets/svg/edifico azul con arbol.svg";

const tailwindCustomStyles = getComputedStyle(document.documentElement);
const accordionBgColor = tailwindCustomStyles.getPropertyValue(
  "--collapsable-primary"
);

const Evento = () => {
  return (
    <Stack
      id="evento"
      className="relative flex flex-col items-center justify-center h-screen bg-background-primary"
    >
      <Box className="flex w-[90%] justify-start items-center h-full relative">
        <Box className="flex flex-col w-1/2 max-sm:w-full gap-8">
          <CustomAccordion
            sections={accordionSections}
            accordionButtonBgColor={accordionBgColor}
          />
        </Box>
      </Box>
        <Image
          src={EdificioArbol}
          alt="Edificio"
          className="md:absolute bottom-0 right-0 w-full md:w-1/2 m-0 p-0"
        />
    </Stack>
  );
};

export default Evento;
