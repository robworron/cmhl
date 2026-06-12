import Image from "next/image";
import Link from "next/link";
import ChampionIcon from "@/components/ChampionIcon/ChampionIcon";
import { INSTAGRAM_ICON } from "@/utils/icons";
import styles from "./infoteamcard.module.css";

export default function InfoTeamCard({ team }) {
  return (
    <div key={team.name} className={styles.infoteamcard}>
      <div className={styles.infoteamcardLeft}>
        <div className={styles.infoteamcardLogo}>
          <Image src={team.logoFile} alt={`${team.name} Logo`} fill />
        </div>
        <div className={styles.infoteamcardRight}>
          <div>
            <h4>{team.name}</h4>
            <h6>{team.inauguralSeason}</h6>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {team.championships.map((year, i) => (
              <ChampionIcon key={year} year={year} />
            ))}
          </div>
        </div>
      </div>
      {team.instagram && (
        <div className={styles.infoteamcardInstagramLogo}>
          <Link href={team.instagram} target="#">
            {INSTAGRAM_ICON}
          </Link>
        </div>
      )}
    </div>
  );
}
