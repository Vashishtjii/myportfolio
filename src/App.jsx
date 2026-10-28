import Navbar from "./components/Navbar";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import MobilePortfolio from "./components/MobilePortfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import NotFound from "./components/NotFound";

function App() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 900px)").matches,
  );
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const sectionIds = useMemo(
    () => ["home", "about", "skills", "projects", "experience", "contact"],
    [],
  );
  const knownRoutes = ["/", "/about", "/projects", "/contact"];
  const mobileLayout = isMobile || window.innerWidth <= 900;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const isViewportRoute = location.pathname === "/" || location.pathname === "/contact";
    document.body.classList.toggle("viewport-route", isViewportRoute);
    return () => document.body.classList.remove("viewport-route");
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!mobileLayout) {
      return undefined;
    }

    const observedSections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6, 0.8],
        rootMargin: "-18% 0px -45% 0px",
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [mobileLayout, sectionIds]);

  return (
    <div className={`app-shell ${location.pathname === "/" ? "home-route" : ""} ${location.pathname === "/contact" ? "contact-route" : ""}`}>
      <Navbar
        isMobile={mobileLayout}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        theme={theme}
        onThemeChange={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      />
      <main className="app-content">
        {mobileLayout && !knownRoutes.includes(location.pathname) ? (
          <NotFound />
        ) : mobileLayout ? (
          <MobilePortfolio onSectionChange={setActiveSection} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </main>
      <footer className="site-footer">
        <p>© 2026 Shubham Vashisht</p>
        <div className="footer-socials">
          <a href="https://github.com/Vashishtjii" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shubham-vashisht-317775292/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedinIn /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
