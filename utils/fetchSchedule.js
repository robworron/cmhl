import config from "@/app/config";

export async function fetchSchedule(season = config.currentSeasonShort) {
  const res = await fetch(`/api/schedule/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule for ${season}`);
  }

  return res.json();
}
