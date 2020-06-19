import React, { useState } from "react";
import Scoreboard from "./ScoreBoard";
import countryScores from "./countryScores";

const App = () => {
  const [scoreOrder, setScoreOrder] = useState("Sort Ascending");
  // const [country, setCountry] = useState(countryScores);
  // console.log(`it is showing ${country}`);

  const handleButtonClick = () => {
    if (scoreOrder === "Sort Ascending") {
      countryScores.map((a) => a.scores.sort((a, b) => a.s - b.s));
      setScoreOrder("Sort Descending");
    } else {
      countryScores.map((a) => a.scores.sort((a, b) => b.s - a.s));
      setScoreOrder("Sort Ascending");
    }
  };

  // const handleInputChange = (e) => {
  //   const findCountry = e.target.value.toLowerCase();
  //   setCountry(
  //     countryScores.filter((item) =>
  //       item.name.toLowerCase().includes(findCountry)
  //     )
  //   );
  // };
  return (
    <div className="App">
      <h1>High Scores Per Country </h1>
      <button name="button" className="button" onClick={handleButtonClick}>
        {" "}
        {scoreOrder}
      </button>
      {/* <input
        type="text"
        className="input"
        onChange={handleInputChange}
        placeholder="find country"
      /> */}
      <Scoreboard />
    </div>
  );
};

export default App;
