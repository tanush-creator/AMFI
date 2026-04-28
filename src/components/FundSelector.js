import React from "react";

function FundSelector({ funds, onSelect }) {
  return (
    <select onChange={(e) => onSelect(funds[e.target.value])}>
      <option>Select Fund</option>
      {funds.map((fund, index) => (
        <option key={index} value={index}>
          {fund.schemeName}
        </option>
      ))}
    </select>
  );
}

export default FundSelector;