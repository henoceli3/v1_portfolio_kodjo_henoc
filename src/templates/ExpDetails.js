import theme from "@/styles/root";
import { Box, Center, Flex, Link, TabPanel, Text } from "@chakra-ui/react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ListDetailsExp from "./ListDetailsExp";

/**
 * Renders the experience details for a given experience object.
 *
 * @param {Object} experience - The experience object to render details for.
 * @return {JSX.Element} - The JSX element containing the rendered experience details.
 */
const ExpDetails = ({ experience }) => {
  return (
    <>
      <TabPanel
        w={"100%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        padding={0}
        flexDirection={"column"}
      >
        <Flex w={"100%"} fontSize={"0.8em"} fontWeight={"bold"}>
          <Text color={theme.lightestSlate}>{experience.position}</Text>
          <Link color={theme.green} fontWeight={"bold"} ml={"10px"}>
            @{experience.Enterprise}
          </Link>
        </Flex>
        <Text
          color={theme.slate}
          fontSize={"small"}
          fontFamily={theme.fontSans}
        >
          {experience.date}
        </Text>
        <Flex w={"100%"} h={"auto"} flexDirection={'column'}>
          {/* la ligne  */}
          {experience.works.map((works) => (<ListDetailsExp key={works.id} item={works}/>))}
        </Flex>
      </TabPanel>
    </>
  );
};

export default ExpDetails;
