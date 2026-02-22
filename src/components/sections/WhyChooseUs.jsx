import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Award,
  CheckCircle,
  Zap,
  HeartHandshake,
  Waves,
  Droplet
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Premium Technology",
    description: "Advanced Ionizers and Hydrogen-Rich Bottles designed for molecular refinement.",
    color: "#2C5DA7",
    gridArea: "lg:[grid-area:1/1]",
    lineX: 0, lineY: 0, // Connectors
    delay: 0.1
  },
  {
    icon: ShieldCheck,
    title: "Quality & Purity",
    description: "Medical-grade electrolysis engineered for safe, clean, and refreshing water.",
    color: "#7CB35B",
    gridArea: "lg:[grid-area:1/3]",
    lineX: 100, lineY: 0,
    delay: 0.2
  },
  {
    icon: Activity,
    title: "Health-Focused",
    description: "Innovative micro-clustering and antioxidant ORP levels for balanced living.",
    color: "#2C5DA7",
    gridArea: "lg:[grid-area:3/1]",
    lineX: 0, lineY: 100,
    delay: 0.3
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric",
    description: "Honest guidance and dependable after-sales support for your peace of mind.",
    color: "#7CB35B",
    gridArea: "lg:[grid-area:3/3]",
    lineX: 100, lineY: 100,
    delay: 0.4
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 md:py-32 overflow-hidden bg-white">
      
      {/* 1. ANIMATED MOLECULAR BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -600],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1 }}
            className="absolute bottom-[-10%] bg-ionBlue/20 rounded-full blur-xl"
            style={{ left: `${i * 15}%`, width: `${40 + i * 20}px`, height: `${40 + i * 20}px` }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-8"
          >
            <CheckCircle size={14} className="text-ionGreen" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ionBlue">
              The Pure Standard
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-ionBlue italic">
            Flowing With <br />
            <span className="bg-gradient-to-r from-ionGreen via-ionBlue to-ionGreen bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent">
              Innovation.
            </span>
          </h2>
        </div>

        {/* 2. DIAGRAM ENGINE */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-12 lg:gap-0 items-center justify-items-center">
          
          {/* SVG CONNECTIVE PATHS (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              {/* Paths from center (600, 400) to corners */}
              <motion.path d="M600 400 L250 150" stroke="url(#blueGrad)" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
              <motion.path d="M600 400 L950 150" stroke="url(#greenGrad)" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
              <motion.path d="M600 400 L250 650" stroke="url(#blueGrad)" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
              <motion.path d="M600 400 L950 650" stroke="url(#greenGrad)" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
              
              <defs>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2C5DA7" stopOpacity="0" />
                  <stop offset="100%" stopColor="#2C5DA7" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7CB35B" stopOpacity="0" />
                  <stop offset="100%" stopColor="#7CB35B" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* THE PURE CORE - Centered Hub */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-[0_0_120px_rgba(44,93,167,0.15)] border-8 border-ionMint flex items-center justify-center p-8 group lg:[grid-area:2/2]"
          >
            {/* Liquid Ripple Rings */}
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 border-4 border-ionBlue/10 rounded-full" />
            <div className="absolute inset-[-15%] border-2 border-ionBlue/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-[-30%] border border-ionGreen/10 rounded-full animate-[spin-slow_20s_linear_infinite_reverse]" />
            
            <div className="text-center relative z-10">
              <div className="relative inline-block mb-6">
                <Droplet size={72} className="text-ionBlue animate-bounce mx-auto" />
                <Waves size={40} className="absolute -bottom-2 -left-3 text-ionGreen opacity-50" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-ionBlue leading-none">Pure Hub</p>
              <p className="text-[9px] font-bold text-ionGreen uppercase mt-3 tracking-widest">99.99% Molecular Purity</p>
            </div>
          </motion.div>

          {/* REASON CARDS - Corners */}
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className={`w-full max-w-[340px] z-30 lg:p-4 ${item.gridArea}`}
            >
              <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 border border-ionBlue/10 hover:border-ionBlue/30 shadow-sm hover:shadow-2xl transition-all duration-700 group overflow-hidden">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-ionMint/30 group-hover:bg-ionBlue transition-colors duration-500">
                    <item.icon size={30} className="text-ionBlue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-ionBlue uppercase italic tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ionBlue/60 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Visual Glass Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. VALUE FOOTER - No Black */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center justify-between p-12 bg-gradient-to-br from-ionBlue to-ionBlue/90 rounded-[4rem] mt-32 relative overflow-hidden shadow-[0_50px_100px_rgba(44,93,167,0.25)] border border-white/10"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left mb-10 lg:mb-0">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-inner">
              <Award size={48} className="text-ionGreen" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 leading-none">Value Centricity</h4>
              <p className="text-sm font-medium text-white/70 max-w-sm">
                Certified quality and medical-grade standards designed to provide lifetime wellness value.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 relative z-10 w-full lg:w-auto">
            <div className="px-12 py-5 rounded-2xl bg-white/10 backdrop-blur-md text-white font-black text-[11px] uppercase tracking-widest border border-white/20 text-center shadow-lg">
              Fair Pricing
            </div>
            <div className="px-12 py-5 rounded-2xl bg-ionGreen text-white font-black text-[11px] uppercase tracking-widest shadow-[0_15px_30px_rgba(124,179,91,0.4)] text-center cursor-default">
              After Sales Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}