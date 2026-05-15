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
        My <span className="heading-gradient">Education</span>
      </h2>

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
