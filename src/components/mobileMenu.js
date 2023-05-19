import theme from "@/styles/root";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Navigation from "./sections/Nav";
import { HamburgerIcon } from "@chakra-ui/icons";

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        size={"sm"}
        bg={"transparent"}
        color={theme.white}
        borderWidth={"1px"}
        borderColor={theme.green}
        icon={<HamburgerIcon />}
      >
        Menu
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent bg={theme.lightNavy}>
          <DrawerCloseButton color={theme.green} />
          <DrawerBody>
            <Navigation />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
