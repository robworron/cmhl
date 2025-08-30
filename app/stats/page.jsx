"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SkaterStats } from "../../components/SkaterStats/SkaterStats";
import { GoalieStats } from "../../components/GoalieStats/GoalieStats";
import { StatsLegend } from "../../components/StatsLegend/StatsLegend";
import axios from "axios";
import styles from "./stats.module.css";

export default function StatsPage() {
  const [stats, setStats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("skaters");
  const [selectedYear, setSelectedYear] = useState("2024-25"); //change to 2025-26
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const url = `https://cmhlniagara.com/api/${
        selectedYear === "2024-25" ? "2024_stats" : "2025_stats"
      }${selectedCategory === "skaters" ? "_skater" : "_goalie"}`;
      try {
        const response = await axios.get(url);
        setStats(response.data);
      } catch (e) {
        setError(`ERROR: Failed to fetch ${selectedYear} Stats`);
      }
    };

    fetchStats();
  }, [selectedCategory, selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedTeam("All Teams");
  };

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className={styles.stats}>
      <div className={styles.statsBody}>
        <div className={styles.statsHeader}>
          <h1>Stats</h1>
          <div className={styles.statsButtons}>
            <Button
              primary={selectedCategory !== "skaters"}
              label="Skaters"
              size={"laptop"}
              onClick={() => setSelectedCategory("skaters")}
            />
            <Button
              primary={selectedCategory !== "goalies"}
              label="Goalies"
              size={"laptop"}
              onClick={() => setSelectedCategory("goalies")}
            />
          </div>
          <div className={styles.statsDropdowns}>
            <Dropdown
              dropdownSelection={handleYearChange}
              initialState={"2024-25"} //change to 2025-26
              selections={["2024-25"]} //add 2025-26
            />
            {selectedYear === "2024-25" ? (
              <Dropdown
                dropdownSelection={handleTeamChange}
                initialState={"All Teams"}
                selections={[
                  "All Teams",
                  "Axemen",
                  "Gulls",
                  "Jagrbombs",
                  "Mighty Drunks",
                  "Rockies",
                  "Toonie Tuesday",
                ]}
              />
            ) : (
              <Dropdown
                dropdownSelection={handleTeamChange}
                initialState={"All Teams"}
                selections={[
                  "All Teams",
                  "Axemen",
                  "Bulldogs",
                  "Gulls",
                  "Jagrbombs",
                  "Mighty Drunks",
                  "Rockies",
                  "Seamen",
                  "Toonie Tuesday",
                ]}
              />
            )}
          </div>
        </div>
        {selectedCategory === "skaters" && (
          <SkaterStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        {selectedCategory === "goalies" && (
          <GoalieStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        <StatsLegend />
      </div>
    </div>
  );
}
