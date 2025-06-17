import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  techStack: string[];
  src:
    | string
    | StaticImageData
    | { Zealliance: StaticImageData }
    | { URLShortner: StaticImageData }
    | { PasswordManager: StaticImageData }
    |{Ping: StaticImageData}
    |{memorise: StaticImageData}
    ;
  link: string;
}
function Card({ title, description, techStack, src, link }: CardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  let imageSrc: string | StaticImageData;

  if (typeof src === "string") {
    imageSrc = src;
  } else if ("Zealliance" in src) {
    imageSrc = src.Zealliance;
  } else if ("URLShortner" in src) {
    imageSrc = src.URLShortner;
  } else if ("PasswordManager" in src) {
    imageSrc = src.PasswordManager;
  }else if ("Ping" in src) {
    imageSrc = src.Ping;
  }
  else if ("memorise" in src) {
    imageSrc = src.memorise;
  }
   else {
    imageSrc = src; // It's a StaticImageData directly
  }

  return (
    <div
      className=" cursor-pointer border-2 border-[#f1faee] overflow-hidden  relative rounded-3xl w-full h-[60%]  lg:min-w-[30rem] lg:min-h-[22rem] aspect-square lg:aspect-video hover:border-[#fde68a]"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <Link href={link} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-3xl transform transition-transform duration-300 hover:scale-110"
            src={imageSrc}
            alt="Project Image"
            layout="fill" // Make the image fill its parent container
            objectFit="cover" // Cover the container while maintaining aspect ratio
          />
        </a>
      </Link>
      {isHovered && (
        <ProjectDetails
          title={title}
          description={description}
          techStack={techStack}
        />
      )}
    </div>
  );
}

export default Card;

interface ProjectDetailsProps {
  title: string;
  description: string;
  techStack: string[];
}

function ProjectDetails({
  title,
  description,
  techStack,
}: ProjectDetailsProps) {
  return (
    <>
      <div className="animate-slow-appear px-2 py-2 bg-[rgba(241,250,238,0.9)] lg:flex flex-col w-full lg:h-[30%] h-[40%] hidden  absolute bottom-0 rounded-b-2xl  text-[#141414]">
        {" "}
        <div className="text-xs font-bold lg:text-base">{title}</div>
        <div className=" text-[0.4rem] flex grow lg:text-[0.7rem] flex-1 font-bold">
          {description}
        </div>
        <div className="lg:flex   flex justify-center items-center lg:text-[0.7rem]  text-[0.4rem]  gap-1 lg:gap-1 ">
          {techStack.map((tech, index) => (
            <TechStack key={index} tech={tech} />
          ))}
        </div>
      </div>
    </>
  );
}
export { ProjectDetails };

interface TechStackProps {
  tech: string;
}
function TechStack({ tech }: TechStackProps) {
  return (
    <div className="lg:border-2 lg:flex font-semibold px-1 rounded-lg shadow-[#979eaa] shadow-md border border-[#141414] w-fit">
      {tech}
    </div>
  );
}
