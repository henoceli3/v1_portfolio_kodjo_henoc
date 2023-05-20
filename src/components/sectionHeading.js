import theme from "@/styles/root";
import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

const SectionHeading = () => {
  return (
    <>
      <Center
        w={{ base: "95%", md: "100%" }}
        justifyContent={"start"}
        flexDirection={"row"}
        mb={{ base: "2em", md: "0em" }}
      >
        <Text
          fontSize={"1.2em"}
          color={theme.green}
          fontWeight={"bold"}
          fontFamily={theme.fontSans}
        >
          01.
        </Text>
        <Text color={theme.lightestSlate} fontWeight={"bold"}>
          A propos de moi
        </Text>
        <Box w={"20%"} h={"0.1px"} bg={theme.lightestSlate} ml={"2"}></Box>
      </Center>
    </>
  );
};

export default SectionHeading;
