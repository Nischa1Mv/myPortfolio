"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";

import { useRef } from "react";

import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

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

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (divRef: HTMLDivElement | null) => {
    if (divRef) {
      divRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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

      {/* -------------------------- PAGE 1 ------------------------------- */}
      <div
        ref={(el) => {
          divRefs.current[0] = el;
        }}
        className="fixed shadow-lg z-50  hidden lg:flex flex-col gap-5 top-44 left-0 border-2 px-4 py-4
          mix-blend-difference "
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(3.5px)",
          WebkitBackdropFilter: "blur(3.5px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Socials />
      </div>

      <div className="relative  h-[90vh] bg-[#F1FAEE]  lg:pt-0 " id="page1">
        <div className="flex justify-end mb-8">
          <NavBar
            scrollToRef={scrollToRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        </div>
        <div className=" lg:hidden overflow-hidden shadow-black-xl flex justify-center items-center rounded-full">
          <Image
            className="rounded-full aspect-square"
            src="https://media.gq.com/photos/646baa821fa990bc7018e902/master/w_1920,c_limit/GQ0723_Gosling_01.jpg"
            alt="My_Image"
            width={190}
            height={100}
          />
        </div>

        <div className="flex mx-5">
          <div className=" mt-4  lg:mt-14 lg:ml-24">
            <div className="text-4xl w-fit text-nowrap  items-center justify-center lg:text-7xl font-bold flex gap-4 text-[#37D299]">
              <div className=""> Nischal Mantri</div>
            </div>
            <div className="  lg:mt-4 text-lg lg:text-6xl font-bold text-[#111827]">
              Full Stack Developer
            </div>
            <p className="lg:mt-10 mt-4  text-pretty lg:text-sm text-xs  font-semibold text-[#111827]">
              I’m passionate about clean, functional design, believing in the
              power of minimalism—where every line of code has a purpose and
              every pixel tells a story. Whether I’m building robust back-end
              systems or crafting intuitive front-end interfaces, my focus is
              always on achieving a perfect balance between simplicity and
              functionality.
            </p>

            <p className="block text-xs  mt-4 text-pretty lg:text-sm font-semibold text-[#111827]">
              When I’m not immersed in coding, you’ll likely find me diving into
              the latest tech articles or exploring new frameworks. In my free
              time, I enjoy gaming and staying active at the gym, always
              striving to improve myself. I also attend numerous tech events,
              where I connect with fellow enthusiasts, share insights, and
              collaborate on exciting projects.
            </p>
            <p className=" mt-4 text-pretty text-xs lg:text-sm font-semibold text-[#111827]">
              Whether it’s a challenging workout, an intense gaming session, or
              a stimulating tech conference, I’m constantly pushing my limits
              and seeking new ways to grow both personally and professionally.
            </p>
          </div>
          <div className=" hidden lg:flex lg:w-[105%]   lg:justify-center lg:items-center">
            <div className="border-4  overflow-hidden shadow-black-xl">
              <Image
                src="https://media.gq.com/photos/646baa821fa990bc7018e902/master/w_1920,c_limit/GQ0723_Gosling_01.jpg"
                alt="My_Image"
                width={450}
                height={200}
              />
            </div>
          </div>
        </div>
        <div
          className=" lg:hidden flex  space-x-10 mt-10  justify-center items-center px-4 py-4
          mix-blend-difference "
        >
          <Socials />
        </div>
      </div>
      {/* <div className="w-full hidden lg:flex h-[10vh]"></div> */}

      {/* -------------------------- PAGE 2 ------------------------------- */}
      <MyProjects divRefs={divRefs} />
      {/* -------------------------- PAGE 3 ------------------------------- */}
      <ContactMe divRefs={divRefs} />
      {/* <div>
        <ScrollToNearestDiv />
      </div> */}
    </>
  );
};
export default Home;
