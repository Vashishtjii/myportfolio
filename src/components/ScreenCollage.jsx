import { useEffect, useRef, useState } from "react";

const defaultScreens = [
  { src: "/images/Screenshot 2026-05-15 233949.png", type: "browser", alt: "" },
  { src: "/images/Screenshot 2026-05-16 001546.png", type: "phone", alt: "" },
  { src: "/images/Screenshot 2026-05-16 001947.png", type: "browser", alt: "" },
];

function ScreenCollage({ images = defaultScreens, variant = "hero" }) {
  const collageRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (variant !== "hero" || window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      setOffset({ x, y });
    };
    const handleScroll = () => {
      if (collageRef.current) collageRef.current.style.setProperty("--scroll-shift", `${window.scrollY * -0.035}px`);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [variant]);

  return (
    <div
      ref={collageRef}
      className={`screen-collage screen-collage-${variant}`}
      style={{ "--mouse-x": `${offset.x}px`, "--mouse-y": `${offset.y}px` }}
      aria-hidden="true"
    >
      <div className="collage-overlay" />
      <div className="collage-track collage-track-one">
        {images.map((image, index) => (
          <div className={`collage-screen collage-screen-${image.type}`} key={`${image.src}-${index}`}>
            <img src={image.src} alt="" width="960" height="540" loading={variant === "hero" ? "eager" : "lazy"} />
          </div>
        ))}
      </div>
      <div className="collage-track collage-track-two">
        {images.slice().reverse().map((image, index) => (
          <div className={`collage-screen collage-screen-${image.type}`} key={`${image.src}-reverse-${index}`}>
            <img src={image.src} alt="" width="960" height="540" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenCollage;
