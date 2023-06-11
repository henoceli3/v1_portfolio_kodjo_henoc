import theme from "@/styles/root";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


/**
 * Renders a template for displaying an item's information.
 *
 * @param {Object} item - An object containing the item's information.
 * @return {JSX.Element} The template as a JSX element.
 */
const OrtherWorksTemplate = ({ item }) => {
  return (
    <>
      <Center
        w={{ base: "80%", xl: "30%" }}
        h={"15em"}
        mb={"2em"}
        bg={theme.lightNavy}
        _hover={{
          transform: "translateY(-10px)",
          transition: theme.transition,
        }}
      >
        {/* container  */}
        <Center
          w={"100%"}
          h={"90%"}
          flexDirection={"column"}
          justifyContent={"start"}
        >
          {/* les icones */}
          <Center w={"80%"} justifyContent={"space-between"} mb={"2em"}>
            <FontAwesomeIcon icon={faFolder} color={theme.green} size="xl" />
            <Box>
              {item.githubLink ? (
                <Link href={item.githubLink}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="sm"
                    style={{ color: theme.lightestSlate, marginRight: "10px" }}
                  />
                </Link>
              ) : null}

              {item.externalLink ? (
                <Link href={item.externalLink}>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    size="sm"
                    style={{ color: theme.lightestSlate }}
                  />
                </Link>
              ) : null}
            </Box>
          </Center>
          {/* textes  */}
          <Box w={"80%"}>
            {/* title  */}
            <Text
              textAlign={"justify"}
              color={theme.lightestSlate}
              textTransform={"capitalize"}
              _hover={{ color: theme.green }}
              fontWeight={"bold"}
              mb={".5em"}
            >
              {item.title}
            </Text>
            <Text color={theme.slate} fontSize={"smaller"} mb={"2em"}>
              {item.description}
            </Text>
            <Flex w={"100%"} fontSize={"small"} flexWrap={'wrap'}>
              {item.langagues.map((language, indexe) => (
                <Text
                  key={indexe}
                  fontFamily={theme.fontSans}
                  color={theme.slate}
                  ml={{base:"5px"}}
                  textTransform={"capitalize"}
                >
                  {language}
                </Text>
              ))}
            </Flex>
          </Box>
        </Center>
      </Center>
    </>
  );
};

export default OrtherWorksTemplate;
