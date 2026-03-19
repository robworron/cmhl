import React from "react";
import Image from "next/image";

import { TEAMS } from "@/utils/teams";

import styles from "./championsbanner.module.css";
const TROPHY = "/assets/other/league-cup-transparent.webp";

export default function ChampionsBanner({ team, year }) {
  return (
    <div
      className={styles.championsBanner}
      style={{
        "--colorPrimary": TEAMS[team].primaryColor,
      }}
    >
      <div className={styles.championsBannerLogo}>
        <Image
          src={TEAMS[team].logoFile}
          fill
          style={{ objectFit: "contain" }}
          alt="Winners Logo"
        />
      </div>
      <h1>{year} CMHL CHAMPIONS</h1>
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
}
