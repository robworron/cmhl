import { unstable_cache } from "next/cache";
import { getSheetData } from "@/utils/googleSheets";

async function getStatsUpdatedNum() {
  const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

  const range = "config!A2:A2";

  const data = await getSheetData(spreadsheetId, range);

  return data[0][0];
}

export const fetchStatsUpdatedNum = unstable_cache(
  getStatsUpdatedNum,
  ["statsUpdatedNum"],
  {
    revalidate: 86400,
  },
);
