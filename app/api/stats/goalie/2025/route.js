import { NextResponse } from "next/server";
import { getSheetData } from "@/utils/googleSheets";

export async function GET() {
  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

    const configRange = "config!A2:C2";
    const configData = await getSheetData(spreadsheetId, configRange);

    const lastRowNum = configData[0][2];
    const statsRange = `2025_stats_goalie!A2:${lastRowNum}`;
    const statsData = await getSheetData(spreadsheetId, statsRange);

    return NextResponse.json(statsData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error fetching 2025 goalie stats data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  }
}
