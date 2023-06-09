import theme from "@/styles/root";
import { Box, Center, Link, Text } from "@chakra-ui/react";
import React from "react";

/**
 * Renders a right side bar component with email link and separator.
 *
 * @return {JSX.Element} The right side bar component.
 */
const RigthBar = () => {
  return (
    <>
      <Center
        w={"10%"}
        position={"fixed"}
        right={0}
        top={0}
        bottom={0}
        display={{ base: "none", xl: "flex" }}
        justifyContent={"end"}
        flexDirection={"column"}
        fontFamily={theme.fontSans}
      >
        <Center
          color={theme.lightestSlate}
          fontSize={"12px"}
          w={"100%"}
          h={"20em"}
          mb={"2em"}
        >
          <Link
            transform={" rotate(90deg)"}
            letterSpacing={"2px"}
            _hover={{ textDecoration: "none" }}
            href="mailto:kodjohenoc07@gmail.com"
          >
            kodjohenoc07@gmail.com
          </Link>
        </Center>
        <Center w={"100%"} h={"5em"}>
          <Box w={"1px"} h={"90%"} bg={theme.lightestSlate}></Box>
        </Center>
      </Center>
    </>
  );
};

export default RigthBar;
