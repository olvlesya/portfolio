import React, { useState } from "react";
import "./ValidForm.scss";

function validateEmail(email) {
  return email === "" || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export function ValidForm(props) {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="footer-form" name="test" method="post" action="#">
      <div className="footer-form__contacts">
        <h4>Contact Form</h4>
        <div>
          <input
            className="footer-form__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="name*"
            required
          />
        </div>
        <div>
          <input
            className={
              validateEmail(email)
                ? "footer-form__input footer-form__input_correct"
                : "footer-form__input footer-form__input_incorrect"
            }
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email*"
            required
          />
        </div>
        <div>
          <textarea className="footer-form__textarea"></textarea>
        </div>

        <button className="portfolio-button">submit</button>
      </div>
    </form>
  );
}
