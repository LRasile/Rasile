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
import { parseDataToJungleClears } from "./api/jungleClears";
import JungleClearUI from "../components/JungleClear";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export interface HomeProps {
  jungleClears: JungleClear[];
}

export default function Home(props: HomeProps) {
  const [data, setData] = useState<JungleClear[] | undefined>(undefined);
  const [oringalData, setOriginalData] = useState<JungleClear[] | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [search, setSearch] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  async function getData(): Promise<void> {
    await axios
      .request({
        method: "GET",
        url: `https://sheets.googleapis.com/v4/spreadsheets/1Gjk5UrtAbcqdYnRlx9KMDuHGxhKsEv50vhn02cN0y-c/values/'Season 12'!A8:H150?key=${apiKey}`,
      })
      .then((response) => {
        const parsedData = parseDataToJungleClears(response.data.values);
        setData(parsedData);
        setOriginalData(parsedData);
      })
      .catch((error) => setErrorMessage(error));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (oringalData) {
      setData(
        oringalData.filter(
          (item) =>
            item.champion.toLowerCase().search(search.toLowerCase()) != -1
        )
      );
    }
  }, [search]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 px-5 m-2">
          <InputGroup>
            <InputRightElement
              fontSize="1.75em"
              margin="1"
              children={<SearchIcon color="gray.400" />}
            />
            <Input
              placeholder="Champion Name"
              size="lg"
              value={search}
              onChange={handleChange}
            />
          </InputGroup>
        </div>
      </div>
      {data &&
        data.map((jungleClear) => <JungleClearUI jungleClear={jungleClear} />)}
    </div>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   //   const res = await fetch("http://localhost:3000/api/jungleClears");
//   //   const jungleClears = await res.json();

//   let jungleClears = null;
//   await axios
//     .request({
//       method: "GET",
//       url: `https://sheets.googleapis.com/v4/spreadsheets/1Gjk5UrtAbcqdYnRlx9KMDuHGxhKsEv50vhn02cN0y-c/values/'Season 12'!A8:H150?key=`,
//     })
//     .then((response) => {
//       const parsedData = parseDataToJungleClears(response.data);
//       jungleClears = parsedData;
//     })
//     .catch((error) => {
//       //   res.status(500).json({ error });
//     });

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       jungleClears: jungleClears,
//     },
//   };
// }
