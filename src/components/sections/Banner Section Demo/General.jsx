import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Droplets, Zap } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const GENERAL_SLIDES = [
  {
    title: "Advanced Alkaline Tech",
    subtitle: "ION PURE FLOW MAX | HEALTHY WATER",
    image: FlowPlusImg,
    gradient: "from-[#004e92] via-[#000428] to-[#004e92]", // Deep Premium Blue
    tag: "Best Seller",
    icon: <ShieldCheck size={12} className="text-cyan-400" />
  },
  {
    title: "99.9% Hydrogen Purity",
    subtitle: "ION PURE H2 BOTTLE | PORTABLE VITALITY",
    image: H2BottleImg,
    gradient: "from-[#0f0c29] via-[#302b63] to-[#24243e]", // Cosmic Purple/Navy
    tag: "Tech Innovation",
    icon: <Zap size={12} className="text-yellow-400" />
  },
  {
    title: "Pure Life, Pure Water",
    subtitle: "CHANGE YOUR WATER | CHANGE YOUR LIFE",
    image: FlowMaxImg,
    gradient: "from-[#134E5E] via-[#71B280] to-[#134E5E]", // Healthy Green/Teal
    tag: "Eco Friendly",
    icon: <Droplets size={12} className="text-white" />
  }
];

// Creative Water Aura/Pulse Effect instead of Splatter
const WaterAura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.1, 0.3],
        x: [-50, 50, -50]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-50%] left-[-10%] w-[100%] h-[200%] bg-white/10 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] right-[0%] w-64 h-64 border-[1px] border-white/20 rounded-full blur-[20px]"
    />
  </div>
);

export default function GeneralCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-white/10"
        >
          <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            {/* Background Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${GENERAL_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            {/* Premium Aura Effects */}
            <WaterAura />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
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

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={GENERAL_SLIDES[currentSlide].image}
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1.1 }}
                      exit={{ y: -20, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-[80%] md:h-[125%] w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
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

            {/* Custom Bar Indicators */}
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
