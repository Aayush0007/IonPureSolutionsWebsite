import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Droplets, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY } from "../../data/company";
import { usePWA } from "../../hooks/usePWA"; // Import the hook

// Refined Product Array based on Documentation
const heroProducts = [
  { id: 1, src: "/SampleProductImage.jpg", alt: "ION PURE FLOW MAX" },
  { id: 2, src: "/SampleProductImage.jpg", alt: "IPS H2 PRO SERIES" },
  { id: 3, src: "/SampleProductImage.jpg", alt: "ALKALINE IONIZER" },
];

export default function Hero({ scrollToProducts }) {
  const [index, setIndex] = useState(0);
  const { isInstallable, installApp } = usePWA();
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* 1. BACKGROUND AMBIENCE - Zero Black Shades */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#7CB35B]/5 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] bg-[#2C5DA7]/5 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: DOCUMENTATION-ALIGNED CONTENT */}
        <div className="text-left order-2 lg:order-1">
          <AnimatePresence>
            {isInstallable && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={installApp}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#2C5DA7] to-[#1A365D] text-white shadow-lg cursor-pointer mb-6 hover:shadow-blue-900/20 transition-all group"
              >
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Download size={14} className="group-hover:bounce" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Install IonPure App
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#7CB35B] animate-ping" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-8"
          >
            <div className="flex -space-x-1">
              <Droplets size={14} className="text-[#7CB35B]" />
              <Zap size={14} className="text-[#2C5DA7]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">
              Premium Hydration Technology 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
              <span className="text-[#2C5DA7]">CHANGE YOUR</span>
              <br />
              <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic font-light pr-4">
                Water,
              </span>
            </h1>
            {/* Documentation Tagline - Zero Black Shade */}
            <h2 className="text-3xl md:text-4xl font-black text-[#2C5DA7]/40 mt-[-10px] tracking-tight uppercase">
              Change your life.
            </h2>
          </motion.div>

          {/* Documentation Copy: Section 4 - Who Are We */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-[#2C5DA7]/70 max-w-lg mt-8 mb-10 leading-relaxed font-medium italic"
          >
            Improving everyday hydration through advanced medical-grade
            ionization. Delivering clean, healthy, and refreshing water for
            modern lifestyles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProducts}
              className="group relative px-8 py-4 bg-[#2C5DA7] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:shadow-[0_15px_30px_rgba(44,93,167,0.2)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Systems{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA7] to-[#7CB35B]/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
                  "_blank",
                )
              }
              className="px-8 py-4 bg-white border border-[#2C5DA7]/10 text-[#2C5DA7] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#2C5DA7]/5 transition-all shadow-sm active:scale-95 flex items-center gap-2"
            >
              <ShieldCheck size={14} className="text-[#7CB35B]" /> Consult
              Advisor
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: REFINED WAVY SLIDER */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center p-4">
          {/* 1. OUTER LIQUID GLOW - Makes the wavy shape pop from behind */}
          <div
            className="absolute inset-0 bg-[#2C5DA7]/10 blur-[60px] rounded-full animate-pulse"
            style={{ transform: "scale(0.8)" }}
          />

          {/* 2. THE GLOWING GRADIENT BORDER WRAPPER */}
          <div
            className="relative p-[5px] bg-gradient-to-br from-[#2C5DA7] via-[#7CB35B] to-[#2C5DA7] shadow-[0_0_50px_rgba(44,93,167,0.3)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(124,179,91,0.4)]"
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
              borderRadius: "24% 76% 70% 30% / 30% 30% 70% 70%",
            }}
          >
            {/* 3. MAIN CONTENT CONTAINER */}
            <div
              className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px] bg-white overflow-hidden"
              style={{ borderRadius: "inherit" }}
            >
              {/* 4. REFINED GLASS INNER SHADOW & BEZEL */}
              <div
                className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_60px_rgba(44,93,167,0.2)] border-[12px] border-white/60 backdrop-blur-[1px]"
                style={{ borderRadius: "inherit" }}
              />

              {/* 5. LIGHTING STREAK - Adds a premium metallic/water reflection look */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent z-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={heroProducts[index].id}
                  initial={{ opacity: 0, scale: 1.1, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -30 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-14"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Optimized Product Image Scaling */}
                    <img
                      src={heroProducts[index].src}
                      alt={heroProducts[index].alt}
                      className="w-[90%] h-[90%] object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(44,93,167,0.25)]"
                    />

                    {/* PRESTIGE TAG - Centered with higher contrast */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-4 px-8 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#2C5DA7]/20 shadow-2xl text-center z-30"
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles size={14} className="text-[#7CB35B]" />
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2C5DA7]">
                          {heroProducts[index].alt}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* LIQUID SHINE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2C5DA7]/10 via-transparent to-[#7CB35B]/10 pointer-events-none z-10" />
            </div>
          </div>

          {/* 6. ENHANCED ORBITAL RINGS - Thicker for visibility */}
          <div
            className="absolute -z-10 w-[118%] h-[118%] border-[3px] border-[#2C5DA7]/15 rounded-full animate-[spin_35s_linear_infinite]"
            style={{ borderDasharray: "30 60" }}
          />
          <div
            className="absolute -z-10 w-[108%] h-[108%] border-[2px] border-[#7CB35B]/25 rounded-full animate-[spin_25s_linear_infinite_reverse]"
            style={{ borderDasharray: "15 45" }}
          />
        </div>
      </div>
    </section>
  );
}
