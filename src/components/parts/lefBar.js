import theme from "@/styles/root";
import { Box, Center, Link } from "@chakra-ui/react";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LeftBar = () => {
  return (
    <>
      <Center
        w={"10%"}
        position={"fixed"}
        left={0}
        top={0}
        bottom={0}
        display={{ base: "none", md: "flex" }}
        // bg={theme.green}
        color={"white"}
        justifyContent={"end"}
        flexDirection={"column"}
      >
        <Center
          w={"100%"}
          h={"10em"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          {/* github  */}
          <Link
            href="https://github.com/henoceli3"
            isExternal
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
              transition: theme.hamBefore,
            }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="sm"
              style={{ color: theme.lightestSlate }}
            />
          </Link>

          {/* instagram  */}
          <Link
            href="https://www.instagram.com/henockdjo/"
            isExternal
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
              transition: theme.hamBefore,
            }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="sm"
              style={{ color: theme.lightestSlate }}
            />
          </Link>
          {/* twitter  */}
          <Link
            href="https://twitter.com/HenocKodjo"
            isExternal
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
              transition: theme.hamBefore,
              color: theme.green,
            }}
            role="groupe"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="sm"
              style={{ color: theme.lightestSlate }}
            />
          </Link>

          {/* linkedin  */}
          <Link
            href="https://www.linkedin.com/in/kodjohenoc/"
            isExternal
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
              transition: theme.hamBefore,
            }}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="sm"
              style={{ color: theme.lightestSlate }}
            />
          </Link>

          {/* codePen  */}
          <Link
            href="https://codepen.io/henoceli3"
            isExternal
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
              transition: theme.hamBefore,
            }}
          >
            <FontAwesomeIcon
              icon={faCodepen}
              size="sm"
              style={{ color: theme.lightestSlate }}
            />
          </Link>
        </Center>
        <Center w={"100%"} h={"5em"}>
          <Box w={"1px"} h={"90%"} bg={theme.lightestSlate}></Box>
        </Center>
      </Center>
    </>
  );
};

export default LeftBar;
