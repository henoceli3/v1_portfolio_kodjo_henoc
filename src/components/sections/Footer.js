import theme from "@/styles/root";
import { Center, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

/**
 * Renders the Footer component displaying a message and a link.
 *
 * @return {JSX.Element} The Footer component.
 */
const Footer = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <Center w={"100%"} h={"30vh"} flexDirection={"column"}>
        <Text
          color={theme.slate}
          _hover={theme.green}
          fontSize={"small"}
          fontFamily={theme.fontSans}
          mb={"2em"}
        >
          Conçu avec fierté par Kodjo Henoc 💪
        </Text>
        <Link
          color={theme.slate}
          _hover={theme.green}
          fontSize={"small"}
          fontFamily={theme.fontSans}
          href="https://v4.brittanychiang.com/"
          isExternal
          textAlign={"center"}
        >
          {"Remerciment a Bryttany Chiang pour l'inspiration du design 🤝"}
        </Link>

        {isLargerThan1280 ? null : (
          <Center
            w={{ base: "90%", xl: "80%" }}
            flexWrap={"wrap"}
            flexDirection={"row"}
            mt={"2em"}
            justifyContent={"space-around"}
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
        )}
      </Center>
    </>
  );
};

export default Footer;
