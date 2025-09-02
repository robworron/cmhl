export async function fetchSchedule(season = "2025") {
  try {
    const res = await fetch(`/api/schedule/${season}`);

    if (!res.ok) throw new Error(`Failed to fetch schedule for ${season}`);

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
