import { useEffect, useMemo, useState } from "react";
import Logo from "@/components/Logo/Logo";
import { getTeamLogoByAbbreviation } from "@/utils/formats";
import { TEAM_TO_ABBREVIATION } from "@/utils/teams";

import styles from "./goaliestats.module.css";

const determineLogoSize = (width) => {
  if (width >= 768) {
    return { w: 40, h: 30 };
  }
  return { w: 30, h: 22 };
};

export default function GoalieStats({ data, team }) {
  const HEADER = [
    "RK",
    "Player",
    "Team",
    "GP",
    "W",
    "GA",
    "SV",
    "SV%",
    "GAA",
    "SO",
  ];

  const HEADER_MAPPING = {
    RK: "rank",
    Player: "player",
    Team: "team",
    GP: "gamesPlayed",
    W: "wins",
    GA: "goalsAgainst",
    SV: "saves",
    "SV%": "savePercentage",
    GAA: "goalsAgainstAverage",
    SO: "shutouts",
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [sortConfig, setSortConfig] = useState({
    key: "W",
    direction: "descending",
  });

  const isHighlightedColumn = (column) => {
    if (column === sortConfig.key) return true;
    return false;
  };

  const sortStats = () => {
    if (!sortConfig.key) return data;

    const sortedStats = [...data].sort((a, b) => {
      const aNumber = Number(a[HEADER_MAPPING[sortConfig.key]]);
      const bNumber = Number(b[HEADER_MAPPING[sortConfig.key]]);
      if (aNumber < bNumber)
        return sortConfig.direction === "ascending" ? -1 : 1;
      if (aNumber > bNumber)
        return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
    return sortedStats;
  };

  const handleSort = (columnKey) => {
    if (columnKey === "RK") return;
    if (columnKey === "Player") return;
    if (columnKey === "Team") return;

    setSortConfig((prevConfig) => {
      if (prevConfig.key === columnKey) {
        return {
          key: columnKey,
          direction:
            prevConfig.direction === "ascending" ? "descending" : "ascending",
        };
      } else {
        return { key: columnKey, direction: "descending" };
      }
    });
  };

  const logoSize = useMemo(() => determineLogoSize(windowWidth), [windowWidth]);

  const sortedGoalieStats = useMemo(() => sortStats(), [data, sortConfig]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.goaliestatsScroll}>
      <table className={styles.goaliestats}>
        <thead>
          <tr>
            {HEADER.map((headerData, headerIndex) => (
              <th
                key={headerIndex}
                onClick={() => handleSort(headerData)}
                style={{ cursor: "pointer" }}
              >
                {headerData}
                {sortConfig.key === headerData &&
                  (sortConfig.direction === "ascending" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedGoalieStats
            .filter((row) => {
              if (team === "All Teams") return true;
              return row.team === TEAM_TO_ABBREVIATION[team];
            })
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                <td className={styles.goaliestatsPlayerCell}>
                  <Logo
                    src={getTeamLogoByAbbreviation(row.team)}
                    width={logoSize.w}
                    height={logoSize.h}
                    alt={`${row.team} logo`}
                  />
                  <b>{row.player}</b>
                </td>
                <td className={styles.goaliestatsStatsCell}>{row.team}</td>
                <td
                  className={
                    isHighlightedColumn("GP")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.gamesPlayed}
                </td>
                <td
                  className={
                    isHighlightedColumn("W")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.wins}
                </td>
                <td
                  className={
                    isHighlightedColumn("GA")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.goalsAgainst}
                </td>
                <td
                  className={
                    isHighlightedColumn("SV")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.saves}
                </td>
                <td
                  className={
                    isHighlightedColumn("SV%")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.savePercentage}
                </td>
                <td
                  className={
                    isHighlightedColumn("GAA")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.goalsAgainstAverage}
                </td>
                <td
                  className={
                    isHighlightedColumn("SO")
                      ? styles.goaliestatsSortedCell
                      : styles.goaliestatsStatsCell
                  }
                >
                  {row.shutouts}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
