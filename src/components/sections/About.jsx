import { motion } from "framer-motion";
import { ShieldCheck, Activity, Award, CheckCircle2 } from "lucide-react";
import Lottie from "lottie-react";
import aboutAnimation from "../../assets/animations/about us.json";
import { COMPANY } from "../../data/company";

export default function About() {
  const stats = [
    {
      icon: <ShieldCheck size={20} />,
      label: "Medical Grade",
      detail: "Platinum Titanium Plates",
    },
    {
      icon: <Activity size={20} />,
      label: "Antioxidant",
      detail: "-800mV ORP Potential",
    },
    {
      icon: <Award size={20} />,
      label: "Certified",
      detail: "ISO & CE Standards",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Decorative Purity Rings - Hidden on very small screens to prevent horizontal scroll */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F1F8E1]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="section-container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT: THE VISUAL STORYTELLING */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center lg:items-start"
          >
            {/* LOTTIE CONTAINER */}
            <div className="relative z-10 w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] flex items-center justify-center">
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(44,93,167,0.18)]"
              />

              {/* Floating H2O Glassmorphism Tag - Slightly larger */}
              <div className="absolute top-4 left-4 p-4 md:p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl">
                <span className="text-2xl md:text-4xl font-black text-[#2C5DA7] drop-shadow-sm tracking-tighter">
                  H₂O
                </span>
              </div>
            </div>

            {/* BACKGROUND DECO CIRCLE - Scaled up to fit larger image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[130%] md:h-[130%] rounded-full border border-[#7CB35B]/15 border-dashed animate-[spin_50s_linear_infinite]" />
            {/* Floating Info Cards - Now Responsive Grid instead of fixed absolute column */}
            <div className="mt-8 lg:absolute lg:-bottom-10 lg:-right-6 lg:mt-0 z-20 w-full lg:w-auto space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:block gap-4 sm:space-y-0 lg:space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 min-w-full lg:min-w-[240px]"
                >
                  <div className="p-2.5 bg-[#F1F8E1] text-[#7CB35B] rounded-xl shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5DA7]">
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold text-[#1A365D]">
                      {stat.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE ARCHITECTURAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 text-[#2C5DA7] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
              <CheckCircle2 size={14} className="text-[#7CB35B]" /> The Science
              of Purity
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] lg:leading-[0.9] tracking-tighter mb-8 md:mb-10 text-[#1A365D]">
              Pure Water. <br className="hidden sm:block" />
              <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic font-light pr-4">
                Pure Wellness.
              </span>
            </h2>

            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl text-[#1A365D]/70 font-medium leading-relaxed">
                {COMPANY.name} is dedicated to transforming everyday hydration
                through advanced{" "}
                <span className="text-[#1A365D] font-bold">
                  medical-grade ionization
                </span>{" "}
                engineering.
              </p>

              <div className="grid gap-4 md:gap-6">
                {[
                  "Medical-grade Platinum Titanium electrolysis technology.",
                  "Micro-clustered molecules for 3x faster cellular absorption.",
                  "Antioxidant-rich water with powerful negative ORP levels.",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-[#7CB35B]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7CB35B] group-hover:border-[#7CB35B] transition-all">
                      <div className="w-1.5 h-1.5 bg-[#7CB35B] rounded-full group-hover:bg-white" />
                    </div>
                    <p className="text-[#1A365D]/80 font-bold text-sm md:text-base leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#1A365D] to-[#2C5DA7] text-white shadow-xl shadow-blue-900/10 mt-8 md:mt-12 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <p className="text-base md:text-lg font-bold leading-relaxed italic opacity-90">
                    "We believe that small daily changes in water quality create
                    powerful, lasting transformations in human vitality."
                  </p>
                </div>
                {/* Visual flair - smaller on mobile */}
                <div className="absolute top-[-20%] right-[-10%] w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
