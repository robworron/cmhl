import InfoTeamCard from "@/components/InfoTeamCard/InfoTeamCard";
import Image from "next/image";
import { TEAMS } from "@/utils/teams";
import styles from "./infoteams.module.css";

const currentTeams = [
  TEAMS["AXE"],
  TEAMS["BUL"],
  TEAMS["GUL"],
  TEAMS["JGR"],
  TEAMS["MDR"],
  TEAMS["RCK"],
  TEAMS["SEA"],
  TEAMS["TTU"],
];

export default function InfoTeams() {
  return (
    <section className={styles.infoteams}>
      <h2>2025-26 CMHL Teams</h2>
      <div className={styles.infoteamsTeams}>
        {currentTeams.map((team, index) => (
          <InfoTeamCard team={team} key={team.name} />
        ))}
      </div>
    </section>
  );
}
