import { unstable_cache } from "next/cache";
import { getSheetData } from "./googleSheets";

async function getGame(season, game) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const rowNum = Number(game) + 1;
  const range = `${season}_schedule!A${rowNum}:I${rowNum}`;

  const data = await getSheetData(spreadsheetId, range);
  const row = data[0];

  const item = {
    date: row[2],
    rink: row[3],
    time: row[4],
    homeTeam: row[5],
    homeScore: row[6],
    awayTeam: row[7],
    awayScore: row[8],
  };

  return item;
}

export const fetchGame = unstable_cache(getGame, ["game"], {
  revalidate: 86400,
});
