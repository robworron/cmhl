"use client";

import React, { useState, useEffect, useRef, useContext } from "react";

import axios from "axios";

import ChampionsBanner from "@/components/ChampionsBanner/ChampionsBanner";
import FinalsBanner from "@/components/FinalsBanner/FinalsBanner";
import ScoreboardMatchup from "@/components/ScoreboardMatchup/ScoreboardMatchup";
import { ScheduleContext } from "../../contexts/2025_ScheduleContext";

import styles from "./scoreboard.module.css";

export default function Scoreboard() {
  const { scheduleData, error } = useContext(ScheduleContext);
  const [weekNumberError, setWeekNumberError] = useState(null);
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
    const fetchWeekNumber = async () => {
      try {
        const response = await axios.get(
          "https://cmhlniagara.com/api/week_number",
          //"http://localhost:3000/api/week_number",
        );
        const weekNum = Number(response.data[0][0]);
        if (scrollRef.current) {
          const scrollAmount = (((weekNum - 1) * getScrollWidth()) / 2) * 4; // current week * scrolling width / number of games scrolling by * total num games in a week
          scrollRef.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      } catch (e) {
        console.error("Failed to fetch week number:", e);
        setWeekNumberError("ERROR: Failed to fetch week number");
      }
    };
    fetchWeekNumber();
  }, [scheduleData]);

  if (error || weekNumberError) return <h2>{error || weekNumberError}</h2>;

  if (!Array.isArray(scheduleData)) {
    console.error("Schedule is not an array:", scheduleData);
    return <h2>Invalid schedule data</h2>;
  }

  const renderMatchups = () => {
    return scheduleData.map((game, index) => (
      <ScoreboardMatchup
        key={index}
        home={game[5] || "TBD"}
        homeScore={game[6] || "--"}
        away={game[7] || "TBD"}
        awayScore={game[8] || "--"}
        date={game[2]?.split(",")[0] || "TBD"}
        time={game[4] || "TBD"}
        gameNum={game[1] || "N/A"}
        rink={game[3] || "TBD"}
      />
    ));
  };

  const renderFinals = () => {
    return scheduleData
      .filter((game) => game[1] === "91")
      .map((game, index) => (
        <FinalsBanner
          key={index}
          //time={game[4] || "TBD"}
          time={"TBA"}
          date={game[2]?.split(",")[0] || "TBD"}
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

  /** FOR REGULAR SEASON */
  /**
  return (
    <div className={styles.scoreboard}>
      {renderLeftArrow()}
      <div className={styles.scoreboardScroll} ref={scrollRef}>
        <div className={styles.scoreboardMatchups}>{renderMatchups()}</div>
      </div>
      {renderRightArrow()}
    </div>
  );
  */

  /** FOR FINALS */
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreboardFinals}>{renderFinals()}</div>
    </div>
  );

  /** FOR OFFSEASON */
  /**
  return (
    <div className={styles.scoreboard}>
      <div className={styles.scoreboardChampions}>
        {renderChampionsBanner()}
      </div>
    </div>
  );
  */
}
