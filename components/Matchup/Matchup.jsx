"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";

import "./matchup.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return { w: 35, h: 30 };
  } else {
    return { w: 25, h: 20 };
  }
};

export const Matchup = ({
  home,
  homeScore,
  away,
  awayScore,
  date,
  time,
  gameNum,
  rink,
}) => {
  const getTeamLogoFileName = (teamName) => {
    const modifiedTeamName = teamName.replace(/\s/g, "").toLowerCase();
    return modifiedTeamName + "-transparent";
  };

  const formatPlayoffMatchupGameNum = (gameNum) => {
    if (gameNum === "85") {
      return "QF 1";
    }
    if (gameNum === "86") {
      return "QF 2";
    }
    if (gameNum === "87") {
      return "QF 3";
    }
    if (gameNum === "88") {
      return "QF 4";
    }
    if (gameNum === "89") {
      return "SF 1";
    }
    if (gameNum === "90") {
      return "SF 2";
    }
    if (gameNum === "91") {
      return "FINAL";
    }
    return `Game #${gameNum}`;
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="matchup">
      <div className="matchup--info">
        <div className="matchup--info-time">
          <h6>{date}</h6>
          <h6>{time}</h6>
        </div>
        <div className="matchup--info-game">
          <h6>{formatPlayoffMatchupGameNum(gameNum)}</h6>
          <h6>Rink #{rink}</h6>
        </div>
      </div>
      <div className="matchup--teams">
        <div className="matchup--team">
          <div className="matchup--team-left">
            <h6>A</h6>
            <Logo
              src={getTeamLogoFileName(away)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${away} logo`}
            />
            <h6 className="matchup--team-name">{away}</h6>
          </div>
          <div className="matchup--team-right">
            <h6>{awayScore}</h6>
          </div>
        </div>
        <div className="matchup--team">
          <div className="matchup--team-left">
            <h6>H</h6>
            <Logo
              src={getTeamLogoFileName(home)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${home} logo`}
            />
            <h6 className="matchup--team-name">{home}</h6>
          </div>
          <div className="matchup--team-right">
            <h6>{homeScore}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

Matchup.propTypes = {
  home: PropTypes.string,
  homeScore: PropTypes.string,
  away: PropTypes.string,
  awayScore: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  gameNum: PropTypes.string,
  rink: PropTypes.string,
};

Matchup.defaultProps = {
  home: "rockies",
  homeScore: "0",
  away: "axemen",
  awayScore: "0",
  date: "September 29, 2023",
  time: "8:15 PM",
  gameNum: "1",
  rink: "2",
};

export default Matchup;
