import React from "react";
import Image from "next/image";

import { TEAMS } from "@/utils/teams";
import config from "@/app/config";

import styles from "./championsbanner.module.css";

const TROPHY = "/assets/other/league-cup-header.webp";

export default function ChampionsBanner() {
  return (
    <div className={styles.championsBanner}>
      <div className={styles.championsBannerNextYear}>
        <h3>REGISTER FOR NEXT YEAR</h3>
        <h5>
          <a href="mailto:cmhlniagara@gmail.com">cmhlniagara@gmail.com</a>
        </h5>
      </div>
      <div
        className={styles.championsBannerChampion}
        style={{ "--champion-color": TEAMS[config.champion].primaryColor }}
      >
        <div className={styles.championsBannerLogo}>
          <Image
            src={TEAMS[config.champion].logoFile}
            alt="CMHL Champions Logo"
            fill
          />
        </div>
        <div className={styles.championsBannerTrophy}>
          <Image src={TROPHY} alt="CMHL Cup Image" fill />
        </div>
        <div className={styles.championsBannerText}>2026 Champions</div>
      </div>
    </div>
  );
}
