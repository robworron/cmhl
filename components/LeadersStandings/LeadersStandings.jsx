import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { TEAMS, TEAM_TO_ABBREVIATION } from "@/utils/teams";
import styles from "./leadersstandings.module.css";

export default function LeadersStandings({ list }) {
  return (
    <div className={styles.leadersstandings}>
      <div className={styles.leadersstandingsHeader}>
        <h3>Standings</h3>
      </div>
      <div className={`${styles.leadersstandingsSubHeader} ${styles.bold}`}>
        <p className={styles.center}>Team</p>
        <p className={styles.center}>W</p>
        <p className={styles.center}>L</p>
        <p className={styles.center}>T</p>
        <p className={styles.center}>Pts</p>
      </div>
      {list.map((team, index) => (
        <div className={styles.leadersstandingsTeam}>
          <div className={styles.teamCell}>
            <p className={styles.rank}>{index + 1}</p>
            <Image
              src={TEAMS[TEAM_TO_ABBREVIATION[team.teamName]].logoFile}
              alt={team.teamName}
              width={30}
              height={30}
            />
            <p>{TEAM_TO_ABBREVIATION[team.teamName]}</p>
          </div>
          <p className={styles.center}>{team.wins}</p>
          <p className={styles.center}>{team.losses}</p>
          <p className={styles.center}>{team.ties}</p>
          <p className={`${styles.center} ${styles.bold}`}>{team.points}</p>
        </div>
      ))}
      <Link href="/standings" className={styles.button}>
        <Button label="See All" size="Medium" />
      </Link>
    </div>
  );
}
