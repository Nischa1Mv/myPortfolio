import React from "react";

const ScrollToNearestDiv = () => {
  const divRefs = React.useRef([]);
  const scrollSVG = React.useRef(null);
  const [isRotated, setIsRotated] = React.useState(false);

  const handleClick = () => {
    if (!divRefs.current.length) return;

    let nearestDiv = null;
    let minDistance = Infinity;
    const firstDiv = divRefs.current[0];
    const lastDiv = divRefs.current[divRefs.current.length - 1];

    for (const div of divRefs.current) {
      const rect = div.getBoundingClientRect();
      const distance = rect.top;

      // If the last div is fully occupying the screen
      if (
        div === lastDiv &&
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      ) {
        firstDiv.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsRotated(false); // Reset SVG rotation
        return;
      }

      // Skip if any div is already fully visible
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        return;
      }

      // Find the nearest div partially visible below the viewport
      if (distance > 0 && distance < minDistance) {
        minDistance = distance;
        nearestDiv = div;
      }
    }

    // Scroll to the nearest div
    if (nearestDiv) {
      nearestDiv.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update SVG rotation if the last div becomes visible
      if (nearestDiv === lastDiv) {
        setIsRotated(true);
      }
    }
  };

  return (
    <div>
      {["blue", "green", "yellow", "red"].map((color, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          className={`section h-screen bg-${color}-200 flex items-center justify-center`}
        >
          Div {index + 1}
        </div>
      ))}

      <svg
        ref={scrollSVG}
        onClick={handleClick}
        className={`w-6 h-6 fixed bottom-4 right-4 transform ${
          isRotated ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default ScrollToNearestDiv;
