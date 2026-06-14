"use client";

import React, { useEffect, useRef } from "react";
import ChampionsBanner from "@/components/ChampionsBanner/ChampionsBanner";
import FinalsBanner from "@/components/FinalsBanner/FinalsBanner";
import ScoreboardMatchup from "@/components/ScoreboardMatchup/ScoreboardMatchup";
import styles from "./scoreboard.module.css";
import config from "@/app/config";

export default function Scoreboard({ scheduleData, weekNum }) {
  const scrollRef = useRef(null);

  const getScrollWidth = () => {
    return window.innerWidth < 1024
      ? 304
      : window.innerWidth < 2560
        ? 364
        : 362.5;
  };

  const handlePrevClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -getScrollWidth(),
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: getScrollWidth(),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!scrollRef.current || !weekNum) return;

    const scrollAmount = (((weekNum - 1) * getScrollWidth()) / 2) * 4;

    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, [weekNum]);

  if (!Array.isArray(scheduleData)) {
    console.error("Schedule is not an array:", scheduleData);
    return <h2>Invalid schedule data</h2>;
  }

  const renderMatchups = () => {
    return scheduleData.map((game, index) => (
      <ScoreboardMatchup
        key={index}
        home={game.homeTeam || "TBD"}
        homeScore={game.homeScore || "--"}
        away={game.awayTeam || "TBD"}
        awayScore={game.awayScore || "--"}
        date={game.date?.split(",")[0] || "TBD"}
        time={game.time || "TBD"}
        gameNum={game.gameNumber || "N/A"}
        rink={game.rink || "TBD"}
      />
    ));
  };

  const renderFinals = () => {
    return scheduleData
      .filter((game) => game.gameNumber === "91")
      .map((game, index) => (
        <FinalsBanner
          key={index}
          time={game.time || "TBD"}
          date={game.date?.split(",")[0] || "TBD"}
        />
      ));
  };

  const renderChampionsBanner = () => {
    return <ChampionsBanner />;
  };

  const renderLeftArrow = () => (
    <button className={styles.scoreboardArrow} onClick={handlePrevClick}>
      &lt;
    </button>
  );

  const renderRightArrow = () => (
    <button className={styles.scoreboardArrow} onClick={handleNextClick}>
      &gt;
    </button>
  );

  switch (config.timeOfYear) {
    case "offseasonSchedule":
    case "regularSeason":
      return (
        <div className={styles.scoreboard}>
          {renderLeftArrow()}
          <div className={styles.scoreboardScroll} ref={scrollRef}>
            <div className={styles.scoreboardMatchups}>{renderMatchups()}</div>
          </div>
          {renderRightArrow()}
        </div>
      );
    case "finals":
      return (
        <div className={styles.scoreboard}>
          <div className={styles.scoreboardFinals}>{renderFinals()}</div>
        </div>
      );
    default:
      return (
        <div className={styles.scoreboard}>
          <div className={styles.scoreboardChampions}>
            {renderChampionsBanner()}
          </div>
        </div>
      );
  }
}
