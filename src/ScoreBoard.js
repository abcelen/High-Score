import React from "react";
import PlayersScore from "./PlayersScore"; //name and score
import countryScores from "./countryScores"; //data file

const Scoreboard = (props) => {
  countryScores.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {countryScores.map((country, index) => (
        <div className="scorelists" key={index}>
          <div className="countryname">High scores: {country.name}</div>
          <PlayersScore props={country.scores} />
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
