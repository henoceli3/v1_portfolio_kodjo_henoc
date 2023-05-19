import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import FirstMessage from "../sections/FirstMessage";

const CenterPart = () => {
  return (
    <>
      <Center
        w={{ base: "100%", md: "80%" }}
        h={"100%"}
        mx={{ base: 0, md: "10%" }}
        flexDirection={"column"}
        // bg={"blue.300"}
      >
        <FirstMessage />
      </Center>
    </>
  );
};

export default CenterPart;
