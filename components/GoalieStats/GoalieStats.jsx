import React, { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import axios from "axios";

import "./goaliestats.css";

export const GoalieStats = ({ data, year, team }) => {
  const header = [
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
  const teamNameMap = {
    RCK: "rockies",
    AXE: "axemen",
    GUL: "gulls",
    TTU: "toonietuesday",
    JGR: "jagrbombs",
    MDR: "mightydrunks",
    SEA: "Seamen",
    BUL: "Bulldogs",
  };
  const filterTeamNameMap = {
    "All Teams": "All Teams",
    Axemen: "AXE",
    Bulldogs: "BUL",
    Gulls: "GUL",
    Jagrbombs: "JGR",
    "Mighty Drunks": "MDR",
    Rockies: "RCK",
    Seamen: "SEA",
    "Toonie Tuesday": "TTU",
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sortConfig, setSortConfig] = useState({
    key: "W",
    direction: "descending",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTeamLogoFileName = (teamAcronym) => {
    const teamName = teamNameMap[teamAcronym];
    const modifiedTeamName = teamName.replace(/\s/g, "").toLowerCase();
    return modifiedTeamName + "-transparent";
  };

  const determineLogoSize = (width) => {
    if (width >= 1440) {
      return { w: 70, h: 55 };
    } else if (width >= 768) {
      return { w: 55, h: 45 };
    } else {
      return { w: 40, h: 35 };
    }
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

  const getSortedGoalieStats = () => {
    if (!sortConfig.key) return data;

    const columnKey = header.indexOf(sortConfig.key);
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

  const sortedGoalieStats = getSortedGoalieStats();

  return (
    <div className="goaliestats--scroll">
      <table className="goaliestats">
        <thead className="goaliestats--header">
          <tr>
            {header.map((headerData, headerIndex) => (
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
              return row[2] === filterTeamNameMap[team];
            })
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) =>
                  colIndex === 1 ? (
                    <td key={colIndex} className="goaliestats--player-cell">
                      <Logo
                        src={getTeamLogoFileName(row[2])}
                        width={determineLogoSize(windowWidth).w}
                        height={determineLogoSize(windowWidth).h}
                        alt={`${row[2]} logo`}
                      />
                      <b>{col}</b>
                    </td>
                  ) : colIndex === header.indexOf(sortConfig.key) ? (
                    <td key={colIndex} className="goaliestats--sorted-cell">
                      <b>{col}</b>
                    </td>
                  ) : (
                    <td key={colIndex} className="goaliestats--stats-cell">
                      {col}
                    </td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
