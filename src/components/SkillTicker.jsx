const skills = ["React", "Next.js", "JavaScript", "Python", "Pandas", "Streamlit", "Framer Motion", "REST APIs"];

function SkillTicker() {
  return (
    <div className="skill-ticker" aria-label="Skills">
      <div className="skill-ticker-track">
        {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
      </div>
    </div>
  );
}

export default SkillTicker;
