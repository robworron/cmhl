import React from "react";

import "./tiebreak.css";

export const Tiebreak = () => {
  return (
    <div className="tiebreak">
      <h2>Tie-Break Procedure</h2>
      <br />
      <h6>
        If two or more teams are tied in points during the regular season, the
        standings are determined in following order:
      </h6>
      <br />
      <h6>(1) The greater number of total wins</h6>
      <h6>
        (2) The greater differential between total goals for and total goals
        against
      </h6>
      <h6>(3) The greater number of total goals for</h6>
    </div>
  );
};
