"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import GoalieStats from "@/components/GoalieStats/GoalieStats";
import SkaterStats from "@/components/SkaterStats/SkaterStats";
import StatsLegend from "@/components/StatsLegend/StatsLegend";
import { fetchStats } from "@/utils/fetchStats";

import styles from "./stats.module.css";

export default function StatsPage() {
  const [stats, setStats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("skater");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedYear, setSelectedYear] = useState("2024-25"); //change to 2025-26

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedTeam("All Teams");
  };

  useEffect(() => {
    const getStats = async () => {
      const year = selectedYear === "2025-26" ? "2025" : "2024";
      try {
        const data = await fetchStats(year, selectedCategory);
        setStats(data);
      } catch (err) {
        setError(`ERROR: Failed to fetch ${selectedYear} stats`);
      }
    };

    getStats();
  }, [selectedYear, selectedCategory]);

  return (
    <div className={styles.stats}>
      <div className={styles.statsBody}>
        <div className={styles.statsHeader}>
          <h1>Stats</h1>
          <div className={styles.statsButtons}>
            <Button
              primary={selectedCategory !== "skater"}
              label="Skaters"
              size={"Large"}
              onClick={() => setSelectedCategory("skater")}
            />
            <Button
              primary={selectedCategory !== "goalie"}
              label="Goalies"
              size={"Large"}
              onClick={() => setSelectedCategory("goalie")}
            />
          </div>
          <div className={styles.statsDropdowns}>
            <Dropdown
              onSelect={handleYearChange}
              defaultValue={"2024-25"} //change to 2025-26
              options={["2024-25"]} //add 2025-26
            />
            {selectedYear === "2024-25" ? (
              <Dropdown
                onSelect={handleTeamChange}
                defaultValue={"All Teams"}
                options={[
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
                onSelect={handleTeamChange}
                defaultValue={"All Teams"}
                options={[
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
        {selectedCategory === "skater" && (
          <SkaterStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        {selectedCategory === "goalie" && (
          <GoalieStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        <StatsLegend />
      </div>
    </div>
  );
}
