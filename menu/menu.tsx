"use client";

import "./menu.css";

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <nav
      className={` ${
        isOpen ? "opacity-100 text-[#141414] " : " invisible opacity-0"
      }`}
    >
      <ul className="  flex gap-10 text-xl font-medium ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact Me</li>
        <li className="cursor-pointer">Resume</li>
      </ul>
    </nav>
  );
};

export default Menu;
