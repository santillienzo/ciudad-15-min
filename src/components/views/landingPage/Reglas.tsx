import { Box, Stack, Text } from "@chakra-ui/react";

const Reglas = () => {
  return (
    <Stack
      id="reglas"
      className="flex flex-col items-center justify-center min-h-screen bg-[#F46DBF]"
    >
      <Box className="flex flex-col w-full md:w-[80vw] min-h-full py-16">
        <Box className="h-56">
          <Text className="text-4xl md:text-5xl text-center font-bold mt-6 mb-4">
            Reglas
          </Text>
        </Box>
        <Box className="flex flex-col md:flex-row flex-grow items-center gap-8 justify-center px-4 md:px-0">
          <Text className="text-sm md:text-base max-md:w-full md:w-1/2 text-justify">
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
            eaque hic ab explicabo.
          </Text>
          <Text className="text-sm md:text-base max-md:w-full md:w-1/2 text-justify">
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
            eaque hic ab explicabo.
          </Text>
        </Box>
      </Box>
    </Stack>

    // <section id="reglas" className="flex flex-col items-center justify-center h-screen bg-[#F46DBF]">
    //   <div className="flex flex-col w-full md:w-[80vw] h-screen">
    //     <h2 className="text-4xl md:text-5xl text-center font-bold mt-2 md:mt-4">
    //       Reglas
    //     </h2>
    //     <div className="flex flex-row md:flex-col flex-grow items-center gap-8 overflow-hidden justify-center px-4 md:px-0 space-x-4 md:space-x-0">
    //       <p className="text-sm md:text-base max-md:w-1/2 text-justify">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
    //         voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
    //         excepturi modi perferendis alias quibusdam fugiat accusamus, neque
    //         eaque hic ab explicabo. Lorem ipsum dolor sit, amet consectetur
    //         adipisicing elit. Voluptas voluptatum nesciunt velit magnam non
    //         reiciendis, ex, nobis mollitia excepturi modi perferendis alias
    //         quibusdam fugiat accusamus, neque eaque hic ab explicabo. Lorem
    //         ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
    //         voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
    //         excepturi modi perferendis alias quibusdam fugiat accusamus, neque
    //         eaque hic ab explicabo.
    //       </p>
    //       <p className="text-sm md:text-base max-md:w-1/2 text-justify">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
    //         voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
    //         excepturi modi perferendis alias quibusdam fugiat accusamus, neque
    //         eaque hic ab explicabo. Lorem ipsum dolor sit, amet consectetur
    //         adipisicing elit. Voluptas voluptatum nesciunt velit magnam non
    //         reiciendis, ex, nobis mollitia excepturi modi perferendis alias
    //         quibusdam fugiat accusamus, neque eaque hic ab explicabo. Lorem
    //         ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
    //         voluptatum nesciunt velit magnam non reiciendis, ex, nobis mollitia
    //         excepturi modi perferendis alias quibusdam fugiat accusamus, neque
    //         eaque hic ab explicabo.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Reglas;
