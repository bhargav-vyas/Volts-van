import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2 className="welcome">Welcome to Volts Van IT Services Pvt. Ltd.</h2>
        <h1>We build scalable Backend, APIs, and Cloud solutions</h1>
        <p>Helping startups and businesses with reliable IT services</p>
        <a href="#contact" className="btn">Request a Quote</a>
      </div>
    </section>
  );
}

export default Hero;
