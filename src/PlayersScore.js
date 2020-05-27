import React from "react";

const PlayersScore = (props) => {
  return (
    <div>
      <span className="player-score-span">{props.element.s}</span>
    </div>
  );
};

export default PlayersScore;
