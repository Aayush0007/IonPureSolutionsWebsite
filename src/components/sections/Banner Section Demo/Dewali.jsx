import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sun, Sparkles, Gift } from "lucide-react";
import { useState, useEffect } from "react";

// Assets
import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const DIWALI_SLIDES = [
  {
    title: "Light Up Your Health",
    subtitle: "ION PURE FLOW MAX | THE DIWALI GIFT OF PURITY",
    image: FlowPlusImg,
    gradient: "from-[#0F0C29] via-[#302B63] to-[#24243E]", // Midnight Sky
    tag: "Grand Diwali Sale",
    icon: <Sun size={12} className="text-yellow-400 animate-spin-slow" />
  },
  {
    title: "Festive Sparkle, Pure Water",
    subtitle: "ION PURE H2 BOTTLE | 20% OFF THIS SEASON",
    image: H2BottleImg,
    gradient: "from-[#CB9B51] via-[#F6E27A] to-[#CB9B51]", // Premium Metallic Gold
    tag: "Limited Time Offer",
    icon: <Sparkles size={12} className="text-white" />
  },
  {
    title: "A Pure Start to New Year",
    subtitle: "CHANGE YOUR WATER | BRIGHTEN YOUR LIFE",
    image: FlowMaxImg,
    gradient: "from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D]", // Firework/Diya Spectrum
    tag: "Festive Exclusive",
    icon: <Gift size={12} className="text-orange-200" />
  }
];

// Festive "Light & Sparkle" Bokeh Effect
const DiwaliLights = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
    {/* Floating Bokeh Orbs */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.5,
        }}
        className="absolute w-24 h-24 bg-yellow-400/20 rounded-full blur-[40px]"
        style={{
          left: `${10 + i * 20}%`,
          top: i % 2 === 0 ? "10%" : "60%",
        }}
      />
    ))}
    {/* Twinkling Stars */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
  </div>
);

export default function DiwaliCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DIWALI_SLIDES.length);
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
          className="relative z-[1100] w-full overflow-hidden shadow-[0_10px_40px_rgba(255,191,0,0.2)] border-b border-yellow-500/30"
        >
          <div className="relative w-full min-h-[80px] md:h-[100px] flex items-center">
            {/* Background Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className={`absolute inset-0 bg-gradient-to-r ${DIWALI_SLIDES[currentSlide].gradient}`}
              />
            </AnimatePresence>

            {/* Light Effects */}
            <DiwaliLights />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[8px] md:text-[10px] font-black px-2.5 py-0.5 rounded-sm uppercase tracking-tighter shadow-lg">
                        {DIWALI_SLIDES[currentSlide].tag}
                      </span>
                      {DIWALI_SLIDES[currentSlide].icon}
                    </div>
                    <h2 className="text-white text-sm md:text-2xl font-black italic tracking-tighter leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      {DIWALI_SLIDES[currentSlide].title}
                    </h2>
                    <p className="text-yellow-100/80 text-[8px] md:text-sm font-medium mt-1 hidden xs:block">
                      {DIWALI_SLIDES[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Dynamic Product Image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none z-20">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${currentSlide}`}
                      src={DIWALI_SLIDES[currentSlide].image}
                      initial={{ scale: 0.7, opacity: 0, rotateY: 90 }}
                      animate={{ scale: 1.1, opacity: 1, rotateY: 0 }}
                      exit={{ scale: 1.3, opacity: 0, rotateY: -90 }}
                      transition={{ type: "spring", stiffness: 80, damping: 15 }}
                      className="h-[80%] md:h-[135%] w-auto object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.4)]"
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFD700", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className="bg-white text-ionMidnight px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-[0_4px_20px_rgba(255,191,0,0.4)] transition-all"
                >
                  Claim Offer <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Premium Gold Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-40">
              {DIWALI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-6 bg-yellow-400 shadow-[0_0_10px_#FFD700]' : 'w-1.5 bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}