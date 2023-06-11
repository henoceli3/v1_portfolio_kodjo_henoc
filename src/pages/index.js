import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import theme from "@/styles/root";
import MobileMenu from "@/components/mobileMenu";
import Navigation from "@/components/sections/Nav";
import RigthBar from "@/components/parts/rigthBar";
import LeftBar from "@/components/parts/lefBar";
import CenterPart from "@/components/parts/CenterPart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const appStoreColor = "red";
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;

    /**
     * This function handles the scrolling behavior of the window.
     *
     * @return {void} This function does not return anything.
     */
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > prevScrollPosition) {
        setScrollPosition(0); // Scrolling down
      } else {
        setScrollPosition(currentScrollPosition); // Scrolling up
      }

      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kodjo Henoc</title>
        <meta
          name="description"
          content="codeed by Kodjo Henoc [ @henoceli3 ]on github"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={"100%"} transition={theme.transition}>
        {/* le header  */}
        <Center
          w={"100%"}
          h={"8vh"}
          // position={{ base: "fixed", xl: "relative" }}
          position={scrollPosition !== 0 ? "fixed" : "relative"}
          bg={theme.navy}
          zIndex={"banner"}
        >
          <Flex
            w={"95%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* logo  */}
            <Link
              h={"100%"}
              w={"auto"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading color={theme.green} fontSize={"2xl"}>
                KOD
              </Heading>
            </Link>

            {/* le button du menu  */}
            {isLargerThan1280 ? <Navigation /> : <MobileMenu />}
          </Flex>
        </Center>

        {/* le corps  */}
        <Flex w={"100%"} minH={"92vh"} flexDirection={"row"} bg={theme.navy}>
          <LeftBar />
          <CenterPart />
          <RigthBar />
        </Flex>

        {/* footer  */}
      </Box>
    </>
  );
}
