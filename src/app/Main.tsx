"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Socials from "./socials";
import NavBar from "./NavBar";
import profilePicture from "../../public/images/profilePicture.jpeg";

interface MainProps {
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function Main({ divRefs }: MainProps) {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const syncRefs = () => {
      projectsRef.current = divRefs.current[1];
      contactRef.current = divRefs.current[2];
    };

    syncRefs();

    const observer = new MutationObserver(syncRefs);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [divRefs]);



  const glassmorphismStyles = {
    background: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  const imageGlowStyles = {
    boxShadow: "0 0 10px 3px rgba(55, 210, 153, 0.35)",
  };

  const largeImageGlowStyles = {
    padding: "4px",
    boxShadow: "0 0 12px 4px rgba(55, 210, 153, 0.4)",
  };
  const scrollToRef = (divRef: HTMLDivElement | null) => {
    console.log("Attempting to scroll to:", divRef);

    if (divRef) {
      try {
        divRef.scrollIntoView({
          behavior: "smooth",
          block: "start",
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
    <div >
      {/* Desktop Social Links */}
      <div
        ref={(el) => {
          divRefs.current[0] = el;
        }}
        className="fixed shadow-lg z-50 hidden lg:flex flex-col gap-5 top-44 left-0 border-2 px-4 py-4 mix-blend-difference"
        style={glassmorphismStyles}
      >
        <Socials />
        
      </div>
      <div
        className="mix-blend-difference fixed top-4 right-4 z-50"
        style={glassmorphismStyles}>
        <NavBar
          scrollToRef={scrollToRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        </div>

      <div className="relative h-[90vh] bg-secondary lg:py-20" id="page1">
        {/* Mobile Profile Image */}
        <div
          className="lg:hidden w-fit m-auto p-1 border-2 border-primary rounded-xl bg-card shadow-md"
          style={imageGlowStyles}
        >
          <Image
            className="rounded-lg aspect-auto transition-transform duration-300 hover:scale-105 hover:rotate-1"
            src={profilePicture}
            alt="Nischal Mantri Profile"
            width={250}
            height={200}
            quality={100}
            priority
          />
        </div>

        <div className="flex mx-5">
          <div className="mt-4 lg:mt-14 lg:ml-24">
            <div className="text-4xl w-fit text-nowrap items-center justify-center lg:text-7xl font-bold flex gap-4 text-primary">
              <div>Nischal Mantri</div>
            </div>
            <div className="lg:mt-4 text-lg lg:text-6xl font-bold text-secondary-foreground">
              Full Stack Developer
            </div>
            <p className="lg:mt-10 mt-4 text-pretty lg:text-sm text-xs font-semibold text-secondary-foreground">
              I'm passionate about clean, functional design, believing in the
              power of minimalism—where every line of code has a purpose and
              every pixel tells a story. Whether I'm building robust back-end
              systems or crafting intuitive front-end interfaces, my focus is
              always on achieving a perfect balance between simplicity and
              functionality.
            </p>
            <p className="block text-xs mt-4 text-pretty lg:text-sm font-semibold text-secondary-foreground">
              When I'm not immersed in coding, you'll likely find me diving into
              the latest tech articles or exploring new frameworks. In my free
              time, I enjoy gaming and staying active at the gym, always
              striving to improve myself. I also attend numerous tech events,
              where I connect with fellow enthusiasts, share insights, and
              collaborate on exciting projects.
            </p>
            <p className="mt-4 text-pretty text-xs lg:text-sm font-semibold text-secondary-foreground">
              Whether it's a challenging workout, an intense gaming session, or
              a stimulating tech conference, I'm constantly pushing my limits
              and seeking new ways to grow both personally and professionally.
            </p>
          </div>
          <div className="hidden lg:flex w-full justify-center items-center px-6 py-4">
            <div
              className="border-4 border-primary rounded-xl bg-card overflow-hidden transition-shadow shadow-lg"
              style={largeImageGlowStyles}
            >
              <Image
                src={profilePicture}
                alt="Nischal Mantri Profile"
                width={450}
                height={300}
                className="rounded-md transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
        {/* Mobile Social Links */}
        <div className="lg:hidden flex space-x-10 mt-10 justify-center items-center px-4 py-4 mix-blend-difference">
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Main;
