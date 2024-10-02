"use client";
import { useState } from "react";
import MenuButton from "./menu/menuButton";
import Menu from "./menu/menu";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* --------------------------PAGE 1 -------------------------------*/}

      <div className=" h-[90vh]  bg-[#F1FAEE]  ">
        <div className="flex">
          <div className="grow flex-1"></div>
          <div
            className={`w-[40%] flex py-2 transition-all duration-300 ${
              menuOpen ? "shadow-lg" : "border-transparent text-[#141414]"
            } gap-10 items-center border justify-end pr-5 pl-2`}
          >
            <Menu isOpen={menuOpen} />
            <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
          </div>
        </div>
        <div className="flex">
          <div className="mt-14">
            <div className=" ml-20 text-7xl font-bold text-[#37D299]">
              {" "}
              Nischal Mantri
            </div>
            <div className="ml-20 mt-4  text-6xl font-bold text-[#111827]">
              Full Stack Developer
            </div>
            <p className="ml-20 mt-4 font-xl text-[#111827]">
              I’m passionate about clean, functional design, believing in the
              power of minimalism—where every line of code has a purpose and
              every pixel tells a story. Whether I'm building robust back-end
              systems or crafting intuitive front-end interfaces, my focus is
              always on achieving a perfect balance between simplicity and
              functionality.
            </p>
            <p className="ml-20  mt-4 font-xl text-[#111827]">
              When I’m not immersed in coding, you’ll likely find me diving into
              the latest tech articles or exploring new frameworks. In my free
              time, I enjoy gaming and staying active at the gym, always
              striving to improve myself. I also attend numerous tech events,
              where I connect with fellow enthusiasts, share insights, and
              collaborate on exciting projects.
            </p>
            <p className="ml-20 mt-4 font-xl text-[#111827]">
              Whether it’s a challenging workout, an intense gaming session, or
              a stimulating tech conference, I’m constantly pushing my limits
              and seeking new ways to grow both personally and professionally.
            </p>
          </div>
          <div className=" text-black w-[105%] flex justify-center items-center ">
            {" "}
            <div className="border-2 mt-[5rem]">
              <img
                className="rounded-xl"
                src="https://thispersondoesnotexist.com"
                alt="My_Image"
                width="450px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh]"></div>

      {/*--------------------------------- PAGE 2 -----------------------------*/}

      <div className=" h-screen py-20 px-20">
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
