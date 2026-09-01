import { TEAMS, TEAM_TO_ABBREVIATION } from "./teams";

export const getTeamLogoByAbbreviation = (teamAbbreviation) => {
  return (
    TEAMS[teamAbbreviation]?.logoFile ||
    "/assets/logos/logo-transparent-white.webp"
  );
};

export const getTeamLogoByName = (teamName) => {
  return (
    TEAMS[TEAM_TO_ABBREVIATION[teamName]]?.logoFile ||
    "/assets/logos/logo-transparent-white.webp"
  );
};

/** Format Types:
 * full -- Monday, January 1, 2000
 * scoreboard -- Mon, Jan 1
 * schedule -- January 1
 */
export const formatDate = (date, formatType = "full") => {
  if (typeof date !== "string") return date;

  const parts = date.split(",").map((p) => p.trim());

  const [dow, doy, year] = parts;

  if (formatType === "scoreboard") {
    const dowShort = dow?.slice(0, 3) ?? "";
    const monthShort = doy?.slice(0, 3) ?? "";
    const dayNum = doy?.split(" ")[1] ?? "";

    return `${dowShort} ${monthShort} ${dayNum}`;
  }

  if (formatType === "schedule") {
    return doy ?? "";
  }

  return date;
};
