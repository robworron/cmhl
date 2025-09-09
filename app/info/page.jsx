import React from "react";

import LeagueInfo from "@/components/LeagueInfo/LeagueInfo";
import Rules from "@/components/Rules/Rules";

import styles from "./info.module.css";

export default function InfoPage() {
  return (
    <div className={styles.info}>
      <div className={styles.infoBody}>
        <LeagueInfo />
        <Rules />
      </div>
    </div>
  );
}
