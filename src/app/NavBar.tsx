"use client";
import { useState } from "react";

interface NavBarProps {
  scrollToRef: (divRef: HTMLDivElement | null) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToRef,
  contactRef,
  projectsRef,
}) => {
  const [isMenu, setIsMenu] = useState(false);

  // Function to scroll to top for home section
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Close menu after clicking (for mobile)
    setIsMenu(false);
  };
  
  // Function to handle section navigation and close menu
  const handleNavigation = (ref: HTMLDivElement | null) => {
    console.log("Navigating to section", ref);
    if (ref) {
      scrollToRef(ref);
      setIsMenu(false);
    } else {
      console.log("Reference is null - navigation failed");
    }
  };

  return (
    <nav className="nav-text-bg flex lg:py-1 lg:w-fit w-full lg:justify-normal justify-end px-4">
      {isMenu && (
        <div className="menu-container flex text-sm lg:text-lg text-[#111827] items-center lg:justify-normal justify-between w-full lg:px-4">
          <div 
            className="cursor-pointer nav-text px-2 lg:px-4"
            onClick={scrollToHome}
          >
            Home
          </div>
          <div
            className="cursor-pointer nav-text lg:px-4"
            onClick={() => handleNavigation(projectsRef.current)}
          >
            Projects
          </div>
          <div
            className="cursor-pointer nav-text px-2 lg:px-4"
            onClick={() => handleNavigation(contactRef.current)}
          >
            Contact Me
          </div>
          <div
            className="cursor-pointer nav-text pr-2 lg:px-4"
          >
            <a
              href={`./Nischal_Mantri_Resume.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenu(false)}
            >
              My Resume
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
