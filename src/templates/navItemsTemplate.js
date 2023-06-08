import theme from "@/styles/root";
import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";

const NavItemsTemplate = ({ elements }) => {
  return (
    <>
      <Link
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        h={{ base: "25%", xl: "100%" }}
        w={{ base: "100%", xl: "25%" }}
        transition={theme.transition}
        href={elements.link}
        className="navitems"
      >
        <Text color={theme.green} fontWeight={"bold"}>
          {elements.range}
        </Text>
        <Text
          color={theme.lightestSlate}
          fontWeight={"bold"}
          _hover={{ color: theme.green }}
        >
          {elements.item}
        </Text>
      </Link>
    </>
  );
};

export default NavItemsTemplate;
