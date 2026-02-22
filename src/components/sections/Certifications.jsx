import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Globe, FlaskConical, ClipboardCheck, Microscope, Zap, Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, CERTIFICATION_NOTE } from '../../data/certifications';
import { useState } from 'react';

const certIcons = {
  "ISO-9001": <ShieldCheck className="text-ionBlue" size={22} />,
  "ISO-13485": <Microscope className="text-ionBlue" size={22} />,
  "ISO-14001": <Globe className="text-ionGreen" size={22} />,
  "CE": <Award className="text-ionGreen" size={22} />,
  "GMP": <FlaskConical className="text-ionGreen" size={22} />,
  "RoHS": <FileCheck className="text-ionBlue" size={22} />,
  "FCC": <Zap className="text-ionBlue" size={22} />,
  "default": <ClipboardCheck className="text-ionBlue" size={22} />
};

export default function Certifications() {
  const [isPaused, setIsPaused] = useState(false);
  // Quadruple the array for an even smoother infinite loop on large screens
  const infiniteCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-12 lg:py-20 overflow-hidden bg-white">
      
      {/* 1. HEADER - Synced with Brand Identity */}
      <div className="relative z-10 text-center mb-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-5"
        >
          <ShieldCheck size={14} className="text-ionGreen" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-ionBlue">Global Safety Matrix</span>
        </motion.div>

        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-ionBlue uppercase italic">
          Verified <span className="text-ionGreen">Compliance.</span>
        </h2>

        <p className="text-xs md:text-sm text-ionBlue/60 max-w-xl mx-auto font-medium leading-relaxed">
          Ion Pure systems are engineered under rigorous international protocols to ensure 99.99% purity and medical-grade safety standards.
        </p>
      </div>

      {/* 2. INFINITE MARQUEE - Optimized for Performance */}
      <div 
        className="relative w-full flex overflow-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          animate={{ x: isPaused ? undefined : [0, "-50%"] }}
          transition={{
            duration: 40, 
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-fit"
        >
          {infiniteCerts.map((cert, index) => (
            <div key={`${cert.code}-${index}`} className="px-4">
              <div className="w-[280px] p-6 rounded-[2rem] bg-gradient-to-br from-white to-ionMint/20 border border-ionBlue/5 hover:border-ionBlue/20 hover:shadow-[0_20px_40px_rgba(44,93,167,0.08)] transition-all duration-500 group relative overflow-hidden">
                
                {/* Decorative Liquid Shine */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ionBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-5 relative z-10">
                  {/* ICON CONTAINER */}
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-ionBlue/5 flex items-center justify-center shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {certIcons[cert.code] || certIcons.default}
                  </div>
                  
                  {/* TEXT CONTENT */}
                  <div className="overflow-hidden">
                    <h3 className="text-[11px] font-black text-ionBlue uppercase tracking-tighter mb-1 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-[10px] font-bold text-ionGreen tracking-[0.1em]">
                      {cert.id}
                    </p>
                    <p className="text-[9px] font-bold text-ionBlue/40 mt-3 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Edge Blur Gradients (Liquid Fades) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* 3. VERIFICATION FOOTER */}
      <div className="mt-10 text-center px-6 relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ionBlue/30 mb-4">
          All certificates issued by MQA Certification Services (UK).
        </p>
        <a
          href="http://www.mqacertification.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-ionBlue/5 text-[10px] font-black uppercase tracking-widest text-ionBlue hover:bg-ionBlue hover:text-white transition-all shadow-sm active:scale-95 group"
        >
          Verify Credentials <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}