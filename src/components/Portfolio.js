import React from "react";

function Portfolio({ fund, units }) {
  if (!fund) return null;

  const nav = parseFloat(fund.nav);
  const totalValue = nav * units;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Portfolio Value</h3>
      <p><strong>Fund:</strong> {fund.schemeName}</p>
      <p><strong>NAV:</strong> ₹{nav}</p>
      <p><strong>Units:</strong> {units}</p>
      <p><strong>Total Value:</strong> ₹{totalValue.toFixed(2)}</p>
    </div>
  );
}

export default Portfolio;