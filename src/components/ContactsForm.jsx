import React from "react";
import { ValidForm } from "../common/ValidForm";
import {
  footer,
  footerContacts,
  footerSocial,
  footerBottom,
  footerBottomInner,
} from "./ContactsForm.module.scss";

export function ContactsForm() {
  return (
    <footer>
      <section className={footer}>
        <div className={footerContacts}>
          <address>
            <h4>Get In Touch</h4>
            <div> Name: Olesia Nikonova </div>
            <div> Profile: Frontend developer </div>
            <div>
              <a href="mailto:lesyonoknou@gmail.com">
                Email: lesyonoknou@gmail.com{" "}
              </a>
            </div>
            <div> Phone: (+48)535430288 </div>
          </address>

          <div className={footerSocial}>
            <div>
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
        </div>
        <ValidForm />
      </section>

      <div className={footerBottom}>
        <div className={footerBottomInner}>
          <p>
            © 2020 Author & Design | Development <span>by Olesia Nikonova</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
