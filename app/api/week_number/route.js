import { NextResponse } from "next/server";
import { getSheetData } from "@/utils/googleSheets";

export async function GET() {
  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;
    const weekRange = "2025_schedule!A2:A2";
    const data = await getSheetData(spreadsheetId, weekRange);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching week number:", err);
    return NextResponse.json(
      { error: "Failed to fetch week number", details: err.message },
      { status: 500 }
    );
  }
}
