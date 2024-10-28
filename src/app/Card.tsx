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
      className=" border-2 m-auto border-[#f1faee] relative rounded-3xl w-[60%] h-[60%]  lg:min-w-[24%] lg:h-[67%] aspect-square box-shadow hover:border-[#fde68a] "
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
      <div className="animate-slow-appear px-2 py-2 bg-[#f1faee] lg:flex flex-col w-full lg:h-[35%] h-[40%] absolute bottom-0 rounded-b-2xl  text-[#141414]">
        {" "}
        <div className="mb-1 text-xs font-bold lg:text-base">{title}</div>
        <div className="mb-1 text-[0.5rem] lg:text-sm flex-1">
          {description}
        </div>
        <div className="lg:flex inline-flex flex justify-center items-center lg:text-xs  text-[0.5rem]  gap-1 lg:gap-2">
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
    <div className="border-2 lg:flex font-semibold px-1 rounded-lg shadow-[#979eaa] shadow-md border-[#141414] w-fit">
      {tech}
    </div>
  );
}
