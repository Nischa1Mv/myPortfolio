// "use client";

// import React from "react";

// import { useRef } from "react";

// const ScrollToNearestDiv = () => {
//   const divRefs = useRef<HTMLDivElement[]>([]);
//   const scrollSVG = useRef<SVGSVGElement | null>(null);

//   // Handle click to scroll to the nearest div
//   const handleClick = () => {
//     if (!divRefs.current.length) return;

//     let nearestDiv = null;
//     let minDistance = Infinity;
//     const firstDiv = divRefs.current[0];
//     const lastDiv = divRefs.current[divRefs.current.length - 1];
//     // const length = divRefs.current.length;

//     // Loop through all divs to find the nearest one
//     divRefs.current.forEach((div, index) => {
//       const rect = div.getBoundingClientRect();
//       const distance = rect.top;
//       // Check if the last div is fully in view
//       if (div === lastDiv) {
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//           console.log("Last div is fully in view");
//           firstDiv.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });

//           if (scrollSVG.current) {
//             scrollSVG.current.style.transform = "rotate(0deg)";
//           }
//           return;
//         }
//       }

//       // Check if the div is fully in view
//       if (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= window.innerHeight &&
//         rect.right <= window.innerWidth
//       ) {
//         console.log(" div is fully in view");
//         nearestDiv = divRefs.current[index + 1] || firstDiv;
//       }
//       // If the div is partially visible, find the nearest one
//       else if (distance < minDistance && distance > 0) {
//         minDistance = distance;
//         nearestDiv = div;
//       }
//     });

//     // Scroll to the nearest div
//     if (nearestDiv) {
//       nearestDiv.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       // Rotate SVG if scrolled to the last div
//       if (nearestDiv === lastDiv) {
//         if (scrollSVG.current) {
//           scrollSVG.current.style.transform = "rotate(180deg)";
//         }
//       }
//     }
//   };

//   return (
//     <React.Fragment>
//       <div>
//         <div
//           ref={(el) => (divRefs.current[0] = el)}
//           id="1"
//           className="section h-screen bg-blue-200 flex items-center justify-center"
//         >
//           Div 1
//         </div>
//         <div
//           ref={(el) => (divRefs.current[1] = el)}
//           id="2"
//           className="section h-screen bg-green-200 flex items-center justify-center"
//         >
//           Div 2
//         </div>
//         <div
//           ref={(el) => (divRefs.current[2] = el)}
//           id="3"
//           className="section h-screen bg-yellow-200 flex items-center justify-center"
//         >
//           Div 3
//         </div>
//         <div
//           ref={(el) => (divRefs.current[3] = el)}
//           id="4"
//           className="section h-screen bg-red-200 flex items-center justify-center"
//         >
//           Div 4
//         </div>

//         <svg
//           ref={scrollSVG}
//           onClick={handleClick}
//           className={`w-6 h-6 fixed bottom-4 right-4 cursor-pointer transform ${
//             nearestDiv === lastDiv ? "rotate-180" : "rotate-0"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//         </React.Fragment>
//       );
//     };
//     </React.Fragment>
//     </>
//   );
// };

// export default ScrollToNearestDiv;
