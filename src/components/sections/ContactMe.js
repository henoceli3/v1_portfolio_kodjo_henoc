import theme from "@/styles/root";
import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";


/**
 * Renders a contact form on the page.
 *
 * @return {JSX.Element} A JSX element containing a contact form.
 */
const ContactMe = () => {
  return (
    <>
      <Center
        w={"100%"}
        h={"auto"}
        flexDirection={"column"}
        id="contact"
        mt={"5em"}
      >
        <Text fontFamily={theme.fontSans} color={theme.green} fontSize={".8em"}>
          04.Et après ?
        </Text>
        <Text
          color={theme.lightestSlate}
          fontWeight={"bold"}
          fontSize={{ base: "1.5em", xl: "2em" }}
        >
          Entrer en Contact
        </Text>
        <Text
          color={theme.slate}
          textAlign={"center"}
          w={{ base: "100%", xl: "70%" }}
          fontSize={".8em"}
        >
          {"Ouvert à toute question, n'hésitez pas à me contacter !"}
        </Text>

        <Link
          h={"3.5em"}
          w={"10em"}
          fontSize={".8em"}
          mt={"2em"}
          fontFamily={theme.fontSans}
          borderRadius={"5px"}
          borderWidth={"1px"}
          borderColor={theme.green}
          color={theme.green}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          _hover={{
            textDecoration: "none",
            outline: "none",
            boxShadow: `3px 3px 0 0 ${theme.green}`,
            transform: "translate(-4px, -4px)",
          }}
          href="mailto:kodjohenoc07@gmail.com"
        >
          Me Contater
        </Link>
      </Center>
    </>
  );
};

export default ContactMe;
