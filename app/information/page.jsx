import LeagueInfo from "@/components/LeagueInfo/LeagueInfo";
import Rules from "@/components/Rules/Rules";
import styles from "./information.module.css";

export const metadata = {
  title: "Information",
  description:
    "Information about the CMHL. Learn about the league and its rules.",
};

export default function InformationPage() {
  return (
    <div className={styles.information}>
      <div className={styles.informationBody}>
        <LeagueInfo />
        <Rules />
        {
          //<PastChampions />
        }
      </div>
    </div>
  );
}
