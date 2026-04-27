import BoxscoreClient from "@/components/BoxscoreClient/BoxscoreClient";
import { TEAM_TO_ABBREVIATION, TEAMS } from "@/utils/teams";
import { fetchGameSummaryData } from "@/utils/fetchGameSummaryData";
import { fetchGoalieGameData } from "@/utils/fetchGoalieGameData";
import { fetchSkaterGameData } from "@/utils/fetchSkaterGameData";
import { fetchGame } from "@/utils/fetchGame";

export default async function BoxscorePage({ params }) {
  const { seasonId, gameId } = params;

  const skaterData = await fetchSkaterGameData(seasonId);
  const goalieData = await fetchGoalieGameData(seasonId);
  const gameSummary = await fetchGameSummaryData(seasonId);
  const gameData = await fetchGame(seasonId, gameId);

  const home = gameData[0][5];
  const away = gameData[0][7];
  const homeAbbreviation = TEAM_TO_ABBREVIATION[home];
  const awayAbbreviation = TEAM_TO_ABBREVIATION[away];

  const filteredHomeSkaterData = skaterData.filter(
    (row) => row[1] === gameId && row[4] === homeAbbreviation,
  );
  const filteredHomeGoalieData = goalieData.filter(
    (row) => row[1] === gameId && row[4] === homeAbbreviation,
  );
  const filteredAwaySkaterData = skaterData.filter(
    (row) => row[1] === gameId && row[4] === awayAbbreviation,
  );
  const filteredAwayGoalieData = goalieData.filter(
    (row) => row[1] === gameId && row[4] === awayAbbreviation,
  );
  const filteredGameSummary = gameSummary.filter((row) => row[1] === gameId);

  function calcTeamScoringLine(abbreviation) {
    const result = [];

    for (var period = 1; period <= 3; period++) {
      const periodScoring = filteredGameSummary.filter(
        (row) =>
          row[2] === abbreviation &&
          row[3] === period.toString() &&
          row.length === 8,
      );
      result[period - 1] = periodScoring.length;
    }

    const final = gameData[0][abbreviation === homeAbbreviation ? 6 : 8];
    result.push(final);

    return result;
  }

  return (
    <BoxscoreClient
      gameNum={gameId}
      date={gameData[0][2]}
      time={gameData[0][4]}
      rink={gameData[0][3]}
      gameSummary={filteredGameSummary}
      homeTeam={home}
      homeScoringLine={calcTeamScoringLine(homeAbbreviation)}
      homeSkaterData={filteredHomeSkaterData}
      homeGoalieData={filteredHomeGoalieData}
      awayTeam={away}
      awayScoringLine={calcTeamScoringLine(awayAbbreviation)}
      awaySkaterData={filteredAwaySkaterData}
      awayGoalieData={filteredAwayGoalieData}
    />
  );
}
