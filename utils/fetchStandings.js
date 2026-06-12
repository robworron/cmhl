import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "@/utils/googleSheets";

async function getStandings(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_standings!A2:J`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    rank: row[0],
    team: row[1],
    wins: row[2],
    losses: row[3],
    ties: row[4],
    points: row[5],
    goalsFor: row[6],
    goalsAgainst: row[7],
    goalDifferential: row[8],
    streak: row[9],
  }));
}

const fetchCurrentSeason = unstable_cache(
  getStandings,
  ["standings", "current"],
  { revalidate: 86400 },
);

const fetchArchivedSeason = unstable_cache(
  getStandings,
  ["standings", "archived"],
  { revalidate: false },
);

export function fetchStandings(season) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeason(season);
  }

  return fetchArchivedSeason(season);
}
