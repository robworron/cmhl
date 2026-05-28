import Image from "next/image";
import { PAST_CHAMPIONS, TEAMS, TEAM_TO_ABBREVIATION } from "@/utils/teams";
import styles from "./pastchampions.module.css";

export default function PastChampions() {
  const HEADER = ["Season", "Champion", "Runner-Up", "Score"];
  return (
    <section className={styles.pastchampions}>
      <h2>Past Champions</h2>
      <table className={styles.pastchampionsTable}>
        <thead>
          <tr>
            {HEADER.map((headerData, index) => (
              <th key={index}>{headerData}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PAST_CHAMPIONS.map((season, index) => (
            <tr key={index}>
              <td>
                <h6>{season.year}</h6>
              </td>
              <td>
                <div className={styles.pastchampionsTeam}>
                  <div className={styles.pastchampionsTeamLogo}>
                    <Image
                      src={
                        TEAMS[TEAM_TO_ABBREVIATION[season.champion]].logoFile
                      }
                      alt={`${season.champion} Logo`}
                      fill
                    />
                  </div>
                  <h5>{season.champion}</h5>
                  <h6>{`(${season.championRecord})`}</h6>
                </div>
              </td>
              <td>
                <div className={styles.pastchampionsTeam}>
                  <div className={styles.pastchampionsTeamLogo}>
                    <Image
                      src={
                        TEAMS[TEAM_TO_ABBREVIATION[season.runnerup]].logoFile
                      }
                      alt={`${season.runnerup} Logo`}
                      fill
                    />
                  </div>
                  <h5>{season.runnerup}</h5>
                  <h6>{`(${season.runnerupRecord})`}</h6>
                </div>
              </td>
              <td>
                <h6>{season.score}</h6>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
