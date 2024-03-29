import theme from "@/styles/root";
import {
  Box,
  Center,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../sectionHeading";
import { ExperienceListe } from "@/confing";
import TabExp from "@/templates/TabExp";
import ExpDetails from "@/templates/ExpDetails";


/**
 * Renders the Experience component which displays the user's experience details.
 *
 * @return {JSX.Element} The rendered Experience component.
 */
const Experience = () => {
  const HeadingDetails = {
    number: "02.",
    title: "Mon Experience",
  };
  return (
    <>
      <Center
        w={"100%"}
        h={{ base: "auto", xl: "70vh" }}
        justifyContent={{ base: "center", xl: "end" }}
        id="experience"
        // bg={"blue.200"}
        mb={'5em'}
      >
        <Box w={{ base: "95%", xl: "80%" }} h={{ base: "auto", xl: "90%" }}>
          <SectionHeading headingItem={HeadingDetails} />
          <Tabs
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            color={theme.lightSlate}
            w={"100%"}
            h={{ base: "auto", xl: "90%" }}
            variant={"unstyled"}
          >
            <TabList
              display={"flex"}
              flexDirection={{ base: "row", xl: "column" }}
              w={{ base: "100%", xl: "20%" }}
              h={{ base: "10%", xl: "100%" }}
              fontFamily={theme.fontSans}
            >
              {ExperienceListe.map((exp) => (
                <TabExp key={exp.id} experience={exp} />
              ))}
            </TabList>

            <TabPanels
              w={{ base: "100%", xl: "80%" }}
              h={{ base: "90%", xl: "100%" }}
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
