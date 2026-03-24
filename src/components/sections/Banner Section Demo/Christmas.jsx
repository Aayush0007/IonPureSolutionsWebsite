import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Gift, Zap, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const CHRISTMAS_SLIDES = [
  {
    title: "Gift Pure Health",
    subtitle: "ION PURE H2 BOTTLE | THE PERFECT PREMIUM GIFT",
    image: H2BottleImg, 
    gradient: "from-[#1D976C] via-[#115E59] to-[#1D976C]", // Deepened Emerald for contrast
    tag: "Christmas Exclusive",
    textColor: "text-white",
    tagBg: "bg-white/10",
    icon: <Gift size={12} className="text-white animate-bounce-slow" />
  },
  {
    title: "New Year Resolution",
    subtitle: "ION PURE FLOW PLUS | START 2026 WITH PURE WATER",
    image: FlowPlusImg, 
    gradient: "from-[#d1e9ff] via-[#f0f9ff] to-[#d1e9ff]", // Slightly blue-tinted silver
    tag: "Year End Offer",
    textColor: "text-slate-900", // Dark text for the light slide
    tagBg: "bg-slate-900/10",
    icon: <Zap size={12} className="text-blue-600" />
  },
  {
    title: "Change Your Life",
    subtitle: "THE ULTIMATE ALKALINE TECH | FESTIVE DEAL",
    image: FlowMaxImg, 
    gradient: "from-[#991b1b] via-[#7f1d1d] to-[#991b1b]", // Deep Crimson
    tag: "Limited Time Purity",
    textColor: "text-white",
    tagBg: "bg-white/10",
    icon: <Sparkles size={12} className="text-yellow-200" />
  }
];

const SnowflakeAura = ({ isDarkSlide }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isDarkSlide ? 'opacity-40' : 'opacity-20'}`}>
    {[...Array(6)].map((_, i) => (
      <motion.div 
        key={i}
        animate={{ 
          y: [-100, 600],
          x: [0, i % 2 === 0 ? 40 : -40, 0],
          rotate: [0, 360],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
        className={`absolute w-6 h-6 border-2 border-dashed ${isDarkSlide ? 'border-white/40' : 'border-blue-900/20'} rounded-full blur-[1px] flex items-center justify-center text-[10px]`}
        style={{ left: `${10 + i * 20}%`, top: "-10%" }}
      >
        ❄
      </motion.div>
    ))}
  </div>
);

export default function ChristmasCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CHRISTMAS_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = CHRISTMAS_SLIDES[currentSlide];
  const isLight = slide.textColor === "text-slate-900";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl"
        >
          <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
              />
            </AnimatePresence>

            <SnowflakeAura isDarkSlide={!isLight} />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`${slide.tagBg} ${slide.textColor} backdrop-blur-md border ${isLight ? 'border-slate-900/10' : 'border-white/20'} text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest`}>
                        {slide.tag}
                      </span>
                      {slide.icon}
                    </div>
                    <h2 className={`${slide.textColor} text-sm md:text-2xl font-black italic tracking-tighter leading-none`}>
                      {slide.title}
                    </h2>
                    <p className={`${isLight ? 'text-slate-700' : 'text-white/80'} text-[8px] md:text-sm font-bold mt-1 hidden xs:block`}>
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={slide.image}
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1.15 }}
                      exit={{ y: -20, opacity: 0, scale: 0.8 }}
                      className={`h-[80%] md:h-[130%] w-auto object-contain ${isLight ? 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]' : 'drop-shadow-[0_10px_40px_rgba(255,255,255,0.3)]'}`}
                    />
                 </AnimatePresence>
              </div>

              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className={`${isLight ? 'bg-slate-900 text-white' : 'bg-white text-ionMidnight'} px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl transition-all`}
                >
                  Unwrap Deal <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full ${isLight ? 'text-slate-400 hover:bg-black/5' : 'text-white/50 hover:bg-white/10'} transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {CHRISTMAS_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? (isLight ? 'w-8 bg-slate-900' : 'w-8 bg-white') : (isLight ? 'w-2 bg-slate-900/20' : 'w-2 bg-white/20')}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}