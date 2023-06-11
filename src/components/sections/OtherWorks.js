import { OtheProjectLength, OtherWorksList } from "@/confing";
import theme from "@/styles/root";
import OrtherWorksTemplate from "@/templates/OrtherWorksTemplate";
import { Button, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";



/**
 * Renders a section with other works.
 *
 * @return {JSX.Element} The JSX code for the section with other works.
 */
const OtherWorks = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showMore, setShowMore] = useState(false);
  const handleLoadMore = () => {
    console.log(OtheProjectLength);
    if (visibleProjects < OtheProjectLength) {
      setVisibleProjects(visibleProjects + 6);
    } else {
      setVisibleProjects(6);
    }
  };

  return (
    <>
      <Center mb={"2em"} flexDirection={"column"}>
        <Heading
          fontSize={"1.5em"}
          color={theme.lightSlate}
          textTransform={"capitalize"}
        >
          Mes autres projets
        </Heading>
        <Link
          href={"#"}
          color={theme.green}
          fontFamily={theme.fontSans}
          fontSize={"small"}
          _hover={{
            textDecoration: "none",
          }}
        >
          Voir les archives
        </Link>
      </Center>
      <Flex
        w={"100%"}
        minH={{ base: "100vh", xl: "70vh" }}
        justifyContent={{ base: "center", xl: "space-around" }}
        alignItems={"center"}
        flexDirection={{ base: "column", xl: "row" }}
        flexWrap={"wrap"}
      >
        {OtherWorksList.slice(0, visibleProjects).map((works) => (
          <OrtherWorksTemplate key={works.id} item={works} />
        ))}
      </Flex>
      <Center w={"100%"} mb={"2em"}>
        <Button
          h={"2.5em"}
          w={"10em"}
          bg={"transparent"}
          fontWeight={"light"}
          borderRadius={"5px"}
          borderWidth={"1px"}
          borderColor={theme.green}
          color={theme.green}
          _hover={{
            textDecoration: "none",
            outline: "none",
            boxShadow: `3px 3px 0 0 ${theme.green}`,
            transform: "translate(-4px, -4px)",
          }}
          onClick={handleLoadMore}
        >
          Afficher plus
        </Button>
      </Center>
    </>
  );
};

export default OtherWorks;
