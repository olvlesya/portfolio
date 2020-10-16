import React from "react";
import aboutMePicture from "../images/banner__about-me.jpg";

export function AboutMe() {
  return (
    <div className="section-background">
      <section className="about-me">
        <div className="about-me__banner">
          <img alt="" src={aboutMePicture} />
        </div>

        <div className="about-me__brand">
          <div>
            <span>Hello! I'm</span>
            <h1>Olesia</h1>
          </div>
          <div className="about-me__brand-bottom">
            <h1>Nikonova</h1>
            <span>Frontend Developer</span>
          </div>

          <p>Do Better Do More</p>

          <button className="portfolio-button">ABOUT ME</button>
        </div>
      </section>
    </div>
  );
}
