import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Music, Sparkles, Heart } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const JANMASHTAMI_SLIDES = [
  {
    title: "Divine Purity",
    subtitle: "ION PURE FLOW MAX | AS PURE AS THE HOLI SPIRIT",
    image: FlowMaxImg,
    gradient: "from-[#004e92] via-[#000428] to-[#004e92]", // Deep Midnight Blue
    tag: "Janmashtami Special",
    textColor: "text-white",
    tagBg: "bg-white/10",
    icon: <Sparkles size={12} className="text-yellow-400 animate-pulse" />
  },
  {
    title: "The Essence of Health",
    subtitle: "ION PURE H2 BOTTLE | PURE VITALITY IN EVERY DROP",
    image: H2BottleImg,
    gradient: "from-[#FDC830] via-[#F37335] to-[#FDC830]", // Butter/Saffron Yellow
    tag: "Festive Joy Sale",
    textColor: "text-[#1a2a6c]", // Deep Navy Blue for contrast on yellow
    tagBg: "bg-black/5",
    icon: <Music size={12} className="text-[#1a2a6c]" />
  },
  {
    title: "Pure Life, Pure Love",
    subtitle: "CHANGE YOUR WATER | CHANGE YOUR WORLD",
    image: FlowPlusImg,
    gradient: "from-[#02aab0] via-[#00cdac] to-[#02aab0]", // Peacock Teal
    tag: "Limited Celebration",
    textColor: "text-white",
    tagBg: "bg-white/10",
    icon: <Heart size={12} className="text-white animate-bounce-slow" />
  }
];

// Creative "Peacock Feather" & "Flute" Aura
const DivineAura = ({ isLightSlide }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className={`absolute top-[-50px] left-[-20px] w-72 h-72 border-[1.5px] border-dashed ${isLightSlide ? 'border-orange-900/20' : 'border-cyan-200/20'} rounded-full`}
    />
    <motion.div 
      animate={{ 
        y: [0, -20, 0],
        rotate: [15, 25, 15]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute bottom-[-20px] right-[10%] w-40 h-40 blur-[40px] ${isLightSlide ? 'bg-orange-400/30' : 'bg-blue-400/30'} rounded-full`}
    />
  </div>
);

export default function JanmashtamiCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % JANMASHTAMI_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = JANMASHTAMI_SLIDES[currentSlide];
  const isLight = slide.textColor === "text-[#1a2a6c]";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-black/5"
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
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
              />
            </AnimatePresence>

            {/* Divine Aura Effects */}
            <DivineAura isLightSlide={isLight} />

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
                      <span className={`${slide.tagBg} ${slide.textColor} backdrop-blur-md border ${isLight ? 'border-black/10' : 'border-white/20'} text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest`}>
                        {slide.tag}
                      </span>
                      {slide.icon}
                    </div>
                    <h2 className={`${slide.textColor} text-sm md:text-2xl font-black italic tracking-tighter leading-none`}>
                      {slide.title}
                    </h2>
                    <p className={`${isLight ? 'text-[#1a2a6c]/80' : 'text-white/80'} text-[8px] md:text-sm font-bold mt-1 hidden xs:block`}>
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={slide.image}
                      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1.15, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className={`h-[80%] md:h-[130%] w-auto object-contain ${isLight ? 'drop-shadow-[0_10px_30px_rgba(26,42,108,0.2)]' : 'drop-shadow-[0_10px_40px_rgba(255,255,255,0.3)]'}`}
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className={`${isLight ? 'bg-[#1a2a6c] text-white' : 'bg-white text-ionMidnight'} px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl transition-all`}
                >
                  Shop Now <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full ${isLight ? 'text-[#1a2a6c]/60 hover:bg-black/5' : 'text-white/50 hover:bg-white/10'} transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Premium Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {JANMASHTAMI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? (isLight ? 'w-8 bg-[#1a2a6c]' : 'w-8 bg-white') : (isLight ? 'w-2 bg-black/20' : 'w-2 bg-white/20')}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}