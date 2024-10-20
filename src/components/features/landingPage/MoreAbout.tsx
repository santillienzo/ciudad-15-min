import CustomAccordion from "@/components/common/CustomAccordion";
import { Image } from "@chakra-ui/react";
import "../../../lib/accordionSections";
import { accordionSections } from "../../../lib/accordionSections";
import EdificioArbol from "@/assets/svg/edifico azul con arbol.svg";

const tailwindCustomStyles = getComputedStyle(document.documentElement);
const accordionBgColor = tailwindCustomStyles.getPropertyValue(
  "--collapsable-primary"
);

const MoreAbout = () => {
  return (
    <section
      id="saber-mas"
      className="relative flex flex-col md:flex-row justify-between items-center md:justify-center md:min-h-screen md:h-screen bg-background-primary"
    >
      <div className="flex w-full justify-start items-center md:h-full overflow-hidden py-16 md:py-0">
          <div className="w-11/12 m-auto">
            <CustomAccordion
              sections={accordionSections}
              accordionButtonBgColor={accordionBgColor}
            />
          </div>
      </div>
      <div className="relative flex items-end md:block overflow-hidden w-full h-auto md:h-full">
        <Image
          src={EdificioArbol}
          alt="Edificio"
          className="relative mx-auto md:absolute bottom-0 right-0 w-11/12 md:w-full m-0 p-0"
        />
      </div>
    </section>
  );
};

export default MoreAbout;
