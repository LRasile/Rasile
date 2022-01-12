import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { JungleClear } from "../lib/JungleClear";
import styles from "../styles/JungleClear.module.css";

export interface JungleClearUIProps {
  jungleClear: JungleClear;
}

function GetImageUrl(championName): string {
  if (championName == "Zeri") {
    return "https://static.wikia.nocookie.net/leagueoflegends/images/7/7d/Zeri_OriginalSquare.png";
  }

  if (championName == "Wukong") {
    championName = "MonkeyKing";
  }

  const imageName = championName
    .replace(/ *\([^)]*\) */g, "")
    .replaceAll(" ", "")
    .replaceAll("'Zix", "zix")
    .replaceAll("'", "")
    .replaceAll(".", "");

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

function JunglePath(path: string) {
  const pathArray = path.split("-");

  return (
    <div>
      {pathArray.map((camp) => {
        const campName = camp.replace(/ *\([^)]*\) */g, "").toLowerCase();
        return (
          <img
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

function smiteIcon() {
  return (
    <img
      alt="Smites Used"
      title="Smites Used"
      className={styles.smallIcon}
      src="https://static.wikia.nocookie.net/leagueoflegends/images/0/05/Smite.png"
    ></img>
  );
}

export default function JungleClearUI({ jungleClear }: JungleClearUIProps) {
  return (
    <div className={`row ${styles.champRow}`}>
      {/* <div className="col">{props.jungleClear.patch}</div> */}
      <div className="col-lg-3 text-center">
        <img
          className={styles.champIcon}
          src={GetImageUrl(jungleClear.champion)}
          alt={jungleClear.champion}
          title={jungleClear.champion}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {jungleClear.champion}
        </span>
      </div>
      <div className="col-lg-5 p-0 text-center">
        {JunglePath(jungleClear.path)}
        {/* {jungleClear.path} */}
      </div>
      {/* <div className="col-lg-4">{jungleClear.path}</div> */}
      <div className="col-lg-2 p-0 text-center" style={{ fontSize: "1.5rem" }}>
        {jungleClear.time.substring(1)}
      </div>
      <div className="col-lg-2 p-0 text-center">
        {jungleClear.smitesUsed == "2" ? (
          <>
            {smiteIcon()}
            {smiteIcon()}
          </>
        ) : (
          <>{smiteIcon()}</>
        )}
      </div>

      {/* <div className="col-lg">{jungleClear.numberOfCamps}</div> */}
      {/* <div className="col">{jungleClear.link}</div> */}
      {/* <div className="col">{jungleClear.player}</div> */}
    </div>
  );
}
