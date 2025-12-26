import { useEffect, useState } from "react";
import "../styles/Certificates.css";
import axios from "axios";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://portfolio-q0q9.onrender.com/api/certificates")
      .then((res) => {
        console.log("API RESPONSE 👉", res.data);
        setCertificates(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("API ERROR 👉", err);
        setError("Failed to load certificates");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading certificates...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="certificates-section" id="certificates">
      <h2 className="certificates-title">Certificates</h2>

      <div className="certificates-list">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert._id}>
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="project-image"
            />
            <h3>{cert.title}</h3>
            <p>
              {cert.issuer} | {cert.year}
            </p>
            <a
              href={cert.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
