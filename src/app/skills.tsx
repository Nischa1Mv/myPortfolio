import Image from "next/image";

interface SkillProps {
  src: string;
  label: string;
}

function Skill({ src, label }: SkillProps) {
  return (
    <div className="p-2 flex items-center xl:gap-4 cursor-pointer text-white    hover:scale-95   lg:w-full tag-text">
      <Image className="" src={src} alt={label} height={30} width={30} />
      <span className="lg:text-xl lg:flex hidden text-nowrap text-center font-semibold text-shadow-lg w-fit  ">
        {label}
      </span>
    </div>
  );
}

export default Skill;
