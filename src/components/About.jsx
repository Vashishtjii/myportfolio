import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        About <span className="heading-gradient">Me</span>
      </h2>

      <div className="about-intro-grid">
        <div className="about-copy">
          <p>
            BCA final-year student at IITM Janakpuri, Delhi, graduating in July 2026. 
            I'm actively looking for full-time Frontend Developer opportunities. 
            I focus on design-aware interfaces, reusable React components, and responsive 
            frontend experiences.
          </p>
        </div>

        <div className="about-stats-grid">
          <div className="about-stat-card">
            <p className="about-stat-label">CGPA</p>
            <h3>8.13</h3>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-label">Graduating</p>
            <h3>July 2026</h3>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-label">Projects</p>
            <h3>2</h3>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-label">University</p>
            <h3>GGSIPU</h3>
          </div>
        </div>
      </div>

      <div className="section-divider" />
    </motion.section>
  );
}

export default About;
