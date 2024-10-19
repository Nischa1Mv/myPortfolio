"use client";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div
        className={` font-thin flex text-lg gap-4 px-4 py-2 w-fit justify-end transition-all duration-300    ${
          isMenu ? "nav-text-bg" : ""
        }`}
      >
        {isMenu && (
          <div className="flex text-[#111827] bg-transparent items-center gap-4 justify-center w-full font-medium">
            <div className="cursor-pointer nav-text text-nowrap px-4">Home</div>
            <div className="cursor-pointer nav-text text-nowrap px-4">
              Projects
            </div>
            <div className="cursor-pointer nav-text text-nowrap px-4">
              Contact Me
            </div>
            <div className="cursor-pointer nav-text text-nowrap px-4">
              Resume
            </div>
          </div>
        )}
        <div
          className={`button ${isMenu ? "-menu-open" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenu(!isMenu);
          }}
        >
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <line x1="0" y1="17" x2="48" y2="17" strokeWidth="1" />
              <line x1="0" y1="31" x2="48" y2="31" strokeWidth="1" />
            </g>
            <g>
              <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
              <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default NavBar;
