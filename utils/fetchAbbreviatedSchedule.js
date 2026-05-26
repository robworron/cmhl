import { getSheetData } from "@/utils/googleSheets";
import config from "@/app/config";

export async function fetchAbbreviatedSchedule(season, weekNum) {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const startPoint = (config.numTeams / 2) * (weekNum - 1) + 2;
  const endPoint = startPoint + config.numTeams / 2 - 1;
  const range = `${season}_schedule!A${startPoint}:J${endPoint}`;

  const data = await getSheetData(spreadsheetId, range);

  return data;
}
