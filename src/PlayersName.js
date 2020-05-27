import React from "react";

const PlayersName = (props) => {
  return (
    <div>
      <span className="player-name">{props.element.n.toUpperCase()}</span>
    </div>
  );
};

export default PlayersName;
