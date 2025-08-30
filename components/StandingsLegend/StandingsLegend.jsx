import React from "react";

import "./standingslegend.css";

export const StandingsLegend = () => {
  return (
    <div className="standingslegend">
      <h2>Legend</h2>
      <div className="standingslegend--data">
        <div className="standingslegend--data-left">
          <h6>RK - Rank</h6>
          <h6>W - Wins</h6>
          <h6>L - Losses</h6>
          <h6>T - Ties</h6>
          <h6>P - Points</h6>
        </div>
        <div className="standingslegend--data-right">
          <h6>GF - Goals For</h6>
          <h6>GA - Goals Against</h6>
          <h6>GD - Goal Differential</h6>
          <h6>ST - Streak</h6>
        </div>
      </div>
    </div>
  );
};
