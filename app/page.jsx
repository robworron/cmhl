import LeadersGoalies from "@/components/LeadersGoalies/LeadersGoalies";
import LeadersSkaters from "@/components/LeadersSkaters/LeadersSkaters";
import LeadersStandings from "@/components/LeadersStandings/LeadersStandings";
import NewsSection from "@/components/NewsSection/NewsSection";

import { fetchAbbreviatedStats } from "@/utils/fetchAbbreviatedStats";
import { fetchAbbreviatedStandings } from "@/utils/fetchAbbreviatedStandings";
import config from "./config";
import { NEWS } from "@/utils/news";

import styles from "./home.module.css";

export default async function Home() {
  const skaterData = await fetchAbbreviatedStats(
    config.currentSeasonShort,
    "skater",
  );
  const goalieData = await fetchAbbreviatedStats(
    config.currentSeasonShort,
    "goalie",
  );
  const standingsData = await fetchAbbreviatedStandings(
    config.currentSeasonShort,
  );

  const skaterLeaders = skaterData.map((item) => ({
    name: item[1],
    team: item[2],
    points: item[6],
  }));

  const goalieLeaders = goalieData.map((item) => ({
    name: item[1],
    team: item[2],
    wins: item[4],
  }));

  const standingsLeaders = standingsData.map((item) => ({
    teamName: item[1],
    wins: item[2],
    losses: item[3],
    ties: item[4],
    points: item[5],
  }));

  console.log("Skater Leaders:", skaterLeaders);
  console.log("Goalie Leaders:", goalieLeaders);
  console.log("Standings:", standingsLeaders);

  return (
    <div className={styles.home}>
      <NewsSection newsItems={NEWS} />
      <section className={styles.homeLeaders}>
        <LeadersSkaters list={skaterLeaders} />
        <LeadersGoalies list={goalieLeaders} />
        <LeadersStandings list={standingsLeaders} />
      </section>
    </div>
  );
}
