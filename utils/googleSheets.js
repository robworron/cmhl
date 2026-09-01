import { google } from "googleapis";
import "../env.js";

const { SHEETS_CLIENT_EMAIL, SHEETS_PRIVATE_KEY } = process.env;

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: SHEETS_CLIENT_EMAIL,
    private_key: SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

export const getSheetData = async (spreadsheetId, range) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values || [];
  } catch (error) {
    console.error("Error retrieving sheet data:", error);
    throw new Error("Failed to retrieve Google Sheets data");
  }
};
