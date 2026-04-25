import config from "@/app/config";

export async function fetchSchedule(season = config.currentSeasonShort) {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      : "";

  const res = await fetch(`${baseUrl}/api/schedule/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch schedule for ${season}`);
  }

  return res.json();
}
