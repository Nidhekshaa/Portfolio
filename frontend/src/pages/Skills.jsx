import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiGit } from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";

import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-card">
            <FaCode className="skill-icon" style={{ color: "#555" }} />
            <h3 className="skill-name">C</h3>
          </div>
          <div className="skill-card">
            <FaJava className="skill-icon" style={{ color: "#f89820" }} />
            <h3 className="skill-name">Java</h3>
          </div>
          <div className="skill-card">
            <SiHtml5 className="skill-icon" style={{ color: "#e34c26" }} />
            <h3 className="skill-name">HTML</h3>
          </div>
          <div className="skill-card">
            <SiCss3 className="skill-icon" style={{ color: "#264de4" }} />
            <h3 className="skill-name">CSS</h3>
          </div>
          <div className="skill-card">
            <SiJavascript className="skill-icon" style={{ color: "#f0db4f" }} />
            <h3 className="skill-name">JavaScript</h3>
          </div>
          <div className="skill-card">
            <SiGit className="skill-icon" style={{ color: "#f1502f" }} />
            <h3 className="skill-name">Git</h3>
          </div>
          <div className="skill-card">
            <SiMongodb className="skill-icon" style={{ color: "#47A248" }} />
            <h3 className="skill-name">MongoDB</h3>
          </div>
          <div className="skill-card">
            <SiExpress
              className="skill-icon"
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "50%",
              }}
            />
            <h3 className="skill-name">Express.js</h3>
          </div>
          <div className="skill-card">
            <SiReact className="skill-icon" style={{ color: "#61dbfb" }} />
            <h3 className="skill-name">React</h3>
          </div>
          <div className="skill-card">
            <SiNodedotjs className="skill-icon" style={{ color: "#68A063" }} />
            <h3 className="skill-name">Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
