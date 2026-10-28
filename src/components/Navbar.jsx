import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi2";

const mobileLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar({ isMobile, activeSection, onSectionChange, theme, onThemeChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    // Route changes close the mobile menu after navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen && isMobile);
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isMenuOpen, isMobile]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target) {
      onSectionChange?.(sectionId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <NavLink className="navbar-logo" to="/" aria-label="Shubham Vashisht home" onClick={(event) => {
        if (isMobile) {
          event.preventDefault();
          scrollToSection("home");
        }
      }}><span>&lt;/&gt;</span> <span className="logo-full">shubham.vashisht</span><span className="logo-short">shubham</span></NavLink>
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
      <div className="navbar-actions">
        <button type="button" className="theme-toggle" onClick={onThemeChange} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? <HiSun /> : <HiMoon />}
        </button>
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
      </div>
    </nav>
  );
}

export default Navbar;
