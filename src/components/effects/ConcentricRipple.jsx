import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConcentricRipple() {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback((e) => {
    if (e.target.closest('button, a, input, textarea, [role="button"], .no-ripple')) return;

    const newRipple = {
      id: crypto.randomUUID(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Cleanup: 2000ms is enough for the visual flow
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 2000); 
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {ripples.map((r) => (
          <div key={r.id} className="absolute" style={{ left: r.x, top: r.y }}>
            
            {/* 1. IMPACT CORE */}
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: [0, 1.5], opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/50"
            />

            {/* 2. OPTIMIZED RIPPLES (Reduced to 3 rings, no backdrop-blur) */}
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={`${r.id}-${idx}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 10 + idx * 4, 
                  opacity: [0, 0.5, 0] 
                }}
                transition={{
                  duration: 1.8,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/30"
                style={{
                  // Inset shadow is much cheaper than backdrop-blur
                  boxShadow: `inset 0 0 8px rgba(255,255,255,0.4)`,
                  willChange: 'transform, opacity'
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}