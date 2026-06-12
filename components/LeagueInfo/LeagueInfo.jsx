import Image from "next/image";

import styles from "./leagueinfo.module.css";

const GALE_CENTER = "/assets/other/gale-centre.webp";

export default function LeagueInfo() {
  return (
    <div className={styles.leagueinfo}>
      <h1>Information</h1>
      <div className={styles.leagueinfoInformation}>
        <div className={styles.leagueinfoImage}>
          <Image
            src={GALE_CENTER}
            fill
            alt="Gale Centre Arena image"
            priority
          />
        </div>
        <table className={styles.leagueinfoTable}>
          <tbody>
            <tr>
              <td>League</td>
              <td>Canucks Men's Hockey League</td>
            </tr>
            <tr className={styles.leagueinfoRow}>
              <td>Inaugural Season</td>
              <td>2023</td>
            </tr>
            <tr className={styles.leagueinfoRow}>
              <td>Rink</td>
              <td>Gale Centre Arena</td>
            </tr>
            <tr className={styles.leagueinfoRow}>
              <td>Location</td>
              <td>5152 Thorold Stone Road, Niagara Falls, ON.</td>
            </tr>
            <tr className={styles.leagueinfoRow}>
              <td>Contact</td>
              <td>cmhlniagara@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
