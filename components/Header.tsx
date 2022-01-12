import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";
import { Box, Center, Heading, Spacer } from "@chakra-ui/layout";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/react";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Jungle Clears</title>
        <meta name="description" content="Jungle Clears" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex width="100%">
        <Box padding={4}>
          <Heading>Jungle Clears</Heading>
        </Box>
        <Spacer />
        <Box padding={4}>
          <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
