import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";

import "./standings.css";

export const Standings = ({ standingsData }) => {
  const header = ["RK", "Team", "W", "L", "T", "P", "GF", "GA", "GD", "ST"];
  const abbreviations = {
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
    key: "P",
    direction: "descending",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!Array.isArray(standingsData) || standingsData.length === 0) {
    return <p>No standings data available.</p>;
  }

  const getAbbriviation = (teamName) => {
    return abbreviations[teamName];
  };

  const getTeamLogoFileName = (teamName) =>
    teamName.replace(/\s/g, "").toLowerCase() + "-transparent";

  const determineLogoSize = (width) => {
    if (width >= 1440) {
      return { w: 120, h: 100 };
    } else if (width >= 768) {
      return { w: 70, h: 70 };
    } else {
      return { w: 30, h: 30 };
    }
  };

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

  const getSortedStandings = () => {
    if (!sortConfig.key) return standingsData;

    const columnKey = header.indexOf(sortConfig.key);
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

  const sortedStandingsData = getSortedStandings();

  return (
    <div className="standings--scroll">
      <table className="standings">
        <thead>
          <tr>
            {header.map((headerData, index) => (
              <th
                key={index}
                className={
                  index === 1 ? "standings--team-cell" : "standings--stat-cell"
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
              <td className="standings--stat-cell">{row[0]}</td>
              <td className="standings--team-cell">
                <Logo
                  src={getTeamLogoFileName(row[1])}
                  width={determineLogoSize(windowWidth).w}
                  height={determineLogoSize(windowWidth).h}
                  alt={`${row[1]} logo`}
                />
                {windowWidth < 768 ? getAbbriviation(row[1]) : row[1]}
              </td>
              {header.slice(2).map((_, colIndex) =>
                colIndex === header.indexOf(sortConfig.key) - 2 ? (
                  <td key={colIndex + 2} className="standings--sorted-cell">
                    <b>{row[colIndex + 2]}</b>
                  </td>
                ) : (
                  <td key={colIndex + 2} className="standings--stat-cell">
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
};

Standings.propTypes = {
  standingsData: PropTypes.array,
};
