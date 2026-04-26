"use client";

import React, { useState, useContext, createContext } from "react";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [scheduleData] = useState([]);
  const [scheduleError] = useState(null);

  return (
    <ScheduleContext.Provider value={{ scheduleData, scheduleError }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export function useSchedule() {
  return useContext(ScheduleContext);
}
