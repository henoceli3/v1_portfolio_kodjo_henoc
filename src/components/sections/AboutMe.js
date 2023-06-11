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
        // bg={theme.green}
      >
        <SectionHeading headingItem={HeadingDetails} />
        <Flex
          w={{ base: "95%", xl: "100%" }}
          h={{ base: "auto", xl: "90vh" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Box
            w={{ base: "100%", xl: "60%" }}
            h={{ base: "100vh", md: "50vh", xl: "100%" }}
            // bg={theme.green}
          >
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              Ullamco in elit consectetur et laborum in laboris adipisicing
              pariatur consectetur enim anim laboris. Proident duis incididunt
              laborum pariatur sit proident non aute et laborum. Exercitation
              aliquip eu exercitation nulla velit cillum ad sunt elit nisi
              veniam eiusmod dolore laboris. Labore duis Lorem qui pariatur
              ullamco irure sunt eiusmod excepteur.
            </Text>
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              Ullamco in elit consectetur et laborum in laboris adipisicing
              pariatur consectetur enim anim laboris. Proident duis incididunt
              laborum pariatur sit proident non aute et laborum. Exercitation
              aliquip eu exercitation nulla velit cillum ad sunt elit nisi
              veniam eiusmod dolore laboris. Labore duis Lorem qui pariatur
              ullamco irure sunt eiusmod excepteur.
            </Text>
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              Ullamco in elit consectetur et laborum in laboris adipisicing
              pariatur consectetur enim anim laboris.
            </Text>
            <Text color={theme.slate} textAlign={"justify"} fontSize={"sm"}>
              Ullamco in elit consectetur et laborum in laboris adipisicing
              pariatur consectetur enim anim laboris.
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
                {/* Node.js/Expresse  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>Node.Js/Expresse</Text>
                </Center>
                {/* Angular  */}
                <Center justifyContent={"start"}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: theme.green }}
                    size="xs"
                  />
                  <Text ml={"1em"}>Angular</Text>
                </Center>
              </Box>

              {/* première box  */}
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
              </Box>
            </Flex>
          </Box>

          {/* ma photo  */}
          <Center
            w={{ base: "100%", xl: "40%" }}
            h={{ base: "50vh", xl: "100%" }}
            alignItems={{ base: "center", xl: "start" }}
            // bg={theme.blue}
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
