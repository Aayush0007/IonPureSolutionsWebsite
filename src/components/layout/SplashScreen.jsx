import { motion } from 'framer-motion';
import Logo from '../../assets/images/SplashScreenLogo.png';
import { COMPANY } from '../../data/company';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -20,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 bg-[#FDFDFD] flex flex-col items-center justify-center z-[9999] overflow-hidden"
    >
      {/* 1. BACKGROUND AMBIENCE - Pure Water Ripple */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.3, 1.6], opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-[90vw] h-[90vw] max-w-[800px] border border-[#2C5DA7]/20 rounded-full pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-md">
        {/* 2. LOGO SECTION */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-12"
        >
          <img
            src={Logo}
            alt={COMPANY.name}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain mb-8 drop-shadow-[0_20px_40px_rgba(44,93,167,0.15)]"
          />
          
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[#2C5DA7] leading-none mb-4 italic">
              Ion<span className="text-[#7CB35B] ml-2">Pure</span>
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#2C5DA7]/30" />
              <span className="text-[10px] font-black tracking-[0.6em] text-[#2C5DA7]/60 uppercase">
                Solutions
              </span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#2C5DA7]/30" />
            </div>
          </div>
        </motion.div>

        {/* 3. SYNCED PROGRESS BAR */}
        <div className="relative w-full max-w-[200px] h-[3px] bg-[#2C5DA7]/5 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7CB35B] to-[#2C5DA7]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            // Duration must be slightly less than the App.jsx timer for a "complete" feel
            transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }} 
          />
        </div>

        {/* 4. TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-[#1A365D] font-bold text-[10px] uppercase tracking-[0.4em] text-center"
        >
          {COMPANY.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}