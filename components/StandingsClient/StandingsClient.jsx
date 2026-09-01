"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import Standings from "@/components/Standings/Standings";
import StandingsLegend from "@/components/StandingsLegend/StandingsLegend";
import Tiebreak from "@/components/Tiebreak/Tiebreak";
import styles from "./standingsclient.module.css";
import config from "@/app/config";

export default function StandingsClient({ standings, selectedYear }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isPlayoffs = searchParams.get("category") === "playoffs";

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`/standings?${params.toString()}`);
  }

  const handleYearChange = (year) => {
    const shortSeason = config.seasonLongToShort[year];
    updateParam("year", shortSeason);
  };

  const handleCategoryChange = (category) => {
    updateParam("category", category);
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
          <div className={styles.standingsclientButtons}>
            <Button
              primary={isPlayoffs}
              onClick={() => handleCategoryChange("season")}
              label="Season"
              size="Large"
            />
            <Button
              primary={!isPlayoffs}
              onClick={() => handleCategoryChange("playoffs")}
              label="Playoffs"
              size="Large"
            />
          </div>
        </div>
        {isPlayoffs && selectedYear !== config.currentSeasonShort ? (
          <div className={styles.standingsclientPlayoffsBracket}>
            <Image
              src={`/standings/${Number(selectedYear) + 1}.webp`}
              alt={`${Number(selectedYear) + 1} Playoffs Bracket`}
              fill
            />
          </div>
        ) : isPlayoffs &&
          selectedYear === config.currentSeasonShort &&
          (config.timeOfYear !== "regularSeason" ||
            config.timeOfYear !== "offseasonSchedule") ? (
          <h3>
            Playoff Bracket Coming Upon Completion of {config.currentSeasonLong}{" "}
            Regular Season
          </h3>
        ) : (
          <>
            <Standings standingsData={standings} />
            <StandingsLegend />
            <Tiebreak />
          </>
        )}
      </div>
    </div>
  );
}
