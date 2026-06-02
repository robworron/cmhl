import { getSheetData } from "@/utils/googleSheets";

export async function fetchStatsUpdatedNum() {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = "config!D2:D2";

  const data = await getSheetData(spreadsheetId, range);

  return data[0][0];
}
