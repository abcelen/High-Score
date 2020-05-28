import React from "react";

const PlayersScore = ({ props }) => {
  return (
    <div>
      {props.map((score, index) => (
        <div className="scorelist" key={index}>
          <div className="scorename">{score.n}</div>
          <div className="score">{score.s}</div>
        </div>
      ))}
    </div>
  );
};

export default PlayersScore;
