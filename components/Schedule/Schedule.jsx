import React, { useState, useEffect } from "react";
import { ScheduleMatchup } from "../ScheduleMatchup/ScheduleMatchup";
import "./schedule.css";

export const Schedule = ({ scheduleData, scheduleYear, scheduleTeam }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getButtonSize = () => {
    if (windowWidth >= 768) return "tablet";
    return "mobile";
  };

  const formatWeekHeader = (year, week) => {
    if (year !== "2023-24" && week === "22") {
      return "Quarter-Finals";
    } else if (week === "23") {
      return "Semi-Finals";
    } else if (week === "24") {
      return "Finals";
    }
    return `Week ${week}`;
  };

  const formatGameNum = (year, gameNum) => {
    if (year === "2023-24") {
      if (gameNum === "45") return "SF 1";
      if (gameNum === "46") return "SF 2";
      if (gameNum === "47") return "FINAL";
    } else if (year === "2024-25") {
      if (gameNum === "QF1") return "QF 1";
      if (gameNum === "QF2") return "QF 2";
      if (gameNum === "SF1") return "SF 1";
      if (gameNum === "SF2") return "SF 2";
      if (gameNum === "Final") return "FINAL";
    } else if (year === "2025-26") {
      if (gameNum === "85") return "QF 1";
      if (gameNum === "86") return "QF 2";
      if (gameNum === "87") return "QF 3";
      if (gameNum === "88") return "QF 4";
      if (gameNum === "89") return "SF 1";
      if (gameNum === "90") return "SF 2";
      if (gameNum === "91") return "FINAL";
    }
    return `Game ${gameNum}`;
  };

  const filteredGames = scheduleData.filter(
    (game) =>
      scheduleTeam === "All Teams" ||
      game[5] === scheduleTeam ||
      game[7] === scheduleTeam
  );

  const gamesByWeek = filteredGames.reduce((acc, game) => {
    const week = game[0];
    if (!acc[week]) acc[week] = [];
    acc[week].push(game);
    return acc;
  }, {});

  return (
    <section className="schedule">
      {Object.keys(gamesByWeek).map((week) => (
        <div key={`week-${week}`}>
          <h2>{formatWeekHeader(scheduleYear, week)}</h2>
          <div className="schedule--week">
            {gamesByWeek[week].map((game, index) => (
              <div key={`matchup-${game[1]}`} className="schedule--matchup">
                <ScheduleMatchup
                  home={game[5]}
                  homeScore={game[6]}
                  away={game[7]}
                  awayScore={game[8]}
                  time={game[4]}
                  date={game[2]}
                  gameNum={formatGameNum(scheduleYear, game[1])}
                  rink={game[3]}
                  buttonSize={getButtonSize(windowWidth)}
                  boxscoreUrl={null}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
