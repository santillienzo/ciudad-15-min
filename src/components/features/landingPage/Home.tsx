"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Countdown from "./Countdown";
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { cards } from "../../../lib/sliderContent";
import MainLogo from "../../../assets/svg/Logo blanco.svg";
import { RiCircleFill, RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Stack
      id="home"
      className="bg-background-primary flex items-center justify-center flex-col w-full min-h-screen overflow-x-hidden"
    >
      <Box className="flex items-center justify-center order-1 min-h-[100vh] w-full px-4 sm:px-6 md:px-16">
        <Box className="text-center flex flex-col md:flex-row-reverse w-full justify-center items-center">
          {/* Columna derecha */}
          <Box className="flex flex-col grow w-full md:w-1/2 p-6">
            <Text className="text-white font-bold font-poppins text-lg md:text-xl lg:text-2xl">
              Bienvenidos a
            </Text>
            <Image
              src={MainLogo}
              alt="En busca de la ciudad en 15 minutos"
              className="w-full h-auto max-w-xs m-auto"
            />
            <Box className="flex flex-col justify-evenly mt-4">
              <Box
                as="span"
                className="w-14 h-14 bg-button-cta-primary rounded-full flex items-center justify-center m-auto"
              >
                <RiMapPinLine className="text-slate-200 w-7 h-7" />
              </Box>
              <Text className="text-button-cta-primary font-bold font-poppins text-base md:text-lg lg:text-xl pt-2">
                Viernes 22/11
                <RiCircleFill className="h-2 inline-flex mb-1" />
                17hs
                <RiCircleFill className="h-2 inline-flex mb-1" />
                Plaza Independencia
              </Text>
              <Box>
                <Countdown
                  id="countdown"
                  limitDate="Nov 22, 2024 21:00:00"
                  finalMessage="JUGAR!!"
                />
              </Box>
            </Box>
          </Box>

          {/* Columna izquierda */}
          <Box className="flex flex-col order-2 w-full md:w-1/2 p-4">
            <Text className="text-3xl pb-5 text-center text-secondary font-bold">
              Transformemos juntos Mendoza en una ciudad más saludable,
              equitativa y sostenible. Descubre cómo la movilidad activa puede
              mejorar tu calidad de vida y la de nuestra ciudad.
            </Text>

            <Box className="w-full relative overflow-hidden">
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                  <Box className="relative" key={index}>
                    <Container className="relative">
                      <Stack className="w-full max-w-xl p-4">
                        <Text className="text-secondary text-justify">
                          {card.text}
                        </Text>
                      </Stack>
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>

            <Button className="bg-button-cta-primary-foreground text-button-cta-secondary-foreground rounded w-32 m-auto mt-4">
              <Link to={"/register"}>Registrarme</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;

{/* <Button className="bg-button-cta-primary rounded w-32 m-auto">
  <Link
    to={"/login"}
    className="text-button-cta-primary-foreground rounded"
  >
    Jugar
  </Link>
</Button> */}
{/* <Box
className="w-screen h-screen"
style={{
backgroundImage: `url(${CiudadLogo})`,
backgroundRepeat: "repeat-x",
backgroundSize: "auto",
}}
></Box> */}

{/* <span className="animate-bounce mt-10 md:mt-12 bg-white p-3 md:p-4 rounded-full">
<a href="#sponsors">
<RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
</a>
</span> */}
