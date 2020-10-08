import React, { useState } from "react";
import "./ValidForm.scss";

function validateEmail(email) {
  if (email === "") {
    return true;
  }
  if (email.length < 3) {
    return false;
  }
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return false;
  }

  return true;
}

export function ValidForm(props) {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="footer-form" name="test" method="post" action="#">
      <div className="footer-form-contacts">
        <h5>Contact Form</h5>
        <div className="footer-form-name">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="name*"
            required
          />
        </div>
        <div className="footer-form-email">
          <input
            className={
              validateEmail(email)
                ? "form-input_correct"
                : "form-input_incorrect"
            }
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email*"
            required
          />
        </div>
        <div className="footer-form-date">
          <input placeholder="date*" required />
        </div>
        <textarea></textarea>
      </div>
      <button className="portfolio-button">submit</button>
    </form>
  );
}
