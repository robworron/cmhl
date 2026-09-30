import { unstable_cache } from "next/cache";
import { getSheetData } from "@/utils/googleSheets";

async function getWeekNum() {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;
  const range = "config!A2:A2";

  const data = await getSheetData(spreadsheetId, range);
  return data[0][0];
}

export const fetchWeekNum = unstable_cache(getWeekNum, ["week-num"], {
  revalidate: 3600,
});
