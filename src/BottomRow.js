import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, changeDown] = useState(0);
  const [toGo, changeToGo] = useState(0);
  const [ballOn, changeballOn] = useState(0);
  const [quarter, changeQtr] = useState(0);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className="bottomButtons">
         <button onClick = {() => changeDown(down +1)} className="bottomButtons_downs">Downs</button>
         <button onClick = {() => changeToGo(toGo +1)} className="bottomButtons_downs">Yards2Go</button>
         <button onClick = {() => changeballOn(ballOn +1)} className="bottomButtons_downs">BallOn</button>
         <button onClick = {() => changeQtr(quarter +1)} className="bottomButtons_downs">Quarter</button>
      </div>
      
    </div>
  );
};

export default BottomRow;
