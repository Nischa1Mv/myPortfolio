"use client";
import { useState } from "react";

interface NavBarProps {
  scrollToRef: (divRef: HTMLDivElement | null) => void;
  projectsRef: React.RefObject<HTMLDivElement>; // Change to RefObject
  contactRef: React.RefObject<HTMLDivElement>; // Change to RefObject
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToRef,
  contactRef,
  projectsRef,
}) => {
  const [isMenu, setIsMenu] = useState(false);

  const handleDownloadPdf = () => {};

  return (
    <nav className="nav-text-bg flex lg:py-1 lg:w-fit w-full lg:justify-normal justify-end px-4  ">
      {isMenu && (
        <div className="menu-container flex text-sm lg:text-lg text-[#111827] items-center lg:justify-normal justify-between  w-full  lg:px-4">
          <div className="cursor-pointer nav-text px-2 lg:px-4">Home</div>
          <div
            className="cursor-pointer nav-text  lg:px-4"
            onClick={() => scrollToRef(projectsRef.current)}
          >
            Projects
          </div>
          <div
            className="cursor-pointer nav-text px-2 lg:px-4"
            onClick={() => scrollToRef(contactRef.current)}
          >
            Contact Me
          </div>
          <div
            className="cursor-pointer nav-text pr-2 lg:px-4"
            onClick={handleDownloadPdf}
          >
            <a
              href={`./Nischal_Resume.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
      <div
        className={`hamburger p-4 cursor-pointer flex ${
          isMenu ? "is-active" : ""
        }`}
        onClick={() => setIsMenu(!isMenu)}
        aria-expanded={isMenu}
        aria-controls="menu"
      >
        <div className="hamburger__container">
          <div className="hamburger__inner"></div>
          <div className="hamburger__hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
