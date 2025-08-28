import React from "react";
import "../styles/Achievements.css";
function Achievements() {
  const certificates = [
    {
      id: 1,
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      year: 2023,
      imgUrl: "../assets/MongoDBAssociateDeveloper.jpg"
    }
  ];
  return (
    <section className="achievements" id="achievements">
        <div className="container">
            <div className="achievements__content">
                <h2 className="achievements__title">My Achievements</h2>
            </div>
            <div className="achievements__list">
                {certificates.map(cert => (
                    <div className="achievements__item" key={cert.id}>
                        <img src={cert.imgUrl} alt={cert.title} className="achievements__image" />
                        <h3 className="achievements__subtitle">{cert.title}</h3>
                        <p className="achievements__details">{cert.issuer} | {cert.year}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
export default Achievements;
