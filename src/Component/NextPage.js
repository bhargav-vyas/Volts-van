import React from "react";
import "./NextPage.css";
import expImg from "../Assats/experience.png";
import innImg from "../Assats/innovate.png";
// import accImg from "../Assats/accelerate.png";
// import assImg from "../Assats/assure.png";

function NextPage() {
  const items = [
    { img: expImg, title: "Experience", desc: "Delivering solutions with expertise." },
    { img: innImg, title: "Innovate", desc: "Driving innovation with modern tech." },
    // { img: accImg, title: "Accelerate", desc: "Speeding up your digital journey." },
    // { img: assImg, title: "Assure", desc: "Ensuring quality & reliability." },
  ];

  return (
    <section className="next-page">
      <h1>The Next</h1>
      <p>We bring you powerful advantages to navigate your digital transformation</p>
      
      <div className="next-grid">
        {items.map((item, i) => (
          <div className="next-card" key={i}>
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
