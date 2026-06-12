import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { TEAMS } from "@/utils/teams";
import styles from "./leadersgoalies.module.css";

export default function LeadersGoalies({ list }) {
  return (
    <div className={styles.leadersgoalies}>
      <div className={styles.leadersgoaliesHeader}>
        <h3>Wins</h3>
      </div>
      <div className={`${styles.leadersgoaliesSubHeader} ${styles.bold}`}>
        <p className={styles.center}>Team</p>
        <p className={styles.center}>Name</p>
        <p className={styles.center}>Wins</p>
      </div>
      {list.map((goalie, index) => (
        <div key={index} className={styles.leadersgoaliesTeam}>
          <div className={styles.teamCell}>
            <p className={styles.rank}>{index + 1}</p>
            <Image
              src={TEAMS[goalie.team].logoFile}
              alt={goalie.team}
              width={36}
              height={30}
            />
            <p>{goalie.team}</p>
          </div>
          <p className={styles.center}>{goalie.name}</p>
          <p className={`${styles.center} ${styles.bold}`}>{goalie.wins}</p>
        </div>
      ))}
      <Link href="/stats?position=goalie" className={styles.button}>
        <Button label="See All" size="Medium" />
      </Link>
    </div>
  );
}
