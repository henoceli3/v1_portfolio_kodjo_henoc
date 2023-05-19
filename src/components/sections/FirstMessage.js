import theme from "@/styles/root";
import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const FirstMessage = () => {
  return (
    <>
      <Center w={"100%"} minH={"92vh"}>
        <Flex w={"90%"} h={"90%"} flexDirection={"column"}>
          <Text
            color={theme.green}
            fontFamily={theme.fontSans}
            fontSize={"smaller"}
          >
            Hi, my name is
          </Text>
          <Heading
            color={theme.lightestSlate}
            fontSize={{ base: "", md: "4em" }}
          >
            Kodjo Henoc.
          </Heading>
          <Heading color={theme.lightSlate}>Web developer.</Heading>
          <Text
            color={theme.darkSlate}
            textAlign={"justify"}
            w={{ base: "90%", md: "50%" }}
          >
            I am a junior developer passionate about the web. I love designing a
            beautiful interface backed by a solid back-end
          </Text>
          <Link
            h={"2.5em"}
            w={"10em"}
            borderRadius={"5px"}
            borderWidth={"1px"}
            borderColor={theme.green}
            color={theme.green}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"2em"}
            flexDirection={"row"}
            _hover={{
              textDecoration: "none",
              outline: "none",
              boxShadow: `3px 3px 0 0 ${theme.green}`,
              transform: "translate(-4px, -4px)",
            }}
            fontFamily={theme.fontSans}
            fontSize={"smaller"}
          >
            Learn more
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default FirstMessage;
