"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import { fetchSchedule } from "@/utils/fetchSchedule";
import config from "@/app/config";

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
        setScheduleError(
          `ERROR: Failed to fetch ${config.currentSeasonShort} Schedule`,
        );
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
