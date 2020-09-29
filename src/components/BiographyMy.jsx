import React from "react";
import biographyMyBanner from "../images/biography-my__banner.jpg";
import "./BiographyMy.scss";
import { ProgressBar } from "../common/ProgressBar";

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
          <p>
            После того, как я закончила университет, я четко знала чего я хочу.
            Мне всегда нравились сети, у меня даже была любимая книжка, которую
            я всегда носила с собой везде и читала. Она, конечно, была немного
            не актуальна на тот момент, но очень доступна и интересна изложена.
            Конечно, после окончания Вуза без опыта работы трудно устроиться
            сразу на желаемую позицию. И я устроилась на позицию ниже, пообещав
            себе карьерный рост. Так и случилось. Затем случилось так, что я
            переехала в Польшу, познакомилась с разными разработчиками. Как и
            прежде, все окружение из IT, но занимающихся другим делом. Мне
            показалось это интересным, услышала о школе Epam. Так началось мое
            первое знакомство с JS, потом первый сайт, потом React. И это, скажу
            я вам затягивает. Это реально титанический труд, но когда все
            получается, ты получаешь огромное удовольствие от этого. Иногда
            думаешь над задачей и не можешь уснуть. Вспоминая как же круто
            возвращаться к задачкам, хотя ты вырос. Словно вернулся в школу к
            своей любимой алгебре. Но здесь предстоит еще познать этот
            увлекательный мир программирования. Ведь будущее только за новыми
            технологиями.
          </p>
          <p>
            After I graduated from University, I knew exactly what I wanted. I
            always liked the web, I even had a favorite book that I always
            carried with me everywhere and read. It was, of course, a little out
            of date at the time, but very accessible and interesting set out. Of
            course, after graduating from University without work experience, it
            Is difficult to get the desired position right away. And I got a
            lower position, promising myself career growth. And so it happened.
            Then it happened that I moved to Poland and met different
            developers. As before, the whole environment is from IT, but they
            are engaged in a different business. I thought it was interesting, I
            heard about the Epam school. This is how my first acquaintance with
            JS began, then the first site, then React. And this, I'll tell you,
            is addictive. This is really a Titanic work, but when everything
            works out, you get great pleasure from it. Sometimes you think about
            a task and can't sleep. Remembering how cool it is to return to
            tasks, even though you have grown up. It's like going back to school
            to my own.It was like going back to school to my favorite algebra.
            But here you still have to learn this fascinating world of
            programming.
          </p>
        </div>

        <div className="biography-my__banner">
          <img alt="" src={biographyMyBanner} />
          <p>is a short story</p>
        </div>
      </section>
      <div>
        {skills.map((skill) => (
          <ProgressBar label={skill.label} percent={skill.percent} />
        ))}
      </div>
    </div>
  );
}
