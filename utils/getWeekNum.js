import { getSheetData } from "@/utils/googleSheets";

export async function fetchWeekNum() {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = "config!A2:A2";

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
