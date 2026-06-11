import { useEffect, useMemo, useState } from "react";

import Logo from "@/components/Logo/Logo";
import { getTeamLogoByName } from "@/utils/formats";
import { TEAM_TO_ABBREVIATION } from "@/utils/teams";

import styles from "./standings.module.css";

const determineLogoSize = (width) => {
  if (width >= 1440) {
    return { w: 90, h: 75 };
  } else if (width >= 768) {
    return { w: 60, h: 50 };
  } else {
    return { w: 48, h: 40 };
  }
};

export default function Standings({ standingsData }) {
  const HEADER = ["RK", "Team", "W", "L", "T", "P", "GF", "GA", "GD", "ST"];
  const HEADER_MAP = {
    W: "wins",
    L: "losses",
    T: "ties",
    P: "points",
    GF: "goalsFor",
    GA: "goalsAgainst",
    GD: "goalDifferential",
    ST: "streak",
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [sortConfig, setSortConfig] = useState({
    key: "P",
    direction: "descending",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHighlightedColumn = (column) => {
    if (column === sortConfig.key) return true;
    return false;
  };

  const sortStandings = () => {
    if (!sortConfig.key) return standingsData;

    const sortedStandings = [...standingsData].sort((a, b) => {
      const aValue = Number(a[HEADER_MAP[sortConfig.key]]);
      const bValue = Number(b[HEADER_MAP[sortConfig.key]]);
      if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
    return sortedStandings;
  };

  const handleSort = (column) => {
    if (column === "Team" || column === "ST" || column === "RK") return;

    setSortConfig((prevConfig) => {
      if (prevConfig.key === column) {
        return {
          key: column,
          direction:
            prevConfig.direction === "ascending" ? "descending" : "ascending",
        };
      } else {
        return { key: column, direction: "descending" };
      }
    });
  };

  const sortedStandingsData = useMemo(
    () => sortStandings(),
    [standingsData, sortConfig],
  );

  if (!Array.isArray(standingsData) || standingsData.length === 0) {
    return <p>No standings data available.</p>;
  }

  return (
    <div className={styles.standingsScroll}>
      <table className={styles.standings}>
        <thead>
          <tr>
            {HEADER.map((headerData, index) => (
              <th
                key={index}
                className={
                  index === 1
                    ? styles.standingsTeamCell
                    : styles.standingsStatCell
                }
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
          {sortedStandingsData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className={styles.standingsStatCell}>{rowIndex + 1}</td>
              <td className={styles.standingsTeamCell}>
                <Logo
                  src={getTeamLogoByName(row.team)}
                  width={determineLogoSize(windowWidth).w}
                  height={determineLogoSize(windowWidth).h}
                  alt={`${row.team} logo`}
                />
                {windowWidth < 768 ? TEAM_TO_ABBREVIATION[row.team] : row.team}
              </td>
              <td
                className={
                  isHighlightedColumn("W")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.wins}
              </td>
              <td
                className={
                  isHighlightedColumn("L")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.losses}
              </td>
              <td
                className={
                  isHighlightedColumn("T")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.ties}
              </td>
              <td
                className={
                  isHighlightedColumn("P")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.points}
              </td>
              <td
                className={
                  isHighlightedColumn("GF")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.goalsFor}
              </td>
              <td
                className={
                  isHighlightedColumn("GA")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.goalsAgainst}
              </td>
              <td
                className={
                  isHighlightedColumn("GD")
                    ? styles.standingsSortedCell
                    : styles.standingsStatCell
                }
              >
                {row.goalDifferential}
              </td>
              <td>{row.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
