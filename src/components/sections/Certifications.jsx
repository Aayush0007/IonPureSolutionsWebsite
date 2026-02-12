import { motion, useAnimationControls } from 'framer-motion';
import { ShieldCheck, FileCheck, Globe, FlaskConical, ClipboardCheck, Microscope, Zap } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certifications';
import { useState, useEffect } from 'react';

const certIcons = {
  "ISO 9001": <ShieldCheck className="text-[#2C5DA7]" size={24} />,
  "ISO 13485": <Microscope className="text-[#2C5DA7]" size={24} />,
  "CE": <Globe className="text-[#7CB35B]" size={24} />,
  "GMP": <FlaskConical className="text-[#7CB35B]" size={24} />,
  "RoHS": <FileCheck className="text-[#2C5DA7]" size={24} />,
  "default": <ClipboardCheck className="text-[#2C5DA7]" size={24} />
};

export default function Certifications() {
  const [isPaused, setIsPaused] = useState(false);
  // Tripled for perfectly smooth endless looping
  const infiniteCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* 1. COMPACT HEADER */}
      <div className="section-container relative z-10 text-center mb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-6"
        >
          <Zap size={12} className="text-[#7CB35B] animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">Verified Quality</span>
        </motion.div>

        <h2 className="text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter mb-4 text-[#1A365D]">
          Internationally{" "}
          <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
            Certified
          </span>
        </h2>

        <p className="text-sm md:text-base text-[#1A365D]/50 max-w-2xl mx-auto font-medium">
          Manufactured under strict global standards, verified by MQA Certification Services (UK) — valid through 2029.
        </p>
      </div>

      {/* 2. INFINITE PAUSABLE MARQUEE */}
      <div 
        className="relative w-full flex overflow-hidden py-6 cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          animate={{ x: isPaused ? undefined : [0, "-33.33%"] }}
          transition={{
            duration: 25, 
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ display: 'flex', width: 'fit-content' }}
        >
          {infiniteCerts.map((cert, index) => (
            <div 
              key={`${cert.code}-${index}`}
              className="inline-block px-3"
            >
              {/* Reduced card width from 350px to 280px for compactness */}
              <div className="w-[280px] p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(26,54,93,0.04)] hover:shadow-[0_15px_45px_rgba(26,54,93,0.08)] transition-all group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#F1F8E1] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {certIcons[cert.label] || certIcons.default}
                  </div>
                  
                  <h3 className="text-lg font-black text-[#1A365D] tracking-tighter uppercase italic mb-1">
                    {cert.label}
                  </h3>
                  <p className="text-[8px] font-bold text-[#2C5DA7] tracking-widest uppercase mb-3 opacity-60">
                    ID: {cert.code}
                  </p>
                  <p className="text-xs font-medium text-[#1A365D]/60 whitespace-normal leading-relaxed line-clamp-2">
                    {cert.description || "International compliance standard for medical-grade safety."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cinematic Fades */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20" />
      </div>

      {/* 3. COMPACT FOOTER */}
      <div className="mt-12 text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#1A365D]/30 mb-2">
          {/* Initial registration: 13 January 2026 • Valid until 2029 */}
        </p>
        <a
          href="https://www.mqacertification.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-bold text-[#2C5DA7] hover:text-[#1A365D] underline decoration-dotted underline-offset-4"
        >
          Verify at mqacertification.com
        </a>
      </div>
    </section>
  );
}