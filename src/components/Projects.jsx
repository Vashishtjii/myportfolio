import { motion } from "framer-motion";

const projectItems = [
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
    image: null,
    placeholderColor: "#6366f1",
    placeholderIcon: "🎮",
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
    image: null,
    placeholderColor: "#f97316",
    placeholderIcon: "📦",
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
    link: null,
    liveDemo: null,
    image: null,
    placeholderColor: "#8b5cf6",
    placeholderIcon: "🎓",
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
      <h2 className="section-title">
        My <span className="heading-gradient">Projects</span>
      </h2>

      <div className="projects-grid">
        {projectItems.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={card}
            whileHover={{
              y: -6,
              borderColor: "#c7d2fe",
              boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
            }}
          >
            <div className="project-preview">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
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
                  className="project-btn project-btn-github"
                >
                  View on GitHub →
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-live"
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
