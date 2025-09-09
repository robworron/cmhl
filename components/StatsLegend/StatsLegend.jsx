import React from "react";

import styles from "./statslegend.module.css";

export default function StatsLegend() {
  return (
    <div className={styles.statslegend}>
      <h2>Legend</h2>
      <div className={styles.statslegendData}>
        <div className={styles.statslegendDataLeft}>
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
        <div>
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
}
