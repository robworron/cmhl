import { getSheetData } from "./googleSheets";

export async function fetchSchedule(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_schedule!A2:I`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
