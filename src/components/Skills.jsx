import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "CSS Modules",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    label: "JavaScript & Core",
    items: [
      "JavaScript",
      "ES6+",
      "Async/Await",
      "State Management",
      "REST API Integration",
    ],
  },
  {
    label: "Tools & Build",
    items: ["Vite", "Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
  {
    label: "Backend Basics",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    label: "Design & UI",
    items: [
      "Figma",
      "Visual Hierarchy",
      "Typography",
      "Color Consistency",
      "Responsive Design",
    ],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 style={{ textAlign: "center" }}>
        My <span className="heading-gradient">Skills</span>
      </h2>

      <div className="skills-category-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.label}
            className="skills-category-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <p className="skills-category-label">{group.label}</p>

            <div className="skills-pill-wrap">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
