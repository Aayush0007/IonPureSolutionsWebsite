import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles, Crown, Flame } from "lucide-react";
import { useState, useEffect } from "react";

// Maintain your asset imports
import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

// Navratri Specific Data
const NAVRATRI_SLIDES = [
  {
    title: "Celebrate Purity",
    subtitle: "ION PURE H2 BOTTLE | FESTIVE GLOW",
    image: H2BottleImg, 
    gradient: "from-[#FF416C] via-[#FF4B2B] to-[#FF416C]", // Vivid Festive Red/Orange
    tag: "Navratri Special",
    icon: <Crown size={12} className="text-yellow-300" />
  },
  {
    title: "Powerful Hydration",
    subtitle: "ION PURE FLOW PLUS | 9 NIGHTS, 10X POWER",
    image: FlowPlusImg, 
    gradient: "from-[#F2994A] via-[#F2C94C] to-[#F2994A]", // Royal Gold/Warm Orange
    tag: "Auspicious Offer",
    icon: <Flame size={12} className="text-white animate-pulse" />
  },
  {
    title: "Divine Water Tech",
    subtitle: "CHANGE YOUR WATER | ELEVATE YOUR LIFE",
    image: FlowMaxImg, 
    gradient: "from-[#8E2DE2] via-[#4A00E0] to-[#8E2DE2]", // Spiritual Royal Purple
    tag: "Limited Celebration",
    icon: <Sparkles size={12} className="text-yellow-200" />
  }
];

// Elegant Mandala Aura instead of Splatter
const MandalaAura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-30px] left-[5%] w-48 h-48 border-[1.5px] border-white/40 rounded-full flex items-center justify-center"
    >
        <div className="w-[80%] h-[80%] border border-dashed border-white/30 rounded-full" />
    </motion.div>
    <motion.div 
      animate={{ 
        rotate: [0, -360],
        scale: [1, 1.15, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
      className="absolute bottom-[-50px] right-[10%] w-64 h-64 border-[1px] border-white/30 rounded-full blur-[2px]"
    />
  </div>
);

export default function NavratriCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NAVRATRI_SLIDES.length);
    }, 4500); // 4.5 seconds
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-yellow-400/20"
        >
          <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            {/* Festive Background Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${NAVRATRI_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            {/* Sacred Mandala Aura Effects */}
            <MandalaAura />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 15, opacity: 0 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="bg-yellow-400 text-ionMidnight text-[8px] md:text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-md">
                        {NAVRATRI_SLIDES[currentSlide].tag}
                      </span>
                      {NAVRATRI_SLIDES[currentSlide].icon}
                    </div>
                    {/* Italic and Bold Title matching the brand style */}
                    <h2 className="text-white text-sm md:text-2xl font-black italic tracking-tight leading-none drop-shadow-sm">
                      {NAVRATRI_SLIDES[currentSlide].title}
                    </h2>
                    <p className="text-white/90 text-[8px] md:text-sm font-bold mt-1 hidden xs:block tracking-wide">
                      {NAVRATRI_SLIDES[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={NAVRATRI_SLIDES[currentSlide].image}
                      initial={{ y: 20, opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ y: 0, opacity: 1, scale: 1.15, rotate: 0 }}
                      exit={{ y: -20, opacity: 0, scale: 0.8, rotate: 5 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-[80%] md:h-[130%] w-auto object-contain drop-shadow-[0_15px_35px_rgba(255,200,50,0.5)]"
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255, 196, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className="bg-white text-ionMidnight px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-2xl hover:bg-yellow-400 transition-colors"
                >
                  Shop Offer <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Premium Bar Indicators matching the General Banner style */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {NAVRATRI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-8 bg-yellow-400' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}