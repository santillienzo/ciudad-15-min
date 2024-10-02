import CustomAccordion from "@/components/common/CustomAccordion";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import "../../../lib/accordionSections";
import { accordionSections } from "../../../lib/accordionSections";
import CiudadLogo from "@/assets/svg/ciudad.png";

const tailwindCustomStyles = getComputedStyle(document.documentElement);
const accordionBgColor = tailwindCustomStyles.getPropertyValue(
  "--collapsable-primary"
);

const Evento = () => {
  return (
    <Stack
      id="evento"
      className="flex flex-col items-center justify-center min-h-screen bg-background-primary"
    >
      <Box className="flex gap-10 flex-col items-center justify-center w-[80%] min-h-full py-16">
        <Box className="justify-center items-center ">
          <Box className="">
            <Text className="text-5xl text-center font-bold text-button-cta-primary-foreground">
              {" "}
              Más Info{" "}
            </Text>
          </Box>
        </Box>
        <Box className="flex w-full max-sm:flex-col max-sm:h-screen">
          <Box className="flex items-center justify-center w-11/12 max-sm:flex-col max-sm:w-full">
            <CustomAccordion
              sections={accordionSections}
              accordionButtonBgColor={accordionBgColor}
            />
          </Box>

          <Box className="flex flex-end w-full justify-around">
            <Image className="h-[300px] max-sm:h-auto" src={CiudadLogo} alt="Ciudad Logo"></Image>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Evento;
