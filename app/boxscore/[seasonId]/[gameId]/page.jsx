import BoxscoreClient from "@/components/BoxscoreClient/BoxscoreClient";
import { TEAM_TO_ABBREVIATION } from "@/utils/teams";
import { fetchGameSummaryData } from "@/utils/fetchGameSummaryData";
import { fetchGoalieGameData } from "@/utils/fetchGoalieGameData";
import { fetchSkaterGameData } from "@/utils/fetchSkaterGameData";
import { fetchGame } from "@/utils/fetchGame";
import config from "@/app/config";

export async function generateMetadata({ params }) {
  const { seasonId, gameId } = await params;
  const gameData = await fetchGame(seasonId, gameId);

  if (!gameData || !gameData.homeTeam) {
    return {
      title: "Boxscore",
      alternates: { canonical: `/boxscore/${seasonId}/${gameId}` },
    };
  }

  return {
    title: `${gameData.awayTeam} vs. ${gameData.homeTeam}`,
    description: `Boxscore and player stats for the ${gameData.awayTeam} vs. ${gameData.homeTeam} CMHL game on ${gameData.date}.`,
    alternates: { canonical: `/boxscore/${seasonId}/${gameId}` },
    robots: { index: false, follow: true },
  };
}

export default async function BoxscorePage({ params }) {
  const { seasonId, gameId } = params;

  const skaterData = await fetchSkaterGameData(seasonId);
  const goalieData = await fetchGoalieGameData(seasonId);
  const gameSummary = await fetchGameSummaryData(seasonId);
  const gameData = await fetchGame(seasonId, gameId);
  const home = gameData.homeTeam;
  const away = gameData.awayTeam;
  const homeAbbreviation = TEAM_TO_ABBREVIATION[home];
  const awayAbbreviation = TEAM_TO_ABBREVIATION[away];

  const filteredHomeSkaterData = skaterData.filter(
    (row) => row.gameId === gameId && row.team === homeAbbreviation,
  );
  const filteredHomeGoalieData = goalieData.filter(
    (row) => row.gameId === gameId && row.team === homeAbbreviation,
  );
  const filteredAwaySkaterData = skaterData.filter(
    (row) => row.gameId === gameId && row.team === awayAbbreviation,
  );
  const filteredAwayGoalieData = goalieData.filter(
    (row) => row.gameId === gameId && row.team === awayAbbreviation,
  );

  const filteredGameSummary = gameSummary.filter(
    (row) => row.gameId === gameId,
  );

  function calcTeamScoringLine(abbreviation) {
    const result = [];

    for (var period = 1; period <= 3; period++) {
      const periodScoring = filteredGameSummary.filter(
        (row) =>
          row.team === abbreviation &&
          row.period === period.toString() &&
          row.penalty === null,
      );
      result[period - 1] = periodScoring.length;
    }

    const final =
      gameData[abbreviation === homeAbbreviation ? "homeScore" : "awayScore"];
    result.push(final);

    return result;
  }

  function gameType() {
    const season = config.seasonShortToLong[seasonId];
    const result = config.gameTypeMappings?.[season]?.[gameId] ?? "regular";
    return result;
  }

  return (
    <BoxscoreClient
      season={seasonId}
      gameNum={gameId}
      date={gameData.date}
      time={gameData.time}
      rink={gameData.rink}
      gameSummary={filteredGameSummary}
      homeTeam={home}
      homeScoringLine={calcTeamScoringLine(homeAbbreviation)}
      homeSkaterData={filteredHomeSkaterData}
      homeGoalieData={filteredHomeGoalieData}
      awayTeam={away}
      awayScoringLine={calcTeamScoringLine(awayAbbreviation)}
      awaySkaterData={filteredAwaySkaterData}
      awayGoalieData={filteredAwayGoalieData}
      gameType={gameType()}
    />
  );
}
