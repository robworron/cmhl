import StatsClient from "@/components/StatsClient/StatsClient";
import { fetchStats } from "@/utils/fetchStats";

export const metadata = {
  title: "Stats",
  description:
    "CMHL current and historical stats for players and goalies. View and filter by team and year the stats for Niagara's best men's hockey league.",
};

export default async function StatsPage({ searchParams }) {
  const params = await searchParams;
  const year = params.year || "2025";
  const category = params.category || "skater";

  const stats = await fetchStats(year, category);

  if (!stats) {
    return (
      <div>
        ERROR: Failed to load {category} stats for {year}
      </div>
    );
  }

  return (
    <StatsClient
      stats={stats}
      selectedYear={year}
      selectedCategory={category}
    />
  );
}
