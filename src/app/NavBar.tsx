"use client";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="nav-text-bg flex py-1">
        {isMenu && (
          <div className="menu-container flex text-lg  text-[#111827] items-center px-4 ">
            <div className="cursor-pointer nav-text px-4 nav-text ">Home</div>
            <div className="cursor-pointer nav-text px-4 nav-text ">
              Projects
            </div>
            <div className="cursor-pointer nav-text px-4 nav-text">
              Contact Me
            </div>
            <div className="cursor-pointer nav-text  px-4 nav-text ">
              Resume
            </div>
          </div>
        )}
        <div
          className={`hamburger p-4 cursor-pointer flex  ${
            isMenu ? "is-active" : ""
          }`}
          onClick={() => setIsMenu(!isMenu)}
        >
          <div className="hamburger__container">
            <div className="hamburger__inner"></div>
            <div className="hamburger__hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
