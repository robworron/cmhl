import StatsClient from "@/components/StatsClient/StatsClient";
import { fetchStatsUpdatedNum } from "@/utils/fetchStatsUpdatedNum";

export const metadata = {
  title: "Stats",
  description:
    "CMHL current and historical stats for players and goalies. View and filter by team and year the stats for Niagara's best men's hockey league.",
};

export default async function StatsPage({ searchParams }) {
  const params = await searchParams;
  const year = params.year || "2026";
  const position = params.position || "skater";

  const date = await fetchStatsUpdatedNum();

  return (
    <StatsClient
      selectedYear={year}
      selectedPosition={position}
      updatedWeek={date}
    />
  );
}
