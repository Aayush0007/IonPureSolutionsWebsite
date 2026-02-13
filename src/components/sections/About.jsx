import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Award,
  CheckCircle2,
  Droplets,
  Zap,
} from "lucide-react";
import Lottie from "lottie-react";
import aboutAnimation from "../../assets/animations/about us.json";
import { COMPANY } from "../../data/company";

export default function About() {
  const stats = [
    {
      icon: <ShieldCheck size={18} />,
      label: "Medical Grade",
      detail: "Titanium Electrodes",
    },
    {
      icon: <Activity size={18} />,
      label: "Antioxidant",
      detail: "Upto -800mV ORP",
    },
    {
      icon: <Award size={18} />,
      label: "Certified",
      detail: "ISO & CE Compliant",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Decorative Ion Blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2C5DA7]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="section-container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: THE VISUAL STORYTELLING (UNOBSTRUCTED ANIMATION) */}
          <div className="relative flex flex-col items-center order-2 lg:order-1">
            {/* 1. PRIMARY ANIMATION CONTAINER */}
            {/* 1. PRIMARY ANIMATION CONTAINER - Scaled for Maximum Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] mb-8 lg:mb-0 lg:ml-auto"
            >
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(44,93,167,0.18)]"
              />

              {/* Floating H2O Glassmorphism Tag - Scaled up to match new container size */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 p-4 sm:p-6 bg-white/40 backdrop-blur-2xl rounded-[2rem] border border-white/40 shadow-2xl z-20">
                <span className="text-2xl sm:text-4xl font-black text-[#2C5DA7] tracking-tighter uppercase italic drop-shadow-sm">
                  H₂O
                </span>
              </div>

              {/* Background Decorative Pulse - Scaled to wrap around the larger animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] md:w-[130%] md:h-[130%] rounded-full border border-[#7CB35B]/15 border-dashed animate-[spin_50s_linear_infinite] pointer-events-none -z-10" />
            </motion.div>

            {/* 2. THE TECH-BAR (Replaced Overlapping Cards) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100/50 hover:border-[#2C5DA7]/20 transition-all group"
                >
                  <div className="p-2 bg-white text-[#7CB35B] rounded-xl shadow-sm group-hover:bg-[#7CB35B] group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-[#2C5DA7]/60">
                      {stat.label}
                    </p>
                    <p className="text-[11px] font-bold text-[#1A365D] whitespace-nowrap">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Background Decorative Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-[#7CB35B]/10 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
          </div>

          {/* RIGHT: DOCUMENTATION-ALIGNED CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 text-[#2C5DA7] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6">
              <CheckCircle2 size={14} className="text-[#7CB35B]" /> Advanced
              Ionization Tech
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] lg:leading-[0.9] tracking-tighter mb-8 text-[#2C5DA7]">
              Better Water. <br className="hidden md:block" />
              <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic font-light pr-4">
                Better Living.
              </span>
            </h2>

            <div className="space-y-6 md:space-y-8">
              {/* Profile Bio: Section 4 - Who We Are */}
              <p className="text-lg md:text-xl text-[#2C5DA7]/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY.name} is dedicated to enhancing everyday health by
                providing reliable
                <span className="text-[#2C5DA7] font-bold italic">
                  {" "}
                  alkaline water ionizers
                </span>{" "}
                and
                <span className="text-[#7CB35B] font-bold italic">
                  {" "}
                  hydrogen-rich water bottles
                </span>{" "}
                designed for modern lifestyles.
              </p>

              {/* Value Points: Section 4 - Why Choose Us */}
              <div className="grid gap-4 md:gap-5 text-left max-w-lg mx-auto lg:mx-0">
                {[
                  "Premium Technology – Advanced alkaline and hydrogen solutions.",
                  "Quality & Purity – Carefully selected for safe, refreshing water.",
                  "Health-Focused – Innovative technology for balanced living.",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4 group items-start">
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-[#7CB35B]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7CB35B] group-hover:border-[#7CB35B] transition-all">
                      <div className="w-1.5 h-1.5 bg-[#7CB35B] rounded-full group-hover:bg-white" />
                    </div>
                    <p className="text-[#2C5DA7]/80 font-bold text-sm md:text-base leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Belief Statement: Section 4 - Vision */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#2C5DA7] to-[#1A365D] text-white shadow-xl shadow-blue-900/10 mt-10 relative overflow-hidden group border border-white/10"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 text-[#7CB35B]">
                    <Droplets size={16} />{" "}
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/60 uppercase">
                      Our Core Belief
                    </span>
                  </div>
                  <p className="text-base md:text-lg font-bold leading-relaxed italic opacity-95">
                    "Healthy water is the foundation of a healthy life. We
                    empower individuals to adopt a wellness-focused lifestyle
                    through innovative water technology."
                  </p>
                </div>
                <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
