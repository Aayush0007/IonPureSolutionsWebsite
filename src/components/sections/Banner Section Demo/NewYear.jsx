import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Activity, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

import FlowPlusImg from "../../assets/HeroProducts/ION PURE FLOW PLUS.png";
import H2BottleImg from "../../assets/HeroProducts/ION PURE H2 PRO.png";
import FlowMaxImg from "../../assets/HeroProducts/ION PURE FLOW MAX.png";

const NEW_YEAR_SLIDES = [
  {
    title: "New Year Resolution",
    subtitle: "ION PURE FLOW MAX | UPGRADE TO ALKALINE LIFE",
    image: FlowMaxImg,
    gradient: "from-[#000000] via-[#0f172a] to-[#000000]", // Sleek Onyx/Navy
    tag: "2027 Health Kick",
    textColor: "text-white",
    icon: <Activity size={12} className="text-cyan-400 animate-pulse" />
  },
  {
    title: "Refresh Your Body",
    subtitle: "ION PURE H2 BOTTLE | HYDROGEN TECH FOR 2027",
    image: H2BottleImg,
    gradient: "from-[#00c6ff] via-[#0072ff] to-[#00c6ff]", // Electric Tech Blue
    tag: "Future of Water",
    textColor: "text-white",
    icon: <Zap size={12} className="text-yellow-300" />
  },
  {
    title: "Pure Start, Pure Life",
    subtitle: "CHANGE YOUR WATER | CHANGE YOUR FUTURE",
    image: FlowPlusImg,
    gradient: "from-[#e0e0e0] via-[#ffffff] to-[#e0e0e0]", // Liquid Silver
    tag: "New Year Exclusive",
    textColor: "text-slate-900",
    icon: <ShieldCheck size={12} className="text-blue-600" />
  }
];

// Futuristic "Data Pulse" & "Liquid Wave" Aura
const TechAura = ({ isLightSlide }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {/* Moving Grid Lines */}
    <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isLightSlide ? '#000' : '#fff'}_1px,transparent_1px),linear-gradient(to_bottom,${isLightSlide ? '#000' : '#fff'}_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`} />
    
    {/* Floating Data Nodes */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 8 + i, repeat: Infinity, delay: i * 2 }}
        className={`absolute w-1 h-20 ${isLightSlide ? 'bg-blue-600' : 'bg-cyan-400'} blur-[2px]`}
        style={{ left: `${25 + i * 25}%`, bottom: '-10%' }}
      />
    ))}
  </div>
);

export default function NewYearCarouselBanner({ isVisible, onClose, scrollToProducts }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NEW_YEAR_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible]);

  const slide = NEW_YEAR_SLIDES[currentSlide];
  const isLight = slide.textColor === "text-slate-900";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[1100] w-full overflow-hidden shadow-2xl border-b border-white/5"
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
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
              />
            </AnimatePresence>

            <TechAura isLightSlide={isLight} />

            <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-10">              
              {/* Left: Text Content */}
              <div className="z-10 flex flex-col justify-center max-w-[50%]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`px-2 py-0.5 rounded-sm text-[8px] md:text-[10px] font-black uppercase tracking-tighter shadow-sm ${isLight ? 'bg-slate-900 text-white' : 'bg-cyan-400 text-black'}`}>
                        {slide.tag}
                      </span>
                      {slide.icon}
                    </div>
                    <h2 className={`${slide.textColor} text-sm md:text-2xl font-black italic tracking-tighter leading-none uppercase`}>
                      {slide.title}
                    </h2>
                    <p className={`${isLight ? 'text-slate-600' : 'text-white/60'} text-[8px] md:text-sm font-bold mt-1 hidden xs:block`}>
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
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 1 }}
                      exit={{ scale: 1.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 90 }}
                      className={`h-[85%] md:h-[140%] w-auto object-contain ${isLight ? 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]' : 'drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]'}`}
                    />
                 </AnimatePresence>
              </div>

              {/* Right: Actions */}
              <div className="z-30 flex items-center gap-2 md:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToProducts("products")}
                  className={`${isLight ? 'bg-slate-900 text-white' : 'bg-white text-black'} px-4 py-2 md:px-6 md:py-2.5 rounded-sm text-[10px] md:text-sm font-black uppercase flex items-center gap-2 shadow-xl hover:tracking-widest transition-all`}
                >
                  Start Now <ArrowRight size={14} />
                </motion.button>

                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full ${isLight ? 'text-slate-400 hover:bg-black/5' : 'text-white/30 hover:bg-white/10'} transition-colors`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Futuristic Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-40">
              {NEW_YEAR_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-0.5 transition-all duration-700 ${currentSlide === i ? (isLight ? 'w-10 bg-slate-900' : 'w-10 bg-cyan-400') : (isLight ? 'w-4 bg-slate-900/20' : 'w-4 bg-white/20')}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}