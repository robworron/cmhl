"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import Schedule from "@/components/Schedule/Schedule";
import config from "@/app/config";
import styles from "./scheduleclient.module.css";

export default function ScheduleClient({ schedule, selectedYear }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTeam, setSelectedTeam] = useState("All Teams");

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`/schedule?${params.toString()}`);
  }

  const handleYearChange = (year) => {
    const shortSeason = config.seasonLongToShort[year];
    updateParam("year", shortSeason);
    setSelectedTeam("All Teams");
  };

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className={styles.scheduleclient}>
      <div className={styles.scheduleclientBody}>
        <div className={styles.scheduleclientHeader}>
          <h1>Schedule</h1>
          <div className={styles.scheduleclientDropdowns}>
            <Dropdown
              onSelect={handleYearChange}
              defaultValue={config.seasonShortToLong[selectedYear]}
              options={["2023-24", "2024-25", "2025-26", "2026-27"]}
            />
            {selectedYear === "2023" ? (
              <Dropdown
                onSelect={handleTeamChange}
                defaultValue={"All Teams"}
                options={[
                  "All Teams",
                  "Axemen",
                  "Gulls",
                  "Rockies",
                  "Whiskey Dekes",
                ]}
              />
            ) : selectedYear === "2024" ? (
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
            ) : selectedYear === "2025" ? (
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
            ) : (
              <Dropdown
                onSelect={handleTeamChange}
                defaultValue={"All Teams"}
                options={[
                  "All Teams",
                  "Axemen",
                  "Gulls",
                  "Icemen",
                  "Jagrbombs",
                  "Pistols",
                  "Rockies",
                  "Seamen",
                  "Toonie Tuesday",
                ]}
              />
            )}
          </div>
          {selectedYear === "2023" ? (
            <p>Historical game data for 2023-24 season unavailable</p>
          ) : null}
        </div>
        <Schedule
          scheduleData={schedule}
          scheduleYear={selectedYear}
          scheduleTeam={selectedTeam}
        />
      </div>
    </div>
  );
}
