import Logo from "@/components/Logo/Logo";
import { getTeamLogoByAbbreviation } from "@/utils/formats";

import styles from "./teamboxscore.module.css";

const SKATER_HEADER = ["#", "Player", "G", "A", "P", "PIM", "PPP", "SHP"];
const GOALIE_HEADER = ["#", "Player", "W", "GA", "SV", "SV%", "GAA", "SO"];

export default function TeamBoxscore({ team, skaterData, goalieData }) {
  if (!team || !skaterData || !goalieData) return <h5>Loading...</h5>;
  return (
    <section className={styles.teamboxscore}>
      <div className={styles.teamboxscoreTeamInfo}>
        <Logo src={team.logoFile} width={60} height={50} alt={team.logoFile} />
        <h2>{team.name}</h2>
      </div>
      {/** SKATER SECTION */}
      <table>
        <thead>
          <tr>
            {SKATER_HEADER.map((stat, index) => (
              <th
                key={index}
                className={
                  index === 0
                    ? styles.teamboxscoreNumberCell
                    : index === 1
                    ? styles.teamboxscorePlayerCell
                    : styles.teamboxscoreStatCell
                }
              >
                {stat}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skaterData.map((player, row) => (
            <tr key={row}>
              <td>{player[3]}</td>
              <td>{player[2]}</td>
              <td>{player[6]}</td>
              <td>{player[7]}</td>
              <td>{Number(player[6]) + Number(player[7])}</td>
              <td>{player[8]}</td>
              <td>{player[9]}</td>
              <td>{player[10]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {/** GOALIE SECTION */}
      <table>
        <thead>
          <tr>
            {GOALIE_HEADER.map((stat, index) => (
              <th
                key={index}
                className={
                  index === 0
                    ? styles.teamboxscoreNumberCell
                    : index === 1
                    ? styles.teamboxscorePlayerCell
                    : styles.teamboxscoreStatCell
                }
              >
                {stat}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {goalieData.map((player, row) => (
            <tr key={row}>
              <td>{player[3]}</td>
              <td>{player[2]}</td>
              <td>{player[6] === "1" ? player[6] : "0"}</td>
              <td>{player[7]}</td>
              <td>{player[8]}</td>
              <td>{player[9]}</td>
              <td>{player[10]}</td>
              <td>{player[11]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
