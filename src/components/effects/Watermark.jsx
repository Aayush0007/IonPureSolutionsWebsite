// components/effects/Watermark.jsx
import React from "react";

const Watermark = () => {
  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none opacity-10 flex flex-wrap justify-center content-center gap-20 rotate-[-30deg] scale-150">
      {/* Generating many repeats to cover the whole screen */}
      {Array.from({ length: 50 }).map((_, i) => (
        <span 
          key={i} 
          className="text-4xl md:text-3xl font-bold text-gray-400 uppercase tracking-tighter whitespace-nowrap"
        >
          Marketing Birbal
        </span>
      ))}
    </div>
  );
};

export default Watermark;