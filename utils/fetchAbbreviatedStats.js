import { getSheetData } from "@/utils/googleSheets";

export async function fetchAbbreviatedStats(season, position) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_stats_${position}!A2:J6`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
