"use client";

import { useEffect, useState } from "react";
import BoxscoreBanner from "../BoxscoreBanner/BoxscoreBanner";
import Button from "../Button/Button";
import GameSummary from "../GameSummary/GameSummary";
import Linescore from "../Linescore/Linescore";
import TeamBoxscore from "../TeamBoxscore/TeamBoxscore";
import { TEAM_TO_ABBREVIATION, TEAMS } from "@/utils/teams";
import styles from "./boxscoreclient.module.css";
import { useWindowWidth } from "@/contexts/WindowWidthContext";

export default function BoxscoreClient({
  gameNum,
  date,
  time,
  rink,
  gameSummary,
  homeTeam,
  homeScoringLine,
  homeSkaterData,
  homeGoalieData,
  awayTeam,
  awayScoringLine,
  awaySkaterData,
  awayGoalieData,
}) {
  const windowWidth = useWindowWidth();
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    if (!selectedTeam) {
      setSelectedTeam(TEAM_TO_ABBREVIATION[homeTeam]);
    }
  }, [homeTeam, awayTeam, selectedTeam]);

  return (
    <div className={styles.boxscore}>
      <BoxscoreBanner
        home={TEAMS[TEAM_TO_ABBREVIATION[homeTeam]]}
        homeScore={homeScoringLine[homeScoringLine.length - 1]}
        away={TEAMS[TEAM_TO_ABBREVIATION[awayTeam]]}
        awayScore={awayScoringLine[awayScoringLine.length - 1]}
        gameNum={gameNum}
        date={date}
        time={time}
        rink={rink}
      />
      {gameSummary.length > 0 ? (
        <section className={styles.boxscoreContent}>
          <div className={styles.boxscoreSummary}>
            <Linescore
              homeTeam={TEAMS[TEAM_TO_ABBREVIATION[homeTeam]]}
              awayTeam={TEAMS[TEAM_TO_ABBREVIATION[awayTeam]]}
              homeScoring={homeScoringLine}
              awayScoring={awayScoringLine}
            />
            <GameSummary
              gameData={gameSummary}
              homeSkaters={homeSkaterData}
              homeGoalies={homeGoalieData}
              awaySkaters={awaySkaterData}
              awayGoalies={awayGoalieData}
            />
          </div>
          <>
            {windowWidth < 1024 ? (
              <div className={styles.boxscoreTeams}>
                <TeamBoxscore
                  team={TEAMS[TEAM_TO_ABBREVIATION[awayTeam]]}
                  skaterData={awaySkaterData}
                  goalieData={awayGoalieData}
                />
                <TeamBoxscore
                  team={TEAMS[TEAM_TO_ABBREVIATION[homeTeam]]}
                  skaterData={homeSkaterData}
                  goalieData={homeGoalieData}
                />
              </div>
            ) : (
              <div className={styles.boxscoreTeamsDesktop}>
                <div className={styles.boxscoreButtons}>
                  <Button
                    size={"Large"}
                    label={awayTeam}
                    onClick={() =>
                      setSelectedTeam(TEAM_TO_ABBREVIATION[awayTeam])
                    }
                    primary={selectedTeam !== TEAM_TO_ABBREVIATION[awayTeam]}
                  />
                  <Button
                    size={"Large"}
                    label={homeTeam}
                    onClick={() =>
                      setSelectedTeam(TEAM_TO_ABBREVIATION[homeTeam])
                    }
                    primary={selectedTeam !== TEAM_TO_ABBREVIATION[homeTeam]}
                  />
                </div>
                <TeamBoxscore
                  team={TEAMS[selectedTeam]}
                  skaterData={
                    selectedTeam === TEAM_TO_ABBREVIATION[homeTeam]
                      ? homeSkaterData
                      : awaySkaterData
                  }
                  goalieData={
                    selectedTeam === TEAM_TO_ABBREVIATION[homeTeam]
                      ? homeGoalieData
                      : awayGoalieData
                  }
                />
              </div>
            )}
          </>
        </section>
      ) : (
        <h2>No Game Summary</h2>
      )}
    </div>
  );
}

/**
 * 
 * const { seasonId, gameId } = use(params);
  const [selectedTeam, setSelectedTeam] = useState("");
  const { goalieGameData, goalieError } = useGoalieGameData();
  const { skaterGameData, gameSummaryData, skaterError } = useSkaterGameData();
  const { scheduleData, scheduleError } = useSchedule();
  const windowWidth = useWindowWidth();

  const unfilteredSkaterData = Array.isArray(skaterGameData)
    ? skaterGameData
    : [];
  const unfilteredGoalieData = Array.isArray(goalieGameData)
    ? goalieGameData
    : [];
  const unfilteredGameSummaryData = Array.isArray(gameSummaryData)
    ? gameSummaryData
    : [];
  const unfilteredScheduleData = Array.isArray(scheduleData)
    ? scheduleData
    : [];

  const filteredSkaterData = unfilteredSkaterData.filter(
    (data) => data[1] === gameId,
  );
  const filteredGoalieData = unfilteredGoalieData.filter(
    (data) => data[1] === gameId,
  );
  const filteredGameSummaryData = unfilteredGameSummaryData.filter(
    (data) => data[1] === gameId,
  );
  const filteredGameInfoData = unfilteredScheduleData.filter(
    (game) => game[1] === gameId,
  );

  const gameTeams = [
    TEAM_TO_ABBREVIATION[filteredGameInfoData[0]?.[5]],
    TEAM_TO_ABBREVIATION[filteredGameInfoData[0]?.[7]],
  ];

  const homeSkaters = filteredSkaterData.filter(
    (data) => data[4] === gameTeams[0],
  );
  const awaySkaters = filteredSkaterData.filter(
    (data) => data[4] === gameTeams[1],
  );
  const homeGoalies = filteredGoalieData.filter(
    (data) => data[4] === gameTeams[0],
  );
  const awayGoalies = filteredGoalieData.filter(
    (data) => data[4] === gameTeams[1],
  );

  useEffect(() => {
    if (!selectedTeam && gameTeams.length > 0) {
      setSelectedTeam(gameTeams[1]);
    }
  }, [gameTeams, selectedTeam]);

  if (goalieError) return <h4>{goalieError}</h4>;
  if (skaterError) return <h4>{skaterError}</h4>;
  if (scheduleError) return <h4>{scheduleError}</h4>;
  if (seasonId !== "2025") return <h4>Game Not Found</h4>;
  if (!goalieGameData || !skaterGameData || !gameSummaryData || !scheduleData)
    return <h5>Loading...</h5>;

  if (filteredGameInfoData.length === 0) {
    return <h4>Game Not Found</h4>;
  }

  const homeScoring = [0, 0, 0, 0];
  const awayScoring = [0, 0, 0, 0];

  for (const item of filteredGameSummaryData) {
    if (item[4]) {
      const periodIndex = Number(item[3]) - 1;
      if (item[2] === gameTeams[0]) {
        homeScoring[periodIndex] += 1;
      } else if (item[2] === gameTeams[1]) {
        awayScoring[periodIndex] += 1;
      }
    }
  }
  homeScoring[3] = homeScoring[0] + homeScoring[1] + homeScoring[2];
  awayScoring[3] = awayScoring[0] + awayScoring[1] + awayScoring[2];

  return (
    <div className={styles.boxscore}>
      <BoxscoreBanner
        home={TEAMS[gameTeams[0]]}
        homeScore={filteredGameInfoData[0][6]}
        away={TEAMS[gameTeams[1]]}
        awayScore={filteredGameInfoData[0][8]}
        gameNum={filteredGameInfoData[0][1]}
        date={filteredGameInfoData[0][2]}
        time={filteredGameInfoData[0][4]}
        rink={filteredGameInfoData[0][3]}
      />
      {filteredGameSummaryData.length > 0 ? (
        <section className={styles.boxscoreContent}>
          <div className={styles.boxscoreSummary}>
            <Linescore
              homeTeam={TEAMS[gameTeams[0]]}
              awayTeam={TEAMS[gameTeams[1]]}
              homeScoring={homeScoring}
              awayScoring={awayScoring}
            />
            <GameSummary
              gameData={filteredGameSummaryData}
              homeSkaters={homeSkaters}
              homeGoalies={homeGoalies}
              awaySkaters={awaySkaters}
              awayGoalies={awayGoalies}
            />
          </div>
          <>
            {windowWidth < 1024 ? (
              <div className={styles.boxscoreTeams}>
                <TeamBoxscore
                  team={TEAMS[gameTeams[1]]}
                  skaterData={awaySkaters}
                  goalieData={awayGoalies}
                />
                <TeamBoxscore
                  team={TEAMS[gameTeams[0]]}
                  skaterData={homeSkaters}
                  goalieData={homeGoalies}
                />
              </div>
            ) : (
              <div className={styles.boxscoreTeamsDesktop}>
                <div className={styles.boxscoreButtons}>
                  <Button
                    size={"Large"}
                    label={TEAMS[gameTeams[1]].name}
                    onClick={() => setSelectedTeam(gameTeams[1])}
                    primary={selectedTeam !== gameTeams[1]}
                  />
                  <Button
                    size={"Large"}
                    label={TEAMS[gameTeams[0]].name}
                    onClick={() => setSelectedTeam(gameTeams[0])}
                    primary={selectedTeam !== gameTeams[0]}
                  />
                </div>
                <TeamBoxscore
                  team={TEAMS[selectedTeam]}
                  skaterData={
                    selectedTeam === gameTeams[0] ? homeSkaters : awaySkaters
                  }
                  goalieData={
                    selectedTeam === gameTeams[0] ? homeGoalies : awayGoalies
                  }
                />
              </div>
            )}
          </>
        </section>
      ) : (
        <h2>No Game Summary</h2>
      )}
    </div>
  );
 * 
 */
