import Logo from "@/components/Logo/Logo";
import { useWindowWidth } from "@/contexts/WindowWidthContext";
import { TEAMS } from "@/utils/teams";

import styles from "./boxscorebanner.module.css";

function determineLogoSize(width) {
  if (width < 375) {
    return { w: 48, h: 40 };
  } else if (width < 768) {
    return { w: 60, h: 50 };
  } else if (width < 1024) {
    return { w: 120, h: 100 };
  }
  return { w: 150, h: 125 };
}

export default function BoxscoreBanner({
  home = TEAMS["CMHL"],
  homeScore = "--",
  away = TEAMS["CMHL"],
  awayScore = "--",
  gameNum = 0,
  date = "January 1, 2000",
  time = "12:00am",
  rink = "1",
}) {
  const windowWidth = useWindowWidth();

  const formatGameNum = (gameNum) => {
    if (gameNum === "85") return "QF 1";
    if (gameNum === "86") return "QF 2";
    if (gameNum === "87") return "QF 3";
    if (gameNum === "88") return "QF 4";
    if (gameNum === "89") return "SF 1";
    if (gameNum === "90") return "SF 2";
    if (gameNum === "91") return "FINAL";
    return `Game #${gameNum}`;
  };

  const formatTeamName = (team, homeTeam = false) => {
    if (!team) return "CMHL";
    if (team.abbreviation !== "CMHL")
      return windowWidth < 1024 ? team.abbreviation : team.name;
    return homeTeam ? "Home" : "Away";
  };

  return (
    <div className={styles.boxscorebanner}>
      <div className={styles.boxscorebannerDate}>
        <h4>{date}</h4>
      </div>
      <div className={styles.boxscorebannerMain}>
        <div
          className={styles.boxscorebannerAway}
          style={{
            "--colorTop": away.primaryColor,
            "--colorBottom": away.secondaryColor,
          }}
        >
          <Logo
            src={away.logoFile}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={away.name}
          />
          <h4>{formatTeamName(away)}</h4>
          <h2>{awayScore}</h2>
        </div>
        <div className={styles.boxscorebannerVersus}>
          <h5>vs</h5>
        </div>
        <div
          className={styles.boxscorebannerHome}
          style={{
            "--colorTop": home.primaryColor,
            "--colorBottom": home.secondaryColor,
          }}
        >
          <Logo
            src={home.logoFile}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={home.name}
          />
          <h4>{formatTeamName(home, true)}</h4>
          <h2>{homeScore}</h2>
        </div>
      </div>
      <div className={styles.boxscorebannerDetails}>
        <h6>{formatGameNum(gameNum)}</h6>
        <h6>{time}</h6>
        <h6>Rink {rink}</h6>
      </div>
    </div>
  );
}
