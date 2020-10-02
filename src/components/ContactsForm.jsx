import React from "react";
import "../components/ContactsForm.scss";

export function ContactsForm() {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <address>
          <p>Get In Touch</p>
          <div>Name: Olesia Nikonova </div>
          <div>Profile: Frontend developer</div>
          <div>
            <a href="mailto:leyonoknou@gmail.com">
              Email: leyonoknou@gmail.com{" "}
            </a>
          </div>
          <div>Phone:(+48)535430288</div>
        </address>
      </div>
      <div className="footer-container">
        <p>FollowMe</p>
        <i className="fab fa-facebook" href="#"></i>
        <i className="fab fa-twitter"></i>
        <p>Share it!</p>
      </div>

      <form className="footer-form" name="test" method="post" action="#">
        <div className="footer-form-contacts">
          <p>Contact Form</p>
          <div className="footer-form-name">
            <div>
              <label>Name</label>
              <input placeholder="name" />
            </div>
          </div>
          <div>
            <label>Email</label>
            <input placeholder="your email" />
          </div>
          <div>
            <label>Date</label>
            <input placeholder="date" />
          </div>
          <textarea></textarea>
        </div>
        <button className="portfolio-button">submit</button>
      </form>
    </footer>
  );
}
