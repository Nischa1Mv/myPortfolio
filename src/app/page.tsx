"use client";

import { useEffect, useRef, useState } from "react";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Main from "./Main";

const Home: React.FC = () => {
  const divRefs = useRef<(HTMLDivElement | null)[]>(new Array(3).fill(null));
  const scrollSVG = useRef<SVGSVGElement | null>(null);
  const [isRotated, setIsRotated] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // Check if the user is within 10px of the bottom
      if (scrollPosition >= pageHeight - 10) {
        setIsBottom(true);
        setIsRotated(true);
      } else {
        setIsBottom(false);
        setIsRotated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click to scroll to the nearest div
  const handleClick = () => {
    if (!divRefs.current.length) return;

    let nearestDiv: HTMLDivElement | null = null;
    let minDistance = Infinity;

    // If at the bottom, scroll to the top
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Loop through all divs to find the nearest one
    divRefs.current.forEach((div, index) => {
      if (!div) return;
      const rect = div.getBoundingClientRect();
      const distance = rect.top;

      //div occupies the full screen
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        // Check if the div is fully in view

        console.log(" div is fully in view");
        nearestDiv = divRefs.current[index + 1];
      }
      // If the div is partially visible, find the nearest one
      else if (distance < minDistance && distance > 0) {
        minDistance = distance;
        nearestDiv = div;
      }
    });

    // Scroll to the nearest div
    if (nearestDiv) {
      (nearestDiv as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Down Arrow -> scrollSVG  */}
      <div
        className="z-50 fixed right-8 bottom-8 border-2 border-white rounded-2xl mix-blend-difference"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          backdropFilter: "blur(3.5px)",
          WebkitBackdropFilter: "blur(3.5px)",
        }}
      >
        <svg
          ref={scrollSVG}
          onClick={handleClick}
          className={` transition-transform duration-300 ${
            isRotated ? "rotate-180" : ""
          }   hidden lg:flex cursor-pointer  `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="50"
          height="50"
          fill="currentColor"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </div>

      <Main divRefs={divRefs} />

      <MyProjects divRefs={divRefs} />

      <ContactMe divRefs={divRefs} />
    </>
  );
};
export default Home;
