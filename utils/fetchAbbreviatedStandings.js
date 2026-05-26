import { getSheetData } from "@/utils/googleSheets";

export async function fetchAbbreviatedStandings(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_standings!A2:J6`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
