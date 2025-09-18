import Logo from "@/components/Logo/Logo";
import { useWindowWidth } from "@/contexts/WindowWidthContext";
import { getTeamLogoByAbbreviation } from "@/utils/formats";

import styles from "./linescore.module.css";

const determineLogoSize = (width) => {
  if (width < 375) {
    return { w: 42, h: 35 };
  } else if (width < 425) {
    return { w: 48, h: 40 };
  }
  return { w: 60, h: 50 };
};

export default function Linescore({
  homeScoring,
  awayScoring,
  homeTeam,
  awayTeam,
}) {
  if (!homeTeam || !awayTeam) return;
  const windowWidth = useWindowWidth();
  const logoSize = determineLogoSize(windowWidth);
  return (
    <>
      <div className={styles.linescore}>
        <div className={styles.linescoreTeam}>
          <div className={styles.linescoreTeamContainer} />
          <h5>1</h5>
          <h5>2</h5>
          <h5>3</h5>
          <h5>F</h5>
        </div>
        <div className={styles.linescoreTeam}>
          <div className={styles.linescoreTeamContainer}>
            <Logo
              src={getTeamLogoByAbbreviation(awayTeam.abbreviation)}
              width={logoSize.w}
              height={logoSize.h}
              alt={awayTeam.name}
            />
            <h3>{awayTeam.name}</h3>
          </div>
          {awayScoring.map((score, index) => (
            <h4 key={index}>{score}</h4>
          ))}
        </div>
        <div className={styles.linescoreTeam}>
          <div className={styles.linescoreTeamContainer}>
            <Logo
              src={getTeamLogoByAbbreviation(homeTeam.abbreviation)}
              width={logoSize.w}
              height={logoSize.h}
              alt={homeTeam.name}
            />
            <h3>{homeTeam.name}</h3>
          </div>
          {homeScoring.map((score, index) => (
            <h4 key={index}>{score}</h4>
          ))}
        </div>
      </div>
    </>
  );
}
