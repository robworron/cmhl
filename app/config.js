const config = {
  currentSeasonShort: "2026", // USE ONE SEASON (ie. 2025, not 2025-26)
  currentSeasonLong: "2026-27", // USE ENTIRE SEASON (ie. 2025-26, not 2025)
  numTeams: 8,
  seasons: ["2023-24", "2024-25", "2025-26", "2026-27"],
  seasonShortToLong: {
    2023: "2023-24",
    2024: "2024-25",
    2025: "2025-26",
    2026: "2026-27",
  },
  seasonLongToShort: {
    "2023-24": "2023",
    "2024-25": "2024",
    "2025-26": "2025",
    "2026-27": "2026",
  },
  timeOfYear: "offseasonSchedule", // OPTIONS ARE: 'regularSeason', 'finals', 'offseasonChampions', 'offseasonRegister', 'offseasonSchedule'
  finalsHome: "SEA", // USE ABBREVIATION
  finalsAway: "AXE", // USE ABBREVIATION
  champion: "AXE", // USE ABBREVIATION
  gameTypeMappings: {
    "2023-24": {
      45: "playoffs",
      46: "playoffs",
      47: "playoffs",
    },
    "2024-25": {
      64: "playoffs",
      65: "playoffs",
      66: "playoffs",
      67: "playoffs",
      68: "playoffs",
    },
    "2025-26": {
      85: "playoffs",
      86: "playoffs",
      87: "playoffs",
      88: "playoffs",
      89: "playoffs",
      90: "playoffs",
      91: "playoffs",
    },
    "2026-27": {
      49: "riverworks",
      50: "riverworks",
      51: "riverworks",
      52: "riverworks",
      85: "playoffs",
      86: "playoffs",
      87: "playoffs",
      88: "playoffs",
      89: "playoffs",
      90: "playoffs",
      91: "playoffs",
    },
  },
  gameNumMappings: {
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
    "2026-27": {
      85: "QF 1",
      86: "QF 2",
      87: "QF 3",
      88: "QF 4",
      89: "SF 1",
      90: "SF 2",
      91: "FINAL",
    },
  },
  rinkMappings: {
    "2026-27": {
      49: "Riverworks",
      50: "Riverworks",
      51: "Riverworks",
      52: "Riverworks",
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
    "2026-27": [
      "All Teams",
      "Axemen",
      "Gulls",
      "Icemen",
      "Jagrbombs",
      "Pistols",
      "Rockies",
      "Seamen",
      "Toonie Tuesday",
    ],
  },
};

export default config;
