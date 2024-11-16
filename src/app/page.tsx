"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";
import Card from "./Card";
import { FormEvent, useEffect, useRef, useState } from "react";
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
import axios from "axios";

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
    Src: "",
  },
  {
    title: "URL Shortener",
    description: "Shorten your long URL's to a short one",
    techStack: ["React.js", "Javascript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/UrlShortener",
    Src: "",
  },
  {
    title: "URL Shortener",
    description: "Shorten your long URL's to a short one",
    techStack: ["React.js", "Javascript", "Firebase", "Tailwind"],
    link: "https://github.com/Nischa1Mv/UrlShortener",
    Src: "",
  },
];

const Home: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lastSubmissionTime = localStorage.getItem("lastSubmission");
    const currentTime = new Date().getTime();
    const coolDown = 10000;

    if (
      lastSubmissionTime &&
      currentTime - parseInt(lastSubmissionTime) < coolDown
    ) {
      setError("Please wait before submitting again");
      return;
    }
    localStorage.setItem("lastSubmission", currentTime.toString());

    const formData = {
      name: (event.currentTarget.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (
        event.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value,
      message: (
        event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    };

    try {
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.NEXT_PUBLIC_discordID}/${process.env.NEXT_PUBLIC_discordToken}`,
        {
          content: `**Name**: ${formData.name}\n**Email**: ${formData.email}\n**Message**: ${formData.message}\n\n\n`,
        }
      );
      setError("Form submitted successfully");
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the form");
    } finally {
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);
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
      <svg
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
          className=" flex lg:flex-row flex-col border border-opacity-20 border-white lg:border-none  xl:gap-10 overflow-x-auto overflow-y-auto lg:h-fit h-[55%]   mt-8 mb-5 scrollbar-hide lg:mb-10 py-4 px-4"
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
          onSubmit={handleSubmit}
          className="w-full flex-col flex items-center justify-center "
        >
          <div className="flex lg:flex-row   flex-col items-center justify-center w-full gap-10 mb-10 lg:gap-40 lg:mb-20">
            <input
              name="name"
              required
              type="text"
              placeholder="Enter Your Name"
              className="shadow-[#979eaa] shadow-md focus:placeholder:text-[#9ca3af] focus:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] py-4 px-4 text-xl rounded-lg bg-transparent lg:w-[30%] border-[#141414] placeholder:font-bold "
            />

            <input
              name="email"
              required
              className="shadow-[#979eaa] shadow-md focus:placeholder:text-[#9ca3af] focus:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] px-4 py-4 text-xl rounded-lg bg-transparent  lg:w-[30%] border-[#141414]  placeholder:font-bold "
              type="email"
              placeholder=" Enter Your Email"
            />
          </div>
          <div className="w-full lg:px-60 lg:mb-20 my-5">
            <textarea
              name="message"
              required
              className=" shadow-[0_4px_6px_0_rgba(151,158,170,0.5)]  focus:placeholder:text-[#9ca3af] focus:bg-[#141414] focus:border-[#37d299] focus:rounded-lg focus:text-[#d6cc99] text-[#141414] font-bold border-b-[3px] rounded-none w-full px-4 py-4 text-xl  bg-transparent   border-[#141414]  placeholder:font-bold "
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="shadow-[#979eaa] shadow-md hover:text-[#d6cc99] hover:bg-[#141414] hover:border-[#37d299] text-[#141414] font-bold border-[#141414] border-[3px] lg:px-0 px-5 text-xl py-2 lg:w-[25%] rounded-lg mt-4"
          >
            Say Hello
          </button>

          {error && (
            <div className="text-red-500 font-semibold text-sm mt-2 ">
              {error}
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Home;
