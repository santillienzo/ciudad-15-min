import { Box, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();

  return (
    <Stack
      id="footer"
      className="flex h-[25vh] justify-end items-center bg-[#74D7DA]"
    >
      <Box className="flex items-end gap-5">
        <Text as='span' className="text-gray-800">
          &#169; {(date.getFullYear())} Todos los derechos reservados
        </Text>
      </Box>
    </Stack>
  );
};

export default Footer;
