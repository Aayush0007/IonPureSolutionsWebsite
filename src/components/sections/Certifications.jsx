import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Globe, FlaskConical, ClipboardCheck, Microscope, Zap, Award } from 'lucide-react';
import { CERTIFICATIONS, CERTIFICATION_NOTE } from '../../data/certifications';
import { useState } from 'react';

const certIcons = {
  "ISO-9001": <ShieldCheck className="text-[#2C5DA7]" size={22} />,
  "ISO-13485": <Microscope className="text-[#2C5DA7]" size={22} />,
  "ISO-14001": <Globe className="text-[#7CB35B]" size={22} />,
  "CE": <Award className="text-[#7CB35B]" size={22} />,
  "GMP": <FlaskConical className="text-[#7CB35B]" size={22} />,
  "RoHS": <FileCheck className="text-[#2C5DA7]" size={22} />,
  "FCC": <Zap className="text-[#2C5DA7]" size={22} />,
  "default": <ClipboardCheck className="text-[#2C5DA7]" size={22} />
};

export default function Certifications() {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* 1. HEADER */}
      <div className="section-container relative z-10 text-center mb-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-4"
        >
          <ShieldCheck size={12} className="text-[#7CB35B]" />
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">MQA Verified</span>
        </motion.div>

        <h2 className="text-3xl lg:text-5xl font-black tracking-tighter mb-4 text-[#2C5DA7]">
          Global Compliance <span className="italic font-light opacity-50">& Standards.</span>
        </h2>

        <p className="text-xs md:text-sm text-[#2C5DA7]/60 max-w-xl mx-auto font-medium">
          Ion Pure systems are manufactured under rigorous international protocols to ensure medical-grade safety.
        </p>
      </div>

      {/* 2. COMPACT MARQUEE */}
      <div 
        className="relative w-full flex overflow-hidden py-4 cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          animate={{ x: isPaused ? undefined : [0, "-33.33%"] }}
          transition={{
            duration: 30, 
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-fit"
        >
          {infiniteCerts.map((cert, index) => (
            <div key={`${cert.code}-${index}`} className="px-3">
              <div className="w-[260px] p-5 rounded-[1.5rem] bg-[#F8FAFC] border border-gray-100/50 hover:border-[#2C5DA7]/20 transition-all group">
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                    {certIcons[cert.code] || certIcons.default}
                  </div>
                  
                  {/* TEXT CONTENT */}
                  <div className="overflow-hidden">
                    <h3 className="text-xs font-black text-[#2C5DA7] uppercase tracking-tighter truncate">
                      {cert.name}
                    </h3>
                    <p className="text-[9px] font-bold text-[#7CB35B] tracking-widest mt-0.5">
                      {cert.id}
                    </p>
                    <p className="text-[8px] font-medium text-[#2C5DA7]/40 mt-2 uppercase tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* 3. VERIFICATION FOOTER */}
      <div className="mt-8 text-center px-6">
        <p className="text-[9px] font-bold uppercase tracking-widest text-[#2C5DA7]/40 mb-3">
          {CERTIFICATION_NOTE}
        </p>
        <a
          href="http://www.mqacertification.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#2C5DA7] hover:text-[#7CB35B] transition-colors border-b border-[#2C5DA7]/20 pb-0.5"
        >
          Verify Credentials <Globe size={12} />
        </a>
      </div>
    </section>
  );
}