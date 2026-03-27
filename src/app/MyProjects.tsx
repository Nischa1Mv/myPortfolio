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
import Ping from "../../public/images/Ping.png";
import memorise from "../../public/images/memorise.png";

const projectDetails = [
  {
    title: "Ping",
    description: "Online Messaging app to connect with friends",
    techStack: ["Next.js", "Typescript", "Mongodb", "Websockets", "Tailwind"],
    link: "https://pings-iota.vercel.app/",
    Src: { Ping },
  },
  {
    title: "Memorise",
    description:
      "A notes app to help you organize and remember important information.",
    techStack: ["Next.js", "Typescript", "Mongodb", "Tailwind"],
    link: "https://github.com/Nischa1Mv/memo-rise",
    Src: { memorise },
  },
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

  return (
    <>
      <div
        className="min-h-[100svh] py-8 lg:py-10 px-5 lg:px-20 bg-projects"
        id="page2"
        ref={(el) => {
          if (divRefs.current) {
            divRefs.current[1] = el; // Set the ref for the second index
          }
        }}
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="lg:text-5xl text-3xl font-bold">
            <span className="text-[#D23770]">My</span>
            <span className="text-primary"> Projects</span>
          </div>
        </div>

        <div
          className="mx-auto mt-5 mb-6 w-full max-w-[1500px] grid grid-cols-1 gap-5 lg:flex lg:gap-6 lg:overflow-x-auto lg:overflow-y-hidden lg:scroll-smooth lg:snap-x lg:snap-mandatory scrollbar-hide"
          ref={containerRef}
          onWheel={handleScroll}
        >
          {projectDetails.map((project, index) => (
            <React.Fragment key={project.title}>
              <Card
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                src={project.Src}
                link={project.link}
                priority={index === 0}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Mobile screen */}
        <div className="lg:hidden flex text-2xl gap-2 mb-4 font-bold">
          <span className="text-[#D23770]">My</span>
          <span className="text-[#37D299]"> Skills</span>
        </div>
        {/* <div className="text-xl mx-6 my-6 font-bold lg:hidden flex">
      My Skills
    </div> */}
        <div className="flex lg:hidden justify-center items-center space-x-8 mb-1">
          <div className="overflow-hidden whitespace-nowrap flex gap-10 hover:pause-animation mb-6">
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
          <div className="overflow-hidden whitespace-nowrap flex gap-10 hover:pause-animation mb-6">
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
        <div className="overflow-hidden whitespace-nowrap hidden lg:flex gap-10 hover:pause-animation mb-6 mt-1">
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
        <div className="overflow-hidden whitespace-nowrap hidden lg:flex gap-10 hover:pause-animation mb-3">
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
