export async function fetchSkaterGameData(season = "2025") {
  try {
    const res = await fetch(`/api/gameData/skater/${season}`);

    if (!res.ok)
      throw new Error(`Failed to fetch skater game data for ${season}`);

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
