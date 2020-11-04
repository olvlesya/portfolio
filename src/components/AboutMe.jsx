import React from "react";
import {
  aboutMe,
  aboutMeBanner,
  aboutMeBrand,
  aboutMeBrandBottom,
} from "./AboutMe.module.scss";

export function AboutMe() {
  return (
    <div className="section-background">
      <section className={aboutMe}>
        <div className={aboutMeBanner} />

        <div className={aboutMeBrand}>
          <div>
            <span>It's me</span>
            <h1>Olesia</h1>
          </div>
          <div className={aboutMeBrandBottom}>
            <h1>Nikonova</h1>
            <span>Frontend Developer</span>
          </div>

          <p>Do Better Do More</p>

          <a href="#aboutme">
            <button className="portfolio-button">ABOUT ME</button>
          </a>
        </div>
      </section>
    </div>
  );
}
