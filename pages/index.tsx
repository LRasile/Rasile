import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useColorMode } from "@chakra-ui/color-mode";
import React, { useEffect, useState } from "react";
import { Box, Center, Container, Flex, Heading } from "@chakra-ui/layout";
import { CheckIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { JungleClear } from "../lib/JungleClear";
import axios from "axios";
import ChampRow from "../components/ChampRow";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { GetJungleClears } from "../lib/JungleClearService";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex-container">
      <div
        className="flex-item"
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={() => router.push("/JungleClears")}
      >
        <img
          style={{ margin: "auto", padding: 10 }}
          height={150}
          width={150}
          src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-jungle-disabled.png"
        />
        <div className="tileText">Jungle Clears</div>
      </div>
      <div
        className="flex-item"
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={() => router.push("/PokemonEffectiveness")}
      >
        <div className="Pokeball" style={{ margin: "auto" }}>
          <div className="PokeballLine"></div>
          <div className="PokeballDot"></div>
        </div>
        <div className="tileText"> Pokemon Effectiveness</div>
      </div>
    </div>
  );
}

{
  /* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Rasile" data-color="#5F7FFF" data-emoji="🍺" data-font="Lato" data-text="Buy me a beer" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */
}
