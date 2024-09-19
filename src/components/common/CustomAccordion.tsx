import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";


interface AccordionData {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  sections: AccordionData[];
  accordionButtonBgColor?: string;
}

const CustomAccordion = ({ sections, accordionButtonBgColor }: CustomAccordionProps) => {
  return (
    <Accordion allowToggle className="w-full">
      {sections.map((section, index) => (
        <AccordionItem key={index} bg={"#9241BB"} className="rounded mb-8">
          <h2>
            <AccordionButton
              _expanded={{ bg: accordionButtonBgColor }}
              className="text-white"
            >
              <Box as="span" flex="1" textAlign="left">
                <Text className="font-bold">{section.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="text-white">
            {section.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
