import theme from "@/styles/root";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../sectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FrameWorks, Languages } from "@/confing";
import LanguagesFrameworks from "@/templates/language_frameworks";

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
        mb={"5em"}
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
          >
            <Text
              color={theme.slate}
              textAlign={"justify"}
              fontSize={"sm"}
              mb={"1em"}
            >
              {
                "Diplômé en MIAGE, je suis KODJO HENOC, un développeur web et mobile passionné. Mon parcours académique renforcé et mes compétences étendues reflètent ma détermination à évoluer dans l'univers du code. Anciennement étudiant, aujourd'hui, je m'épanouis en contribuant à des projets innovants au sein d'une équipe de développeurs talentueux."
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
                {FrameWorks.map((item) => (
                  <LanguagesFrameworks key={item.id}>
                    {item}
                  </LanguagesFrameworks>
                ))}
              </Box>

              <Box w={"50%"}>
                {Languages.map((item) => (
                  <LanguagesFrameworks key={item.id}>
                    {item}
                  </LanguagesFrameworks>
                ))}
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
