import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "@/utils/googleSheets";

async function getGoalieGameData(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_gamestats_goalie!A2:L`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    week: row[0],
    gameId: row[1],
    player: row[2],
    number: row[3],
    team: row[4],
    gamesPlayed: row[5],
    wins: row[6],
    goalsAgainst: row[7],
    saves: row[8],
    savePercentage: row[9],
    goalsAgainstAverage: row[10],
    shutouts: row[11],
  }));
}

const fetchCurrentSeason = unstable_cache(
  getGoalieGameData,
  ["goalieGameData", "current"],
  { revalidate: 86400 },
);

const fetchArchivedSeason = unstable_cache(
  getGoalieGameData,
  ["goalieGameData", "archived"],
  { revalidate: false },
);

export function fetchGoalieGameData(season) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeason(season);
  }
  return fetchArchivedSeason(season);
}
