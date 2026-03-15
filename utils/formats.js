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
