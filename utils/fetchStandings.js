import config from "@/app/config";

export async function fetchStandings(season = config.currentSeasonShort) {
  const res = await fetch(`/api/standings/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch standings for ${season}`);
  }

  return res.json();
}
