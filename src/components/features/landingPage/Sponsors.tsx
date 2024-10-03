import { Box, Stack, Text } from "@chakra-ui/react";
// import Logo from "../../../assets/Logo.svg";
import { Image } from "@chakra-ui/react";

// const LOGOS = [
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
//   <img src={Logo} alt="Logo" />,
// ];

const Sponsors = () => {
  return (
    <Stack
      id="sponsors"
      className="scroll-smooth bg-background-secondary-muted flex justify-center items-center h-screen w-full overflow-hidden"
    >
          <Text className="flex flex-col text-5xl p-8 font-bold text-background-secondary-foreground">
            Sponsors
          </Text>
      <Box className="flex w-screen justify-evenly max-sm:flex-col max-sm:items-center max-sm:h-screen max-sm:max-w-sm">
        <Box className="">
          <Image
            src="https://img.freepik.com/vector-gratis/coleccion-etiquetas-patrocinador_23-2148725863.jpg"
            alt="Sponsors"
            className="h-[70%] max-sm:h-[12rem]"
          />
        </Box>
        <Box>
          <Image
            src="https://img.freepik.com/vector-gratis/coleccion-etiquetas-patrocinador_23-2148725863.jpg"
            alt="Sponsors"
            className="h-[70%] max-sm:h-[12rem]"
          />
        </Box>
        <Box>
          <Image
            src="https://img.freepik.com/vector-gratis/coleccion-etiquetas-patrocinador_23-2148725863.jpg"
            alt="Sponsors"
            className="h-[70%] max-sm:h-[12rem]"
          />
        </Box>
      </Box>
      {/* <Box className="flex flex-col overflow-hidden"> */}
      {/* <Box className="flex flex-col items-center justify-center h-[30vh] mb-52">
          <Text className="text-5xl text-center font-bold flex flex-col text-[#07C15B]">
            {" "}
            <span className="font-semibold text-3xl leading-[5rem]">
              Te presentamos a{" "}
            </span>{" "}
            NUESTROS SPONSORS
          </Text>
        </Box> */}

      {/* <Box className="relative m-auto w-screen flex items-cente overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] after:content-['']">
          <Box className="animate-infinite-slider flex w-[calc(250px*10)">
            {LOGOS.map((logo, index) => (
              <Box
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                {logo}
              </Box>
            ))}
            {LOGOS.map((logo, index) => (
              <Box
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                {logo}
              </Box>
            ))}
          </Box>
        </Box>
      </Box> */}
    </Stack>
  );
};

export default Sponsors;
