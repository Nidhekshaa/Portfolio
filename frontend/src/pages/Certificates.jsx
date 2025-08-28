// src/pages/Certificates.jsx
import React from 'react';
import '../styles/Certificates.css';
import mongoDBCert from '../assets/MongoDBAssociateDeveloper.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      year: 2023,
      imgUrl: mongoDBCert
    }
  ];

  return (
    <div className="certificates-section">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-list">
        {certificates.map(cert => (
          <div className="certificate-card" key={cert.id}>
            <img
              src={cert.imgUrl}
              alt={cert.title}
              className="project-image"
            />
            <h3>{cert.title}</h3>
            <p>{cert.issuer} | {cert.year}</p>
            <a href={cert.imgUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
