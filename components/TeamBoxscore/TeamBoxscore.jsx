import Logo from "@/components/Logo/Logo";

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
              <td>{player.number}</td>
              <td>{player.player}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{Number(player.goals) + Number(player.assists)}</td>
              <td>{player.penaltyMinutes}</td>
              <td>{player.powerplayPoints}</td>
              <td>{player.shorthandedPoints}</td>
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
              <td>{player.number}</td>
              <td>{player.player}</td>
              <td>{player.wins === "1" ? player.wins : "0"}</td>
              <td>{player.goalsAgainst}</td>
              <td>{player.saves}</td>
              <td>{player.savePercentage}</td>
              <td>{player.goalsAgainstAverage}</td>
              <td>{player.shutouts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
