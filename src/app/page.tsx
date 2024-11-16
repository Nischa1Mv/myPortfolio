"use client";
import Socials from "./socials";
import Image from "next/image";
import NavBar from "./NavBar";

import { FormEvent, useEffect, useRef, useState } from "react";

import axios from "axios";
import MyProjects from "./MyProjects";

// import ScrollToNearestDiv from "./test";

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

      <div className="relative  h-[85vh] bg-[#F1FAEE]  lg:pt-0 " id="page1">
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
      <MyProjects divRefs={divRefs} />
      {/* -------------------------- PAGE 3 ------------------------------- */}
      <div
        className="py-10   px-6  lg:px-20 bg-[#F1FAEE] w-full flex-col flex items-center"
        id="page3"
        ref={(el) => {
          divRefs.current[2] = el;
        }}
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
            <div className="text-red-500 font-semibold text-sm  ">{error}</div>
          )}
        </form>
      </div>
      {/* <div>
        <ScrollToNearestDiv />
      </div> */}
    </>
  );
};
export default Home;
