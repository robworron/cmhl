import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const LEAGUE_LOGO = "/assets/logos/logo-transparent-white.webp";
const AXEMEN_LOGO = "/assets/logos/axemen-transparent.webp";
const GULLS_LOGO = "/assets/logos/gulls-transparent.webp";
const ICEMEN_LOGO = "/assets/logos/icemen-transparent.webp";
const JAGRBOMBS_LOGO = "/assets/logos/jagrbombs-transparent.webp";
const PISTOLS_LOGO = "/assets/logos/pistols-transparent.webp";
const ROCKIES_LOGO = "/assets/logos/rockies-transparent.webp";
const SEAMEN_LOGO = "/assets/logos/seamen-transparent.webp";
const TOONIE_TUESDAY_LOGO = "/assets/logos/toonietuesday-transparent.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <div className={styles.footerTeamLogos}>
          <Image
            src={AXEMEN_LOGO}
            alt="Axemen"
            className={styles.footerTeamLogo}
            width={80}
            height={60}
          />
          <Link href="https://www.instagram.com/gullsnia" target="_blank">
            <Image
              src={GULLS_LOGO}
              alt="Gulls"
              className={styles.footerTeamLogo}
              width={80}
              height={60}
            />
          </Link>
          <Image
            src={ICEMEN_LOGO}
            alt="Icemen"
            className={styles.footerTeamLogo}
            width={80}
            height={60}
          />
          <Link
            href="https://www.instagram.com/jagrbombsathletics"
            target="_blank"
          >
            <Image
              src={JAGRBOMBS_LOGO}
              alt="Jagrbombs"
              className={styles.footerTeamLogo}
              width={80}
              height={60}
            />
          </Link>
        </div>
        <Image
          src={LEAGUE_LOGO}
          alt="CMHL"
          className={styles.footerLeagueLogo}
          width={120}
          height={100}
        />
        <div className={styles.footerTeamLogos}>
          <Image
            src={PISTOLS_LOGO}
            alt="Pistols"
            className={styles.footerTeamLogo}
            width={80}
            height={60}
          />
          <Image
            src={ROCKIES_LOGO}
            alt="Rockies"
            className={styles.footerTeamLogo}
            width={80}
            height={60}
          />
          <Link href="https://www.instagram.com/seamen_hockey" target="_blank">
            <Image
              src={SEAMEN_LOGO}
              alt="Seamen"
              className={styles.footerTeamLogo}
              width={80}
              height={60}
            />
          </Link>
          <Link href="https://www.instagram.com/toonie.tuesday" target="_blank">
            <Image
              src={TOONIE_TUESDAY_LOGO}
              alt="Toonie Tuesday"
              className={styles.footerTeamLogo}
              width={80}
              height={60}
            />
          </Link>
        </div>
      </div>
      <p>est. 2023</p>
      <div className={styles.footerPageLinks}>
        <Link href="/">
          <h5>Home</h5>
        </Link>
        <Link href="/news">
          <h5>News</h5>
        </Link>
        <Link href="/schedule">
          <h5>Schedule</h5>
        </Link>
        <Link href="/standings">
          <h5>Standings</h5>
        </Link>
        <Link href="/stats">
          <h5>Stats</h5>
        </Link>
        <Link href="/information">
          <h5>Info</h5>
        </Link>
        <Link href="/rules">
          <h5>Rules</h5>
        </Link>
        <Link href="/gallery">
          <h5>Gallery</h5>
        </Link>
        <Link href="/contact">
          <h5>Contact</h5>
        </Link>
        <Link href="/privacy">
          <h5>Privacy</h5>
        </Link>
      </div>
      <h6>
        Website Designed & Developed by{" "}
        <Link href={"https://www.robworron.ca/"} target="__blank">
          Rob Worron
        </Link>
      </h6>
    </footer>
  );
}
