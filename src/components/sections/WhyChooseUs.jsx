import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplet,
  Activity,
  Award,
  CheckCircle,
  Sparkles,
  Zap,
  Beaker,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Medical-Grade Components",
    description:
      "Platinum-coated titanium electrodes and superior membranes ensure zero ozone output.",
    color: "#2C5DA7",
    size: "lg",
    accent: "Titanium Tech",
  },
  {
    icon: Droplet,
    title: "H2 Concentration",
    description: "Up to 8000 PPB in our portable range for cellular support.",
    color: "#7CB35B",
    size: "sm",
    accent: "H₂ Infusion",
  },
  {
    icon: Activity,
    title: "Antioxidant Support",
    description: "Up to -800 mV ORP to fight oxidative stress daily.",
    color: "#2C5DA7",
    size: "sm",
    accent: "ORP Energy",
  },
  {
    icon: Award,
    title: "Global Certification",
    description: "CE, ISO 9001, ISO 13485, and GMP verified quality standards.",
    color: "#7CB35B",
    size: "lg",
    accent: "Global Standards",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-16 lg:py-24 overflow-hidden bg-white"
    >
      {/* 1. COMPACT BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-[#7CB35B]/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[#2C5DA7]/5 blur-[80px] rounded-full" />
      </div>

      <div className="section-container relative z-10 px-6 max-w-6xl mx-auto">
        {/* 2. REFINED HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white shadow-sm border border-gray-100 mb-6"
          >
            <Zap size={12} className="text-[#2C5DA7]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A365D]">
              Ion Pure Advantage
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-4 text-[#1A365D] whitespace-nowrap">
            Trust In{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Every Drop.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#1A365D]/50 max-w-xl mx-auto font-medium">
            Medical-grade engineering for the most effective antioxidant
            hydration.
          </p>
        </div>

        {/* 3. OPTIMIZED BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-[2rem] p-6 lg:p-8 group transition-all
                bg-white border border-gray-100 hover:border-[#2C5DA7]/20 hover:shadow-xl
                ${item.size === "lg" ? "md:col-span-3" : "md:col-span-3"}
              `}
            >
              {/* Subtle Liquid Glow */}
              <div
                className="absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gray-50 group-hover:scale-105 transition-transform">
                  <item.icon size={24} style={{ color: item.color }} />
                </div>

                <h3 className="text-lg font-black text-[#1A365D] mb-2 tracking-tight uppercase italic transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A365D]/60 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* COMPACT FOOTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-6 flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50/50 rounded-[2rem] border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Sparkles size={20} className="text-[#1A365D]" />
              </div>
              <p className="text-sm font-bold text-[#1A365D]">
                Transparent specifications & dedicated support.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-2 rounded-lg bg-white text-[#7CB35B] font-black text-[9px] uppercase tracking-widest border border-gray-100">
                Lab Verified
              </div>
              <div className="px-4 py-2 rounded-lg bg-white text-[#2C5DA7] font-black text-[9px] uppercase tracking-widest border border-gray-100">
                ISO Standards
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
