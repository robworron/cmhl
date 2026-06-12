import { unstable_cache } from "next/cache";
import { getSheetData } from "@/utils/googleSheets";

async function getAbbreviatedStats(season, position) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_stats_${position}!A2:J6`;

  const data = await getSheetData(spreadsheetId, range);

  if (position === "skater") {
    return data.map((row) => ({
      name: row[1],
      team: row[2],
      points: row[6],
    }));
  }

  return data.map((row) => ({
    name: row[1],
    team: row[2],
    wins: row[4],
  }));
}

export const fetchAbbreviatedStats = unstable_cache(
  getAbbreviatedStats,
  ["stats", "abbreviated"],
  { revalidate: 86400 },
);
