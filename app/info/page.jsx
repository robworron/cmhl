import React from "react";
import { InfoTable } from "../../components/InfoTable/InfoTable";
import { Rules } from "../../components/Rules/Rules";

import styles from "./info.module.css";

export default function InfoPage() {
  return (
    <div className={styles.info}>
      <div className={styles.infoBody}>
        <InfoTable />
        <Rules />
      </div>
    </div>
  );
}
