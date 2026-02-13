import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000); // Extended duration for comfortable reading
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      {/* 1. BRANDED BACKGROUND ACCENTS - Zero Black Shades */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#7CB35B]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#2C5DA7]/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="section-container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        {/* 2. REFINED HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-6"
          >
            <Heart size={14} className="text-[#7CB35B]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2C5DA7]">Verified Wellness Journeys</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter text-[#2C5DA7]">
            Trusted by <br className="md:hidden" />
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Every User.
            </span>
          </h2>
        </div>

        {/* 3. TRANSITION CONTAINER */}
        <div className="relative min-h-[450px] md:min-h-[380px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              <div className="relative bg-[#F8FAFC] border border-[#2C5DA7]/10 p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_rgba(44,93,167,0.06)] overflow-hidden">
                <Quote className="absolute top-8 right-10 text-[#2C5DA7]/5 -rotate-12 w-24 h-24 md:w-32 md:h-32" />
                
                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-6 md:mb-10">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#7CB35B" className="text-[#7CB35B]" />
                    ))}
                  </div>

                  <p className="text-xl md:text-3xl font-medium text-[#2C5DA7]/90 leading-relaxed mb-8 md:mb-12 italic pr-6">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#7CB35B] to-[#2C5DA7] flex items-center justify-center text-white font-black text-xl shadow-lg">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-[#2C5DA7] uppercase tracking-tighter italic leading-none">
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <p className="text-[10px] md:text-[11px] font-bold text-[#7CB35B] uppercase tracking-[0.2em] mt-2">
                        {TESTIMONIALS[currentIndex].role} • {TESTIMONIALS[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 4. NAVIGATION ARROWS (Hidden on small mobile) */}
          <div className="hidden xl:block">
            <button
              onClick={() => paginate(-1)}
              className="absolute left-[-100px] top-1/2 -translate-y-1/2 p-5 rounded-2xl bg-white border border-[#2C5DA7]/10 text-[#2C5DA7] shadow-xl hover:bg-[#2C5DA7] hover:text-white transition-all active:scale-90 group"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-[-100px] top-1/2 -translate-y-1/2 p-5 rounded-2xl bg-white border border-[#2C5DA7]/10 text-[#2C5DA7] shadow-xl hover:bg-[#2C5DA7] hover:text-white transition-all active:scale-90 group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5. INTERACTIVE PAGINATION */}
        <div className="flex flex-col items-center gap-8 mt-12 md:mt-20">
          <div className="flex gap-4 xl:hidden">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-2xl bg-white border border-[#2C5DA7]/10 text-[#2C5DA7] shadow-lg active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-2xl bg-white border border-[#2C5DA7]/10 text-[#2C5DA7] shadow-lg active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1.5 transition-all duration-700 rounded-full ${
                  i === currentIndex ? 'w-10 bg-[#2C5DA7]' : 'w-3 bg-[#2C5DA7]/10'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}