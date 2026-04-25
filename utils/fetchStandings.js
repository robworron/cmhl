import config from "@/app/config";

export async function fetchStandings(season = config.currentSeasonShort) {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      : "";

  const res = await fetch(`${baseUrl}/api/standings/${season}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch standings for ${season}`);
  }

  return res.json();
}
