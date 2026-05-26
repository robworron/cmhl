import HomeScheduleMatchup from "@/components/HomeScheduleMatchup/HomeScheduleMatchup";
import { TEAMS, TEAM_TO_ABBREVIATION } from "@/utils/teams";
import styles from "./homeschedule.module.css";

export default async function HomeSchedule({ games }) {
  return (
    <div className={styles.homeschedule}>
      <h2>This Weeks Games</h2>
      <h6>
        Dates and times are subject to change. It is your responsibility to know
        when and where your team is playing.
      </h6>
      {games.map((game, index) => (
        <div key={index} className={styles.homescheduleGame}>
          {index === 0 ? null : (
            <span className={styles.homescheduleSeparator} />
          )}
          <HomeScheduleMatchup
            key={index}
            home={TEAMS[TEAM_TO_ABBREVIATION[game[5]]]}
            away={TEAMS[TEAM_TO_ABBREVIATION[game[7]]]}
            date={game[2]}
            time={game[4]}
          />
        </div>
      ))}
    </div>
  );
}
