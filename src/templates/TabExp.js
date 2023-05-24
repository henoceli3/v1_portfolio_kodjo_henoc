import theme from '@/styles/root';
import { Tab } from '@chakra-ui/react';
import React from 'react';

const TabExp = ({experience}) => {
    return (
      <>
        <Tab
          fontSize={"small"}
          _selected={{
            color: theme.green,
            borderLeftColor: { base: "transparent", md: theme.green },
            borderLeftWidth: { base: "0px", md: "3px" },
            borderBottomColor: {
              base: theme.green,
              md: "transparent",
            },
            borderBottomWidth: { base: "3px", md: "0px" },
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