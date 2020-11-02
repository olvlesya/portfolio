import React from "react";
import { ReadMore } from "../common/ReadMore/ReadMore";
import { ProgressBar } from "../common/ProgressBar";

import "./BiographyMy.scss";
import biographyMyBanner from "../images/biography-my__banner.jpg";

const skills = [
  { label: "SCSS", stars: 4 },
  { label: "HTML", stars: 5 },
  { label: "JS", stars: 4 },
  { label: "React", stars: 3 },
  { label: "Git", stars: 4 },
  { label: "Redux", stars: 2 },
  { label: "BEM", stars: 5 },
  { label: "Jest", stars: 5 },
  { label: "CSS", stars: 5 },
  { label: "Webpack", stars: 2 },
];

export function BiographyMy() {
  return (
    <section className="biography-my ">
      <div className="biography-my__wrapper">
        <div className="biography-my__banner">
          <img alt="about me profile" src={biographyMyBanner} />

          <div className="biography-my__skill">
            <h3>My skills</h3>
            {skills.map(({ label, stars }) => (
              <ProgressBar label={label} stars={stars} />
            ))}
          </div>
        </div>
      </div>
      <div id="aboutme" className="biography-my__story">
        <h3>About me</h3>

        <ReadMore>
          <div className="biography-my__text">
            After I graduated from University, I knew exactly what I wanted. I
            always liked the web, I even had a favorite book that I always
            carried with me everywhere and read. Indeed, after graduating from
            University without work experience, it was difficult to get the
            desired position right away. And I got a lower position, promising
            myself career growth. And so it happened. Then it happened that I
            moved to Poland and met different developers. As before, surrounding
            people were from IT, but that time a different kind of it. I thought
            it was interesting, I heard about the Epam school. This is how my
            first acquaintance with JS began, then the first site, then React.
            And this, I'll tell you, is addictive. This is really a titanic
            work, but when everything works out, you feel very satisfied.
            Sometimes you think about a task and can't sleep. Remembering how
            cool it is to return to tasks, even though you have grown up. It's
            like going back to school to my own. It's like going back to school
            to my favorite algebra. I have yet to learn this fascinating world
            of programming.
          </div>
        </ReadMore>
      </div>
      <div className="biography-my__background"></div>
    </section>
  );
}
