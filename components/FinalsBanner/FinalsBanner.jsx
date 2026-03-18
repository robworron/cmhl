import { useEffect, useState } from "react";

import Logo from "@/components/Logo/Logo";

import styles from "./finalsbanner.module.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return { w: 90, h: 75 };
  }
  return { w: 50, h: 40 };
};

export default function FinalsBanner({
  home,
  homePrimary,
  homeSecondary,
  homeLogo,
  away,
  awayPrimary,
  awaySecondary,
  awayLogo,
  time,
  date,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.finalsBanner}>
      <div
        className={styles.finalsBannerLeft}
        style={{
          "--colorTop": homePrimary,
          "--colorBottom": homeSecondary,
        }}
      >
        <div className={styles.finalsBannerLeftContent}>
          <h4>{home}</h4>
          <Logo
            src={homeLogo}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={home}
          />
        </div>
      </div>
      <div className={styles.finalsBannerCenter}>
        <h4>FINAL</h4>
        <h6>{date}</h6>
        <h6>{time}</h6>
      </div>
      <div
        className={styles.finalsBannerRight}
        style={{
          "--colorTop": awayPrimary,
          "--colorBottom": awaySecondary,
        }}
      >
        <div className={styles.finalsBannerRightContent}>
          <Logo
            src={awayLogo}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={away}
          />
          <h4>{away}</h4>
        </div>
      </div>
    </div>
  );
}
