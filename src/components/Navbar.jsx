import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const mobileLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar({ isMobile, activeSection, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target) {
      onSectionChange?.(sectionId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>Shubham Vashisht</h2>
      <button
        type="button"
        className="navbar-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${isMenuOpen ? "is-open" : ""}`}>
        {isMobile ? (
          mobileLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`navbar-link-button ${activeSection === link.id ? "active" : ""}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))
        ) : (
          <>
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
