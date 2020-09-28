import React from "react";

export function Contacts() {
  return (
    <section>
      <div>Name: Olesia Nikonova </div>
      <div>Profile: Frontend developer</div>

      <address>
        <a href="mailto:leyonoknou@gmail.com">Email: leyonoknou@gmail.com </a>
      </address>

      <div>Phone: (+48) 535430288</div>
      <p>Skills</p>
      <p>HTML</p>
      <span>75%</span>

      <p>CSSS</p>
      <span>73%</span>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="73"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <p>JavaScript</p>
      <span>65%</span>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="65"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <p>React</p>
      <span>49%</span>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="49"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </section>
  );
}
