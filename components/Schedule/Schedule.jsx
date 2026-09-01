import { useEffect, useState } from "react";
import config from "@/app/config";
import ScheduleMatchup from "@/components/ScheduleMatchup/ScheduleMatchup";
import styles from "./schedule.module.css";

export default function Schedule({ scheduleData, scheduleYear, scheduleTeam }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const formatGameNum = (year, gameNum) => {
    const season = config.seasonShortToLong[year];
    return config.gameNumMappings[season]?.[gameNum] ?? `Game ${gameNum}`;
  };

  const formatRink = (year, gameNum, rinkNum) => {
    const season = config.seasonShortToLong[year];
    return config.rinkMappings[season]?.[gameNum] ?? `Rink #${rinkNum}`;
  };

  const formatWeekHeader = (year, week) => {
    if (year !== "2023" && week === "22") {
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
      game.homeTeam === scheduleTeam ||
      game.awayTeam === scheduleTeam,
  );

  const gamesByWeek = filteredGames.reduce((acc, game) => {
    const week = game.week;
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
              <div key={`matchup-${game.gameNumber}`}>
                <ScheduleMatchup
                  home={game.homeTeam}
                  homeScore={game.homeScore}
                  away={game.awayTeam}
                  awayScore={game.awayScore}
                  time={game.time}
                  date={game.date}
                  gameNum={formatGameNum(scheduleYear, game.gameNumber)}
                  rink={formatRink(scheduleYear, game.gameNumber, game.rink)}
                  buttonSize={getButtonSize(windowWidth)}
                  boxscoreUrl={formatURL(scheduleYear, game.gameNumber)}
                  matchupType={
                    config.gameTypeMappings[
                      config.seasonShortToLong[scheduleYear]
                    ][game.gameNumber]
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
