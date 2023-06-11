import theme from "@/styles/root";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SectionHeading from "../sectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";


/**
 * Renders a section with information about the author.
 *
 * @return {JSX.Element} The JSX element for the section.
 */
const AboutMe = () => {
  const HeadingDetails = {
    number: "01.",
    title: "Moi",
  };
  return (
    <>
      <Center
        w={{ base: "100%", xl: "80%" }}
        h={{ base: "auto", xl: "100vh" }}
        flexDirection={"column"}
        justifyContent={"space-between"}
        id="about"
      >
        <SectionHeading headingItem={HeadingDetails} />
        <Flex
          w={{ base: "95%", xl: "100%" }}
          h={{ base: "auto", xl: "90vh" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Box
            w={{ base: "100%", xl: "60%" }}
            h={{ base: "auto", md: "50vh", xl: "100%" }}
            // bg={theme.blue}
          >
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              {
                "Salut, je m'appelle KODJO HENOC. Je suis passionné par le codage, avec une appétence particulière pour le web. Je suis actuellement étudiant en fin d'études en MIAGE. J'ai la chance de faire partie d'une équipe de développeurs très talentueux qui m'aident à m'améliorer et à faire mes preuves."
              }
            </Text>
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              Ci-dessous, voici les technologies avec lesquelles je travaille
              actuellement.
            </Text>

            <Flex
              w={"100%"}
              color={theme.slate}
              fontFamily={theme.fontSans}
              fontSize={"15px"}
            >
              {/* première box  */}
              <Box w={"50%"}>
                {/* React */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>React</Text>
                </Center>
                {/* Next.js  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>Next.js</Text>
                </Center>
                {/* Node.js/Expresse  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>Node.Js/Expresse</Text>
                </Center>
              </Box>

              <Box w={"50%"}>
                {/* JavaScript */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>JavaScript</Text>
                </Center>
                {/* TypeScripte  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>TypeScripte</Text>
                </Center>
                {/* HTML/CSS  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>HTML/CSS</Text>
                </Center>
                {/* MySql  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>MySql</Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          {/* ma photo  */}
          <Center
            w={{ base: "100%", xl: "40%" }}
            h={{ base: "50vh", xl: "100%" }}
            alignItems={{ base: "center", xl: "start" }}
          >
            <Box
              w={{ base: "250px", xl: "300px" }}
              h={{ base: "250px", xl: "300px" }}
              bg={theme.white}
              backgroundImage={"url('me.png')"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              borderRadius={"8px"}
              role="group"
              boxShadow={
                "0px 0px 0px 2px transparent,15px 15px 0px -2px #0a192f,15px 15px 0px 0px #64ffda"
              }
              _hover={{
                outline: "none",
                transform: "translate(-4px, -4px)",
                boxShadow:
                  "0px 0px 0px 2px transparent,30px 30px 0px -2px #0a192f,30px 30px 0px 0px #64ffda",
              }}
              transition={theme.transition}
            >
              <Box
                w={"100%"}
                h={"100%"}
                bg={"#64ffdbba"}
                borderRadius={"7px"}
                _groupHover={{ bg: "transparent" }}
              ></Box>
            </Box>
          </Center>
        </Flex>
      </Center>
    </>
  );
};

export default AboutMe;
