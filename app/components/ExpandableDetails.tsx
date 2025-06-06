// 'use client';
// import { useRef, useState, useEffect } from "react";

// export default function ExpandableDetails({
//   children,
//   clampLines = 5,
// }: {
//   children: React.ReactNode;
//   clampLines?: number;
// }) {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [expanded, setExpanded] = useState(false);
//   const [needsTruncation, setNeedsTruncation] = useState(false);
//   const [isReady, setIsReady] = useState(false); // ensure DOM is ready before showing

//   useEffect(() => {
//     const el = contentRef.current;
//     if (el) {
//       // Apply clamp temporarily to measure height
//       el.classList.add(`line-clamp-${clampLines}`);
//       requestAnimationFrame(() => {
//         const truncatedHeight = el.clientHeight;
//         console.log("Truncated height:", truncatedHeight);
//         el.classList.remove(`line-clamp-${clampLines}`);
//         const fullHeight = el.clientHeight;
//         console.log("Full height:", fullHeight);
//         const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "1");

//         if (fullHeight - truncatedHeight > lineHeight / 2) {
//           setNeedsTruncation(true);
//           console.log("Content needs truncation");
//         }

//         // Finalize rendering
//         setIsReady(true);
//       });
//     }
//   }, [children, clampLines]);

//   return (
//     <div>
//       <div
//         ref={contentRef}
//         className={`transition-all duration-300 text-white leading-relaxed ${
//           isReady && !expanded ? `line-clamp-${clampLines}` : ""
//         }`}
//       >
//         {children}
//       </div>

//       {isReady && needsTruncation && (
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="text-[#66FCF1] text-sm font-medium mt-2 underline"
//         >
//           {expanded ? "Read less" : "Read more"}
//         </button>
//       )}
//     </div>
//   );
// }

"use client";
import { useRef, useState, useEffect } from "react";

export default function ExpandableDetails({
  children,
  clampLines = 5,
}: {
  children: React.ReactNode;
  clampLines?: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      // Temporarily remove any line-clamp to get the true full height
      const originalMaxHeight = el.style.maxHeight;
      const originalOverflow = el.style.overflow;
      el.style.maxHeight = "none";
      el.style.overflow = "visible";

      const fullHeight = el.scrollHeight; // Use scrollHeight for actual content height

      // Restore original styles (or clear them if they were not set)
      el.style.maxHeight = originalMaxHeight;
      el.style.overflow = originalOverflow;

      // Calculate the approximate height for the clamped lines
      // We need to render the content first to get accurate line height
      // or set a known line-height in your CSS for .text-white and .leading-relaxed
      // For now, let's assume a default or get it from computed style
      const computedStyle = getComputedStyle(el);
      const lineHeight = parseFloat(computedStyle.lineHeight) || 24; // Fallback to 24px if not parsable

      const clampedHeightThreshold = clampLines * lineHeight;
      console.log("Full height:", fullHeight);
      console.log("Clamped height threshold:", clampedHeightThreshold);
      if (fullHeight > clampedHeightThreshold + lineHeight / 2) {
        // Add a small buffer
        setNeedsTruncation(true);
      } else {
        setNeedsTruncation(false);
      }
    }
  }, [children, clampLines]); // Recalculate if children or clampLines change

  return (
    <div>
      <div
        ref={contentRef}
        className={`transition-all duration-300 text-white leading-relaxed ${
          needsTruncation && !expanded ? `line-clamp-${clampLines}` : ""
        }`}
      >
        {children}
      </div>

      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#66FCF1] text-sm font-medium mt-2 underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
