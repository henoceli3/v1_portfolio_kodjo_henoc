import theme from "@/styles/root";
import { Tab } from "@chakra-ui/react";
import React from "react";

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
