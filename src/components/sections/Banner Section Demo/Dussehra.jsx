import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Assets
import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const DUSSEHRA_SLIDES = [
  {
    title: "Triumph of Purity",
    subtitle: "ION PURE FLOW MAX | KILL 99.9% IMPURITIES",
    image: FlowMaxImg,
    gradient: "from-[#800000] via-[#A52A2A] to-[#D2691E]", // Deep Royal Maroon/Brown
    tag: "Victory Sale",
    icon: <ShieldCheck size={12} className="text-yellow-400" />
  },
  {
    title: "The Power of Health",
    subtitle: "ION PURE H2 BOTTLE | STRIKE OUT TOXINS",
    image: H2BottleImg,
    gradient: "from-[#FF8C00] via-[#FF4500] to-[#8B0000]", // Fiery Saffron/Orange
    tag: "Dussehra Special",
    icon: <Target size={12} className="text-white animate-pulse" />
  },
  {
    title: "New Beginnings",
    subtitle: "CHANGE YOUR WATER | CONQUER YOUR LIFE",
    image: FlowPlusImg,
    gradient: "from-[#DAA520] via-[#B8860B] to-[#8B4513]", // Earthy Golden Bronze
    tag: "Auspicious Deal",
    icon: <Zap size={12} className="text-yellow-200" />
  }
];

// Victory Aura Effect (Simulating Light Rays/Arrows)
const VictoryAura = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {/* Diagonal Light Rays simulating arrows */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: -500, y: 200, opacity: 0 }}
        animate={{ x: 800, y: -400, opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 1.2,
          ease: "linear"
        }}
        className="absolute w-[2px] h-[300px] bg-gradient-to-t from-transparent via-yellow-400 to-transparent rotate-[45deg]"
        style={{ left: `${20 + i * 30}%` }}
      />
    ))}
    {/* Pulsing Central Sun/Power Source */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[100px]"
    />
  </div>
);

export default function DussehraCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DUSSEHRA_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-orange-600/30"
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
                className={`absolute inset-0 bg-gradient-to-r ${DUSSEHRA_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            {/* Victory Aura Effects */}
            <VictoryAura />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[55%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-white/90 text-red-800 text-[8px] md:text-[10px] font-black px-2.5 py-0.5 rounded-sm uppercase tracking-widest shadow-sm">
                        {DUSSEHRA_SLIDES[currentSlide].tag}
                      </span>
                      {DUSSEHRA_SLIDES[currentSlide].icon}
                    </div>
                    <h2 className="text-white text-sm md:text-2xl font-black italic tracking-tight leading-none uppercase drop-shadow-lg">
                      {DUSSEHRA_SLIDES[currentSlide].title}
                    </h2>
                    <p className="text-orange-100/90 text-[8px] md:text-sm font-bold mt-1 hidden xs:block tracking-wide">
                      {DUSSEHRA_SLIDES[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={DUSSEHRA_SLIDES[currentSlide].image}
                      initial={{ x: 100, opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1.2 }}
                      exit={{ x: -100, opacity: 0, scale: 0.5 }}
                      transition={{ type: "spring", damping: 12, stiffness: 100 }}
                      className="h-[80%] md:h-[135%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-none skew-x-[-12deg] text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl hover:bg-orange-600 transition-all border-r-4 border-yellow-300"
                >
                  <span className="skew-x-[12deg] flex items-center gap-2">
                    Claim Victory <ArrowRight size={14} />
                  </span>
                </motion.button>

                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Custom Victory Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-40">
              {DUSSEHRA_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 transition-all duration-500 ${currentSlide === i ? 'w-10 bg-yellow-400' : 'w-4 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}