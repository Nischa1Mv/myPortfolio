import React, { useRef } from "react";
import Card from "./Card";
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
import URLShortner from "../../public/images/URLShortner.png";
import PasswordManager from "../../public/images/PasswordManager.png";

const projectDetails = [
  {
    title: "Zealliance",
    description: "An all-in-one Fitness app one will ever need",
    techStack: ["React.js", "Typescript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/Zealliance-MiniP",
    Src: { Zealliance },
  },
  {
    title: "Password Manager",
    description: "Manage all your passwords of all Platforms in one place",
    techStack: ["React.js", "Javascript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/passwordManager",
    Src: { PasswordManager },
  },
  {
    title: "URL Shortener",
    description: "Shorten your long URL's to a short one",
    techStack: ["React.js", "Javascript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/UrlShortener",
    Src: { URLShortner },
  },
  {
    title: "URL Shortener",
    description: "Shorten your long URL's to a short one",
    techStack: ["React.js", "Javascript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/UrlShortener",
    Src: "",
  },
];
interface Props {
  divRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

function MyProjects({ divRefs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const container = containerRef.current;

      const isScrollable = container.scrollWidth > container.clientWidth;

      if (isScrollable) {
        event.preventDefault();
        event.stopPropagation();

        container.scrollLeft += event.deltaY * 5;
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
      <div
        className="h-[100vh] pt-7 lg:pt-10 lg:py-20 px-5 lg:px-20"
        id="page2"
        ref={(el) => {
          if (divRefs.current) {
            divRefs.current[1] = el; // Set the ref for the second index
          }
        }}
      >
        <div className="lg:text-5xl text-2xl font-bold">
          <span className="text-[#D23770]">My</span>
          <span className="text-[#37D299]"> Projects</span>
        </div>
        <div
          className=" flex lg:flex-row flex-col border border-opacity-20 border-white lg:border-none lg:ml-6  xl:gap-6 overflow-x-auto overflow-y-auto lg:h-fit h-[55%]   mt-8 mb-5 scrollbar-hide lg:mb-10 py-2 px-2"
          ref={containerRef}
          onWheel={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: "smooth",
            pointerEvents: "auto",
            background: "#141414",
            boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(0px)", // backdrop-filter in camelCase
            WebkitBackdropFilter: "blur(0px)", // -webkit-backdrop-filter in camelCase
            borderRadius: "10px", // border-radius in camelCase
            // border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          {projectDetails.map((project, index) => (
            <>
              <Card
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                src={project.Src}
                link={project.link}
              />
              <div className="lg:hidden  mt-4 mb-10 flex flex-col justify-center items-start gap-1 ">
                <h1 className="font-extrabold text-xl ">
                  <a href={project.link} target="_blank">
                    {project.title}
                  </a>
                </h1>
                <div className="font-medium text-md">{project.description}</div>
                <div className="font-medium text-xs flex gap-2 ">
                  {project.techStack.map((techStack, index) => (
                    <div
                      className="rounded-xl border-2 px-2 hover:bg-white hover:text-black"
                      key={index}
                    >
                      {techStack}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
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
    </>
  );
}

export default MyProjects;
