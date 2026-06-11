import { unstable_cache } from "next/cache";
import config from "@/app/config";
import { getSheetData } from "@/utils/googleSheets";

async function getGameSummaryData(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_gamestats_skater!M2:V`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    week: row[0],
    gameId: row[1],
    team: row[2],
    period: row[3],
    scorer: row[4] || null,
    assist1: row[5] || null,
    assist2: row[6] || null,
    type: row[7] || null,
    penalty: row[8] || null,
    minutes: row[9] || null,
  }));
}

const fetchCurrentSeasonGameSummaryData = unstable_cache(
  getGameSummaryData,
  ["gameSummaryData", "currentSeason"],
  {
    revalidate: 86400,
  },
);

const fetchArchivedSeasonGameSummaryData = unstable_cache(
  getGameSummaryData,
  ["gameSummaryData", "archivedSeason"],
  {
    revalidate: false,
  },
);

export function fetchGameSummaryData(season) {
  if (season === config.currentSeasonShort) {
    return fetchCurrentSeasonGameSummaryData(season);
  }

  return fetchArchivedSeasonGameSummaryData(season);
}
