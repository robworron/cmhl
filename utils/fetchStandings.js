export async function fetchStandings(season) {
  const res = await fetch(`http://localhost:3000/api/standings/${season}`, {
    next: { revalidate: 86400 },
  });

  return res.json();
}
