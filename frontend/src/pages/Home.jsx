import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Hello, I'm <span className="highlight">Nidhekshaa N.K</span></h1>
        <p className="subtitle">Full Stack Developer | MERN | Open Source Enthusiast</p>
        <a className="btn-primary" href="/projects">View My Projects</a>
      </section>
    </div>
  );
};

export default Home;
