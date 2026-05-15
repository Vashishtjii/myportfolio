import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
const profile = "/images/1760355274767.jpg";

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
        <a href="public/Shubham_Vashisht_Resume.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
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
      <div className="hero-grid">

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p className="hero-badge" variants={textReveal}>
            &lt; Frontend Developer /&gt;
          </motion.p>
          <motion.p className="hero-hello" style={{ color: "#6366f1" }} variants={textReveal}>HELLO!</motion.p>
          <motion.h1 variants={textReveal}>
            I'm <br />
            <span className="hero-name-gradient">Shubham Vashisht</span>
          </motion.h1>
          <motion.h3 variants={textReveal}>Frontend Developer (Fresher) | BCA Student graduating July 2026</motion.h3>
          <motion.p style={{ color: "var(--muted)", maxWidth: "500px" }} variants={textReveal}>
            Design-attentive frontend developer with hands-on experience in React,
            HTML5, CSS3, and REST API integration. Passionate about pixel-perfect
            UI, reusable component architecture, and translating product ideas into
            clean, responsive interfaces.
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
          <div className="hero-photo-blob" aria-hidden="true" />
          <img src={profile} alt="profile" />
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
    </section>
  );
}

export default Hero;
