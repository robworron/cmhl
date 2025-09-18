export async function fetchGoalieGameData(season = "2025") {
  try {
    const res = await fetch(`/api/gameData/goalie/${season}`);

    if (!res.ok)
      throw new Error(`Failed to fetch goalie game data for ${season}`);

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
