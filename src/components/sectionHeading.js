import theme from "@/styles/root";
import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

/**
 * Renders a section heading with a title, a number and a horizontal line.
 *
 * @param {Object} headingItem - An object containing the section heading details.
 * @param {string} headingItem.title - The title of the section heading.
 * @param {string} headingItem.number - The number of the section heading.
 * @return {ReactNode} The rendered section heading.
 */
const SectionHeading = ({ headingItem }) => {
  return (
    <>
      <Center
        w={{ base: "95%", xl: "100%" }}
        justifyContent={"start"}
        flexDirection={"row"}
        mb={{ base: "2em", xl: "0em" }}
      >
        <Text
          fontSize={"1.2em"}
          color={theme.green}
          fontWeight={"bold"}
          fontFamily={theme.fontSans}
        >
          {headingItem.number}
        </Text>
        <Text color={theme.lightestSlate} fontWeight={"bold"}>
          {headingItem.title}
        </Text>
        <Box w={"20%"} h={"0.1px"} bg={theme.lightestSlate} ml={"2"}></Box>
      </Center>
    </>
  );
};

export default SectionHeading;
