import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "@/utils/googleSheets";

async function getSkaterGameData(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_gamestats_skater!A2:K`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    week: row[0],
    gameId: row[1],
    player: row[2],
    number: row[3],
    team: row[4],
    gamesPlayed: row[5],
    goals: row[6],
    assists: row[7],
    penaltyMinutes: row[8],
    powerplayPoints: row[9],
    shorthandedPoints: row[10],
  }));
}

const fetchCurrentSeasonSkaterGameData = unstable_cache(
  getSkaterGameData,
  ["skaterGameData", "current"],
  { revalidate: 86400 },
);

const fetchArchivedSeasonSkaterGameData = unstable_cache(
  getSkaterGameData,
  ["skaterGameData", "archived"],
  { revalidate: false },
);

export function fetchSkaterGameData(season) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeasonSkaterGameData(season);
  }

  return fetchArchivedSeasonSkaterGameData(season);
}
