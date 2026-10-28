import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const target = Number.parseFloat(value);
    const decimal = value.includes(".");
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 900, 1);
      setCount(decimal ? (target * progress).toFixed(2) : Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  return <span ref={ref}>{count}</span>;
}

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
            BCA graduate (2026) from IITM Janakpuri, Delhi, with hands-on experience
            in frontend and full-stack development (React, Next.js, Node.js, MongoDB)
            and data analysis (Python, Pandas, Scikit-learn, Streamlit). Currently
            working in technical operations at TELUS International, troubleshooting
            technical issues and analyzing ticket data to identify recurring problems.
            Open to full-time Frontend Developer and Data Analyst roles.
          </p>
        </div>

        <div className="about-stats-grid">
          <div className="about-stat-card">
            <p className="about-stat-label">CGPA</p>
            <h3><Counter value="8.13" /></h3>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-label">Graduated</p>
            <h3>July 2026</h3>
          </div>
          <div className="about-stat-card">
            <p className="about-stat-label">Projects</p>
            <h3><Counter value="4" /></h3>
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
