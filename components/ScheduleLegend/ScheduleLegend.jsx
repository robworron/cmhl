import React from "react";

import "./schedulelegend.css";

export const ScheduleLegend = () => {
  return (
    <div className="schedulelegend">
      <h2>Legend</h2>
      <div className="schedulelegend--data">
        <div className="schedulelegend--data-left">
          <h6>WK - Week</h6>
          <h6>GM - Game</h6>
          <h6>HS - Home Score</h6>
          <h6>AS - Away Score</h6>
        </div>
      </div>
    </div>
  );
};
