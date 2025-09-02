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
  const [weekNumberError, setWeekNumberError] = useState(null);
  const scrollRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -364,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 364,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchWeekNumber = async () => {
      try {
        const response = await axios.get(
          //"https://cmhlniagara.com/api/week_number"
          "http://localhost:3000/api/week_number"
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
    return scheduleData.map((game, index) => (
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
    <div className="scoreboard">
      <button className="scoreboard--arrow" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="scoreboard--scroll" ref={scrollRef}>
        <div className="scoreboard--matchups">{renderMatchups()}</div>
      </div>
      <button className="scoreboard--arrow" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default Scoreboard;
