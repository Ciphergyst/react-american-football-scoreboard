//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, updateHomeScore] = useState(0);
  let [awayScore, updateAwayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

          

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => updateHomeScore(homeScore + 6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => updateHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = {() => updateHomeScore(homeScore + 1)} className="homeButtons__extraPoint">Home Extra Point</button>
          <button onClick = {() => updateHomeScore(0)} className="homeButtons__reset">Reset to Zero</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => updateAwayScore(awayScore + 6)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => updateAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {() => updateAwayScore(awayScore + 1)} className="awayButtons__extraPoint">Away Extra Point</button>
          <button onClick = {() => updateAwayScore(0)} className="awayButtons__reset">Reset to Zero</button>
        </div>
      </section>
    </div>
  );
}

export default App;
