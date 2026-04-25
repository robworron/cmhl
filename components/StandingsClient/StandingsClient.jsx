"use client";

import { useRouter, useSearchParams } from "next/navigation";

import Dropdown from "@/components/Dropdown/Dropdown";
import Standings from "@/components/Standings/Standings";
import StandingsLegend from "@/components/StandingsLegend/StandingsLegend";
import Tiebreak from "@/components/Tiebreak/Tiebreak";
import styles from "./standingsclient.module.css";
import config from "@/app/config";

export default function StandingsClient({ standings, selectedYear }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`/standings?${params.toString()}`);
  }

  const handleYearChange = (year) => {
    const shortSeason = config.seasonLongToShort[year];
    updateParam("year", shortSeason);
  };

  return (
    <div className={styles.standingsclient}>
      <div className={styles.standingsclientBody}>
        <div className={styles.standingsclientHeader}>
          <h1>Standings</h1>
          <Dropdown
            onSelect={handleYearChange}
            defaultValue={
              config.seasonShortToLong[selectedYear] || config.currentSeasonLong
            }
            options={config.seasons}
          />
        </div>
        <Standings standingsData={standings} />
        <StandingsLegend />
        <Tiebreak />
      </div>
    </div>
  );
}
