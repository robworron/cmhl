import InfoTeams from "@/components/InfoTeams/InfoTeams";
import LeagueInfo from "@/components/LeagueInfo/LeagueInfo";
import PastChampions from "@/components/PastChampions/PastChampions";
import styles from "./information.module.css";

export const metadata = {
  title: "Information",
  description:
    "Information about the CMHL. Learn about the league, its past champions, and more.",
};

export default function InformationPage() {
  return (
    <div className={styles.information}>
      <div className={styles.informationBody}>
        <LeagueInfo />
        <InfoTeams />
        <PastChampions />
      </div>
    </div>
  );
}
