import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplet,
  Activity,
  Award,
  Zap,
  CheckCircle,
  Clock,
  HeartHandshake
} from "lucide-react";

// Content meticulously matched to Master Documentation Section 4: Why Choose Us
const reasons = [
  {
    icon: Zap,
    title: "Premium Technology",
    description: "Advanced Alkaline Water Ionizers and Hydrogen-Rich Bottles designed for everyday wellness and molecular refinement.",
    color: "#2C5DA7",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Purity",
    description: "Carefully selected products engineered for safe, clean, and refreshing water through medical-grade electrolysis.",
    color: "#7CB35B",
  },
  {
    icon: Activity,
    title: "Health-Focused Approach",
    description: "Supporting better hydration and balanced living through innovative micro-clustering and antioxidant ORP levels.",
    color: "#2C5DA7",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Service",
    description: "Honest guidance, transparent communication, and dependable after-sales support for your peace of mind.",
    color: "#7CB35B",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-16 md:py-20 overflow-hidden bg-white">
      {/* 1. MINIMAL BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[#7CB35B]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[25%] h-[25%] bg-[#2C5DA7]/5 blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10 px-6 max-w-6xl mx-auto">
        {/* 2. OPTIMIZED HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-6"
          >
            <CheckCircle size={12} className="text-[#7CB35B]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">
              Why Choose Ion Pure
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-[#2C5DA7]">
            Trust In <span className="italic font-light opacity-60 text-[#2C5DA7]">Every Drop.</span>
          </h2>
          <p className="text-sm md:text-base text-[#2C5DA7]/60 max-w-xl mx-auto font-medium mt-4">
            Delivering more than just products—we deliver trust, quality, and healthier hydration for modern lifestyles.
          </p>
        </div>

        {/* 3. BALANCED 2x2 GRID (Optimized for space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] p-8 group transition-all bg-[#F8FAFC] border border-gray-100 hover:border-[#2C5DA7]/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Refined Icon Container */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={28} style={{ color: item.color }} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black text-[#2C5DA7] tracking-tight uppercase italic leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2C5DA7]/60 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Minimal Liquid Glow on hover */}
              <div
                className="absolute -right-8 -top-8 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}

          {/* 4. DOCUMENTATION-ALIGNED FOOTER CARD (Section 4 - Value for Money) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 flex flex-col md:flex-row items-center justify-between p-8 bg-[#2C5DA7] rounded-[2.5rem] mt-4 relative overflow-hidden"
          >
            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center gap-6 relative z-10 mb-6 md:mb-0 text-center md:text-left">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white uppercase tracking-tight italic">Value for Money</h4>
                <p className="text-sm font-medium text-white/70">
                  Invest in better water, better health, and total peace of mind.
                </p>
              </div>
            </div>

            <div className="flex gap-3 relative z-10">
              <div className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-black text-[9px] uppercase tracking-widest border border-white/20">
                Fair Pricing
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-[#7CB35B] text-white font-black text-[9px] uppercase tracking-widest shadow-lg">
                After-Sales Support
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}