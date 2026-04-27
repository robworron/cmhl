import { getSheetData } from "./googleSheets";

export async function fetchGame(season, game) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const rowNum = Number(game) + 1;
  const range = `${season}_schedule!A${rowNum}:I${rowNum}`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
