"use client";

import { useWindowWidth } from "@/contexts/WindowWidthContext";
import { TEAM_TO_ABBREVIATION, TEAMS } from "@/utils/teams";
import { useEffect, useState } from "react";
import BoxscoreBanner from "../BoxscoreBanner/BoxscoreBanner";
import Button from "../Button/Button";
import GameSummary from "../GameSummary/GameSummary";
import Linescore from "../Linescore/Linescore";
import TeamBoxscore from "../TeamBoxscore/TeamBoxscore";
import styles from "./boxscoreclient.module.css";

export default function BoxscoreClient({
  season,
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
        season={season}
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
          {season === "2024" ? (
            <></>
          ) : (
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
          )}
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
            ) : season === "2024" ? (
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
