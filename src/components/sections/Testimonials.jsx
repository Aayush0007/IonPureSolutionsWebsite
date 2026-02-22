import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Heart, Waves } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0, filter: "blur(8px)" }),
    center: { zIndex: 1, x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 30 : -30, opacity: 0, filter: "blur(8px)" }),
  };

  return (
    <section id="testimonials" className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* 1. COMPACT BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-ionBlue/5 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[-5%] w-64 h-64 bg-ionGreen/5 blur-[80px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        
        {/* 2. COMPACT HEADER */}
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-4"
          >
            <Heart size={12} className="text-ionGreen" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-ionBlue">Real Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-ionBlue text-center leading-none">
            Trusted <span className="text-ionGreen italic pr-1">Wellness.</span>
          </h2>
        </div>

        {/* 3. COMPACT SLIDER CONTAINER */}
        <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full"
            >
              <div className="relative bg-gradient-to-br from-white to-ionMint/10 border border-ionBlue/5 p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(44,93,167,0.05)] overflow-hidden">
                <Quote className="absolute top-4 right-6 text-ionBlue/5 -rotate-12 w-20 h-20" />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < TESTIMONIALS[currentIndex].rating ? "#7CB35B" : "transparent"} className="text-ionGreen" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-lg md:text-xl font-medium text-ionBlue/80 leading-relaxed mb-6 italic">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>

                  {/* Profile & Navigation Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ionBlue text-white flex items-center justify-center font-black text-sm shadow-md">
                        {TESTIMONIALS[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-ionBlue uppercase tracking-tight italic leading-none">
                          {TESTIMONIALS[currentIndex].name}
                        </h4>
                        <p className="text-[9px] font-bold text-ionGreen uppercase tracking-widest mt-1">
                          {TESTIMONIALS[currentIndex].location}
                        </p>
                      </div>
                    </div>

                    {/* Integrated Nav Buttons */}
                    <div className="flex gap-2">
                      <button onClick={() => paginate(-1)} className="p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90">
                        <ChevronLeft size={16} />
                      </button>
                      <button onClick={() => paginate(1)} className="p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. COMPACT PAGINATION DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-6 bg-ionBlue' : 'w-1.5 bg-ionBlue/10'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}