"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { fetchGoalieGameData } from "@/utils/fetchGoalieGameData";

export const GoalieGameDataContext = createContext([]);

export function GoalieGameDataProvider({ children, seasonId }) {
  const [goalieGameData, setGoalieGameData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGoalieGameData = async () => {
      try {
        const data = await fetchGoalieGameData(seasonId);
        setGoalieGameData(data);
      } catch (e) {
        setError(`ERROR: Failed to fetch ${seasonId} Goalie Game Data`);
      }
    };

    getGoalieGameData();
  }, []);

  return (
    <GoalieGameDataContext.Provider value={{ goalieGameData, error }}>
      {children}
    </GoalieGameDataContext.Provider>
  );
}

export function useGoalieGameData() {
  return useContext(GoalieGameDataContext);
}
