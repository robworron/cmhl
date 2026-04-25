import config from "@/app/config";

export async function fetchStats(
  season = config.currentSeasonShort,
  position = "skater",
) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/stats/${position}/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${position} stats for ${season}`);
  }

  return res.json();
}
