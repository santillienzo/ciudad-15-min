import { Box, Stack, Text } from "@chakra-ui/react";

const Evento = () => {
  return (
    <Stack
      id="evento"
      className="flex flex-col items-center justify-center min-h-screen bg-[#07C15B]"
    >
      <Box className="flex flex-col items-center justify-center w-[80%] min-h-full py-16">
        <Box className="h-56">
          <Text className="text-5xl text-center font-bold mt-11"> El Evento </Text>
        </Box>

        <Box className="flex items-center justify-center flex-col max-sm:flex-col gap-8 mt-8">
          <Text className="text-justify">
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
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Evento;
