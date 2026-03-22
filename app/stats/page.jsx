"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import GoalieStats from "@/components/GoalieStats/GoalieStats";
import SkaterStats from "@/components/SkaterStats/SkaterStats";
import StatsLegend from "@/components/StatsLegend/StatsLegend";
import { fetchStats } from "@/utils/fetchStats";
import config from "../config";

import styles from "./stats.module.css";

export default function StatsPage() {
  const [stats, setStats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("skater");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [selectedYear, setSelectedYear] = useState(config.currentSeasonLong); //this value may need to be temporary set to prior year until first weeks stats are launched each year

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
              defaultValue={config.currentSeasonLong} //this value may need to be temporary set to prior year until first weeks stats are launched each year
              options={config.seasons.filter((season) => season !== "2023-24")}
            />
            <Dropdown
              onSelect={handleTeamChange}
              defaultValue={"All Teams"}
              options={
                config.teamsMappings[selectedYear || config.currentSeasonLong]
              }
            />
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
