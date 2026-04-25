const config = {
  currentSeasonShort: "2025", // USE ONE SEASON (ie. 2025, not 2025-26)
  currentSeasonLong: "2025-26",
  seasons: ["2023-24", "2024-25", "2025-26"],
  seasonShortToLong: {
    2023: "2023-24",
    2024: "2024-25",
    2025: "2025-26",
  },
  seasonLongToShort: {
    "2023-24": "2023",
    "2024-25": "2024",
    "2025-26": "2025",
  },
  regularSeason: false,
  finals: true,
  offseason: false,
  finalsHome: "SEA", // USE ABBREVIATION
  finalsAway: "AXE", // USE ABBREVIATION
  champion: "AXE", // USE ABBREVIATION
  gameMappings: {
    "2023-24": {
      45: "SF 1",
      46: "SF 2",
      47: "FINAL",
    },
    "2024-25": {
      64: "QF 1",
      65: "QF 2",
      66: "SF 1",
      67: "SF 2",
      68: "FINAL",
    },
    "2025-26": {
      85: "QF 1",
      86: "QF 2",
      87: "QF 3",
      88: "QF 4",
      89: "SF 1",
      90: "SF 2",
      91: "FINAL",
    },
  },
  teamsMappings: {
    "2023-24": ["All Teams", "Axemen", "Gulls", "Rockies", "Whiskey Dekes"],
    "2024-25": [
      "All Teams",
      "Axemen",
      "Gulls",
      "Jagrbombs",
      "Mighty Drunks",
      "Rockies",
      "Toonie Tuesday",
    ],
    "2025-26": [
      "All Teams",
      "Axemen",
      "Bulldogs",
      "Gulls",
      "Jagrbombs",
      "Mighty Drunks",
      "Rockies",
      "Seamen",
      "Toonie Tuesday",
    ],
  },
};

export default config;
