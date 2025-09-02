import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

import "./schedulematchup.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return { w: 35, h: 30 };
  } else {
    return { w: 35, h: 30 };
  }
};

export const ScheduleMatchup = ({
  home,
  homeScore,
  away,
  awayScore,
  time,
  date,
  gameNum,
  rink,
  buttonSize,
  boxscoreUrl = null,
}) => {
  const getTeamLogoFileName = (teamName) => {
    const modifiedTeamName = teamName.replace(/\s/g, "").toLowerCase();
    return modifiedTeamName + "-transparent";
  };

  const formatDate = (date) => {
    if (typeof date !== "string") return date;
    const result = date.split(",")[0];
    return result;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="schedule-matchup">
      <div className="schedule-matchup--info">
        <div className="schedule-matchup--info-time">
          <h6>{formatDate(date)}</h6>
          <h6>{time}</h6>
        </div>
        <div className="schedule-matchup--info-game">
          <h6>{gameNum}</h6>
          <h6>Rink #{rink}</h6>
        </div>
      </div>
      <div className="schedule-matchup--teams">
        <div className="schedule-matchup--team">
          <div className="schedule-matchup--team-left">
            <h6>A</h6>
            <Logo
              src={getTeamLogoFileName(away)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${away} logo`}
            />
            <h6 className="schedule-matchup--team-name">{away}</h6>
          </div>
          <div className="schedule-matchup--team-right">
            <h6>{awayScore}</h6>
          </div>
        </div>
        <div className="schedule-matchup--team">
          <div className="schedule-matchup--team-left">
            <h6>H</h6>
            <Logo
              src={getTeamLogoFileName(home)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${home} logo`}
            />
            <h6 className="schedule-matchup--team-name">{home}</h6>
          </div>
          <div className="schedule-matchup--team-right">
            <h6>{homeScore}</h6>
          </div>
        </div>
      </div>
      {boxscoreUrl && (
        <div className="schedule-matchup--button">
          <Button
            backgroundColour={"#222"}
            size={buttonSize}
            label="Boxscore"
          />
        </div>
      )}
    </div>
  );
};

export default ScheduleMatchup;
