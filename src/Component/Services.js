import React from "react";
import "./Services.css";

function Services() {
  const services = [
    { title: "Backend Development", desc: "Scalable backend with Java, Spring Boot, Node.js" },
    { title: "API Integration", desc: "Seamless REST & GraphQL APIs" },
    { title: "Cloud Hosting", desc: "Deploy on AWS, Azure, GCP" },
    { title: "Maintenance", desc: "Continuous monitoring & support" }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((s, i) => (
          <div className="card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
