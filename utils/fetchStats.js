import config from "@/app/config";

export async function fetchStats(
  season = config.currentSeasonShort,
  position = "skater",
) {
  const res = await fetch(`/api/stats/${position}/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${position} stats for ${season}`);
  }

  return res.json();
}
