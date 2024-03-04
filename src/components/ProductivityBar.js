import React, { useState, useEffect } from "react";
import "./productivityBar.css";

function ProductivityBar({ value, label }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(200, Math.max(value, 0)));
  }, [value]);

  return (
    <>
      <div className="abcd">
        <span style={{color: "#FFFFFF",font: "normal normal normal 12px/16px Mulish",letterSpacing: "0.01px"}}>Progress on {label} </span>
        <span style={{color: "#36A546",font: "normal normal normal 14px/19px Mulish",letterSpacing: "0.01px"}}>{percent.toFixed()}%</span>
      </div>

      <div className="progress" style={{ width: `${percent / 2}%` }}></div>
    </>
  );
}

export default ProductivityBar;
