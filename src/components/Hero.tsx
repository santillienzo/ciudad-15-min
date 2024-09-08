import { RiArrowDownDoubleLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="bg-[#2DD4BF] flex items-center justify-center flex-col w-full h-[calc(100vh-10vh)] overflow-x-hidden">
      <div className=" flex items-center justify-between h-full max-md:px-16">
        <div className="text-center">
          <span className="text-2xl font-bold">
            {" "}
            <h3 className="p-6 text-nowrap bg-gradient-to-r from-[#1B48BA] via-[rgb(25,36,194)] to-[#0C2054] bg-clip-text text-transparent">
              Bienvenidos a
            </h3>{" "}
          </span>
          <h1 className="text-5xl max-sm:leading-snug font-bold drop-shadow-xl bg-gradient-to-r from-[#1B48BA] via-[rgb(25,36,194)] to-[#0C2054] bg-clip-text text-transparent">
            En busca <span className="text-nowrap">de la ciudad</span>{" "}
            <span className="text-nowrap">en 15 minutos </span>
          </h1>
        </div>
      </div>
      <span className="animate-bounce">
        <a href="#">
          <RiArrowDownDoubleLine className="text-5xl" />
        </a>
      </span>
    </section>
  );
};

export default Hero;
