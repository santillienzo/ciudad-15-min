// import { Button } from "@/components/ui/button";
import { Button, Image } from "@chakra-ui/react";
import Countdown from "./Countdown";
import { Box, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightUpLine, RiCircleFill, RiMapPinLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import buildingsImg from "../../../assets/svg/Edificios.svg";

const Home = () => {
  return (
    <Stack
      id="home"
      className="bg-background-primary flex items-center justify-center flex-col w-full min-h-screen overflow-x-hidden relative"
    >
      <Box className="flex flex-col items-center justify-center min-h-[100vh] w-full px-4 sm:px-6 md:px-16 relative">
        <Box className="z-40 text-center flex flex-col md:flex-row-reverse w-full justify-center items-center">
          <Box className="flex flex-col w-full flex-grow h-full p-4 items-center pb-16 md:pb-32 pt-16 md:pt-32">
            <Text className="text-2xl sm:text-3xl md:text-4xl pb-5 w-[80%] text-center text-secondary font-bold leading-tight">
              Transformemos{" "}
              <span className="text-button-cta-primary"> juntos </span>
              Mendoza en una ciudad más
              <span className="text-button-cta-primary"> saludable </span>,
              <span className="text-button-cta-primary"> equitativa </span> y
              <span className="text-button-cta-primary"> sostenible </span>
            </Text>

            <Box className="flex flex-col justify-evenly mt-4 items-center">
              <Box
                as="span"
                className="w-14 h-14 bg-button-cta-primary rounded-full flex items-center justify-center"
              >
                <RiMapPinLine className="text-slate-200 w-7 h-7" />
              </Box>
              <Text className="text-[#FBD491] font-bold font-poppins text-base md:text-lg lg:text-xl pt-2 text-center">
                Viernes 22/11
                <RiCircleFill className="h-2 inline-flex mb-1" />
                17hs
                <RiCircleFill className="h-2 inline-flex mb-1" />
                Plaza Independencia
              </Text>
              <Box className="mt-4">
                <Countdown
                  id="countdown"
                  limitDate="Nov 22, 2024 21:00:00"
                  finalMessage="JUGAR!!"
                />
              </Box>
            </Box>
            <div className="flex flex-col">
              <Button
                rightIcon={<RiArrowRightUpLine />}
                className="bg-button-cta-primary text-button-cta-secondary-foreground rounded w-full sm:w-auto m-auto mt-4"
              >
                <a href={"#participar"}>Quiero participar</a>
              </Button>

              <Button
                rightIcon={<GoPlus />}
                className="rounded w-full m-auto mt-4 text-button-cta-secondary-foreground"
                variant="outline"
                color="#E2E8F0"
                _hover={{
                  color: "#404040",
                  bg: "#E2E8F0",
                }}
              >
                <a href={"#motivacion"} className="">
                  Más Info
                </a>
              </Button>
            </div>
          </Box>
        </Box>

        {/* Imagen oculta en mobile y que ocupa todo el ancho en desktop */}
        <Image
          src={buildingsImg}
          className="block absolute bottom-0 left-0 w-full h-auto z-30"
        />
      </Box>
    </Stack>
  );
};

export default Home;

{
  /* <Button className="bg-button-cta-primary rounded w-32 m-auto">
  <Link
    to={"/login"}
    className="text-button-cta-primary-foreground rounded"
  >
    Jugar
  </Link>
</Button> */
}
{
  /* <Box
className="w-screen h-screen"
style={{
backgroundImage: `url(${CiudadLogo})`,
backgroundRepeat: "repeat-x",
backgroundSize: "auto",
}}
></Box> */
}

{
  /* <span className="animate-bounce mt-10 md:mt-12 bg-white p-3 md:p-4 rounded-full">
<a href="#sponsors">
<RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
</a>
</span> */
}
