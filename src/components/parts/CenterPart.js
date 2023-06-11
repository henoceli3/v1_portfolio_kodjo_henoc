import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import FirstMessage from "../sections/FirstMessage";
import AboutMe from "../sections/AboutMe";
import Experience from "../sections/Experience";
import MyWorks from "../sections/MyWorks";
import OtherWorks from "../sections/OtherWorks";
import ContactMe from "../sections/ContactMe";
import Footer from "../sections/Footer";

const CenterPart = () => {
  return (
    <>
      <Center
        w={{ base: "100%", xl: "80%" }}
        h={"100%"}
        mx={{ base: 0, xl: "10%" }}
        flexDirection={"column"}
        // bg={"blue.300"}
      >
        <FirstMessage />
        <AboutMe />
        <Experience />
        <MyWorks />
        <OtherWorks />
        <ContactMe />
        <Footer />
      </Center>
    </>
  );
};

export default CenterPart;
