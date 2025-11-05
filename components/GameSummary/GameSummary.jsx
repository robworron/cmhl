import Logo from "@/components/Logo/Logo";

import { getTeamLogoByAbbreviation } from "@/utils/formats";
import styles from "./gamesummary.module.css";

export default function GameSummary({
  gameData,
  homeSkaters,
  homeGoalies,
  awaySkaters,
  awayGoalies,
}) {
  const determineTeam = (teamAbbr) => {
    if (teamAbbr === homeSkaters[0][4]) {
      return [homeSkaters, homeGoalies];
    }
    return [awaySkaters, awayGoalies];
  };

  const getPlayerName = (skaters, goalies, num) => {
    const skater = skaters.find((p) => p[3] === num);
    if (skater) return skater[2];

    const goalie = goalies.find((p) => p[3] === num);
    if (goalie) return goalie[2];

    return "";
  };

  const displayPeriodInfo = (periodData) =>
    periodData.length === 0 ? (
      <h6>No Scoring</h6>
    ) : (
      periodData.map((row, index) => {
        const [teamSkaters, teamGoalies] = determineTeam(row[2]);

        const scorerName = getPlayerName(teamSkaters, teamGoalies, row[4]);
        const primaryAssist = getPlayerName(teamSkaters, teamGoalies, row[5]);
        const secondaryAssist = getPlayerName(teamSkaters, teamGoalies, row[6]);
        const penaltyName = getPlayerName(teamSkaters, teamGoalies, row[8]);

        return (
          <div className={styles.gamesummaryGoalSummary} key={index}>
            <Logo
              src={getTeamLogoByAbbreviation(row[2])}
              width={25}
              height={20}
            />
            {row[4] ? (
              <h6>
                <b>{row[2]} GOAL</b> -- Scorer: {`${row[4]} `}
                {scorerName}
                {primaryAssist && `, Assist: ${row[5]} ${primaryAssist}`}
                {secondaryAssist && `, Assist: ${row[6]} ${secondaryAssist}`} (
                {row[7]})
              </h6>
            ) : (
              <h6>
                <b>{row[2]} PEN</b> -- {`${row[8]} ${penaltyName}`} ({row[9]}{" "}
                min)
              </h6>
            )}
          </div>
        );
      })
    );

  const period1 = gameData.filter((data) => data[3] === "1");
  const period2 = gameData.filter((data) => data[3] === "2");
  const period3 = gameData.filter((data) => data[3] === "3");

  return (
    <div className={styles.gamesummary}>
      <h4>
        <b>
          <u>Game Summary</u>
        </b>
      </h4>
      <div className={styles.gamesummaryData}>
        <h5>
          <b>
            <u>1st Period</u>
          </b>
        </h5>
        {displayPeriodInfo(period1)}
        <h5>
          <b>
            <u>2nd Period</u>
          </b>
        </h5>
        {displayPeriodInfo(period2)}
        <h5>
          <b>
            <u>3rd Period</u>
          </b>
        </h5>
        {displayPeriodInfo(period3)}
      </div>
    </div>
  );
}
