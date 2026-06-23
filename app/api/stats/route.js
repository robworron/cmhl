import { fetchStats } from "@/utils/fetchStats";
import { TEAM_TO_ABBREVIATION } from "@/utils/teams";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const year = searchParams.get("year");
  const position = searchParams.get("position");
  const team = searchParams.get("team");
  const offset = Number(searchParams.get("offset") || 0);
  const limit = Number(searchParams.get("limit") || 30);

  let stats = await fetchStats(year, position);

  if (team && team !== "All Teams") {
    const abbr = TEAM_TO_ABBREVIATION[team];
    if (!abbr) {
      stats = [];
    } else {
      stats = stats.filter((row) => row.team === abbr);
    }
  }

  const slice = stats.slice(offset, offset + limit);
  const hasMore = offset + limit < stats.length;

  return Response.json({
    players: slice,
    hasMore,
  });
}
