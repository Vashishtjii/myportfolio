import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ScreenCollage from "./ScreenCollage";
import SkillTicker from "./SkillTicker";
const profile = "/images/profile-themed.png";

function Hero({ isMobile, onSectionChange }) {
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target) {
      onSectionChange?.(sectionId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderButtons = () => {
    if (isMobile) {
      return (
        <>
          <button type="button" className="btn" onClick={() => scrollToSection("contact")}>
            Let’s Talk
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => scrollToSection("projects")}>
            View Projects
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => scrollToSection("about")}>
            About Me
          </button>
        </>
      );
    }

    return (
      <>
        <Link to="/contact" className="btn">Let's Talk</Link>
        <a href="/Resume.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <Link to="/projects" className="btn btn-secondary">View Projects</Link>
      </>
    );
  };

  const renderSocials = () => (
    <div className="hero-socials">
      <a href="https://github.com/Vashishtjii" target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/shubham-vashisht-317775292/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <FaLinkedinIn />
      </a>
    </div>
  );

  return (
    <section className="hero" id="home" data-section="home">
      <ScreenCollage />
      <div className="hero-grid">

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p className="hero-badge" variants={textReveal}>
            &lt; Frontend Developer &amp; Data Analyst /&gt;
          </motion.p>
          <motion.p className="hero-hello" variants={textReveal}>HELLO!</motion.p>
          <motion.h1 variants={textReveal}>
            I'm <br />
            <span className="hero-name-gradient">Shubham Vashisht</span>
          </motion.h1>
          <motion.h3 variants={textReveal}>Frontend Developer &amp; Data Analyst</motion.h3>
          <motion.p className="hero-credential" variants={textReveal}>BCA Graduate 2026</motion.p>
          <motion.p className="hero-intro" variants={textReveal}>
            Frontend developer and data analyst with hands-on experience in React,
            Next.js, and REST API integration, plus Python, Pandas, and Streamlit
            for data analysis. Passionate about pixel-perfect UI, reusable
            components, and turning data into clear insights.
          </motion.p>

          {!isMobile && (
            <motion.div className="hero-actions" variants={textReveal}>
              {renderButtons()}
              {renderSocials()}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-img"
        >
          <img src={profile} alt="Portrait of Shubham Vashisht" width="720" height="960" loading="eager" />
        </motion.div>

        {isMobile && (
          <motion.div
            className="hero-actions hero-actions-mobile"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {renderButtons()}
            {renderSocials()}
          </motion.div>
        )}

      </div>
      <SkillTicker />
    </section>
  );
}

export default Hero;
