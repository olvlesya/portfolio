import React from "react";
import { ProgressBar } from "../common/ProgressBar";
import { ReadMore } from "../common/ReadMore";
import "./BiographyMy.scss";
import biographyMyBanner from "../images/biography-my__banner.jpg";

const skills = [
  { label: "SCSS", percent: 75 },
  { label: "HTML", percent: 73 },
  { label: "JS", percent: 63 },
  { label: "React", percent: 49 },
];

export function BiographyMy() {
  return (
    <div>
      <section className="biography-my">
        <div className="biography-my__story">
          <h3>About me</h3>

          <ReadMore>
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
            like going back to school to my own.It's like going back to school
            to my favorite algebra. I have yet to learn this fascinating world
            of programming.
          </ReadMore>
        </div>

        <div className="biography-my__banner">
          <img alt="" src={biographyMyBanner} />
          <p>is a short story</p>
        </div>
      </section>
      <div className="biography-my__skill">
        {skills.map(({ label, percent }) => (
          <ProgressBar label={label} percent={percent} />
        ))}
      </div>
    </div>
  );
}
