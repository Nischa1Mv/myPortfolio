import Image from "next/image";

interface SkillProps {
  src: string;
  label: string;
}

function Skill({ src, label }: SkillProps) {
  return (
    <div className="p-2 flex items-center gap-4 cursor-pointer text-white  hover:scale-95   w-full tag-text">
      <Image src={src} alt={label} height={30} width={30} />
      <span className="text-xl text-nowrap text-center font-semibold text-shadow-lg w-fit  ">
        {label}
      </span>
    </div>
  );
}

export default Skill;
