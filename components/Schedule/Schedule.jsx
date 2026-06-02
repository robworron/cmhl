import React, { useState, useEffect } from "react";

import ScheduleMatchup from "@/components/ScheduleMatchup/ScheduleMatchup";
import config from "@/app/config";

import styles from "./schedule.module.css";

export default function Schedule({ scheduleData, scheduleYear, scheduleTeam }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const formatGameNum = (year, gameNum) => {
    return config.gameMappings[year]?.[gameNum] ?? `Game ${gameNum}`;
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

  const formatURL = (year, game) => {
    if (year === "2023") return null;
    const season = year.split("-")[0];
    return `/boxscore/${season}/${game}`;
  };

  const getButtonSize = () => {
    if (windowWidth >= 768) return "Medium";
    return "Small";
  };

  const filteredGames = scheduleData.filter(
    (game) =>
      scheduleTeam === "All Teams" ||
      game[5] === scheduleTeam ||
      game[7] === scheduleTeam,
  );

  const gamesByWeek = filteredGames.reduce((acc, game) => {
    const week = game[0];
    if (!acc[week]) acc[week] = [];
    acc[week].push(game);
    return acc;
  }, {});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.schedule}>
      {Object.keys(gamesByWeek).map((week) => (
        <div key={`week-${week}`}>
          <h2>{formatWeekHeader(scheduleYear, week)}</h2>
          <div className={styles.scheduleWeek}>
            {gamesByWeek[week].map((game, index) => (
              <div key={`matchup-${game[1]}`}>
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
                  boxscoreUrl={formatURL(scheduleYear, game[1])}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
