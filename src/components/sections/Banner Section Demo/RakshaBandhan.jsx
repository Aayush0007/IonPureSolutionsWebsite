import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Heart, Gift } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const RAKHI_SLIDES = [
  {
    title: "The Gift of Protection",
    subtitle: "ION PURE H2 BOTTLE | PURE HEALTH FOR YOUR SISTER",
    image: H2BottleImg,
    gradient: "from-[#642B73] via-[#C6426E] to-[#642B73]", // Royal Silk Purple/Pink
    tag: "Rakhi Special Gift",
    textColor: "text-white",
    tagBg: "bg-white/10",
    icon: <ShieldCheck size={12} className="text-pink-200 animate-pulse" />
  },
  {
    title: "Pure Bond, Pure Water",
    subtitle: "ION PURE FLOW MAX | PROTECT YOUR FAMILY",
    image: FlowMaxImg,
    gradient: "from-[#fdfcfb] via-[#e2d1c3] to-[#fdfcfb]", // Soft Silk / Cream
    tag: "Auspicious Wellness",
    textColor: "text-rose-900", // High contrast for light background
    tagBg: "bg-rose-900/10",
    icon: <Heart size={12} className="text-rose-600" />
  },
  {
    title: "Celebrate With Health",
    subtitle: "CHANGE YOUR WATER | CHANGE THEIR LIFE",
    image: FlowPlusImg,
    gradient: "from-[#FF512F] via-[#F09819] to-[#FF512F]", // Saffron / Marigold
    tag: "Festive Exclusive",
    textColor: "text-white",
    tagBg: "bg-black/10",
    icon: <Gift size={12} className="text-yellow-200 animate-bounce-slow" />
  }
];

// Creative "Silk Thread" & "Floral" Aura
const RakhiAura = ({ isLightSlide }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {/* Rotating Silk Loops */}
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute top-[-20%] left-[5%] w-80 h-80 border-[1px] ${isLightSlide ? 'border-rose-900/20' : 'border-white/20'} rounded-full flex items-center justify-center`}
    >
      <div className={`w-[90%] h-[90%] border border-dashed ${isLightSlide ? 'border-rose-900/10' : 'border-white/10'} rounded-full`} />
    </motion.div>
    
    {/* Soft Glow Orbs */}
    <div className={`absolute bottom-[-10%] right-[15%] w-64 h-64 blur-[60px] rounded-full ${isLightSlide ? 'bg-rose-200/40' : 'bg-purple-400/20'}`} />
  </div>
);

export default function RakhiCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % RAKHI_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = RAKHI_SLIDES[currentSlide];
  const isLight = slide.textColor === "text-rose-900";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-rose-200/20"
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

            <RakhiAura isLightSlide={isLight} />

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
                      <span className={`${slide.tagBg} ${slide.textColor} backdrop-blur-md border ${isLight ? 'border-rose-900/10' : 'border-white/20'} text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest`}>
                        {slide.tag}
                      </span>
                      {slide.icon}
                    </div>
                    <h2 className={`${slide.textColor} text-sm md:text-2xl font-black italic tracking-tighter leading-none`}>
                      {slide.title}
                    </h2>
                    <p className={`${isLight ? 'text-rose-900/70' : 'text-white/80'} text-[8px] md:text-sm font-bold mt-1 hidden xs:block`}>
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
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1.15 }}
                      exit={{ y: -20, opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", damping: 15 }}
                      className={`h-[80%] md:h-[130%] w-auto object-contain ${isLight ? 'drop-shadow-[0_10px_30px_rgba(159,18,57,0.15)]' : 'drop-shadow-[0_10px_40px_rgba(255,255,255,0.3)]'}`}
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className={`${isLight ? 'bg-rose-900 text-white' : 'bg-white text-ionMidnight'} px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl transition-all`}
                >
                  Gift Health <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full ${isLight ? 'text-rose-900/40 hover:bg-rose-900/5' : 'text-white/50 hover:bg-white/10'} transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Premium Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {RAKHI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? (isLight ? 'w-8 bg-rose-900' : 'w-8 bg-white') : (isLight ? 'w-2 bg-rose-900/20' : 'w-2 bg-white/20')}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}