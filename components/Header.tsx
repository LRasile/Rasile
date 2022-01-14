import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Center, Heading, Spacer } from "@chakra-ui/layout";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/react";
import BuyMeACoffee from "./BuyMeACoffee";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const headingColor = colorMode === "light" ? "#037" : "#adf";
  return (
    <>
      <Head>
        <title>Leos Apps</title>
        <meta name="description" content="Leos Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex width="100%">
        <Box padding={4}>
          <Heading
            style={{ color: headingColor, cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Leos Apps
          </Heading>
        </Box>
        <Spacer />
        <Box padding={4}>
          <IconButton
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
            title="Toggle Mode"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>{" "}
          <BuyMeACoffee />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
