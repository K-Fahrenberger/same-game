import React from "react";

const ScoreBoard = ({ score, topScores }) => {
  return (
    <div className="score-container">
      <h4>Score: {score}</h4>
      <h4>High Scores:</h4>
      <ul>
        {topScores.map((score, index) => (
          <li key={index}>{score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBoard;