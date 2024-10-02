"use client";

import "./menu.css"; // Import the CSS file

const MenuButton: React.FC<{ toggleMenu: () => void; menuOpen: boolean }> = ({
  toggleMenu,
  menuOpen,
}) => {
  return (
    <div
      className={`button  ${menuOpen ? "-menu-open" : ""}`}
      onClick={toggleMenu}
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
  );
};

export default MenuButton;
