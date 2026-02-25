import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";


import FlowPlusImg from "../../assets/Products/IP FLOW PLUS/1FlowPlus.png";
import H2BottleImg from "../../assets/Products/H2/1H2.png";
import FlowMaxImg from "../../assets/Products/IP FLOW MAX/1FlowMax.png";

const HOLI_SLIDES = [
  {
    title: "Colors of Health",
    subtitle: "ION PURE FLOW MAX",
    image: FlowPlusImg, // Use the imported variable
    gradient: "from-[#FF1E56] via-[#FFAC41] to-[#32E0C4]",
    tag: "Festival Offer"
  },
  {
    title: "Pure Hydration",
    subtitle: "ION PURE H2 BOTTLE",
    image: H2BottleImg, // Use the imported variable
    gradient: "from-[#7F00FF] via-[#E100FF] to-[#00E5FF]",
    tag: "99.9% Purity"
  },
  {
    title: "Holi Special Sale",
    subtitle: "CHANGE YOUR WATER | LIFE",
    image: FlowMaxImg, // Use the imported variable
    gradient: "from-[#FBD72B] via-[#F9484A] to-[#A6206A]",
    tag: "Limited Time"
  }
];

// Decorative Holi Splatter Component
const HoliSplatter = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        x: [0, 20, -20, 0]
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-[-20px] left-[10%] w-32 h-32 bg-pink-400 rounded-full blur-[40px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, -15, 15, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      className="absolute bottom-[-20px] right-[15%] w-40 h-40 bg-yellow-300 rounded-full blur-[50px]"
    />
  </div>
);

export default function HoliCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HOLI_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        // REMOVED 'fixed top-0' - using 'relative' to push content down
        className="relative z-[1100] w-full overflow-hidden shadow-2xl"
      >
        <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            {/* Background Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-r ${HOLI_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            {/* Holi Splatter Effects */}
            <HoliSplatter />

<div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[45%] md:max-w-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="bg-white/90 text-gray-900 text-[8px] md:text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">
                        {HOLI_SLIDES[currentSlide].tag}
                      </span>
                      <Sparkles size={12} className="text-yellow-300 animate-pulse" />
                    </div>
                    <h2 className="text-white text-sm md:text-2xl font-black italic tracking-tight leading-none drop-shadow-md">
                      {HOLI_SLIDES[currentSlide].title}
                    </h2>
                    <p className="text-white/90 text-[8px] md:text-sm font-bold mt-1 hidden xs:block">
                      {HOLI_SLIDES[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={HOLI_SLIDES[currentSlide].image}
                      initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                      animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 1.5, rotate: 20, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="h-[85%] md:h-[130%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-yellow-400 transition-colors"
                >
                  Shop Now <ArrowRight size={16} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Custom Dot Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-40">
              {HOLI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-6 bg-white shadow-sm' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}