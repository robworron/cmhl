import { unstable_cache } from "next/cache";
import { getSheetData } from "@/utils/googleSheets";
import config from "@/app/config";

async function getAbbreviatedSchedule(season, weekNum) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const startPoint = (config.numTeams / 2) * (weekNum - 1) + 2;
  const endPoint = startPoint + config.numTeams / 2 - 1;
  const range = `${season}_schedule!A${startPoint}:J${endPoint}`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    date: row[2],
    time: row[4],
    homeTeam: row[5],
    awayTeam: row[7],
  }));
}

export const fetchAbbreviatedSchedule = unstable_cache(
  getAbbreviatedSchedule,
  ["schedule", "abbreviated"],
  { revalidate: 86400 },
);
