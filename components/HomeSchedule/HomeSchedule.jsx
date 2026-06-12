import HomeScheduleMatchup from "@/components/HomeScheduleMatchup/HomeScheduleMatchup";
import { TEAMS, TEAM_TO_ABBREVIATION } from "@/utils/teams";
import config from "@/app/config";
import styles from "./homeschedule.module.css";

export default async function HomeSchedule({ games }) {
  return (
    <div className={styles.homeschedule}>
      <h2>This Weeks Games</h2>
      <h6>
        Dates and times are subject to change. It is your responsibility to know
        when and where your team is playing.
      </h6>
      {config.timeOfYear === "offseasonRegister" ? (
        <>
          <h5>
            No games scheduled at this time. Check back at a later date for next
            year's schedule.
          </h5>
          <h3>Offseason Registration</h3>
          <h5>
            <a href="mailto:cmhlniagara@gmail.com">cmhlniagara@gmail.com</a>
          </h5>
        </>
      ) : (
        games.map((game, index) => (
          <div key={index} className={styles.homescheduleGame}>
            {index === 0 ? null : (
              <span className={styles.homescheduleSeparator} />
            )}
            <HomeScheduleMatchup
              key={index}
              home={TEAMS[TEAM_TO_ABBREVIATION[game.homeTeam]]}
              away={TEAMS[TEAM_TO_ABBREVIATION[game.awayTeam]]}
              date={game.date}
              time={game.time}
            />
          </div>
        ))
      )}
    </div>
  );
}
