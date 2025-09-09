import React, { useState, useEffect, useMemo } from "react";

import Logo from "@/components/Logo/Logo";

import styles from "./standings.module.css";

const determineLogoSize = (width) => {
  if (width >= 1440) {
    return { w: 120, h: 100 };
  } else if (width >= 768) {
    return { w: 84, h: 70 };
  } else {
    return { w: 48, h: 40 };
  }
};

export default function Standings({ standingsData }) {
  const ABBREVIATIONS = {
    Axemen: "AXE",
    Bulldogs: "BUL",
    Gulls: "GUL",
    Jagrbombs: "JGR",
    "Mighty Drunks": "MDR",
    Rockies: "RCK",
    Seamen: "SEA",
    "Toonie Tuesday": "TTU",
    "Whiskey Dekes": "WDK",
  };
  const HEADER = ["RK", "Team", "W", "L", "T", "P", "GF", "GA", "GD", "ST"];

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
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

  const getAbbriviation = (teamName) => {
    return ABBREVIATIONS[teamName];
  };

  const getSortedStandings = () => {
    if (!sortConfig.key) return standingsData;

    const columnKey = HEADER.indexOf(sortConfig.key);
    if (columnKey === -1) return standingsData;

    const sortedStandings = [...standingsData].sort((a, b) => {
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

    return sortedStandings;
  };

  const getTeamLogoFileName = (teamName) =>
    teamName.replace(/\s/g, "").toLowerCase() + "-transparent";

  const handleSort = (columnKey) => {
    if (columnKey === "Team" || columnKey === "ST") return;

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

  const sortedStandingsData = useMemo(
    () => getSortedStandings(),
    [standingsData, sortConfig]
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
              <td className={styles.standingsStatCell}>{row[0]}</td>
              <td className={styles.standingsTeamCell}>
                <Logo
                  src={getTeamLogoFileName(row[1])}
                  width={determineLogoSize(windowWidth).w}
                  height={determineLogoSize(windowWidth).h}
                  alt={`${row[1]} logo`}
                />
                {windowWidth < 768 ? getAbbriviation(row[1]) : row[1]}
              </td>
              {HEADER.slice(2).map((_, colIndex) =>
                colIndex === HEADER.indexOf(sortConfig.key) - 2 ? (
                  <td key={colIndex + 2} className={styles.standingsSortedCell}>
                    <b>{row[colIndex + 2]}</b>
                  </td>
                ) : (
                  <td key={colIndex + 2} className={styles.standingsStatCell}>
                    {row[colIndex + 2]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
