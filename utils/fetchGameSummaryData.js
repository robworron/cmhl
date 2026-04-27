import { getSheetData } from "@/utils/googleSheets";

export async function fetchGameSummaryData(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_gamestats_skater!M2:V`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
