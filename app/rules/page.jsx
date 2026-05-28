import Rules from "@/components/Rules/Rules";
import styles from "./rulespage.module.css";

export const metadata = {
  title: "Rules",
  description: "Rules and policies for participation in the CMHL.",
};

export default function RulesPage() {
  return (
    <div className={styles.rulespage}>
      <Rules />
    </div>
  );
}
