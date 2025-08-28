import "../styles/hero.css";
import profileImage from "../assets/profilephoto.jpg";

const Hero = () => (
  
  <section className="hero">
    <div className="hero-text">
      <p>Hello,</p>
      <h1>I’m Nidhekshaa</h1>
      <h2>Software Developer</h2>
      <div className="hero-buttons">
        <a className="btn primary" href="#contact">
          Get in Touch
        </a>
        <a
          className="btn outline"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          
          download="Nidhekshaa_Resume.pdf"
        >
          My Resume
        </a>
      </div>
    </div>
    <div className="hero-image">
      <img src={profileImage} alt="Profile" />
    </div>
  </section>
);

export default Hero;
