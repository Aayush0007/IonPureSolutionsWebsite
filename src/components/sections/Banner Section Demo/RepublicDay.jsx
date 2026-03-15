import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Award, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Maintain your asset imports
import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

// Republic Day Specific Data
const REPUBLIC_SLIDES = [
  {
    title: "A Nation's Right: Purity",
    subtitle: "ION PURE FLOW MAX | CERTIFIED ALKALINE TECH",
    image: FlowMaxImg, 
    gradient: "from-[#FF9933] via-[#F37335] to-[#FF9933]", // Deep Saffron/Orange
    tag: "Republic Day Special",
    icon: <ShieldCheck size={12} className="text-white animate-pulse" />
  },
  {
    title: "Unity In Health",
    subtitle: "ION PURE FLOW PLUS | THE POWER OF PURE WATER",
    image: FlowPlusImg, 
    gradient: "from-[#138808] via-[#0D6E06] to-[#138808]", // Deep Tricolour Green
    tag: "Patriotic Offer",
    icon: <Zap size={12} className="text-white" />
  },
  {
    title: "Change Your Future",
    subtitle: "ION PURE H2 BOTTLE | INNOVATION FOR A NEW INDIA",
    image: H2BottleImg, 
    gradient: "from-[#f0f9ff] via-[#ffffff] to-[#f0f9ff]", // Bright White/Azure (for the Chakra)
    tag: "Limited Time Purity",
    icon: <Award size={12} className="text-blue-900" />
  }
];

// Creative "Geometric Chakra & Data Beam" Effect instead of Chakra Glow
const GeometricChakraAura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-50px] left-[8%] w-64 h-64 border-[3px] border-solid border-blue-900/40 rounded-full flex items-center justify-center"
    >
        <div className="w-[85%] h-[85%] border-2 border-solid border-blue-900/30 rounded-full" />
    </motion.div>
    <motion.div 
      animate={{ 
        rotate: [0, -360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 1 }}
      className="absolute bottom-[-70px] right-[12%] w-72 h-72 border-[2px] border-solid border-blue-900/30 rounded-full blur-[2px]"
    />
  </div>
);

export default function RepublicDayCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % REPUBLIC_SLIDES.length);
    }, 4500); // 4.5 seconds
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = REPUBLIC_SLIDES[currentSlide];
  const isWhiteSlide = slide.title === "Change Your Future"; // Specifically check the white slide

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
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
              />
            </AnimatePresence>

            {/* Geometric Chakra Effects */}
            <GeometricChakraAura />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 25, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      {/* Premium Tag matching the theme */}
                      <span className={`${isWhiteSlide ? 'bg-blue-900/10 text-blue-900 border-blue-900/10' : 'bg-white/10 text-white border-white/20'} backdrop-blur-md border text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-inner`}>
                        {slide.tag}
                      </span>
                      {slide.icon}
                    </div>
                    {/* Retaining bold italic style, adjusting color for white slide */}
                    <h2 className={`${isWhiteSlide ? 'text-blue-950' : 'text-white'} text-sm md:text-2xl font-black italic tracking-tighter leading-none drop-shadow-sm`}>
                      {slide.title}
                    </h2>
                    <p className={`${isWhiteSlide ? 'text-blue-900/80' : 'text-white/80'} text-[8px] md:text-sm font-bold mt-1 hidden xs:block tracking-wide`}>
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
                      initial={{ y: 25, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1.15 }}
                      exit={{ y: -25, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`h-[80%] md:h-[130%] w-auto object-contain ${isWhiteSlide ? 'drop-shadow-[0_10px_40px_rgba(0,0,139,0.3)]' : 'drop-shadow-[0_10px_40px_rgba(255,255,255,0.4)]'}`}
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: isWhiteSlide ? "0px 10px 25px rgba(0, 0, 139, 0.2)" : "0px 10px 25px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className={`${isWhiteSlide ? 'bg-blue-950 text-white hover:bg-blue-900' : 'bg-white text-ionMidnight hover:bg-cyan-50'} px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-2xl transition-all duration-300`}
                >
                  Explore <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full ${isWhiteSlide ? 'text-blue-900/60 hover:bg-blue-900/10' : 'text-white/50 hover:bg-white/10'} transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Premium Bar Indicators matching the style */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {REPUBLIC_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? (isWhiteSlide ? 'w-8 bg-blue-950' : 'w-8 bg-white') : (isWhiteSlide ? 'w-2 bg-blue-900/20' : 'w-2 bg-white/20')}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}