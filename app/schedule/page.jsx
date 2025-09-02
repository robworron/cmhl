"use client";

import React, { useEffect, useState } from "react";
import { Schedule } from "../../components/Schedule/Schedule";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { fetchSchedule } from "@/utils/fetchSchedule";

import styles from "./schedule.module.css";

export default function SchedulePage() {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSchedule = async () => {
      const year =
        selectedYear === "2025-26"
          ? "2025"
          : selectedYear === "2024-25"
          ? "2024"
          : "2023";
      try {
        const data = await fetchSchedule(year);
        setSchedule(data);
      } catch (e) {
        setError(`ERROR: Failed to fetch ${selectedYear} Schedule`);
      }
    };

    getSchedule();
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedTeam("All Teams");
  };

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className={styles.schedule}>
      <div className={styles.scheduleBody}>
        <div className={styles.scheduleHeader}>
          <h1>Schedule</h1>
          <div className={styles.scheduleDropdowns}>
            <Dropdown
              dropdownSelection={handleYearChange}
              initialState={"2025-26"}
              selections={["2023-24", "2024-25", "2025-26"]}
            />
            {selectedYear === "2023-24" ? (
              <Dropdown
                dropdownSelection={handleTeamChange}
                initialState={"All Teams"}
                selections={[
                  "All Teams",
                  "Axemen",
                  "Gulls",
                  "Rockies",
                  "Whiskey Dekes",
                ]}
              />
            ) : "2024-25" ? (
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
        {error ? (
          <h2>{error}</h2>
        ) : (
          <Schedule
            scheduleData={schedule}
            scheduleYear={selectedYear}
            scheduleTeam={selectedTeam}
          />
        )}
      </div>
    </div>
  );
}
