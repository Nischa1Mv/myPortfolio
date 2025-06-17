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
    | { Ping: StaticImageData }
    | { memorise: StaticImageData };
  link: string;
}

function Card({ title, description, techStack, src, link }: CardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let imageSrc: string | StaticImageData;

  if (typeof src === "string") {
    imageSrc = src;
  } else if ("Zealliance" in src) {
    imageSrc = src.Zealliance;
  } else if ("URLShortner" in src) {
    imageSrc = src.URLShortner;
  } else if ("PasswordManager" in src) {
    imageSrc = src.PasswordManager;
  } else if ("Ping" in src) {
    imageSrc = src.Ping;
  } else if ("memorise" in src) {
    imageSrc = src.memorise;
  } else {
    imageSrc = src; // It's a StaticImageData directly
  }

  return (
    <div
      className="group relative rounded-2xl overflow-hidden w-full h-[50%] lg:min-w-[27rem] lg:min-h-[22rem] aspect-square lg:aspect-video shadow-lg border border-[#f1faee] bg-gradient-to-br from-[#f1faee]/10 to-[#141414]/80 transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] hover:border-[#fde68a]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Link href={link} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="block h-full">
          <Image
            className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageSrc}
            alt={`${title} project image`}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
          />
          {/* Overlay for hover effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-60"
            }`}
          />
        </a>
      </Link>

      {/* Floating badge for project title */}
      <div className="absolute top-3 left-3 z-20 bg-[#fde68a]/90 text-[#141414] px-3 py-0.5 rounded-full font-medium text-xs shadow-md backdrop-blur-md">
        {title}
      </div>

      {/* Details panel */}
      <ProjectDetails
        title={title}
        description={description}
        techStack={techStack}
        isVisible={isHovered}
      />
    </div>
  );
}

export default Card;

interface ProjectDetailsProps {
  title: string;
  description: string;
  techStack: string[];
  isVisible: boolean;
}

function ProjectDetails({
  title,
  description,
  techStack,
  isVisible,
}: ProjectDetailsProps) {
  return (
    <div
      className={`px-4 py-3 bg-[rgba(241,250,238,0.97)] backdrop-blur-md w-full absolute bottom-0 rounded-b-2xl text-[#141414] z-30 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      } shadow-lg`}
    >
      <h3 className="text-sm font-bold lg:text-base mb-1">{title}</h3>
      <p className="text-xs lg:text-sm font-medium mb-2 line-clamp-2 text-gray-700">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}

interface TechStackProps {
  tech: string;
}
function TechStack({ tech }: TechStackProps) {
  return (
    <div className="bg-[#141414] text-[#fde68a] font-medium px-2 py-0.5 rounded-md shadow-sm border border-[#fde68a] text-[10px] lg:text-xs tracking-tight">
      {tech}
    </div>
  );
}
