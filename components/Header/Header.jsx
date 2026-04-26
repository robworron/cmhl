import Scoreboard from "@/components/Scoreboard/Scoreboard";
import styles from "./header.module.css";

export default function Header({ scheduleData, weekNum }) {
  return (
    <header className={styles.header}>
      <Scoreboard scheduleData={scheduleData} weekNum={weekNum} />
    </header>
  );
}
