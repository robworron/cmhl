"use client";

import { createContext, useState, useEffect, useContext } from "react";

import { fetchSkaterGameData } from "@/utils/fetchSkaterGameData";

export const SkaterGameDataContext = createContext([]);

export function SkaterGameDataProvider({ children, seasonId }) {
  const [skaterGameData, setSkaterGameData] = useState([]);
  const [gameSummaryData, setGameSummaryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkaterGameData = async () => {
      try {
        const data = await fetchSkaterGameData(seasonId);
        const skaters = [];
        const game = [];

        data.forEach((innerArray) => {
          if (innerArray.length === 22) {
            skaters.push(innerArray.slice(0, 11));
            game.push(innerArray.slice(12, 22));
          } else if (innerArray.length === 20) {
            skaters.push(innerArray.slice(0, 11));
            game.push(innerArray.slice(12, 20));
          } else {
            skaters.push(innerArray);
          }
        });

        setSkaterGameData(skaters);
        setGameSummaryData(game);
      } catch (e) {
        setError(`ERROR: Failed to fetch ${seasonId} Skater Game Data`);
      }
    };

    getSkaterGameData();
  }, []);

  return (
    <SkaterGameDataContext.Provider
      value={{ skaterGameData, gameSummaryData, error }}
    >
      {children}
    </SkaterGameDataContext.Provider>
  );
}

export function useSkaterGameData() {
  return useContext(SkaterGameDataContext);
}
