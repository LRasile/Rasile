import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";
import { JungleClear } from "../lib/JungleClear";
import styles from "../styles/JungleClear.module.css";
import VideoEmbed from "./VideoEmbed";

export interface ChampRowProps {
  jungleClear: JungleClear;
}

function GetImageUrl(championName): string {
  if (!championName) return "";

  if (championName == "Zeri") {
    return "https://static.wikia.nocookie.net/leagueoflegends/images/7/7d/Zeri_OriginalSquare.png";
  }

  if (championName == "Wukong") {
    championName = "MonkeyKing";
  }

  const imageName = championName
    .replace(/ *\([^)]*\) */g, "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(/\'Zix/g, "zix")
    .replace(/\'/g, "");

  return `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${imageName}.png`;
}

const jungleCamps = {
  krugs:
    "https://static.wikia.nocookie.net/leagueoflegends/images/f/fe/Ancient_KrugSquare.png",
  raptors:
    "https://static.wikia.nocookie.net/leagueoflegends/images/e/e3/RaptorSquare.png",
  gromp:
    "https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/GrompSquare.png",
  blue: "https://static.wikia.nocookie.net/leagueoflegends/images/8/85/Blue_SentinelSquare.png",
  red: "https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Red_BramblebackSquare.png",
  wolves:
    "https://static.wikia.nocookie.net/leagueoflegends/images/d/d6/Greater_Murk_WolfSquare.png",
};

export default function ChampRow({ jungleClear }: ChampRowProps) {
  const key = `${jungleClear.champion}${jungleClear.path}${jungleClear.time}`;
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function JunglePath({ path }): JSX.Element {
    path = path.replace("Gromp>B>Krugs", "gromp-krugs");
    const pathArray = path.split("-");

    return (
      <div key={key + path + "container"}>
        {pathArray.map((camp) => {
          const campName = camp.replace(/ *\([^)]*\) */g, "").toLowerCase();
          return (
            <img
              key={key + path + "image" + camp}
              className={styles.smallIcon}
              src={jungleCamps[campName]}
              alt={campName}
              title={camp}
            />
          );
        })}
      </div>
    );
  }

  function SmiteIcon({ numberOfSmites }): JSX.Element {
    return (
      <>
        <img
          key={key + "smite1"}
          alt="Smites Used"
          title="Smites Used"
          className={styles.smallIcon}
          src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png"
        />
        {numberOfSmites != 1 && (
          <img
            key={key + "smite2"}
            alt="Smites Used"
            title="Smites Used"
            className={styles.smallIcon}
            src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png"
          />
        )}
      </>
    );
  }

  function Champion({ name }): JSX.Element {
    return (
      <>
        <img
          className={styles.champIcon}
          src={GetImageUrl(name)}
          alt={name}
          title={name}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{name}</span>
      </>
    );
  }

  function ClearTime({ time }): JSX.Element {
    return <span style={{ fontSize: "1.5rem" }}>{time.substring(1)}</span>;
  }

  return (
    <div
      className={`row ${styles.champRow}`}
      key={key}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* <div className="col">{props.jungleClear.patch}</div> */}
      <div className="col-lg-3 text-center">
        <Champion name={jungleClear.champion} />
      </div>
      <div className="col-lg-5 p-0 text-center">
        <JunglePath path={jungleClear.path} />
      </div>
      <div className="col-lg-2 p-0 text-center">
        <ClearTime time={jungleClear.time} />
      </div>
      <div className="col-lg-2 p-0 text-center">
        <SmiteIcon numberOfSmites={parseInt(jungleClear.smitesUsed)} />
      </div>
      <div className="col-12" style={{ height: isOpen ? 'auto' : 0 }}>
        {isOpen && <VideoEmbed src={jungleClear.link} />}
      </div>

      {/* <div className="col-lg">{jungleClear.numberOfCamps}</div> */}
      {/* <div className="col">{jungleClear.link}</div> */}
      {/* <div className="col">{jungleClear.player}</div> */}
    </div>
  );
}
