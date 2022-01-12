import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";
import { Heading } from "@chakra-ui/layout";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "JungleClears";

export default function Layout({ children }): JSX.Element {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
