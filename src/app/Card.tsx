import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

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
  priority?: boolean;
}

function Card({ title, description, techStack, src, link, priority = false }: CardProps) {
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
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full min-h-[19rem] lg:min-w-[26rem] lg:min-h-[21rem] lg:snap-start overflow-hidden rounded-2xl border-2 border-white/25 bg-[#0f172a] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
    >
      <div className="absolute inset-[3px] overflow-hidden rounded-[14px]">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          quality={90}
          priority={priority}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
      </div>

      <div className="absolute right-4 top-4 z-20 rounded-full border border-white/35 bg-black/30 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/95 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/80 group-hover:text-[#f1faee]">
        View Project
      </div>

      <ProjectDetails title={title} description={description} techStack={techStack} />
    </Link>
  );
}

export default Card;

interface ProjectDetailsProps {
  title: string;
  description: string;
  techStack: string[];
}

function ProjectDetails({ title, description, techStack }: ProjectDetailsProps) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 z-30 translate-y-0 px-4 pb-4 pt-3 text-[#f8fafc]"
    >
      <h3 className="text-lg font-bold tracking-tight text-[#f1faee]">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/90 lg:line-clamp-2">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
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
    <div className="rounded-full border border-white/35 bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#f1faee] backdrop-blur-sm">
      {tech}
    </div>
  );
}
