import theme from "@/styles/root";
import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";


/**
 * Renders a React component displaying the author's name, job title, and a brief
 * description of their skills and interests.
 *
 * @return {JSX.Element} The rendered React component.
 */
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
            Salut, mon nom est
          </Text>
          <Heading
            color={theme.lightestSlate}
            fontSize={{ base: "", xl: "4em" }}
          >
            Kodjo Henoc.
          </Heading>
          <Heading color={theme.lightSlate} textTransform={"capitalize"}>
            développeur web et mobile.
          </Heading>
          <Text
            color={theme.darkSlate}
            textAlign={"justify"}
            w={{ base: "90%", xl: "50%" }}
          >
            {
              "Passionné par le développement web et mobile, je suis un devellopeur junior créatif et déterminé. Avec une solide base de compétences, je m'efforce d'apporter des solutions innovantes et intuitives à chaque projet. Prêt à relever de nouveaux défis et à contribuer au monde numérique en constante évolution."
            }
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
            En savoir Plus
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default FirstMessage;
