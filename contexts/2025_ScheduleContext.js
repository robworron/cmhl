"use client";

import React, { useState, useEffect, useContext, createContext } from "react";

import { fetchSchedule } from "@/utils/fetchSchedule";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [scheduleError, setScheduleError] = useState(null);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const data = await fetchSchedule();
        setScheduleData(data);
      } catch (e) {
        setScheduleError("ERROR: Failed to fetch 2025 Schedule");
      }
    };

    getSchedule();
  }, []);

  return (
    <ScheduleContext.Provider value={{ scheduleData, scheduleError }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export function useSchedule() {
  return useContext(ScheduleContext);
}
