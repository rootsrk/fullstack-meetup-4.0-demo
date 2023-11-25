import { useState, useLayoutEffect, useRef } from "react";

export function MeasureWidthOfAnElement() {
  const [width, setWidth] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (elementRef.current) {
        console.log("useLayoutEffect", elementRef.current.offsetWidth);
        setWidth(elementRef.current.offsetWidth);
      }
    };

    // Set the initial width
    updateWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Clean up
    return () => window.removeEventListener("resize", updateWidth);
  }, []); // Empty dependency array ensures this runs on mount and unmount only

  return (
    <div>
      <div ref={elementRef}>Measure my width</div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
}
