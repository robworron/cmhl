import React from "react";

import Image from "next/image";

import styles from "./championsbanner.module.css";

export const ChampionsBanner = () => {
  const WINNERS_LOGO = "/assets/logos/axemen-transparent.png";
  const TROPHY = "/assets/league/league-cup.png";

  return (
    <div className={styles.championsBanner}>
      <div className={styles.championsBannerLogo}>
        <Image
          src={WINNERS_LOGO}
          fill
          style={{ objectFit: "contain" }}
          alt="Winners Logo"
        />
      </div>
      <h1>2024-25 CMHL CHAMPIONS</h1>
      <div className={styles.championsBannerTrophy}>
        <Image
          src={TROPHY}
          fill
          style={{ objectFit: "contain" }}
          alt="CMHL Trophy"
        />
      </div>
    </div>
  );
};
