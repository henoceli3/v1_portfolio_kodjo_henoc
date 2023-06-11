import { Flex } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../sectionHeading";
import { FlagshipProject } from "@/confing";
import FavaoriteProject from "@/templates/FavaoriteProject";


/**
 * Renders a component that displays a list of flagship projects.
 *
 * @return {JSX.Element} A React component that displays a list of flagship projects.
 */
const MyWorks = () => {
  const HeadingDetails = {
    number: "03.",
    title: "Mes Projets Phares",
  };
  return (
    <>
      <Flex w={"100%"} h={"auto"} flexDirection={"column"} id="#work">
        <SectionHeading headingItem={HeadingDetails} />
        {FlagshipProject.map((project) => (
          <FavaoriteProject key={project.id} item={project} />
        ))}
      </Flex>
    </>
  );
};

export default MyWorks;
