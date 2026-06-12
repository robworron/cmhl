import Image from "next/image";
import styles from "./championicon.module.css";

export default function ChampionIcon({ year }) {
  return (
    <div className={styles.championicon}>
      <Image
        src={"/information/image-card-trophy.webp"}
        alt="League cup"
        fill
      />
      <p>{year}</p>
    </div>
  );
}
