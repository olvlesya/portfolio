import React, { useState } from "react";
import {
  footerForm,
  footerFormContacts,
  footerFormInput,
  footerFormTextarea,
  footerFormInputCorrect,
  footeFormInputIncorrect,
} from "./ValidForm.module.scss";

function validateEmail(email) {
  return email === "" || email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export function ValidForm(props) {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className={footerForm} name="test" method="post" action="#">
      <div className={footerFormContacts}>
        <h4>Contact Form</h4>
        <div>
          <input
            className={footerFormInput}
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
                ? [footerFormInput, footerFormInputCorrect].join(" ")
                : [footerFormInput, footeFormInputIncorrect].join(" ")
            }
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email*"
            required
          />
        </div>
        <div>
          <textarea className={footerFormTextarea}></textarea>
        </div>

        <button className="portfolio-button">submit</button>
      </div>
    </form>
  );
}
