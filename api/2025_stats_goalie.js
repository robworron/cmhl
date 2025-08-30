const { getSheetData } = require("./googleSheets");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

    const configRange = "config!A2:C2";
    const configData = await getSheetData(spreadsheetId, configRange);

    const lastRowNum = configData[0][2];

    const statsRange = `2025_stats_goalie!A2:${lastRowNum}`;
    const statsData = await getSheetData(spreadsheetId, statsRange);

    res.status(200).json(statsData);
  } catch (error) {
    console.error("Error fetching 2025 goalie stats data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
};
