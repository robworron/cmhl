import { getSheetData } from "@/utils/googleSheets";

export async function fetchStandings(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_standings!A2:J`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
