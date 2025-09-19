import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At <strong>Volts Van IT Services Pvt. Ltd.</strong>, we specialize in delivering
          innovative and scalable IT solutions that empower businesses worldwide.
          Our expertise lies in <strong>Backend Development, API Integration, Cloud Solutions, 
          and IT Maintenance</strong>.
        </p>

        <p>
          Over the years, we’ve successfully completed projects across diverse industries,
          from <strong>enterprise software systems</strong> to <strong>cloud-based ERP platforms</strong>,
          helping startups and enterprises achieve digital transformation.
        </p>

        <ul className="about-list">
          <li>✔ Enterprise ERP Development</li>
          <li>✔ API-Driven Applications</li>
          <li>✔ Cloud Hosting & Scalable Solutions</li>
          <li>✔ Ongoing IT Maintenance & Support</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
