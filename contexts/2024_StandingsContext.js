import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const StandingsContext = createContext();

export const StandingsProvider = ({ children }) => {
  const [standingsData, setStandingsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(
          "https://cmhlniagara.com/api/2024_standings"
        );
        setStandingsData(response.data);
      } catch (e) {
        console.error("Failed to fetch 2024 Standings:", e);
        setError("ERROR: Failed to fetch 2024 Standings");
      }
    };
    fetchStandings();
  }, []);

  return (
    <StandingsContext.Provider value={{ standingsData, error }}>
      {children}
    </StandingsContext.Provider>
  );
};
