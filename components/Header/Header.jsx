import React from "react";

import Scoreboard from "@/components/Scoreboard/Scoreboard";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/** <ChampionsBanner /> */}
      <Scoreboard />
    </header>
  );
}
