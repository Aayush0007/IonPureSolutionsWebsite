import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certifications';

// Imports
import ceLogo from '../../assets/certificate/CE.jpg';
import fcLogo from '../../assets/certificate/FC.jpg';
import gmpLogo from '../../assets/certificate/GMP.jpg';
import iso9001Logo from '../../assets/certificate/ISO9001-2015.jpg';
import iso14001Logo from '../../assets/certificate/ISO14001.jpg';
import rohsLogo from '../../assets/certificate/RoHS.jpg';

const certIcons = {
  "CE": <img src={ceLogo} alt="CE" className="w-full h-full object-contain p-1" />,
  "FCC": <img src={fcLogo} alt="FCC" className="w-full h-full object-contain p-1" />,
  "GMP": <img src={gmpLogo} alt="GMP" className="w-full h-full object-contain p-1" />,
  "ISO-9001": <img src={iso9001Logo} alt="ISO 9001" className="w-full h-full object-contain p-1" />,
  "ISO-13485": <img src={iso9001Logo} alt="ISO 13485" className="w-full h-full object-contain p-1" />,
  "ISO-14001": <img src={iso14001Logo} alt="ISO 14001" className="w-full h-full object-contain p-1" />,
  "RoHS": <img src={rohsLogo} alt="RoHS" className="w-full h-full object-contain p-1" />,
  "default": <div className="w-full h-full bg-ionBlue/5 flex items-center justify-center text-xs font-bold text-ionBlue uppercase">Cert</div>
};

export default function Certifications() {
  // Triple for seamless loop
  const infiniteCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-8 overflow-hidden bg-white">
      {/* 1. HEADER - Space reduced significantly */}
      <div className="relative z-10 text-center mb-6 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-3"
        >
          <ShieldCheck size={16} className="text-ionGreen" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ionBlue">Global Safety Matrix</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 text-ionBlue uppercase italic">
          Verified <span className="text-ionGreen">Compliance.</span>
        </h2>

        <p className="text-sm md:text-base text-ionBlue/70 max-w-2xl mx-auto font-medium">
          Ion Pure systems are engineered under rigorous international protocols.
        </p>
      </div>

      {/* 2. INFINITE MARQUEE */}
      <div className="group relative flex overflow-hidden py-4 border-y border-gray-50">
        {/* The 'animate-marquee' class handles the movement, 'group-hover:pause-marquee' stops it */}
        <div className="flex animate-marquee group-hover:pause-marquee">
          {infiniteCerts.map((cert, index) => (
            <div key={`${cert.code}-${index}`} className="px-3 shrink-0">
              <div className="w-[340px] min-h-[120px] p-5 rounded-2xl bg-white border border-ionBlue/10 shadow-sm hover:shadow-md hover:border-ionBlue/30 transition-all duration-300 relative">
                
                <div className="flex items-center gap-4">
                  {/* LOGO CONTAINER */}
                  <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    {certIcons[cert.code] || certIcons.default}
                  </div>
                  
                  {/* TEXT CONTENT - whitespace-normal allows wrapping */}
                  <div className="whitespace-normal">
                    <h3 className="text-xs font-black text-ionBlue uppercase tracking-tight leading-snug mb-0.5">
                      {cert.name}
                    </h3>
                    <p className="text-[11px] font-bold text-ionGreen">
                      ID: {cert.id}
                    </p>
                    <p className="text-[9px] font-bold text-ionBlue/40 uppercase tracking-wider mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge Blur Gradients */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* 3. VERIFICATION FOOTER */}
      <div className="mt-8 text-center px-6 relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ionBlue/30 mb-4">
          Registration: 13 Jan 2026 • Valid until 2029
        </p>
        <a
          href="http://www.mqacertification.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-ionBlue text-white text-[11px] font-black uppercase tracking-widest hover:bg-ionGreen transition-all shadow-md active:scale-95 group"
        >
          Verify Credentials 
          <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .pause-marquee {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}