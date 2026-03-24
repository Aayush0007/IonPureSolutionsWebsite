// components/sections/PromoBanner.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Droplets, Zap } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/Banner Image/ION_PURE_FLOW_PLUS.png";
import H2BottleImg from "../../assets/Banner Image/ION_PURE_H2_PRO.png";
import FlowMaxImg from "../../assets/Banner Image/ION_PURE_FLOW_MAX.png";

const GENERAL_SLIDES = [
  {
    title: "Advanced Alkaline Tech",
    subtitle: "ION PURE FLOW MAX | HEALTHY WATER",
    image: FlowPlusImg,
    gradient: "from-[#004e92] via-[#000428] to-[#004e92]",
    tag: "Best Seller",
    icon: <ShieldCheck size={12} className="text-cyan-400" />
  },
  {
    title: "99.9% Hydrogen Purity",
    subtitle: "ION PURE H2 BOTTLE | PORTABLE VITALITY",
    image: H2BottleImg,
    gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    tag: "Tech Innovation",
    icon: <Zap size={12} className="text-yellow-400" />
  },
  {
    title: "Pure Life, Pure Water",
    subtitle: "CHANGE YOUR WATER | CHANGE YOUR LIFE",
    image: FlowMaxImg,
    gradient: "from-[#134E5E] via-[#71B280] to-[#134E5E]",
    tag: "Eco Friendly",
    icon: <Droplets size={12} className="text-white" />
  }
];

// OPTIMIZED WaterAura - reduced to one motion element + longer duration to cut GPU load
const WaterAura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.25, 0.08, 0.25],
        x: [-30, 30, -30]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-40%] left-[-15%] w-[130%] h-[180%] bg-white/10 rounded-full blur-[100px]"
    />
  </div>
);

export default function PromoBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide only when visible + faster interval cleanup
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GENERAL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0, y: -20 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[99] w-full overflow-hidden shadow-2xl border-b border-white/10"
        >
          <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            {/* Background - faster transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 bg-gradient-to-r ${GENERAL_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            <WaterAura />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">
              {/* Left Text - faster animation */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 15, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="bg-ionBlue/20 backdrop-blur-md text-white border border-white/20 text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                        {GENERAL_SLIDES[currentSlide].tag}
                      </span>
                      {GENERAL_SLIDES[currentSlide].icon}
                    </div>
                    <h2 className="text-white text-sm md:text-2xl font-black tracking-tight leading-none">
                      {GENERAL_SLIDES[currentSlide].title}
                    </h2>
                    <p className="text-white/60 text-[8px] md:text-sm font-medium mt-1 hidden xs:block tracking-wide">
                      {GENERAL_SLIDES[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center Product Image - lighter animation + preserved positioning */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`img-${currentSlide}`}
                    src={GENERAL_SLIDES[currentSlide].image}
                    initial={{ y: 15, opacity: 0, scale: 0.85 }}
                    animate={{ y: 0, opacity: 1, scale: 1.08 }}
                    exit={{ y: -15, opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-[80%] md:h-[125%] w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                  />
                </AnimatePresence>
              </div>

              {/* Right Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className="bg-white text-ionMidnight px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl hover:bg-cyan-50 transition-colors"
                >
                  Explore <ArrowRight size={14} />
                </motion.button>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Indicators - unchanged */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {GENERAL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}