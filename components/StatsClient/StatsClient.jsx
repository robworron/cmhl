"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import GoalieStats from "@/components/GoalieStats/GoalieStats";
import SkaterStats from "@/components/SkaterStats/SkaterStats";
import StatsLegend from "@/components/StatsLegend/StatsLegend";
import config from "@/app/config";
import styles from "./statsclient.module.css";

export default function StatsClient({ stats, selectedYear, selectedPosition }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTeam, setSelectedTeam] = useState("All Teams");

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`/stats?${params.toString()}`);
  }

  function handlePositionChange(position) {
    updateParam("category", position);
  }

  function handleYearChange(year) {
    const shortSeason = config.seasonLongToShort[year];
    updateParam("year", shortSeason);
    setSelectedTeam("All Teams");
  }

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className={styles.statsClient}>
      <div className={styles.statsClientBody}>
        <div className={styles.statsClientHeader}>
          <h1>Stats</h1>
          <div className={styles.statsClientButtons}>
            <Button
              primary={selectedPosition !== "skater"}
              label="Skaters"
              size={"Large"}
              onClick={() => handlePositionChange("skater")}
            />
            <Button
              primary={selectedPosition !== "goalie"}
              label="Goalies"
              size={"Large"}
              onClick={() => handlePositionChange("goalie")}
            />
          </div>
          <div className={styles.statsClientDropdowns}>
            <Dropdown
              onSelect={handleYearChange}
              defaultValue={
                config.seasonShortToLong[selectedYear] ||
                config.currentSeasonLong
              } //this value may need to be temporary set to prior year until first weeks stats are launched each year
              options={config.seasons.filter((season) => season !== "2023-24")}
            />
            <Dropdown
              onSelect={handleTeamChange}
              defaultValue={selectedTeam}
              options={
                config.teamsMappings[
                  config.seasonShortToLong[selectedYear] ||
                    config.currentSeasonLong
                ]
              }
            />
          </div>
        </div>
        {selectedPosition === "skater" && (
          <SkaterStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        {selectedPosition === "goalie" && (
          <GoalieStats data={stats} year={selectedYear} team={selectedTeam} />
        )}
        <StatsLegend />
      </div>
    </div>
  );
}
