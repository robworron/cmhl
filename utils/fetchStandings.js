export async function fetchStandings(season = "2025") {
  try {
    const res = await fetch(`/api/standings/${season}`);

    if (!res.ok) throw new Error(`Failed to fetch standings for ${season}`);

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
