import React from "react";
import "./ProgressBar.scss";

export function ProgressBar({ label, stars }) {
  const starsSkills = new Array(stars).fill(<i class="fas fa-star"></i>);
  return (
    <div className="progress">
      <div>{label}</div>
      <div className="progress__stars">{starsSkills}</div>
    </div>
  );
}
