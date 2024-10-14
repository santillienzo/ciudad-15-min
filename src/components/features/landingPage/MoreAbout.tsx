import CustomAccordion from "@/components/common/CustomAccordion";
import { Box, Image, Stack } from "@chakra-ui/react";
import "../../../lib/accordionSections";
import { accordionSections } from "../../../lib/accordionSections";
import EdificioArbol from "@/assets/svg/edifico azul con arbol.svg";

const tailwindCustomStyles = getComputedStyle(document.documentElement);
const accordionBgColor = tailwindCustomStyles.getPropertyValue(
  "--collapsable-primary"
);

const MoreAbout = () => {
  return (
    <Stack
      as={"section"}
      id="saber-mas"
      className="relative flex flex-col items-center justify-center h-screen bg-background-primary"
    >
      <Box className="flex w-[90%] justify-start items-center h-full max-sm:items-start max-sm:h-[500px] relative z-20 overflow-hidden">
        <Box className="flex flex-col w-1/2 max-sm:w-full gap-8 max-h-full">
          <CustomAccordion
            sections={accordionSections}
            accordionButtonBgColor={accordionBgColor}
          />
        </Box>
      </Box>
      <Box className="max-sm:absolute bottom-0 z-10 overflow-hidden">
        <Image
          src={EdificioArbol}
          alt="Edificio"
          className="md:absolute bottom-0 right-0 w-full md:w-1/2 m-0 p-0"
        />
      </Box>
    </Stack>
  );
};

export default MoreAbout;
