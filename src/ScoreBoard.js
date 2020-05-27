import React from "react";
import PlayersName from "./PlayersName";
import PlayersScore from "./PlayersScore";

const Scoreboard = (props) => {
  return (
    <div className="score-board">
      <div>
        <h1> HIGH SCORES: {props.name} </h1>
      </div>
      <div className="scorer-names">
        <div className="score-list-name">
          {props.countryScores.map((element) => (
            <PlayersName element={element} />
          ))}
        </div>
        <div className="score-list-score">
          {props.countryScores.map((element) => (
            <PlayersScore element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
