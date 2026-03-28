import React from "react";
import Image from "next/image";

import { TEAMS } from "@/utils/teams";
import config from "@/app/config";

import styles from "./championsbanner.module.css";

const TROPHY = "/assets/other/league-cup-transparent.webp";

export default function ChampionsBanner() {
  return (
    <div
      className={styles.championsBanner}
      style={{
        "--colorPrimary": TEAMS[config.champion].primaryColor,
      }}
    >
      <div className={styles.championsBannerLogo}>
        <Image
          src={TEAMS[config.champion].logoFile}
          fill
          style={{ objectFit: "contain" }}
          alt="Winners Logo"
        />
      </div>
      <h1>2026 CMHL CHAMPIONS</h1>
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
