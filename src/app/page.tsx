"use client";

import { useRef } from "react";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Main from "./Main";

const Home: React.FC = () => {
  const divRefs = useRef<(HTMLDivElement | null)[]>(new Array(3).fill(null));
  const scrollSVG = useRef<SVGSVGElement | null>(null);

  // Handle click to scroll to the nearest div
  const handleClick = () => {
    if (!divRefs.current.length) return;

    let nearestDiv: HTMLDivElement | null = null;
    let minDistance = Infinity;
    const firstDiv = divRefs.current[0];
    const lastDiv = divRefs.current[divRefs.current.length - 1];
    // const length = divRefs.current.length;

    // Loop through all divs to find the nearest one
    divRefs.current.forEach((div, index) => {
      if (!div) return;
      const rect = div.getBoundingClientRect();
      const distance = rect.top;
      // Check if the last div is fully in view
      if (div === lastDiv) {
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          console.log("Last div is fully in view");
          firstDiv?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          if (scrollSVG.current) {
            scrollSVG.current.style.transform = "rotate(0deg)";
          }
          return;
        }
      }

      // Check if the div is fully in view
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        console.log(" div is fully in view");
        nearestDiv = divRefs.current[index + 1] || firstDiv;
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

      // Rotate SVG if scrolled to the last div
      if (nearestDiv === lastDiv) {
        if (scrollSVG.current) {
          scrollSVG.current.style.transform = "rotate(180deg)";
        }
      }
    }
  };

  return (
    <>
      {/* Down Arrow -> scrollSVG  */}
      <svg
        ref={scrollSVG}
        onClick={handleClick}
        className=" hidden lg:flex cursor-pointer mix-blend-difference  z-50 fixed right-6 bottom-10 px-2 py-1 border-2 border-white p rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(3.5px)",
          WebkitBackdropFilter: "blur(3.5px)",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="50"
        height="50"
        fill="#fff"
      >
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>

      <Main divRefs={divRefs} />

      <MyProjects divRefs={divRefs} />

      <ContactMe divRefs={divRefs} />
    </>
  );
};
export default Home;
