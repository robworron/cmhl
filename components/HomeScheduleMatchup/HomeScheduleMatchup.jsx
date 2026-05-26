import Image from "next/image";
import styles from "./homeschedulematchup.module.css";

export default function HomeScheduleMatchup({ home, away, date, time }) {
  return (
    <div className={styles.homeschedulematchup}>
      <div className={styles.homeschedulematchupTeams}>
        <div className={styles.homeschedulematchupTeamInfo}>
          <div className={styles.homeschedulematchupImage}>
            <Image src={home.logoFile} alt={`${home.name} Logo`} fill />
          </div>
          <h4 className={styles.homeschedulematchupSmall}>
            {home.abbreviation}
          </h4>
          <h4 className={styles.homeschedulematchupLarge}>{home.name}</h4>
        </div>
        <div className={styles.homeschedulematchupTeamInfo}>
          <div className={styles.homeschedulematchupImage}>
            <Image src={away.logoFile} alt={`${away.name} Logo`} fill />
          </div>
          <h4 className={styles.homeschedulematchupSmall}>
            {away.abbreviation}
          </h4>
          <h4 className={styles.homeschedulematchupLarge}>{away.name}</h4>
        </div>
      </div>
      <div className={styles.homeschedulematchupGameInfo}>
        <h5>{date}</h5>
        <h5>{time}</h5>
      </div>
    </div>
  );
}
