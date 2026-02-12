import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Droplets, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY } from "../../data/company";

const heroProducts = [
  { id: 1, src: "/SampleProductImage.jpg", alt: "Alkaline Ionizer" },
  { id: 2, src: "/SampleProductImage.jpg", alt: "Hydrogen Bottle" },
  { id: 3, src: "/SampleProductImage.jpg", alt: "Wellness System" },
];

export default function Hero({ scrollToProducts }) {
  const [index, setIndex] = useState(0);

  // Automatic Rotation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000); // Changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#FDFDFD]">
      
      {/* 1. BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7CB35B]/5 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-[#2C5DA7]/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: COPY */}
        <div className="text-left order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-8">
            <div className="flex -space-x-1">
              <Droplets size={14} className="text-[#7CB35B]" />
              <Zap size={14} className="text-[#2C5DA7]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A365D]">Advanced Ionization 2026</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
              <span className="text-[#1A365D]">CHANGE YOUR</span><br />
              <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic font-light pr-4">Water,</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A365D]/40 mt-[-10px] tracking-tight uppercase">Change your life.</h2>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base md:text-lg text-[#1A365D]/60 max-w-lg mt-8 mb-10 leading-relaxed font-medium">
            {COMPANY.tagline}. Medical-grade hydration engineered for cellular revitalization and antioxidant defense.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
            <button onClick={scrollToProducts} className="group relative px-8 py-4 bg-[#2C5DA7] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:shadow-[0_15px_30px_rgba(44,93,167,0.2)] active:scale-95">
              <span className="relative z-10 flex items-center gap-3">Explore Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA7] to-[#1A365D] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`, "_blank")} className="px-8 py-4 bg-white border border-gray-100 text-[#1A365D] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-all shadow-sm active:scale-95">Consult Advisor</button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: SINGLE IMAGE WAVY SLIDER */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center p-4">
          
          {/* EXTERNAL BORDER WRAPPER */}
          <div
            className="relative p-[3px] bg-gradient-to-br from-[#2C5DA7] via-[#7CB35B]/50 to-[#2C5DA7] shadow-2xl"
            style={{
              clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
              borderRadius: "24% 76% 70% 30% / 30% 30% 70% 70%",
            }}
          >
            {/* MAIN CONTAINER */}
            <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px] bg-white overflow-hidden" style={{ borderRadius: "inherit" }}>
              
              {/* INNER AMBIENT GLOW */}
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_rgba(44,93,167,0.15)] border-[10px] border-white/40" style={{ borderRadius: "inherit" }} />

              {/* IMAGE DISPLAY WITH ANIMATE PRESENCE (One at a time) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroProducts[index].id}
                  initial={{ opacity: 0, scale: 1.1, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-12"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={heroProducts[index].src}
                      alt={heroProducts[index].alt}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
                    />
                    
                    {/* Floating Product Name Label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg text-center z-30"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A365D]">
                        {heroProducts[index].alt}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2C5DA7]/10 to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* DECORATIVE ROTATING RINGS */}
          <div className="absolute -z-10 w-[115%] h-[115%] border-2 border-[#2C5DA7]/20 rounded-full animate-[spin_30s_linear_infinite]" style={{ borderDasharray: "20 40" }} />
          <div className="absolute -z-10 w-[105%] h-[105%] border border-[#7CB35B]/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" style={{ borderDasharray: "10 30" }} />
        </div>
      </div>
    </section>
  );
}