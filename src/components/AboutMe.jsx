import React from "react";
import "./AboutMe.scss";

export function AboutMe() {
  return (
    <div className="section-background">
      <section className="about-me">
        <div className="about-me__banner" />

        <div className="about-me__brand">
          <div>
            <span>It's me</span>
            <h1>Olesia</h1>
          </div>
          <div className="about-me__brand-bottom">
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
