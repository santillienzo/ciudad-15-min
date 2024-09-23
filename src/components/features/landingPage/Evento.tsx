import CustomAccordion from "@/components/common/CustomAccordion";
import { Box, Stack, Text } from "@chakra-ui/react";
import "../../../lib/accordionSections";
import { accordionSections } from "../../../lib/accordionSections";

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
      <Box className="flex flex-col items-center justify-center w-[80%] min-h-full py-16">
        <Box className="h-56">
          <Text className="text-5xl text-center font-bold text-button-cta-primary-foreground">
            {" "}
            Mas Info{" "}
          </Text>
        </Box>

        <Box className="flex items-center justify-center flex-col max-sm:flex-col w-11/12">
          <CustomAccordion
            sections={accordionSections}
            accordionButtonBgColor={accordionBgColor}
          />

          {/* <Text className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
            excepturi modi perferendis alias quibusdam fugiat accusamus, neque
            eaque hic ab explicabo. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptas voluptatum nesciunt velit magnam non
            reiciendis, ex, nobis mollitia excepturi modi perferendis alias
            quibusdam fugiat accusamus, neque eaque hic ab explicabo. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
            excepturi modi perferendis alias quibusdam fugiat accusamus, neque
            eaque hic ab explicabo. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </Text> */}
        </Box>
      </Box>
    </Stack>
  );
};

export default Evento;
