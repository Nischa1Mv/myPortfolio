"use client";

import { useEffect, useRef, useState } from "react";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Main from "./Main";

const Home: React.FC = () => {
  const divRefs = useRef<(HTMLDivElement | null)[]>(new Array(3).fill(null));
  const [isAtLastSection, setIsAtLastSection] = useState(false);

  useEffect(() => {
    const updateLastSectionState = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const lastSection =
        divRefs.current[2] ||
        (document.getElementById("page3") as HTMLDivElement | null);

      if (!lastSection) {
        setIsAtLastSection(scrollPosition >= pageHeight - 10);
        return;
      }

      // Flip as soon as viewport reaches the final section start area.
      const lastSectionTriggerY =
        lastSection.offsetTop - window.innerHeight * 0.15;
      const enteredLastSection = window.scrollY >= lastSectionTriggerY;

      // Invert as soon as user reaches the final section.
      setIsAtLastSection(enteredLastSection || scrollPosition >= pageHeight - 10);
    };

    updateLastSectionState();
    window.addEventListener("scroll", updateLastSectionState);
    window.addEventListener("resize", updateLastSectionState);

    return () => {
      window.removeEventListener("scroll", updateLastSectionState);
      window.removeEventListener("resize", updateLastSectionState);
    };
  }, []);

  // Handle click to scroll to the nearest div
  const handleClick = () => {
    const sections = divRefs.current.filter(
      (section): section is HTMLDivElement => section !== null
    );

    if (!sections.length) return;

    // If in the final section, scroll back to the top.
    if (isAtLastSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const currentViewportMarker = window.scrollY + window.innerHeight * 0.45;
    const nextSection = sections.find(
      (section) => section.offsetTop > currentViewportMarker
    );

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        type="button"
        aria-label={
          isAtLastSection ? "Scroll back to top" : "Scroll to next section"
        }
        className="scroll-nav-btn mix-blend-difference z-50 fixed right-5 bottom-5 lg:right-8 lg:bottom-8"
        onClick={handleClick}
      >
        <span className="scroll-nav-float">
          <svg
            className={`scroll-nav-icon h-12 w-12 lg:h-14 lg:w-14 transition-transform duration-500 ease-out ${
              isAtLastSection ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 8 6 6 6-6" />
            <path d="m6 13 6 6 6-6" />
          </svg>
        </span>
      </button>

      <Main divRefs={divRefs} />

      <MyProjects divRefs={divRefs} />

      <ContactMe divRefs={divRefs} />
    </>
  );
};
export default Home;
