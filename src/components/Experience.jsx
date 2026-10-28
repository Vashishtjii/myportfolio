import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      className="education-section"
      id="experience"
      data-section="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        Experience <span className="heading-gradient">&amp; Education</span>
      </h2>

      <motion.article
        className="education-timeline-card"
        style={{ marginBottom: "12px" }}
        whileHover={{ y: -4, borderColor: "#c7d2fe" }}
      >
        <div className="education-dot" />

        <div className="education-body">
          <h3>Technical Support Associate (Technical Operations)</h3>

          <div className="education-meta-grid">
            <p><strong>Company:</strong> TELUS International</p>
            <p><strong>Duration:</strong> August 2026 - Present</p>
          </div>

          <div className="education-coursework">
            <ul>
              <li>Troubleshoot and diagnose software, account, and system issues using structured problem-solving to find root causes.</li>
              <li>Log, categorize, and track issues in a ticketing system, and analyze recurring patterns to flag common failure points.</li>
              <li>Write technical documentation and resolution steps to standardize fixes.</li>
              <li>Escalate complex issues to specialist teams with clear reproduction steps and context.</li>
            </ul>
          </div>
        </div>
      </motion.article>

      <motion.article
        className="education-timeline-card"
        whileHover={{ y: -4, borderColor: "#c7d2fe" }}
      >
        <div className="education-dot" />

        <div className="education-body">
          <h3>BCA</h3>

          <div className="education-meta-grid">
            <p><strong>Institute:</strong> IITM Janakpuri, Delhi</p>
            <p><strong>University:</strong> GGS Indraprastha University</p>
            <p><strong>CGPA:</strong> 8.13</p>
            <p><strong>Duration:</strong> Sept 2023-July 2026</p>
          </div>

          <div className="education-coursework">
            <p><strong>Coursework:</strong></p>
            <ul>
              <li>Deep Learning</li>
              <li>IoT</li>
              <li>Data Warehousing & Mining</li>
              <li>E-Commerce</li>
            </ul>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
}

export default Experience;
