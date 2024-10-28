"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";
import Card from "./Card";
import { useRef } from "react";
import Skill from "./skills";

import react from "../../public/svg/react.svg";
import next from "../../public/svg/next.svg";
import tailwind from "../../public/svg/Tailwind.svg";
import typescript from "../../public/svg/Typescript.svg";
import Html5 from "../../public/svg/HTML5.svg";
import Css3 from "../../public/svg/CSS3.svg";
import Javascript from "../../public/svg/Javascript.svg";
import Firebase from "../../public/svg/firebase.svg";
import Node from "../../public/svg/NodeJs.svg";
import Express from "../../public/svg/express.svg";
import MongoDB from "../../public/svg/mongoDB.svg";
import Postgres from "../../public/svg/PostgressSQL.svg";
import Python from "../../public/svg/python.svg";
import Django from "../../public/svg/django.svg";
import Cpp from "../../public/svg/cpp.svg";
import Java from "../../public/svg/java.svg";
import C from "../../public/svg/c.svg";

import Zealliance from "../../public/images/Zealliance.png";

const projectDetails = {
  title: "Zealliance",
  description: "An all-in-one Fitness app one will ever need",
  techStack: ["React.js", "Typescript", "Firebase", "Tailwind"],
};

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (divRef: React.RefObject<HTMLDivElement>) => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const container = containerRef.current;

      const isScrollable = container.scrollWidth > container.clientWidth;

      if (isScrollable) {
        event.preventDefault();
        event.stopPropagation();

        container.scrollLeft += event.deltaY;
      }
    }
  };
  const handleMouseEnter = () => {
    document.body.style.overflow = "hidden"; // Disable vertical scrolling
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = "auto"; // Enable vertical scrolling
  };
  return (
    <>
      {/* -------------------------- PAGE 1 ------------------------------- */}
      <div
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

      <div className="relative  h-[85vh] bg-[#F1FAEE]  lg:pt-0 " id="page1">
        <div className="flex justify-end mb-8">
          <NavBar
            scrollToRef={scrollToRef}
            contactRef={contactRef}
            projectsRef={projectsRef}
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
          // style={{
          //   background: "rgba(255, 255, 255, 0.05)",
          //   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          //   backdropFilter: "blur(3.5px)",
          //   WebkitBackdropFilter: "blur(3.5px)",
          //   borderRadius: "10px",
          //   border: "1px solid rgba(255, 255, 255, 0.18)",
          // }}
        >
          <Socials />
        </div>
      </div>
      <div className="w-full hidden lg:flex h-[10vh]"></div>

      {/* -------------------------- PAGE 2 ------------------------------- */}
      <div
        className="h-[100vh] pt-7 lg:pt-0 lg:py-20  px-5 lg:px-20 "
        id="page2"
        ref={projectsRef}
      >
        <div className="lg:text-5xl text-2xl font-bold">
          <span className="text-[#D23770]">My</span>
          <span className="text-[#37D299]"> Projects</span>
        </div>
        <div
          className=" flex lg:flex-row flex-col border border-opacity-20 border-white lg:border-none  gap-10 overflow-x-auto overflow-y-auto lg:h-fit h-[55%]   mt-8 mb-5 scrollbar-hide lg:mb-10 py-4 px-4"
          ref={containerRef}
          onWheel={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: "smooth",
            pointerEvents: "auto",
            // background: "rgba(255, 255, 255, 0.05)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            borderRadius: "10px",
          }}
        >
          <Card
            projectDetails={projectDetails}
            src={Zealliance.src}
            link="https://github.com/Nischa1Mv/Zealliance-MiniP"
          />

          <Card
            projectDetails={projectDetails}
            src=""
            link="https://github.com/Nischa1Mv/passwordManager"
          />
          <Card
            projectDetails={projectDetails}
            src=""
            link="https://github.com/Nischa1Mv/UrlShortener"
          />
          <Card projectDetails={projectDetails} src="" link="" />
        </div>
        {/* Mobile screen */}
        <div className="lg:hidden flex  text-2xl gap-2 mb-4  font-bold">
          <span className="text-[#D23770]">My</span>
          <span className="text-[#37D299]"> Skills</span>
        </div>
        {/* <div className="text-xl mx-6 my-6 font-bold lg:hidden flex">
          My Skills
        </div> */}
        <div className="flex lg:hidden justify-center items-center space-x-10 mb-2  ">
          <div className="overflow-hidden whitespace-nowrap flex gap-10 hover:pause-animation   mb-10">
            <div className="flex lg:flex-row flex-col lg:animate-scroll-left lg:space-x-16">
              <Skill src={react.src} label="React" />
              <Skill src={next.src} label="Next.js" />
              <Skill src={tailwind.src} label="Tailwind CSS" />
              <Skill src={typescript.src} label="Typescript" />
            </div>
            <div className="flex lg:flex-row flex-col lg:animate-scroll-left lg:space-x-16">
              {" "}
              <Skill src={Javascript.src} label="Javascript" />
              <Skill src={Express.src} label="Express.js" />
              <Skill src={Node.src} label="Node.js" />
              <Skill src={Firebase.src} label="Firebase" />
            </div>
          </div>

          {/* Second row */}
          <div className="overflow-hidden   whitespace-nowrap flex gap-10 hover:pause-animation mb-10">
            <div className="flex lg:flex-row flex-col lg:animate-scroll-left lg:space-x-16">
              <Skill src={Css3.src} label="CSS3" />
              <Skill src={MongoDB.src} label="MongoDB" />
              <Skill src={Postgres.src} label="PostgreSQL" />
              <Skill src={Django.src} label="Django" />
            </div>
            <div className="flex lg:flex-row flex-col lg:animate-scroll-left  lg:space-x-16">
              <Skill src={Python.src} label="Python" />
              <Skill src={Cpp.src} label="C++" />
              <Skill src={Java.src} label="Java" />
              <Skill src={C.src} label="C" />
            </div>
          </div>
        </div>
        {/* PC Screen */}
        {/* First row */}
        <div className="overflow-hidden whitespace-nowrap hidden lg:flex gap-10 hover:pause-animation mb-10">
          <div className="flex animate-scroll-left  space-x-16">
            <Skill src={react.src} label="React" />
            <Skill src={next.src} label="Next.js" />
            <Skill src={tailwind.src} label="Tailwind CSS" />
            <Skill src={typescript.src} label="Typescript" />
            <Skill src={Javascript.src} label="Javascript" />
            <Skill src={Express.src} label="Express.js" />
            <Skill src={Node.src} label="Node.js" />
            <Skill src={Firebase.src} label="Firebase" />
            <Skill src={Html5.src} label="HTML5" />
          </div>
          <div className="flex animate-scroll-left  space-x-16">
            <Skill src={react.src} label="React" />
            <Skill src={next.src} label="Next.js" />
            <Skill src={tailwind.src} label="Tailwind CSS" />
            <Skill src={typescript.src} label="Typescript" />
            <Skill src={Javascript.src} label="Javascript" />
            <Skill src={Express.src} label="Express.js" />
            <Skill src={Node.src} label="Node.js" />
            <Skill src={Firebase.src} label="Firebase" />
            <Skill src={Html5.src} label="HTML5" />
          </div>
        </div>

        {/* Second row */}
        <div className="overflow-hidden whitespace-nowrap hidden lg:flex gap-10 hover:pause-animation mb-10">
          <div className="flex animate-scroll-left  space-x-16">
            <Skill src={Css3.src} label="CSS3" />
            <Skill src={MongoDB.src} label="MongoDB" />
            <Skill src={Postgres.src} label="PostgreSQL" />
            <Skill src={Django.src} label="Django" />
            <Skill src={Python.src} label="Python" />
            <Skill src={Cpp.src} label="C++" />
            <Skill src={Java.src} label="Java" />
            <Skill src={C.src} label="C" />
          </div>
          <div className="flex animate-scroll-left  space-x-16">
            <Skill src={Css3.src} label="CSS3" />
            <Skill src={MongoDB.src} label="MongoDB" />
            <Skill src={Postgres.src} label="PostgreSQL" />
            <Skill src={Django.src} label="Django" />
            <Skill src={Python.src} label="Python" />
            <Skill src={Cpp.src} label="C++" />
            <Skill src={Java.src} label="Java" />
            <Skill src={C.src} label="C" />
          </div>
        </div>

        {/* end */}
      </div>
      {/* -------------------------- PAGE 3 ------------------------------- */}
      <div
        className="py-10   px-6 lg:py-20 lg:px-20 bg-[#F1FAEE] w-full flex-col flex items-center"
        id="page3"
        ref={contactRef}
      >
        {/* TITLE */}
        <div className="relative inline-block mb-10 ">
          <div className=" text-3xl lg:text-5xl z-10 relative  font-bold text-[#37d299] flex justify-center items-center w-full ">
            Get in Touch
          </div>
          <div className="bg-[#fde68a] absolute bottom-2 block w-full h-2 z-2"></div>
        </div>
        {/* some text */}
        <div className=" text-center font-bold text-md lg:text-xl text-[#141414] mb-10 lg:mb-16 w-[80%] lg:w-[30%]">
          Got a question or proposal ,or just want to say hello ? Go ahead
        </div>
        <form
          action="submit"
          className="w-full flex-col flex items-center justify-center "
        >
          <div className="flex lg:flex-row   flex-col items-center justify-center w-full gap-10 mb-10 lg:gap-40 lg:mb-20">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="shadow-[#979eaa] shadow-md focus:text-[#9ca3af] focus:placeholder:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] py-4 px-4 text-xl rounded-lg bg-transparent lg:w-[30%] border-[#141414] placeholder:font-bold "
            />

            <input
              className="shadow-[#979eaa] shadow-md focus:text-[#9ca3af] focus:placeholder:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] px-4 py-4 text-xl rounded-lg bg-transparent  lg:w-[30%] border-[#141414]  placeholder:font-bold "
              type="email"
              placeholder=" Enter Your Email"
            />
          </div>
          <div className="w-full lg:px-60 lg:mb-20 my-5">
            <textarea
              className=" shadow-[0_4px_6px_0_rgba(151,158,170,0.5)]  focus:text-[#9ca3af] focus:bg-[#141414] focus:border-[#37d299] focus:rounded-lg focus:placeholder:text-[#d6cc99] text-[#141414] font-bold border-b-[3px] rounded-none w-full px-4 py-4 text-xl  bg-transparent   border-[#141414]  placeholder:font-bold "
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="shadow-[#979eaa] shadow-md hover:text-[#d6cc99] hover:bg-[#141414] hover:border-[#37d299] text-[#141414] font-bold border-[#141414] border-[3px] lg:px-0 px-5 text-xl py-2 lg:w-[25%] rounded-lg mt-4"
          >
            Say Hello
          </button>
        </form>
      </div>
    </>
  );
};
export default Home;
