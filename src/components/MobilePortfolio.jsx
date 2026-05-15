import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

function MobilePortfolio({ onSectionChange }) {
  return (
    <div className="mobile-portfolio">
      <Hero isMobile onSectionChange={onSectionChange} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default MobilePortfolio;