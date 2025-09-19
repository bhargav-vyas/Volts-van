import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form action="https://formspree.io/f/yourFormID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
      <a href="https://wa.me/yourwhatsappnumber" className="btn">Chat on WhatsApp</a>
    </section>
  );
}

export default Contact;
