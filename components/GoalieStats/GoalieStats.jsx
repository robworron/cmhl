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

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [sortConfig, setSortConfig] = useState({
    key: "W",
    direction: "descending",
  });

  const getSortedGoalieStats = () => {
    if (!sortConfig.key) return data;

    const columnKey = HEADER.indexOf(sortConfig.key);
    if (columnKey === -1) return data;

    const sortedStats = [...data].sort((a, b) => {
      const aValue = a[columnKey];
      const bValue = b[columnKey];
      const aNumber = Number(aValue);
      const bNumber = Number(bValue);

      if (!isNaN(aNumber) && !isNaN(bNumber)) {
        return sortConfig.direction === "ascending"
          ? aNumber - bNumber
          : bNumber - aNumber;
      }

      return sortConfig.direction === "ascending"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

    return sortedStats;
  };

  const handleSort = (columnKey) => {
    if (columnKey === "Player") return;

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

  const sortedGoalieStats = useMemo(
    () => getSortedGoalieStats(),
    [data, sortConfig],
  );

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
              return row[2] === TEAM_TO_ABBREVIATION[team];
            })
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) =>
                  colIndex === 1 ? (
                    <td key={colIndex} className={styles.goaliestatsPlayerCell}>
                      <Logo
                        src={getTeamLogoByAbbreviation(row[2])}
                        width={logoSize.w}
                        height={logoSize.h}
                        alt={`${row[2]} logo`}
                      />
                      <b>{col}</b>
                    </td>
                  ) : colIndex === HEADER.indexOf(sortConfig.key) ? (
                    <td key={colIndex} className={styles.goaliestatsSortedCell}>
                      <b>{col}</b>
                    </td>
                  ) : (
                    <td key={colIndex} className={styles.goaliestatsStatsCell}>
                      {col}
                    </td>
                  ),
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
