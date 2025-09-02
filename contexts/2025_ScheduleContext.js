"use client";

import React, { useState, useEffect, createContext } from "react";
import { fetchSchedule } from "@/utils/fetchSchedule";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const data = await fetchSchedule();
        setScheduleData(data);
      } catch (e) {
        setError(`ERROR: Failed to fetch 2025 Schedule`);
      }
    };

    getSchedule();
  }, []);

  return (
    <ScheduleContext.Provider value={{ scheduleData, error }}>
      {children}
    </ScheduleContext.Provider>
  );
};
