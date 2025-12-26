import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://portfolio-q0q9.onrender.com/api/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.techStack}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
