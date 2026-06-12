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
    if (teamAbbr === homeSkaters[0].team) {
      return [homeSkaters, homeGoalies];
    }
    return [awaySkaters, awayGoalies];
  };

  const getPlayerName = (skaters, goalies, num) => {
    const skater = skaters.find((p) => p.number === num);
    if (skater) return skater.player;

    const goalie = goalies.find((p) => p.number === num);
    if (goalie) return goalie.player;

    return "";
  };

  const displayPeriodInfo = (periodData) =>
    periodData.length === 0 ? (
      <h6>No Scoring</h6>
    ) : (
      periodData.map((row, index) => {
        const [teamSkaters, teamGoalies] = determineTeam(row.team);

        const scorerName = getPlayerName(teamSkaters, teamGoalies, row.scorer);
        const primaryAssist = getPlayerName(
          teamSkaters,
          teamGoalies,
          row.assist1,
        );
        const secondaryAssist = getPlayerName(
          teamSkaters,
          teamGoalies,
          row.assist2,
        );
        const penaltyName = getPlayerName(
          teamSkaters,
          teamGoalies,
          row.penalty,
        );

        return (
          <div className={styles.gamesummaryGoalSummary} key={index}>
            <Logo
              src={getTeamLogoByAbbreviation(row.team)}
              width={25}
              height={20}
            />
            {row.scorer ? (
              <h6>
                <b>{row.team} GOAL</b> -- Scorer: {`${row.scorer} `}
                {scorerName}
                {primaryAssist && `, Assist: ${row.assist1} ${primaryAssist}`}
                {secondaryAssist &&
                  `, Assist: ${row.assist2} ${secondaryAssist}`}{" "}
                ({row.type})
              </h6>
            ) : (
              <h6>
                <b>{row.team} PEN</b> -- {`${row.penalty} ${penaltyName}`} (
                {row.minutes} min)
              </h6>
            )}
          </div>
        );
      })
    );

  const period1 = gameData.filter((data) => data.period === "1");
  const period2 = gameData.filter((data) => data.period === "2");
  const period3 = gameData.filter((data) => data.period === "3");

  console.log(gameData);
  console.log(homeSkaters);
  console.log(homeGoalies);
  console.log(awaySkaters);
  console.log(awayGoalies);

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
