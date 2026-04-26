import { getSheetData } from "@/utils/googleSheets";

export async function fetchGoalieGameData(season) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = `${season}_gamestats_goalie!A2:L`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
