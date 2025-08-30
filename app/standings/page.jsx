"use client";

import React, { useState, useEffect } from "react";
import { Standings } from "../../components/Standings/Standings";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { StandingsLegend } from "../../components/StandingsLegend/StandingsLegend";
import { Tiebreak } from "../../components/Tiebreak/Tiebreak";
import axios from "axios";

import styles from "./standings.module.css";

export const StandingsPage = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const fetchStandings = async () => {
      const url = `https://cmhlniagara.com/api/${
        selectedYear === "2023-24"
          ? "2023_standings"
          : selectedYear === "2024-25"
          ? "2024_standings"
          : "2025_standings"
      }`;
      try {
        const response = await axios.get(url);
        setStandings(response.data);
      } catch (e) {
        setError(`ERROR: Failed to fetch ${selectedYear} Standings`);
      }
    };

    fetchStandings();
  }, [selectedYear]);

  return (
    <div className={styles.standings}>
      <div className={styles.standingsBody}>
        <div className={styles.standingsHeader}>
          <h1>Standings</h1>
          <Dropdown
            dropdownSelection={handleYearChange}
            initialState={"2025-26"}
            selections={["2023-24", "2024-25", "2025-26"]}
          />
        </div>
        {error ? <h2>{error}</h2> : <Standings standingsData={standings} />}
        <StandingsLegend />
        <Tiebreak />
      </div>
    </div>
  );
};

export default StandingsPage;
