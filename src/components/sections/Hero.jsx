import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft, // Added for navigation
  Download,
  X,
  Waves,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY } from "../../data/company";
import { usePWA } from "../../hooks/usePWA";

// Assuming heroProducts is defined as in your snippet
// Ensure each product in heroProducts has an 'id' that matches your PRODUCTS data

export default function Hero({ scrollToProducts, heroProducts = [] }) {
  const [index, setIndex] = useState(0);
  const { isInstallable, installApp } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const nextStep = () => setIndex((prev) => (prev + 1) % heroProducts.length);
  const prevStep = () =>
    setIndex((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);

  // Logic to open product in new tab
  const handleProductClick = (productId) => {
    window.open(`${window.location.origin}/#${productId}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* BACKGROUND AMBIENCE: Water Molecules */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-ionBlue/15 to-ionGreen/5 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-ionGreen/15 to-ionBlue/5 blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* LEFT CONTENT */}
        <div className="text-left order-2 lg:order-1">
          {/* PWA INSTALLER: Glassmorphism without Black */}
          <AnimatePresence>
            {isInstallable && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative inline-flex items-center gap-4 pl-4 pr-12 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-ionBlue/20 shadow-[0_10px_30px_rgba(44,93,167,0.1)] mb-8 group"
              >
                <div
                  onClick={installApp}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ionBlue to-ionBlue/80 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                    <Download size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-ionBlue">
                      Digital Access
                    </p>
                    <p className="text-[9px] font-bold text-ionGreen uppercase tracking-tighter">
                      Install for full experience
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDismissed(true)}
                  className="absolute right-3 text-ionBlue/40 hover:text-ionBlue transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TECHNOLOGY BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-ionBlue/10 to-ionGreen/10 border border-ionBlue/20 mb-8"
          >
            <Sparkles size={14} className="text-ionGreen animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-ionBlue">
              Pure Hydrogen Evolution 2026
            </span>
          </motion.div>

          {/* MAIN HEADLINE: Bold Blue & Italic Green Gradients */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter text-ionBlue uppercase"
            >
              Change Your <br />
              <span className="bg-gradient-to-r from-ionBlue via-ionSlate to-ionBlue bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent italic font-extrabold pr-4">
                Water,
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-ionGreen tracking-tight uppercase italic"
            >
              Change Your Life.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-ionBlue/70 max-w-md mt-8 mb-10 leading-relaxed font-medium"
          >
            Experience the absolute purity of 99.99% Molecular Hydrogen.{" "}
            {COMPANY.name} delivers medical-grade ionization for a healthier,
            modern lifestyle.
          </motion.p>

          {/* CTA GROUP: No Black Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToProducts}
              className="group relative px-10 py-5 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(44,93,167,0.2)] active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explore Systems{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-ionBlue via-[#3d7edb] to-ionBlue bg-[length:200%_auto] group-hover:animate-gradient-text" />
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
                  "_blank",
                )
              }
              className="px-10 py-5 bg-white border-2 border-ionBlue/20 text-ionBlue rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-ionMint/50 transition-all flex items-center justify-center gap-2 group shadow-sm active:scale-95"
            >
              <ShieldCheck
                size={16}
                className="text-ionGreen group-hover:scale-125 transition-transform"
              />
              Consult Advisor
            </button>
          </motion.div>
        </div>

        {/* RIGHT CONTENT: The Fluid Vessel Slider */}
        <div className="relative order-1 lg:order-2 flex flex-col justify-center items-center py-12 lg:py-0 w-full max-w-2xl mx-auto">
          {/* RESPONSIVE ARROWS: 
      - Hidden on mobile (under 1024px) 
      - Relative positioning on mid-screens to prevent overflow
      - Absolute wider positioning on large screens
  */}
          <div className="absolute hidden lg:flex justify-between items-center w-full lg:w-[110%] xl:w-[125%] z-30 pointer-events-none">
            <button
              onClick={prevStep}
              className="p-3 xl:p-4 rounded-full border border-ionBlue/20 text-ionBlue bg-white/10 backdrop-blur-sm hover:bg-ionBlue/5 transition-all pointer-events-auto active:scale-90"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextStep}
              className="p-3 xl:p-4 rounded-full border border-ionBlue/20 text-ionBlue bg-white/10 backdrop-blur-sm hover:bg-ionBlue/5 transition-all pointer-events-auto active:scale-90"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            /* Responsive sizing for the vessel container */
            className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[580px] flex items-center justify-center"
          >
            {/* 1. LAYERED AMBIENT GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ionBlue/20 via-ionMint/40 to-ionGreen/20 blur-[60px] md:blur-[100px] rounded-full scale-90 animate-pulse" />
            <div className="absolute w-[110%] h-[110%] bg-[radial-gradient(circle,rgba(44,93,167,0.08)_0%,transparent_70%)] animate-pulse" />

            {/* 2. ORBITAL SYSTEM (The moving rings) */}
            <div
              className="absolute inset-[-5%] md:inset-[-8%] border-2 border-ionBlue/20 rounded-full animate-spin-slow opacity-60 pointer-events-none"
              style={{ borderDasharray: "15 45" }}
            />
            <div
              className="absolute inset-[-12%] md:inset-[-18%] border border-ionGreen/20 rounded-full animate-[spin-slow_25s_linear_infinite_reverse] opacity-40 pointer-events-none"
              style={{ borderDasharray: "10 40" }}
            />

            {/* THE MORPHING VESSEL */}
            <div
              className="absolute inset-0 transition-all duration-1000 p-[2px] md:p-[3px] bg-gradient-to-br from-ionBlue/40 via-white to-ionGreen/40 shadow-[0_20px_40px_rgba(44,93,167,0.12)] md:shadow-[0_30px_60px_rgba(44,93,167,0.18)] z-10"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                animation: "morph 10s ease-in-out infinite",
              }}
            >
              <div
                className="w-full h-full bg-gradient-to-br from-white via-ionMint/30 to-white/60 overflow-hidden relative shadow-inner"
                style={{ borderRadius: "inherit" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x > 70)
                        prevStep(); // Lowered threshold for easier mobile swiping
                      else if (offset.x < -70) nextStep();
                    }}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center cursor-grab active:cursor-grabbing"
                    onClick={() => handleProductClick(heroProducts[index].id)}
                  >
                    <img
                      src={heroProducts[index].src}
                      alt={heroProducts[index].alt}
                      /* Responsive image sizing */
                      className="w-full h-[70%] md:h-[75%] object-contain drop-shadow-[0_15px_30px_rgba(44,93,167,0.2)] md:drop-shadow-[0_25px_45px_rgba(44,93,167,0.3)] hover:scale-105 transition-transform duration-700"
                    />

                    <div className="mt-4 md:mt-6 px-5 md:px-7 py-2 md:py-2.5 bg-white/80 backdrop-blur-2xl shadow-sm rounded-full border border-ionBlue/10 flex items-center gap-2">
                      <Waves size={14} className="text-ionBlue" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-ionBlue">
                        {heroProducts[index].alt}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 3. WATER ATOMS (Small floating particles) - Hidden on smallest screens */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 bg-ionBlue/20 rounded-full blur-sm" />
            <div className="hidden sm:block absolute bottom-10 -left-6 w-4 h-4 bg-ionGreen/20 rounded-full blur-sm animate-pulse" />
          </motion.div>

          {/* PAGINATION BAR */}
          <div className="flex gap-2 md:gap-3 mt-8 md:mt-12 z-20">
            {heroProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
                  index === i
                    ? "w-8 md:w-10 bg-ionBlue"
                    : "w-1.5 md:w-2 bg-ionBlue/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
