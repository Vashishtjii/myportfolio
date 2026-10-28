import { motion } from "framer-motion";
import { useState } from "react";
import ScreenCollage from "./ScreenCollage";

const projectItems = [
  {
    title: "Workforce Emotion & Attrition Intelligence",
    range: "2026",
    stack: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    points: [
      "Interactive Streamlit dashboard predicting employee attrition risk on the IBM HR dataset.",
      "VotingClassifier ensemble for predictions and KMeans clustering for employee segmentation.",
      "Calibrated risk thresholds for clearer, more reliable risk levels.",
      "Clean dashboard UI with a collapsible sidebar.",
    ],
    placeholderColor: "#0ea5e9",
    placeholderIcon: "📊",
    category: "Data",
    // Add link and liveDemo here when they are available.
  },
  {
    title: "Valorant-Themed Developer Portfolio",
    range: "2026-Present",
    stack: ["React + Vite", "Tailwind CSS", "Framer Motion"],
    points: [
      "Custom portfolio inspired by Valorant lobby UI.",
      "Reusable animated React components with Framer Motion.",
      "Responsive layouts with Tailwind CSS.",
      "Deployed to Netlify via GitHub CI/CD.",
    ],
    link: "https://github.com/Vashishtjii",
    liveDemo: "https://valolakshay.netlify.app",
    image: "/images/Screenshot 2026-05-16 001546.png",
    placeholderColor: "#6366f1",
    placeholderIcon: "🎮",
    category: "Frontend",
  },
  {
    title: "AAJ Logistics — Order Management System",
    range: "April 2026",
    stack: ["Next.js", "CSS Modules", "Vercel"],
    points: [
      "Two-column layout with live preview panel for shipment orders.",
      "Multi-package support with consignor/consignee details.",
      "Delivery type selection with fragile/insurance options.",
      "Dark theme with orange accents, deployed on Vercel.",
    ],
    link: "https://github.com/Vashishtjii/aaj-logistics-order-form",
    liveDemo: "https://aaj-logistics-order-form-iota.vercel.app/",
    image: "/images/Screenshot 2026-05-15 233949.png",
    placeholderColor: "#f97316",
    placeholderIcon: "📦",
    category: "Full Stack",
  },
  {
    title: "AI Counsellor",
    range: "2026",
    stack: ["Node.js", "Next.js", "Full Stack"],
    points: [
      "Full-stack web app guiding students through study abroad decisions.",
      "User authentication and student dashboard with academic profiling.",
      "Progress tracking: profile, university shortlisting, decision locking.",
      "Next-step actions: Talk to AI, Explore Colleges, View Roadmap.",
    ],
    link: "https://github.com/Vashishtjii/Ai-counsellor",
    liveDemo: "https://ai-counsellor-8zpvq61fu-vashishtjiis-projects.vercel.app/",
    image: "/images/Screenshot 2026-05-15 233949.png",
    placeholderColor: "#8b5cf6",
    placeholderIcon: "🎓",
    category: "Full Stack",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filters = ["All", "Frontend", "Full Stack", "Data"];
  const visibleProjects = projectItems.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial="hidden"
      whileInView="show"
      variants={container}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="projects-header-collage"><ScreenCollage variant="strip" /></div>
      <h2 className="section-title">
        My <span className="heading-gradient">Projects</span>
      </h2>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button key={item} type="button" className={`tag-button ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={card}
            whileHover={{
              y: -6,
              borderColor: "#c7d2fe",
              boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
            }}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSelectedProject(project); }}
            role="button"
            tabIndex="0"
          >
            <div className="project-preview">
              {project.image ? (
                <img src={project.image} alt={project.title} width="960" height="540" className="project-image" loading="lazy" />
              ) : (
                <div
                  className="project-placeholder"
                  style={{ backgroundColor: project.placeholderColor }}
                >
                  <span className="placeholder-icon">{project.placeholderIcon}</span>
                  <span className="placeholder-text">{project.title}</span>
                </div>
              )}
            </div>
            {selectedProject && (
              <div className="case-study-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
                <div className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()}>
                  <button type="button" className="case-study-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button>
                  <p className="project-date">{selectedProject.category} / {selectedProject.range}</p>
                  <h2 id="case-study-title">{selectedProject.title}</h2>
                  <p><strong>Problem:</strong> Add details.</p>
                  <p><strong>Role:</strong> Add details.</p>
                  <p><strong>Stack:</strong> {selectedProject.stack.join(", ")}</p>
                  <h3>Key features</h3>
                  <ul className="project-points">{selectedProject.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <div className="case-study-screens">
                    {[selectedProject.image, selectedProject.image, selectedProject.image].map((image, index) => image ? <img key={`${image}-${index}`} src={image} alt="" width="480" height="270" loading="lazy" /> : <div key={index} className="case-study-placeholder">Add screenshot</div>)}
                  </div>
                  <div className="project-actions">
                    {selectedProject.liveDemo && <a className="btn" href={selectedProject.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
                    {selectedProject.link && <a className="btn btn-secondary" href={selectedProject.link} target="_blank" rel="noreferrer">GitHub</a>}
                  </div>
                </div>
              </div>
            )}

            <div className="project-head">
              <h3>{project.title}</h3>
              {project.range && <p className="project-date">{project.range}</p>}
            </div>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="project-pill">{tech}</span>
              ))}
            </div>

            <ul className="project-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="project-actions">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="project-btn btn-secondary"
                >
                  View on GitHub →
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="project-btn btn"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
