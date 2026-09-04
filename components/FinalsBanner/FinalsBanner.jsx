import { useEffect, useState } from "react";

import Logo from "@/components/Logo/Logo";
import { TEAMS } from "@/utils/teams";
import config from "@/app/config";

import styles from "./finalsbanner.module.css";

const determineLogoSize = (width) => {
  if (width >= 1024) {
    return { w: 90, h: 75 };
  }
  return { w: 50, h: 40 };
};

export default function FinalsBanner({ time, date }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

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
          "--colorTop": TEAMS[config.finalsHome].primaryColor,
          "--colorBottom": TEAMS[config.finalsHome].secondaryColor,
        }}
      >
        <div className={styles.finalsBannerLeftContent}>
          <h4>{TEAMS[config.finalsHome].name}</h4>
          <Logo
            src={TEAMS[config.finalsHome].logoFile}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={TEAMS[config.finalsHome].name}
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
          "--colorTop": TEAMS[config.finalsAway].primaryColor,
          "--colorBottom": TEAMS[config.finalsAway].secondaryColor,
        }}
      >
        <div className={styles.finalsBannerRightContent}>
          <Logo
            src={TEAMS[config.finalsAway].logoFile}
            width={determineLogoSize(windowWidth).w}
            height={determineLogoSize(windowWidth).h}
            alt={TEAMS[config.finalsAway].name}
          />
          <h4>{TEAMS[config.finalsAway].name}</h4>
        </div>
      </div>
    </div>
  );
}
