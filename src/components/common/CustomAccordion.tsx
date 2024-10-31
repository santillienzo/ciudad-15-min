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
  icon: string;
}

interface CustomAccordionProps {
  sections: AccordionData[];
  accordionButtonBgColor?: string;
}
// hsl(196.1, 45.05%, 35.69%)
const CustomAccordion = ({ sections, accordionButtonBgColor }: CustomAccordionProps) => {
  return (
    <Accordion allowToggle className="w-full flex flex-col gap-4 max-sm:w-full">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          className="rounded bg-collapsable-primary border-none"
        >
          <AccordionButton
            _expanded={{ bg: accordionButtonBgColor }}
            className="text-background-secondary-foreground"
          >
            <Box flex="1" textAlign="left" className="p-2 flex items-center gap-5">
              <span className="p-1 bg-background-primary rounded-full flex items-center justify-center h-[40px] w-[40px]">
                <img className="h-[26px]" src={section.icon} alt={section.title} />
              </span>
              <Text className="font-bold">{section.title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={4}
            className="text-background-secondary-foreground max-sm:h-[300px] max-sm:overflow-scroll"
          >
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
