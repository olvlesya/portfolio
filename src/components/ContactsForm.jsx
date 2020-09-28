import React from "react";

export function ContactsForm() {
  return (
    <footer className="footer">
      <p>FollowMe</p>
      <p>Get In Touch</p>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-twitter"></i>
      <p>Share it!</p>
      <p>Contact Form</p>
      <div>
        <label>Name</label>
        <input placeholder="name*" />
      </div>
      <div>
        <label>Email</label>
        <input placeholder="your email*" />
      </div>
      <div>
        <label>Date</label>
        <input placeholder="date*" />
      </div>
      <textarea></textarea>
      <button>submit</button>
    </footer>
  );
}
