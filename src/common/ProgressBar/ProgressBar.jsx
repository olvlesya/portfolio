import React from "react";
import { progress, progressStars } from "./ProgressBar.module.scss";

export function ProgressBar({ label, stars }) {
  const starsSkills = new Array(stars).fill(<i class="fas fa-star"></i>);
  return (
    <div className={progress}>
      <div>{label}</div>
      <div className={progressStars}>{starsSkills}</div>
    </div>
  );
}
