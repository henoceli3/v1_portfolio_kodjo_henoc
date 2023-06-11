import theme from "@/styles/root";
import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  return (
    <>
      <Center w={"100%"} h={"100vh"} flexDirection={"column"} id="contact">
        <Text fontFamily={theme.fontSans} color={theme.green} fontSize={".8em"}>
          04.Et après ?
        </Text>
        <Text color={theme.lightestSlate} fontWeight={"bold"} fontSize={{base:'1.5em',xl:"2em"}}>
          Entrer en Contact
        </Text>
        <Text
          color={theme.slate}
          textAlign={"center"}
          w={{ base: "100%", xl: "70%" }}
          fontSize={".8em"}
        >
          Fugiat minim occaecat adipisicing commodo ea ipsum eiusmod ex non est
          nisi laborum anim magna. Ut id labore irure consectetur cillum labore
          consectetur ut. Consectetur qui incididunt amet mollit deserunt labore
          enim ipsum nulla dolor ad aliquip ut irure. Aliqua sint labore sunt ut
          voluptate reprehenderit magna. Laboris aliqua deserunt nisi amet
          laboris consequat esse. In proident quis laboris aute ullamco et.
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
          Dis Bonjour
        </Link>
      </Center>
    </>
  );
};

export default ContactMe;
