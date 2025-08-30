const { getSheetData } = require("./googleSheets");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;
    const range = "2025_schedule!A2:I92";

    const data = await getSheetData(spreadsheetId, range);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching 2025 schedule data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
};
