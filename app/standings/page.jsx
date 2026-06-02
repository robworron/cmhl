import StandingsClient from "@/components/StandingsClient/StandingsClient";
import { fetchStandings } from "@/utils/fetchStandings";

export const metadata = {
  title: "Standings",
  description:
    "Current CMHL standings. Track team rankings in Niagara's most competitive men's hockey league.",
};

export default async function StandingsPage({ searchParams }) {
  const params = await searchParams;
  const year = params.year || "2025";
  const category = params.category || "season";

  const standings = await fetchStandings(year);

  if (!standings) {
    return <div>ERROR: Failed to load standings for {year}</div>;
  }

  return (
    <StandingsClient
      standings={standings}
      selectedYear={year}
      category={category}
    />
  );
}
