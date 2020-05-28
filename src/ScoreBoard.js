import React from "react";
import PlayersScore from "./PlayersScore"; //name and score
import countryScores from "./countryScores"; //data file

const Scoreboard = (props) => {
  countryScores.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {countryScores.map((data, index) => (
        <div className="board" key={index}>
          <div className="countryname">HIGH SCORES: {data.name}</div>
          <PlayersScore props={data.scores} />
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
