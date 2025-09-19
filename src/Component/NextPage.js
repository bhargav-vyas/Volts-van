import React from "react";
import "./NextPage.css";
import expImg from "../Assats/experience.png";
import innImg from "../Assats/innovate.png";

function NextPage() {
  const items = [
    { 
      img: expImg, 
      title: "Experience", 
      desc: "With years of expertise, we deliver enterprise-grade solutions built on scalable architectures, optimized APIs, and cloud-native infrastructures. Our team ensures high availability, performance tuning, and seamless integration across complex IT ecosystems." 
    },
    { 
      img: innImg, 
      title: "Innovate", 
      desc: "Driving innovation through AI-driven analytics, microservices, and modern frameworks. We craft future-ready solutions that align with your business goals, ensuring agility and a competitive edge in the digital era." 
    },
  ];

  return (
    <section className="next-page">
      <h1>The Next</h1>
      <p>We bring you powerful advantages to navigate your digital transformation</p>
      
      <div className="next-grid">
        {items.map((item, i) => (
          <div className="next-card" key={i} style={{ "--delay": i }}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NextPage;
