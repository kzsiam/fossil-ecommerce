"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    >
      {/* Custom cursor design */}
      <div className="relative flex items-center justify-center">
        {/* Outer circle */}
        <div className="w-6 h-6 rounded-full border border-gray-400" />
        {/* Inner dot */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
