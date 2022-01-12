import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { JungleClear } from "../../lib/JungleClear";

interface JungleClearReponse {
  data: JungleClear[];
}

export function parseDataToJungleClears(data: string[][]): JungleClear[] {
  const jungleClears: JungleClear[] = [];

  let endOfData = false;
  for (let i = 0; i < data.length || !endOfData; i++) {
    let row = data[i];
    let jungleClear = parseRowToJungleClear(row);
    if (jungleClear) {
      jungleClears.push(jungleClear);
    } else {
      endOfData = true;
    }
  }

  return jungleClears;
}

export function parseRowToJungleClear(row: string[]): JungleClear {
  if (row && row.length > 0 && row[1]) {
    return {
      patch: row[0],
      champion: row[1],
      numberOfCamps: row[2],
      smitesUsed: row[3],
      path: row[4],
      time: row[5],
      link: row[6],
      player: row[7],
    };
  }
  return null;
}

export default async (req, res) => {
  const apiKey = "AIzaSyC39s4iiwp3G4oJ723u8rfpnoxkE6yDonw"; //process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  const response = await axios
    .request({
      method: "GET",
      url: `https://sheets.googleapis.com/v4/spreadsheets/1Gjk5UrtAbcqdYnRlx9KMDuHGxhKsEv50vhn02cN0y-c/values/'Season 12'!A8:H150?key=${apiKey}`,
    })
    .then((response) => {
      const parsedData = parseDataToJungleClears(response.data);
      res.status(200).json({ result: parsedData });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
