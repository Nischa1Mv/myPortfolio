import React from "react";

const ScrollToNearestDiv = () => {
  const divRefs = React.useRef([]);

  // Add a ref to each div
  const handleClick = () => {
    let nearestDiv = null;
    let minDistance = Infinity;

    divRefs.current.forEach((div) => {
      const rect = div.getBoundingClientRect();
      const distance = rect.top;

      if (distance < minDistance && distance > 0) {
        minDistance = distance;
        nearestDiv = div;
      }
    });

    if (nearestDiv) {
      nearestDiv.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div
        ref={(el) => (divRefs.current[0] = el)}
        id="1"
        className="section h-screen bg-blue-200 flex items-center justify-center"
      >
        Div 1
      </div>
      <div
        ref={(el) => (divRefs.current[1] = el)}
        id="2"
        className="section h-screen bg-green-200 flex items-center justify-center"
      >
        Div 2
      </div>
      <div
        ref={(el) => (divRefs.current[2] = el)}
        id="3"
        className="section h-screen bg-yellow-200 flex items-center justify-center"
      >
        Div 3
      </div>
      <div
        ref={(el) => (divRefs.current[3] = el)}
        id="4"
        className="section h-screen bg-red-200 flex items-center justify-center"
      >
        Div 4
      </div>

      <button onClick={handleClick}>
        <svg
          className="w-6 h-6 fixed bottom-4 right-4"
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
      </button>
    </div>
  );
};

export default ScrollToNearestDiv;
