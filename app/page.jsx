import HomeCard from "@/components/HomeCard/HomeCard";
import HomeGallery from "@/components/HomeGallery/HomeGallery";
import HomeSchedule from "@/components/HomeSchedule/HomeSchedule";
import LeadersGoalies from "@/components/LeadersGoalies/LeadersGoalies";
import LeadersSkaters from "@/components/LeadersSkaters/LeadersSkaters";
import LeadersStandings from "@/components/LeadersStandings/LeadersStandings";
import NewsSection from "@/components/NewsSection/NewsSection";

import { fetchAbbreviatedSchedule } from "@/utils/fetchAbbreviatedSchedule";
import { fetchAbbreviatedStats } from "@/utils/fetchAbbreviatedStats";
import { fetchAbbreviatedStandings } from "@/utils/fetchAbbreviatedStandings";
import { fetchWeekNum } from "@/utils/getWeekNum";
import { NEWS } from "@/utils/news";
import { CONTACT_ICON, INFO_ICON, RULES_ICON } from "@/utils/icons";

import config from "./config";
import styles from "./home.module.css";

export default async function Home() {
  const scheduleData = await fetchAbbreviatedSchedule(
    config.currentSeasonShort,
    await fetchWeekNum(),
  );
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

  return (
    <div className={styles.home}>
      <NewsSection newsItems={NEWS} />
      <section className={styles.homeLeaders}>
        <LeadersSkaters list={skaterLeaders} />
        <LeadersGoalies list={goalieLeaders} />
        <LeadersStandings list={standingsLeaders} />
      </section>
      <section className={styles.homeContent}>
        <div className={styles.homeMobile}>
          <HomeSchedule games={scheduleData} />
          <HomeGallery />
          <div className={styles.homeCards}>
            <HomeCard
              title="Info"
              description="Learn more about the CMHL"
              icon={INFO_ICON}
              pageSrc="/information"
            />
            <HomeCard
              title="Rules"
              description="View league rules and regulations"
              icon={RULES_ICON}
              pageSrc="/rules"
            />
            <HomeCard
              title="Contact"
              description="Get in touch with the CMHL"
              icon={CONTACT_ICON}
              pageSrc="/contact"
            />
          </div>
        </div>
        <div className={styles.homeDesktop}>
          <div className={styles.homeDesktopLeft}>
            <HomeSchedule games={scheduleData} />
          </div>
          <div className={styles.homeDesktopRight}>
            <HomeGallery />
            <div className={styles.homeCards}>
              <HomeCard
                title="Info"
                description="Learn more about the CMHL"
                icon={INFO_ICON}
                pageSrc="/information"
              />
              <HomeCard
                title="Rules"
                description="View league rules and regulations"
                icon={RULES_ICON}
                pageSrc="/rules"
              />
              <HomeCard
                title="Contact"
                description="Get in touch with the CMHL"
                icon={CONTACT_ICON}
                pageSrc="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
