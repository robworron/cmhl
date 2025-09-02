import { NextResponse } from "next/server";
import { getSheetData } from "@/utils/googleSheets";

export async function GET() {
  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;
    const statsRange = `2024_schedule!A2:I69`;
    const statsData = await getSheetData(spreadsheetId, statsRange);

    return NextResponse.json(statsData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error fetching 2024 schedule data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  }
}
