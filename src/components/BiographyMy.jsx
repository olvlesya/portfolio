import React from "react";
import biographyMyBanner from "../images/biography-my__banner.jpg";

export function BiographyMy() {
  return (
    <section class="biography-my">
      <div class="biography-my__banner">
        <img alt="" src={biographyMyBanner} />
        <h2>Olesia Nikonova</h2>
        <p>is a short story</p>
      </div>
      <div class="biography-my__story">
        <h2>About me</h2>
        <p></p>
      </div>
    </section>
  );
}
