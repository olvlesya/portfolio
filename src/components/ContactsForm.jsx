import React from "react";
import { ValidForm } from "../common/ValidForm/ValidForm";
import "./ContactsForm.scss";

export function ContactsForm() {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <address>
          <h5>Get In Touch</h5>
          <div> Name: Olesia Nikonova </div>
          <div> Profile: Frontend developer </div>
          <div>
            <a href="mailto:leyonoknou@gmail.com">
              Email: leyonoknou@gmail.com{" "}
            </a>
          </div>
          <div> Phone: (+48)535430288 </div>
        </address>
      </div>

      <div className="footer-container">
        <div className="footer-icons">
          <h5> FollowMe </h5>
          <a href="https://www.facebook.com/profile.php?id=100001696638681">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nik_lesia/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/olesia-nikonova-33a3091b8/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/olvlesya">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <ValidForm />
    </footer>
  );
}
