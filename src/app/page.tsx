"use client";
import { useEffect, useState } from "react";
import MenuButton from "../../menu/menuButton";
import Menu from "../../menu/menu";
import Socials from "../../socials/socials";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Home: React.FC = () => {
  useEffect(() => {
    // Function to scroll smoothly to Page 2
    const scrollToPage2 = () => {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#page2", // Target the ID of the section you want to scroll to
        ease: "power2.inOut",
      });
    };

    const scrollButton = document.getElementById("scroll-button");
    scrollButton?.addEventListener("click", scrollToPage2);

    // Cleanup function to remove the event listener
    return () => {
      scrollButton?.removeEventListener("click", scrollToPage2);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* -------------------------- PAGE 1 ------------------------------- */}
      <div
        className="fixed shadow-lg z-50 flex flex-col gap-5 top-44 left-0 border-2 px-4 py-4"
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

      <div className="relative h-[85vh] bg-[#F1FAEE]" id="page1">
        <div
          className={`w-[40%] fixed right-0 top-0 flex py-2 transition-all duration-300 ${
            menuOpen ? "shadow-lg" : "border-transparent text-[#141414]"
          } gap-10 items-center border justify-end pr-5 pl-2`}
        >
          <Menu isOpen={menuOpen} />
          <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
        <div className="flex">
          <div className="mt-14 ml-24">
            <div className="text-7xl font-bold text-[#37D299]">
              Nischal Mantri
            </div>
            <div className="mt-4 text-6xl font-bold text-[#111827]">
              Full Stack Developer
            </div>
            <p className="mt-10 text-pretty text-sm font-semibold text-[#111827]">
              I’m passionate about clean, functional design, believing in the
              power of minimalism—where every line of code has a purpose and
              every pixel tells a story. Whether I'm building robust back-end
              systems or crafting intuitive front-end interfaces, my focus is
              always on achieving a perfect balance between simplicity and
              functionality.
            </p>
            <p className="mt-4 text-pretty text-sm font-semibold text-[#111827]">
              When I’m not immersed in coding, you’ll likely find me diving into
              the latest tech articles or exploring new frameworks. In my free
              time, I enjoy gaming and staying active at the gym, always
              striving to improve myself. I also attend numerous tech events,
              where I connect with fellow enthusiasts, share insights, and
              collaborate on exciting projects.
            </p>
            <p className="mt-4 text-pretty text-sm font-semibold text-[#111827]">
              Whether it’s a challenging workout, an intense gaming session, or
              a stimulating tech conference, I’m constantly pushing my limits
              and seeking new ways to grow both personally and professionally.
            </p>

            {/* Button to Scroll to Page 2 */}
            <button
              id="scroll-button"
              className="mt-6 px-6 py-2 bg-[#37D299] text-white rounded-lg"
            >
              Scroll to Projects
            </button>
          </div>
          <div className="w-[105%] flex justify-center items-center">
            <div className="border-4 mt-[8rem] overflow-hidden shadow-black-xl">
              <img
                className=""
                src="https://media.gq.com/photos/646baa821fa990bc7018e902/master/w_1920,c_limit/GQ0723_Gosling_01.jpg"
                alt="My_Image"
                width="450px"
                height="200px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh]"></div>

      {/* -------------------------- PAGE 2 ------------------------------- */}
      <div className="h-screen py-20 px-20" id="page2">
        <div className="text-2xl font-bold">
          <span className="text-[#D23770]">My</span>
          <span className="text-[#37D299]"> Projects</span>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export default Home;
