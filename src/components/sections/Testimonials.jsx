import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => paginate(1), 6000);
  //   return () => clearInterval(timer);
  // }, [currentIndex]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0, filter: "blur(8px)" }),
    center: { zIndex: 1, x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (direction) => ({ 
      position: 'absolute', // Only absolute during exit to prevent layout jumps
      zIndex: 0, 
      x: direction < 0 ? 50 : -50, 
      opacity: 0, 
      filter: "blur(8px)" 
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <section id="testimonials" className="relative py-12 md:py-20 overflow-hidden bg-white">
      {/* 1. BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-64 h-64 bg-ionBlue/5 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-64 h-64 bg-ionGreen/5 blur-[80px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* 2. HEADER */}
        <div className="relative z-20 flex flex-col items-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-4"
          >
            <Heart size={12} className="text-ionGreen" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-ionBlue">Real Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-ionBlue text-center leading-tight">
            Trusted <span className="text-ionGreen italic pr-1">Wellness.</span>
          </h2>
        </div>

        {/* 3. SLIDER CONTROLS & CARD WRAPPER */}
        <div className="relative flex flex-col items-center justify-center">
          
          <button 
            onClick={() => paginate(-1)} 
            className="absolute left-0 z-30 hidden md:flex p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={() => paginate(1)} 
            className="absolute right-0 z-30 hidden md:flex p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Card Container - Changed to relative to allow dots to move with content */}
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
                // Removed 'absolute' from here to let it push the pagination dots down
                className="w-full px-2 md:px-16 cursor-grab active:cursor-grabbing"
              >
                <div className="relative bg-gradient-to-br from-white to-ionMint/10 border border-ionBlue/5 p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(44,93,167,0.05)] overflow-hidden">
                  <Quote className="absolute top-4 right-6 text-ionBlue/5 -rotate-12 w-20 h-20 md:w-24 md:h-24" />
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < TESTIMONIALS[currentIndex].rating ? "#7CB35B" : "transparent"} className="text-ionGreen" />
                      ))}
                    </div>

                    <p className="text-base md:text-xl font-medium text-ionBlue/80 leading-relaxed mb-8 italic">
                      "{TESTIMONIALS[currentIndex].text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-ionBlue text-white flex items-center justify-center font-black text-sm md:text-base shadow-md">
                        {TESTIMONIALS[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-ionBlue uppercase tracking-tight italic leading-none">
                          {TESTIMONIALS[currentIndex].name}
                        </h4>
                        <p className="text-[10px] font-bold text-ionGreen uppercase tracking-widest mt-1">
                          {TESTIMONIALS[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4. PAGINATION DOTS - Now naturally stays below the card */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-8 bg-ionBlue' : 'w-2 bg-ionBlue/10'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}