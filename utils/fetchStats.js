import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "@/utils/googleSheets";

async function getSkaterStats(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_stats_skater!A2:J`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    rank: row[0],
    player: row[1],
    team: row[2],
    gamesPlayed: row[3],
    goals: row[4],
    assists: row[5],
    points: row[6],
    penaltyMinutes: row[7],
    powerplayPoints: row[8],
    shorthandedPoints: row[9],
  }));
}

async function getGoalieStats(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_stats_goalie!A2:J`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    rank: row[0],
    player: row[1],
    team: row[2],
    gamesPlayed: row[3],
    wins: row[4],
    goalsAgainst: row[5],
    saves: row[6],
    savePercentage: row[7],
    goalsAgainstAverage: row[8],
    shutouts: row[9],
  }));
}

async function getStats(season, position) {
  if (position === "skater") {
    return getSkaterStats(season);
  } else if (position === "goalie") {
    return getGoalieStats(season);
  } else {
    throw new Error("Invalid position");
  }
}

const fetchCurrentSeasonStats = unstable_cache(
  getStats,
  (season, position) => ["stats", "current", season, position],
  {
    revalidate: 86400,
  },
);

const fetchArchivedSeasonStats = unstable_cache(
  getStats,
  (season, position) => ["stats", "archived", season, position],
  { revalidate: false },
);

export function fetchStats(season, position) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeasonStats(season, position);
  }

  return fetchArchivedSeasonStats(season, position);
}
