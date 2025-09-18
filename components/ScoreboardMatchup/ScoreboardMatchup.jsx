"use client";

import { useEffect, useMemo, useState } from "react";

import Logo from "@/components/Logo/Logo";

import { getTeamLogoByName } from "@/utils/formats";
import styles from "./scoreboardmatchup.module.css";

const determineLogoSize = (width) => {
  if (width >= 1024) return { w: 35, h: 30 };
  return { w: 25, h: 20 };
};

export default function ScoreboardMatchup({
  home,
  homeScore,
  away,
  awayScore,
  date,
  time,
  gameNum,
  rink,
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

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

  const logoSize = useMemo(() => determineLogoSize(windowWidth), [windowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.scoreboardmatchup}>
      <div className={styles.scoreboardmatchupInfo}>
        <div>
          <h6>{date}</h6>
          <h6>{time}</h6>
        </div>
        <div className={styles.scoreboardmatchupInfoGame}>
          <h6>{formatPlayoffMatchupGameNum(gameNum)}</h6>
          <h6>Rink #{rink}</h6>
        </div>
      </div>
      <div>
        <div className={styles.scoreboardmatchupTeam}>
          <div className={styles.scoreboardmatchupTeamLeft}>
            <h6>A</h6>
            <Logo
              src={getTeamLogoByName(away)}
              width={logoSize.w}
              height={logoSize.h}
              alt={`${away} logo`}
            />
            <h6 className={styles.scoreboardmatchupTeamName}>{away}</h6>
          </div>
          <div>
            <h6>{awayScore}</h6>
          </div>
        </div>
        <div className={styles.scoreboardmatchupTeam}>
          <div className={styles.scoreboardmatchupTeamLeft}>
            <h6>H</h6>
            <Logo
              src={getTeamLogoByName(home)}
              width={logoSize.w}
              height={logoSize.h}
              alt={`${home} logo`}
            />
            <h6 className={styles.scoreboardmatchupTeamName}>{home}</h6>
          </div>
          <div>
            <h6>{homeScore}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
