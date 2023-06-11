import theme from "@/styles/root";
import { Tab } from "@chakra-ui/react";
import React from "react";


/**
 * Renders a tab displaying the given enterprise experience.
 *
 * @param {object} experience - The enterprise experience to display.
 * @return {JSX.Element} A tab with the given enterprise experience.
 */
const TabExp = ({ experience }) => {
  return (
    <>
      <Tab
        fontSize={"small"}
        _selected={{
          color: theme.green,
          borderLeftColor: { base: "transparent", xl: theme.green },
          borderLeftWidth: { base: "0px", xl: "3px" },
          borderBottomColor: {
            base: theme.green,
            xl: "transparent",
          },
          borderBottomWidth: { base: "3px", xl: "0px" },
        }}
        _hover={{ bg: theme.lightestNavy }}
        justifyContent={"start"}
        transition={".1s ease-in-out"}
      >
        {experience.Enterprise}
      </Tab>
    </>
  );
};

export default TabExp;
