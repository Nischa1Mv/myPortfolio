"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";
import { useRef } from "react";

interface MainProps {
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
function Main({ divRefs }: MainProps) {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (divRef: HTMLDivElement | null) => {
    if (divRef) {
      divRef.scrollIntoView({ behavior: "smooth" });
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
        <div className=" lg:hidden overflow-hidden shadow-black-xl flex justify-center items-center rounded-full ">
          <Image
            className="rounded-full aspect-square"
            // src="https://media.gq.com/photos/646baa821fa990bc7018e902/master/w_1920,c_limit/GQ0723_Gosling_01.jpg"
            src="https://avatars.githubusercontent.com/u/118107697?v=4"
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
          <div className=" hidden lg:flex lg:w-[105%]   lg:justify-center lg:items-center ">
            <div className="border-4 overflow-hidden shadow-black-xl shadow-black border-gray-500 rounded-[6px] ">
              <Image
                // src="https://media.gq.com/photos/646baa821fa990bc7018e902/master/w_1920,c_limit/GQ0723_Gosling_01.jpg"
                src="https://avatars.githubusercontent.com/u/118107697?v=4"
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
    </>
  );
}

export default Main;
