"use client";

import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          "https://cmhlniagara.com/api/2025_schedule"
        );
        setScheduleData(response.data);
      } catch (e) {
        console.error("Failed to fetch 2025 Schedule data:", e);
        setError("ERROR: Failed to fetch 2025 Schedule data");
      }
    };
    fetchSchedule();
  }, []);

  return (
    <ScheduleContext.Provider value={{ scheduleData, error }}>
      {children}
    </ScheduleContext.Provider>
  );
};
