import React from "react";
import "./css/contact.css";

function Contact() {
  return (
    <form className="contact">
      <h1>Contact <span id="me-text">Me!</span></h1>
        <div className="contact-container">
          <input type="text" placeholder="First Name" required/><input type="text" required placeholder="Last Name"/>
          <input type="email" placeholder="Email" required/><input type='number' required placeholder="Phone Number"/>
          <input type="text" placeholder="Message" id="message"/>
        </div>
        <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
