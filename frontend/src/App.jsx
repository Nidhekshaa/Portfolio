import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
// import Achievements from "./pages/Achievements.jsx";
import "./index.css";
import Footer from "./pages/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
