import { navItems } from "@/confing";
import theme from "@/styles/root";
import NavItemsTemplate from "@/templates/navItemsTemplate";
import { Center, Link } from "@chakra-ui/react";
import React from "react";

const Navigation = () => {
  return (
    <>
      {/* la navigation  et buutton */}
      <Center
        w={{ base: "100%", md: "40em" }}
        h={{ base: "100%", md: "100%" }}
        flexDirection={{ base: "column", md: "row" }}
        fontFamily={theme.fontSans}
        fontSize={theme.fzXxs}
      >
        {/* la navigation */}
        <Center
          h={{ base: "80%", md: "100%" }}
          w={{ base: "100%", md: "80%" }}
          fontWeight={"bold"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          {navItems.map((item) => (
            <NavItemsTemplate key={item.id} elements={item} />
          ))}
        </Center>

        {/* button  */}
        <Center h={{ base: "20%", md: "100%" }} w={{ base: "100%", md: "20%" }}>
          <Link
            h={{ base: "40%", md: "60%" }}
            w={{ base: "50%", md: "90%" }}
            href="https://cvdesignr.com/p/64285ea55890e"
            // download={"CV_2023-05-18_TAMEGNON ELISEE HENOC_KODJO"}
            borderRadius={"5px"}
            borderWidth={"1px"}
            borderColor={theme.green}
            color={theme.green}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
            _hover={{
              textDecoration: "none",
              outline: "none",
              boxShadow: `3px 3px 0 0 ${theme.green}`,
              transform: "translate(-4px, -4px)",
            }}
          >
            CV
          </Link>
        </Center>
      </Center>
    </>
  );
};

export default Navigation;
