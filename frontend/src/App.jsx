import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
