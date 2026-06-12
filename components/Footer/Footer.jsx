import Link from "next/link";
import styles from "./footer.module.css";

const LEAGUE_LOGO = "/assets/logos/logo-transparent-white.webp";
const AXEMEN_LOGO = "/assets/logos/axemen-transparent.png";
const BULLDOGS_LOGO = "/assets/logos/bulldogs-transparent.png";
const GULLS_LOGO = "/assets/logos/gulls-transparent.png";
const JAGRBOMBS_LOGO = "/assets/logos/jagrbombs-transparent.png";
const MIGHTY_DRUNKS_LOGO = "/assets/logos/mightydrunks-transparent.png";
const ROCKIES_LOGO = "/assets/logos/rockies-transparent.png";
const SEAMEN_LOGO = "/assets/logos/seamen-transparent.png";
const TOONIE_TUESDAY_LOGO = "/assets/logos/toonietuesday-transparent.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <div className={styles.footerTeamLogos}>
          <img
            src={AXEMEN_LOGO}
            alt="Axemen"
            className={styles.footerTeamLogo}
          />
          <img
            src={BULLDOGS_LOGO}
            alt="Bulldogs"
            className={styles.footerTeamLogo}
          />
          <a
            href="https://www.instagram.com/gullsnia"
            className={styles.footerTeamLogo}
          >
            <img
              src={GULLS_LOGO}
              alt="Gulls"
              className={styles.footerTeamLogo}
            />
          </a>
          <a
            href="https://www.instagram.com/jagr.bombss"
            className={styles.footerTeamLogo}
          >
            <img
              src={JAGRBOMBS_LOGO}
              alt="Jagrbombs"
              className={styles.footerTeamLogo}
            />
          </a>
        </div>
        <img src={LEAGUE_LOGO} alt="CMHL" className={styles.footerLeagueLogo} />
        <div className={styles.footerTeamLogos}>
          <img
            src={MIGHTY_DRUNKS_LOGO}
            alt="Mighty Drunks"
            className={styles.footerTeamLogo}
          />
          <img
            src={ROCKIES_LOGO}
            alt="Rockies"
            className={styles.footerTeamLogo}
          />
          <a
            href="https://www.instagram.com/seamen_hockey"
            className={styles.footerTeamLogo}
          >
            <img
              src={SEAMEN_LOGO}
              alt="Seamen"
              className={styles.footerTeamLogo}
            />
          </a>
          <a
            href="https://www.instagram.com/toonie.tuesday"
            className={styles.footerTeamLogo}
          >
            <img
              src={TOONIE_TUESDAY_LOGO}
              alt="Toonie Tuesday"
              className={styles.footerTeamLogo}
            />
          </a>
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
