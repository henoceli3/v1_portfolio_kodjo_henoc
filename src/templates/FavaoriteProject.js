import theme from "@/styles/root";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FavaoriteProject = ({ item }) => {
  return (
    <>
      <Flex w={"100%"} flexDirection={"column"}>
        <Center
          w={"100%"}
          h={{ base: "60vh", md: "60vh" }}
          //   bg={theme.white}
          mb={"2em"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "50%" }}
            h={{ base: "50%", md: "100%" }}
            bgImage={`url(${item.imageLink})`}
            bgPosition={"center"}
            bgSize={"contain"}
            bgRepeat={"no-repeat"}
            display={{ base: "none", md: "flex" }}
          >
            <Box
              w={"100%"}
              h={"100%"}
              bg={"#64ffdb29"}
              _hover={{ bg: "transparent" }}
              transition={theme.transition}
            ></Box>
          </Box>
          {/* seconde boxe  */}
          <Center
            w={{ base: "90%", md: "50%" }}
            h={{ base: "100%", md: "100%" }}
            position={"relative"}
            // bg={theme.white}
            bgImage={{ base: `url(${item.imageLink})`, md: "" }}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            {/* pour appliquer le filtre  */}
            <Flex
              w={"100%"}
              h={"100%"}
              bg={{ base: "#0a192fe7", md: "transparent" }}
              flexDirection={"column"}
              position={"relative"}
              alignItems={{ md: "end" }}
            >
              <Text
                color={theme.green}
                fontFamily={theme.fontSans}
                fontSize={"small"}
              >
                {item.type}
              </Text>
              <Text color={theme.lightestSlate}>{item.name}</Text>
              {/* la description */}
              <Center
                w={{ base: "100%", md: "110%" }}
                minH={"7em"}
                bg={{ base: "", md: theme.lightNavy }}
                borderRadius={"5px"}
                mt={"2em"}
              >
                <Box w={{ base: "100%", md: "90%" }}>
                  <Text
                    color={theme.lightSlate}
                    fontSize={"smaller"}
                    textAlign={{ base: "left", md: "right" }}
                  >
                    {item.description}
                  </Text>
                </Box>
              </Center>
              <Center
                w={"100%"}
                justifyContent={{ base: "left", md: "right" }}
                flexWrap={"wrap"}
                flexDirection={"row"}
              >
                {item.language.map((language, indexe) => (
                  <Text
                    key={indexe}
                    color={theme.lightestSlate}
                    fontSize={"small"}
                    fontFamily={theme.fontSans}
                    ml={"10px"}
                  >
                    {language}
                  </Text>
                ))}
              </Center>
              <Center
                w={"100%"}
                mt={"2em"}
                justifyContent={{ base: "left", md: "right" }}
              >
                <Link href={item.reposisterieLink}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="sm"
                    style={{ color: theme.lightestSlate, marginRight: "10px" }}
                  />
                </Link>

                <Link href={item.liveLink}>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    size="sm"
                    style={{ color: theme.lightestSlate }}
                  />
                </Link>
              </Center>
            </Flex>
          </Center>
        </Center>
      </Flex>
    </>
  );
};

export default FavaoriteProject;
