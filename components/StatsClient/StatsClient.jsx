"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import GoalieStats from "@/components/GoalieStats/GoalieStats";
import SkaterStats from "@/components/SkaterStats/SkaterStats";
import StatsLegend from "@/components/StatsLegend/StatsLegend";
import config from "@/app/config";
import styles from "./statsclient.module.css";

export default function StatsClient({
  selectedYear,
  selectedPosition,
  updatedWeek,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [players, setPlayers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("All Teams");

  const sentinelRef = useRef(null);
  const offsetRef = useRef(0);
  const loadingRef = useRef(false);
  const genRef = useRef(0); // request generation/version

  async function fetchChunk(offsetValue) {
    const myGen = genRef.current;

    loadingRef.current = true;
    setLoading(true);

    const teamParam =
      selectedTeam === "All Teams"
        ? ""
        : `&team=${encodeURIComponent(selectedTeam)}`;

    try {
      const response = await fetch(
        `/api/stats?year=${selectedYear}&position=${selectedPosition}&offset=${offsetValue}&limit=30${teamParam}`,
      );

      const data = await response.json();

      if (genRef.current !== myGen) return;

      setPlayers((prev) => [...prev, ...data.players]);
      setHasMore(data.hasMore);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      if (genRef.current === myGen) {
        loadingRef.current = false;
        setLoading(false);
      }
    }
  }

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`/stats?${params.toString()}`);
  }

  function handlePositionChange(position) {
    updateParam("position", position);
  }

  function handleYearChange(year) {
    const shortSeason = config.seasonLongToShort[year];
    updateParam("year", shortSeason);
    setSelectedTeam("All Teams");
  }

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  useEffect(() => {
    genRef.current += 1;
    setPlayers([]);
    setHasMore(true);
    offsetRef.current = 0;

    fetchChunk(0);
  }, [selectedYear, selectedPosition, selectedTeam]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];

      if (first.isIntersecting && hasMore && !loadingRef.current) {
        const nextOffset = offsetRef.current + 30;
        offsetRef.current = nextOffset;
        fetchChunk(nextOffset);
      }
    });

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [hasMore, selectedYear, selectedPosition, selectedTeam]);

  return (
    <div className={styles.statsClient}>
      <div className={styles.statsClientBody}>
        <div className={styles.statsClientHeader}>
          <h1>Stats</h1>

          <div className={styles.statsClientDropdowns}>
            <Dropdown
              onSelect={handleYearChange}
              defaultValue={
                config.seasonShortToLong[selectedYear] ||
                config.currentSeasonLong
              }
              options={config.seasons.filter((season) => season !== "2023-24")}
            />
            <Dropdown
              onSelect={handleTeamChange}
              defaultValue={selectedTeam}
              options={
                config.teamsMappings[
                  config.seasonShortToLong[selectedYear] ||
                    config.currentSeasonLong
                ]
              }
            />
          </div>

          <div className={styles.statsClientButtons}>
            <Button
              primary={selectedPosition !== "skater"}
              label="Skaters"
              size={"Large"}
              onClick={() => handlePositionChange("skater")}
            />
            <Button
              primary={selectedPosition !== "goalie"}
              label="Goalies"
              size={"Large"}
              onClick={() => handlePositionChange("goalie")}
            />
          </div>

          {config.timeOfYear === "regularSeason" && (
            <p>{`Stats Updated as of Week ${updatedWeek}`}</p>
          )}
        </div>

        {selectedPosition === "skater" && (
          <>
            <SkaterStats
              data={players}
              year={selectedYear}
              team={selectedTeam}
            />
            <div ref={sentinelRef} style={{ height: "1px" }} />
            {loading && <p>Loading…</p>}
          </>
        )}

        {selectedPosition === "goalie" && (
          <>
            <GoalieStats
              data={players}
              year={selectedYear}
              team={selectedTeam}
            />
            <div ref={sentinelRef} style={{ height: "1px" }} />
            {loading && <p>Loading…</p>}
          </>
        )}

        <StatsLegend />
      </div>
    </div>
  );
}
