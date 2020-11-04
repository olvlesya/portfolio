import React from "react";
import { footer, footerAuthor, footerSocial } from "./ContactsForm.module.scss";

export function ContactsForm() {
  return (
    <footer className={footer}>
      <div className={footerAuthor}>
        © 2020 Author & Design | Development{" "}
        <span>by&nbsp;Olesia&nbsp;Nikonova</span>
      </div>
      <div className={footerSocial}>
        <a href="mailto:lesyonoknou@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/olesia-nikonova-33a3091b8/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="tel:+48535430288">
          <i className="fas fa-phone-square-alt"></i>
        </a>
        <a href="https://github.com/olvlesya">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100001696638681">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/nik_lesia/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
