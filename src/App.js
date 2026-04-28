import React, { useState } from "react";
import FundSelector from "./components/FundSelector";
import Portfolio from "./components/Portfolio";
import data from "./data/amfiData.json";

function App() {
  const [selectedFund, setSelectedFund] = useState(null);
  const [units, setUnits] = useState(0);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Mutual Fund Portfolio Tracker</h2>

      <FundSelector funds={data} onSelect={setSelectedFund} />

      <br />

      <input
        type="number"
        placeholder="Enter Units"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
      />

      <Portfolio fund={selectedFund} units={units} />
    </div>
  );
}

export default App;