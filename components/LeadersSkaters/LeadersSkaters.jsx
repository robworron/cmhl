import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { TEAMS } from "@/utils/teams";
import styles from "./leadersskaters.module.css";

export default function LeadersSkaters({ list }) {
  return (
    <div className={styles.leadersskaters}>
      <div className={styles.leadersskatersHeader}>
        <h3>Points</h3>
      </div>
      <div className={`${styles.leadersskatersSubHeader} ${styles.bold}`}>
        <p className={styles.center}>Team</p>
        <p className={styles.center}>Name</p>
        <p className={styles.center}>Pts</p>
      </div>
      {list.map((skater, index) => (
        <div key={index} className={styles.leadersskatersTeam}>
          <div className={styles.teamCell}>
            <p className={styles.rank}>{index + 1}</p>
            <Image
              src={TEAMS[skater.team].logoFile}
              alt={skater.team}
              width={30}
              height={30}
            />
            <p>{skater.team}</p>
          </div>
          <p className={styles.center}>{skater.name}</p>
          <p className={`${styles.center} ${styles.bold}`}>{skater.points}</p>
        </div>
      ))}
      <Link href="/stats" className={styles.button}>
        <Button label="See All" size="Medium" />
      </Link>
    </div>
  );
}
