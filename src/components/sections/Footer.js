import theme from "@/styles/root";
import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";


/**
 * Renders the Footer component displaying a message and a link.
 *
 * @return {JSX.Element} The Footer component.
 */
const Footer = () => {
  return (
    <>
      <Center w={"100%"} h={"30vh"} flexDirection={"column"}>
        <Text
          color={theme.slate}
          _hover={theme.green}
          fontSize={"small"}
          fontFamily={theme.fontSans}
          mb={"2em"}
        >
          Conçu avec fierté par Kodjo Henoc 💪
        </Text>
        <Link
          color={theme.slate}
          _hover={theme.green}
          fontSize={"small"}
          fontFamily={theme.fontSans}
          href="https://v4.brittanychiang.com/"
          isExternal
          textAlign={'center'}
        >
          {"Remerciment a Bryttany Chiang pour l'inspiration du design 🤝"}
        </Link>
      </Center>
    </>
  );
};

export default Footer;
