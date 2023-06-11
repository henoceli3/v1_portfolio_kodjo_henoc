import theme from "@/styles/root";
import { Center, Link, Text } from "@chakra-ui/react";
import React from "react";


/**
 * Render a navigation item template based on the given elements.
 *
 * @param {Object} elements - An object containing information about the navigation item
 * @param {string} elements.link - The link where the navigation item should redirect to
 * @param {string} elements.range - The range of the navigation item
 * @param {string} elements.item - The text of the navigation item
 * @return {JSX.Element} - The rendered navigation item as a React component
 */
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
