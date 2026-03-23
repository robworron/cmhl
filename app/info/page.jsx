import React from "react";

import LeagueInfo from "@/components/LeagueInfo/LeagueInfo";
import PastChampions from "@/components/PastChampions/PastChampions";
import Rules from "@/components/Rules/Rules";

import styles from "./info.module.css";

export default function InfoPage() {
  return (
    <div className={styles.info}>
      <div className={styles.infoBody}>
        <LeagueInfo />
        <Rules />
        {
          //<PastChampions />
        }
      </div>
    </div>
  );
}
