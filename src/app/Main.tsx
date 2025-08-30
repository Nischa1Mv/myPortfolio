"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";
import { useRef, useEffect } from "react";
import profilePicture from "../../public/images/profilePicture.jpeg";

interface MainProps {
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
function Main({ divRefs }: MainProps) {
  // Create refs that point to elements in divRefs
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  // Update our refs whenever divRefs changes
  useEffect(() => {
    const syncRefs = () => {
      projectsRef.current = divRefs.current[1];
      contactRef.current = divRefs.current[2];
    };
    
    // Initial sync
    syncRefs();
    
    // Set up MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(syncRefs);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => observer.disconnect();
  }, [divRefs]);

  const scrollToRef = (divRef: HTMLDivElement | null) => {
    console.log("Attempting to scroll to:", divRef);
    if (divRef) {
      try {
        divRef.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
        console.log("Scrolled to element");
      } catch (error) {
        console.error("Error scrolling to element:", error);
      }
    } else {
      console.warn("Cannot scroll - reference is null");
    }
  };
  return (
    <>
      <div
        ref={(el) => {
          divRefs.current[0] = el;
        }}
        className="fixed shadow-lg z-50  hidden lg:flex flex-col gap-5 top-44 left-0 border-2 px-4 py-4
    mix-blend-difference "
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
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
        <div
          className="lg:hidden w-fit m-auto p-1 border-2 border-[#37D299] rounded-xl bg-white shadow-md"
          style={{
            boxShadow: "0 0 10px 3px rgba(55, 210, 153, 0.35)", // soft mint glow
          }}
        >
          <Image
            className="rounded-lg aspect-auto transition-transform duration-300 hover:scale-105 hover:rotate-1"
            src={profilePicture}
            alt="My_Image"
            width={250}
            height={200}
            quality={100}
            priority
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
          <div className="hidden lg:flex w-full justify-center items-center px-6 py-4">
            <div
              className="border-4 border-[#37D299] rounded-xl bg-white overflow-hidden transition-shadow shadow-lg"
              style={{
                padding: "4px",
                boxShadow: "0 0 12px 4px rgba(55, 210, 153, 0.4)", // soft mint green glow
              }}
            >
              <Image
                src={profilePicture}
                alt="My Image"
                width={450}
                height={300}
                className="rounded-md transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl"
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
    </>
  );
}

export default Main;
