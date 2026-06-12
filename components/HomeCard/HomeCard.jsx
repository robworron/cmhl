import Link from "next/link";
import styles from "./homecard.module.css";

export default function HomeCard({ title, description, icon, pageSrc }) {
  return (
    <Link href={pageSrc} className={styles.homecard}>
      <div className={styles.homecardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.homecardIcon}>{icon}</div>
      </div>
    </Link>
  );
}
