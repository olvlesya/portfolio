import React from "react";
import "./ProgressBar.scss";

export function ProgressBar({ label, percent }) {
  return (
    <div>
      <div className="progress">
        <p>{label}</p>
        <p>{percent}%</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar__scale"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
