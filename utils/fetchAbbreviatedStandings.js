import { unstable_cache } from "next/cache";
import { getSheetData } from "@/utils/googleSheets";

async function getAbbreviatedStandings(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_standings!A2:J6`;

  const data = await getSheetData(spreadsheetId, range);

  return data.map((row) => ({
    teamName: row[1],
    wins: row[2],
    losses: row[3],
    ties: row[4],
    points: row[5],
  }));
}

export const fetchAbbreviatedStandings = unstable_cache(
  getAbbreviatedStandings,
  ["standings", "abbreviated"],
  { revalidate: 86400 },
);
