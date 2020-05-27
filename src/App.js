import React from "react";
import Scoreboard from "./ScoreBoard";
import countryScores from "./countryScores";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>High Scores Per Country </h1>
      {countryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((element) => (
          <Scoreboard name={element.name} scores={element.scores} />
        ))}
    </div>
  );
};

export default App;
