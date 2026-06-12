import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "./googleSheets";

async function getSchedule(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_schedule!A2:I`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    week: row[0],
    gameNumber: row[1],
    date: row[2],
    rink: row[3],
    time: row[4],
    homeTeam: row[5],
    homeScore: row[6],
    awayTeam: row[7],
    awayScore: row[8],
  }));
}

const fetchCurrentSeasonSchedule = unstable_cache(
  getSchedule,
  ["schedule", "current"],
  { revalidate: 86400 },
);

const fetchArchivedSeasonSchedule = unstable_cache(
  getSchedule,
  ["schedule", "archived"],
  { revalidate: false },
);

export function fetchSchedule(season) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeasonSchedule(season);
  }

  return fetchArchivedSeasonSchedule(season);
}
