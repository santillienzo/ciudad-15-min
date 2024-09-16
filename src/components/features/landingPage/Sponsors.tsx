// import {
//   RxFigmaLogo,
//   RxFramerLogo,
//   RxSketchLogo,
//   RxTwitterLogo,
//   RxGithubLogo,
//   RxVercelLogo,
//   RxNotionLogo,
//   RxDiscordLogo,
//   RxInstagramLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";
import { Box, Stack, Text } from "@chakra-ui/react";
import Logo from "../../../assets/Logo.svg";

const LOGOS = [
  //   <RxFigmaLogo width={24} height={24} className="text-slate-800" />,
  //   <RxFramerLogo width={24} height={24} className="text-slate-800" />,
  //   <RxSketchLogo width={24} height={24} className="text-slate-800" />,
  //   <RxTwitterLogo width={24} height={24} className="text-slate-800" />,
  //   <RxGithubLogo width={24} height={24} className="text-slate-800" />,
  //   <RxVercelLogo width={24} height={24} className="text-slate-800" />,
  //   <RxNotionLogo width={24} height={24} className="text-slate-800" />,
  //   <RxDiscordLogo width={24} height={24} className="text-slate-800" />,
  //   <RxInstagramLogo width={24} height={24} className="text-slate-800" />,
  //   <RxLinkedinLogo width={24} height={24} className="text-slate-800" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
  <img src={Logo} alt="Logo" />,
];

const Sponsors = () => {
  return (
    <Stack id="sponsors" className="scroll-smooth bg-blue-950 flex justify-center h-screen w-full">
      <Box className="flex flex-col overflow-hidden">
        <Box className="flex flex-col items-center justify-center h-[30vh] mb-52">
          <Text className="text-5xl text-center font-bold flex flex-col text-[#07C15B]">
            {" "}
            <span className="font-semibold text-3xl leading-[5rem]">
              Te presentamos a{" "}
            </span>{" "}
            NUESTROS SPONSORS
          </Text>
        </Box>

        <Box className="relative m-auto w-screen flex items-cente overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] after:content-['']">
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
      </Box>
    </Stack>
  );
};

export default Sponsors;
