import styles from "./gamesummary.module.css";

export default function GameSummary({ gameData }) {
  const period1 = gameData.filter((data) => data[3] === "1");
  const period2 = gameData.filter((data) => data[3] === "2");
  const period3 = gameData.filter((data) => data[3] === "3");

  return (
    <div className={styles.gamesummary}>
      <h4>
        <b>Game Summary</b>
      </h4>
      <div className={styles.gamesummaryData}>
        <h5>
          <b>1st Period</b>
        </h5>
        {period1.length === 0 ? (
          <h6>No Scoring</h6>
        ) : (
          period1.map((row, index) =>
            row[4] ? (
              <h6 key={index}>
                {row[2]} GOAL -- Scorer: {row[4]}, Assist: {row[5]}, Assist:{" "}
                {row[5]} ({row[7]})
              </h6>
            ) : (
              <h6 key={index}>
                {row[2]} PEN -- {row[8]} ({row[9]} min)
              </h6>
            )
          )
        )}
        <h5>
          <b>2nd Period</b>
        </h5>
        {period2.length === 0 ? (
          <h6>No Scoring</h6>
        ) : (
          period2.map((row, index) =>
            row[4] ? (
              <h6 key={index}>
                {row[2]} GOAL -- Scorer: {row[4]}, Assist: {row[5]}, Assist:{" "}
                {row[5]} ({row[7]})
              </h6>
            ) : (
              <h6 key={index}>
                {row[2]} PEN -- {row[8]} ({row[9]} min)
              </h6>
            )
          )
        )}
        <h5>
          <b>3rd Period</b>
        </h5>
        {period3.length === 0 ? (
          <h6>No Scoring</h6>
        ) : (
          period3.map((row, index) =>
            row[4] ? (
              <h6 key={index}>
                {row[2]} GOAL -- Scorer: {row[4]}, Assist: {row[5]}, Assist:{" "}
                {row[5]} ({row[7]})
              </h6>
            ) : (
              <h6 key={index}>
                {row[2]} PEN -- {row[8]} ({row[9]} min)
              </h6>
            )
          )
        )}
      </div>
    </div>
  );
}
