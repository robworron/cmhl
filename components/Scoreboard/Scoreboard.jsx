"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { ScheduleContext } from "../../contexts/2025_ScheduleContext";
import Matchup from "../Matchup/Matchup";
import axios from "axios";

import "./scoreboard.css";

const getValues = (width) => {
  return width >= 1024
    ? { matchupWidth: 182, arrowWidth: 30 }
    : { matchupWidth: 122, arrowWidth: 20 };
};

export const Scoreboard = () => {
  const { scheduleData, error } = useContext(ScheduleContext);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleMatchups, setVisibleMatchups] = useState(15);
  const [weekNumberError, setWeekNumberError] = useState(null);
  const scoreboardRef = useRef(null);

  const updateSizes = () => {
    const { matchupWidth, arrowWidth } = getValues(window.innerWidth);
    if (scoreboardRef.current) {
      const scoreboardWidth = window.innerWidth;
      const availableWidth = scoreboardWidth - 2 * arrowWidth;
      const fullyVisibleMatchups = Math.floor(availableWidth / matchupWidth);
      setVisibleMatchups(fullyVisibleMatchups > 0 ? fullyVisibleMatchups : 1);
    }
  };

  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => {
      window.removeEventListener("resize", updateSizes);
    };
  }, []);

  const handlePrevClick = () =>
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, scheduleData.length - visibleMatchups)
    );
  };

  useEffect(() => {
    const fetchWeekNumber = async () => {
      try {
        const response = await axios.get(
          "https://cmhlniagara.com/api/week_number"
        );
        const weekNum = Number(response.data[0][0]);
        setCurrentIndex((weekNum - 1) * 3);
      } catch (e) {
        console.error("Failed to fetch week number:", e);
        setWeekNumberError("ERROR: Failed to fetch week number");
      }
    };
    fetchWeekNumber();
  }, []);

  if (error || weekNumberError) return <h2>{error || weekNumberError}</h2>;

  if (!Array.isArray(scheduleData)) {
    console.error("Schedule is not an array:", scheduleData);
    return <h2>Invalid schedule data</h2>;
  }

  const renderMatchups = () => {
    return scheduleData
      .slice(currentIndex, currentIndex + visibleMatchups)
      .map((game, index) => (
        <Matchup
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

  return (
    <div className="scoreboard" ref={scoreboardRef}>
      <button
        className="scoreboard--arrow"
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="scoreboard--matchups">{renderMatchups()}</div>
      <button
        className="scoreboard--arrow"
        onClick={handleNextClick}
        disabled={currentIndex >= scheduleData.length - visibleMatchups}
      >
        &gt;
      </button>
    </div>
  );
};

export default Scoreboard;
