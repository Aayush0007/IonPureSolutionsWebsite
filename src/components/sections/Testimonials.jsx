import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* 1. COMPACT BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#7CB35B]/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#2C5DA7]/5 blur-[80px] rounded-full" />
      </div>

      <div className="section-container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        {/* 2. REFINED HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-4 md:mb-6"
          >
            <MessageCircle size={12} className="text-[#2C5DA7]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">Wellness Stories</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-[#1A365D]">
            Loved by{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Every User.
            </span>
          </h2>
        </div>

        {/* 3. RESPONSIVE CAROUSEL CONTAINER */}
        {/* min-height ensures space for content on all devices */}
        <div className="relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 32 },
                opacity: { duration: 0.3 }
              }}
              className="absolute w-full"
            >
              <div className="relative bg-white border border-gray-100 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(26,54,93,0.04)] overflow-hidden">
                <Quote className="absolute top-4 right-6 md:top-6 md:right-8 text-gray-50 -rotate-12 w-16 h-16 md:w-20 md:h-20" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#7CB35B" className="text-[#7CB35B]" />
                    ))}
                  </div>

                  <p className="text-lg md:text-2xl font-bold text-[#1A365D] leading-relaxed mb-6 md:mb-8 italic pr-4">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#2C5DA7] to-[#1A365D] flex items-center justify-center text-white font-black text-base md:text-lg">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-black text-[#1A365D] uppercase tracking-tighter italic leading-none">
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <p className="text-[9px] md:text-[10px] font-bold text-[#7CB35B] uppercase tracking-widest mt-1">
                        {TESTIMONIALS[currentIndex].role} • {TESTIMONIALS[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 4. REFINED CONTROLS - Integrated into Desktop/Mobile positions */}
          {/* Desktop Arrows (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <button
              onClick={() => paginate(-1)}
              className="absolute left-[-80px] top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white border border-gray-100 text-[#2C5DA7] shadow-xl hover:bg-[#2C5DA7] hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white border border-gray-100 text-[#2C5DA7] shadow-xl hover:bg-[#2C5DA7] hover:text-white transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 5. MOBILE CONTROL BAR & PROGRESS */}
        <div className="flex flex-col items-center gap-6 mt-12 lg:mt-20">
          {/* Mobile Arrows (Visible on mobile, hidden on desktop) */}
          <div className="flex gap-4 lg:hidden">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-xl bg-white border border-gray-100 text-[#2C5DA7] shadow-lg active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-xl bg-white border border-gray-100 text-[#2C5DA7] shadow-lg active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Responsive Progress Indicators */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1 transition-all duration-500 rounded-full ${
                  i === currentIndex ? 'w-8 bg-[#2C5DA7]' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}