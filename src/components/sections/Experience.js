import theme from "@/styles/root";
import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../sectionHeading";
import { ExperienceListe } from "@/confing";
import TabExp from "@/templates/TabExp";
import ExpDetails from "@/templates/ExpDetails";

const Experience = () => {
  const HeadingDetails = {
    number: "02.",
    title: "Mon Experience",
  };
  return (
    <>
      <Center
        w={"100%"}
        h={{ base: "auto", md: "100vh" }}
        justifyContent={{ base: "center", md: "end" }}
      >
        <Box w={{ base: "95%", md: "80%" }} h={{ base: "auto", md: "90%" }}>
          <SectionHeading headingItem={HeadingDetails} />
          <Tabs
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            color={theme.lightSlate}
            w={"100%"}
            h={{ base: "100vh", md: "90%" }}
            variant={"unstyled"}
          >
            <TabList
              display={"flex"}
              flexDirection={{ base: "row", md: "column" }}
              w={{ base: "100%", md: "20%" }}
              h={{ base: "10%", md: "100%" }}
              fontFamily={theme.fontSans}
            >
              {ExperienceListe.map((exp) => (
                <TabExp key={exp.id} experience={exp} />
              ))}
            </TabList>

            <TabPanels
              w={{ base: "100%", md: "80%" }}
              h={{ base: "90%", md: "100%" }}
            >
              {ExperienceListe.map((expdet) => (
                <ExpDetails key={expdet.id} experience={expdet} />
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </>
  );
};

export default Experience;
