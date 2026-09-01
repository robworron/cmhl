import InfoTeamCard from "@/components/InfoTeamCard/InfoTeamCard";
import { TEAMS } from "@/utils/teams";
import styles from "./infoteams.module.css";

const currentTeams = [
  TEAMS["AXE"],
  TEAMS["GUL"],
  TEAMS["ICE"],
  TEAMS["JGR"],
  TEAMS["PST"],
  TEAMS["RCK"],
  TEAMS["SEA"],
  TEAMS["TTU"],
];

const historicalTeams = [TEAMS["BUL"], TEAMS["MDR"], TEAMS["WDK"]];

export default function InfoTeams() {
  return (
    <>
      <section className={styles.infoteams}>
        <h2>2026-27 CMHL Teams</h2>
        <div className={styles.infoteamsTeams}>
          {currentTeams.map((team, _) => (
            <InfoTeamCard team={team} key={team.name} />
          ))}
        </div>
      </section>
      <section>
        <h2>Historical Teams</h2>
        <div className={styles.infoteamsTeams}>
          {historicalTeams.map((team, _) => (
            <InfoTeamCard team={team} key={team.name} />
          ))}
        </div>
      </section>
    </>
  );
}
