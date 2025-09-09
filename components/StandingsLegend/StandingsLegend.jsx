import React from "react";

import styles from "./standingslegend.module.css";

export default function StandingsLegend() {
  return (
    <div className={styles.standingslegend}>
      <h2>Legend</h2>
      <div className={styles.standingslegendData}>
        <div className={styles.standingslegendDataLeft}>
          <h6>RK - Rank</h6>
          <h6>W - Wins</h6>
          <h6>L - Losses</h6>
          <h6>T - Ties</h6>
          <h6>P - Points</h6>
        </div>
        <div>
          <h6>GF - Goals For</h6>
          <h6>GA - Goals Against</h6>
          <h6>GD - Goal Differential</h6>
          <h6>ST - Streak</h6>
        </div>
      </div>
    </div>
  );
}
