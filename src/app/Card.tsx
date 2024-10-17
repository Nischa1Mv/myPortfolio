import Image from "next/image";
import { useState } from "react";

interface CardProps {
  projectDetails: ProjectDetailsProps;
  src: string;
}

function Card({ projectDetails, src }: CardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div
      className=" border-2 m-auto border-[#f1faee] relative rounded-3xl min-w-[24%] h-[67%] aspect-square  "
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <Image src={src} width={500} height={500} alt="Project Image" />
      {isHovered && (
        <ProjectDetails
          title={projectDetails.title}
          description={projectDetails.description}
          techStack={projectDetails.techStack}
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
      <div className=" animate-slow-appear px-2 py-2 bg-[#f1faee] flex flex-col w-full h-[35%] absolute bottom-0 rounded-b-2xl text-[#141414]">
        {" "}
        <div className="mb-1 text-base">{title}fsdfsd</div>
        <div className="mb-1 text-sm flex-1">{description}fasdfasf</div>
        <div className="flex gap-2">
          {techStack.map((tech, index) => (
            <TechStack key={index} tech={tech} />
          ))}
        </div>
      </div>
    </>
  );
}

interface TechStackProps {
  tech: string;
}
function TechStack({ tech }: TechStackProps) {
  return (
    <div className="border-2 text-xs font-semibold px-1 rounded-lg border-[#141414] w-fit">
      {tech}
    </div>
  );
}
