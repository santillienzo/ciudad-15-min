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
// hsl(196.1, 45.05%, 35.69%)
const CustomAccordion = ({ sections, accordionButtonBgColor }: CustomAccordionProps) => {
  return (
    <Accordion allowToggle className="w-3/4 flex flex-col gap-4 max-sm:w-full">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          className="rounded bg-collapsable-primary border-none"
        >
          <Text>
            <AccordionButton
              _expanded={{ bg: accordionButtonBgColor }}
              className="text-background-secondary-foreground"
            >
              <Box as="span" flex="1" textAlign="left">
                <Text className="font-bold">{section.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4} className="text-background-secondary-foreground">
            {section.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
