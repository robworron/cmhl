const { getSheetData } = require("./googleSheets");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const spreadsheetId = process.env.SHEETS_SPREADSHEET_ID;

    const statsRange = `2024_stats_goalie!A2:J19`;
    const statsData = await getSheetData(spreadsheetId, statsRange);

    res.status(200).json(statsData);
  } catch (error) {
    console.error("Error fetching 2024 goalie stats data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: error.message });
  }
};
