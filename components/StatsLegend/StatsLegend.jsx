import React from "react";

import "./statslegend.css";

export const StatsLegend = () => {
  return (
    <div className="statslegend">
      <h2>Legend</h2>
      <div className="statslegend--data">
        <div className="statslegend--data-left">
          <h4>Skaters</h4>
          <h6>RK - Rank</h6>
          <h6>GP - Games Played</h6>
          <h6>G - Goals</h6>
          <h6>A - Assists</h6>
          <h6>P - Points</h6>
          <h6>PIM - Penalty Minutes</h6>
          <h6>PPP - Powerplay Points</h6>
          <h6>SHP - Shorthanded Points</h6>
        </div>
        <div className="statslegend--data-right">
          <h4>Goalies</h4>
          <h6>RK - Rank</h6>
          <h6>GP - Games Played</h6>
          <h6>W - Wins</h6>
          <h6>GA - Goals Against</h6>
          <h6>SV - Saves</h6>
          <h6>SV% - Save Percentage</h6>
          <h6>GAA - Goals Against Avg</h6>
          <h6>SO - Shutouts</h6>
        </div>
      </div>
    </div>
  );
};
