import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";
import { getTeamLogoByName, formatDate } from "@/utils/formats";

import styles from "./schedulematchup.module.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return { w: 35, h: 30 };
  }
  return { w: 35, h: 30 };
};

export default function ScheduleMatchup({
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
  matchupType = "regularSeason",
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardStyling =
    matchupType === "playoffs"
      ? styles.scheduleMatchupPlayoff
      : matchupType === "riverworks"
        ? styles.scheduleMatchupRiverworks
        : "";

  const buttonBackground =
    matchupType === "playoffs"
      ? "#d9b74a"
      : matchupType === "riverworks"
        ? "#eaf1f9"
        : "";

  const buttonText =
    matchupType === "playoffs"
      ? "#20180a"
      : matchupType === "riverworks"
        ? "#14294a"
        : "";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.scheduleMatchup} ${cardStyling}`}>
      <div className={styles.scheduleMatchupInfo}>
        <div>
          <h6>{formatDate(date, "schedule")}</h6>
          <h6>{time}</h6>
        </div>
        <div style={{ textAlign: "right" }}>
          <h6>{gameNum}</h6>
          <h6>{rink}</h6>
        </div>
      </div>
      <div>
        <div className={styles.scheduleMatchupTeam}>
          <div className={styles.scheduleMatchupTeamInfo}>
            <h6>A</h6>
            <Logo
              src={getTeamLogoByName(away)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${away} logo`}
            />
            <h6>{away}</h6>
          </div>
          <div>
            <h6>{awayScore}</h6>
          </div>
        </div>
        <div className={styles.scheduleMatchupTeam}>
          <div className={styles.scheduleMatchupTeamInfo}>
            <h6>H</h6>
            <Logo
              src={getTeamLogoByName(home)}
              width={determineLogoSize(windowWidth).w}
              height={determineLogoSize(windowWidth).h}
              alt={`${home} logo`}
            />
            <h6>{home}</h6>
          </div>
          <div>
            <h6>{homeScore}</h6>
          </div>
        </div>
      </div>
      {boxscoreUrl && (
        <div className={styles.scheduleMatchupButton}>
          <Link href={boxscoreUrl} className={styles.boxscoreLink}>
            <Button
              size={buttonSize}
              label="Boxscore"
              backgroundColour={buttonBackground}
              textColour={buttonText}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
