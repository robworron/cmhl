export async function fetchStats(season = "2025", position = "skater") {
  try {
    const res = await fetch(`/api/stats/${position}/${season}`);

    if (!res.ok)
      throw new Error(`Failed to fetch ${position} stats for ${season}`);

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
