import { RiArrowDownDoubleLine } from "react-icons/ri";
import Countdown from "./Countdown";
// import { Link } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack
      id="home"
      className="bg-slate-900 flex items-center justify-center flex-col w-full h-screen overflow-x-hidden"
    >
      <Box className="flex items-center justify-center h-full px-6 md:px-16">
        <Box className="text-center max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold xl:p-6 text-nowrap bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
            Bienvenidos a
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold drop-shadow-xl bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
            En busca <span className="text-nowrap">de la ciudad</span>{" "}
            <span className="text-nowrap">en 15 minutos</span>
          </h1>

          <Box className="mt-6">
            <Countdown
              id="countdown"
              limitDate="Oct 19, 2024 21:00:00"
              finalMessage="JUGAR!!"
            />
          </Box>
        </Box>
      </Box>

      <span className="animate-bounce mt-10 md:mt-12 bg-white p-3 md:p-4 rounded-full">
        <a href="#sponsors">
          <RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
        </a>
      </span>
    </Stack>

    // <section
    //   id="hero"
    //   className="bg-[#2DD4BF] bg-slate-900 flex items-center justify-center flex-col w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-x-hidden"
    // >
    //   <div className="flex items-center justify-center h-full px-6 md:px-16">
    //     <div className="text-center">
    //       <h3 className="text-lg sm:text-xl md:text-2xl font-bold xl:p-6 text-nowrap bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //         Bienvenidos a
    //       </h3>

    //       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold drop-shadow-xl bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //         En busca <span className="text-nowrap">de la ciudad</span>{" "}
    //         <span className="text-nowrap">en 15 minutos</span>
    //       </h1>

    //       <div className="mt-6">
    //         <Countdown
    //           id="countdown"
    //           limitDate="Oct 19, 2024 21:00:00"
    //           finalMessage="JUGAR!!"
    //         ></Countdown>
    //       </div>
    //     </div>
    //   </div>

    //   <span className="animate-bounce mt-10 md:mt-12 bg-white p-3 md:p-4 rounded-full">
    //     <a href="#sponsors">
    //       <RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
    //     </a>
    //   </span>
    // </section>

    // <section
    //   id="hero"
    //   className="bg-[#2DD4BF] bg-slate-900 flex items-center justify-center flex-col w-full h-[calc(100vh-10vh)] overflow-x-hidden"
    // >
    //   <div className="flex items-center justify-center h-full px-4 md:px-16">
    //     <div className="text-center">
    //       <h3 className="text-lg sm:text-xl md:text-2xl font-bold xl:p-6 text-nowrap bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //         Bienvenidos a
    //       </h3>

    //       <h1 className="text-4xl sm:text-5xl lg:text-6xl max-sm:text-3xl max-sm:leading-snug font-bold drop-shadow-xl bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //         En busca <span className="text-nowrap">de la ciudad</span>{" "}
    //         <span className="text-nowrap">en 15 minutos </span>
    //       </h1>

    //       <div className="mt-6">
    //         <Countdown
    //           id="countdown"
    //           limitDate="Oct 19, 2024 21:00:00"
    //           finalMessage="JUGAR!!"
    //         ></Countdown>
    //       </div>
    //     </div>
    //   </div>

    //   <span className="animate-bounce mt-6 bg-white p-4 rounded-full">
    //     <a href="#sponsors">
    //       <RiArrowDownDoubleLine className="text-3xl md:text-5xl" />
    //     </a>
    //   </span>
    // </section>

    // <section
    //   id="hero"
    //   className="bg-[#2DD4BF] bg-slate-900 flex items-center justify-center flex-col w-full h-[calc(100vh-10vh)] overflow-x-hidden"
    // >
    //   <div className=" flex items-center justify-between h-full max-md:px-16">
    //     <div className="text-center">
    //       <span className="text-2xl font-bold">
    //         {" "}
    //         <h3 className="xl:p-6 text-nowrap bg-gradient-to-r bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //           Bienvenidos a
    //         </h3>{" "}
    //       </span>
    //       <h1 className="max-sm:text-3xl text-5xl max-sm:leading-snug font-bold drop-shadow-xl bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
    //         En busca <span className="text-nowrap">de la ciudad</span>{" "}
    //         <span className="text-nowrap">en 15 minutos </span>
    //       </h1>
    //       <Countdown
    //         id="countdown"
    //         limitDate="Oct 19, 2024 21:00:00"
    //         finalMessage="JUGAR!!"
    //       ></Countdown>
    //     </div>
    //   </div>
    //   <span className="animate-bounce bg-white rounded-full">
    //     <a href="#sponsors">
    //       <RiArrowDownDoubleLine className="text-5xl" />
    //     </a>
    //   </span>
    // </section>
  );
};

export default Home;
