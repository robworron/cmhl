import React, { useContext } from "react";
import { Standings } from "../Standings/Standings";
import { StandingsContext } from "../../contexts/2024_StandingsContext";

import "./sidebar.css";

export const SideBar = () => {
  const { standingsData, error } = useContext(StandingsContext);

  return (
    <div className="sidebar">
      <h4>Standings</h4>
      {error ? (
        <p>{error}</p>
      ) : (
        <Standings sidebar standingsData={standingsData} />
      )}
    </div>
  );
};
