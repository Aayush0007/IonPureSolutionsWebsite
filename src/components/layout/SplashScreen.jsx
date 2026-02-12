import { motion } from 'framer-motion';
import Logo from '../../assets/images/SplashScreenLogo.png';
import { COMPANY } from '../../data/company';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 bg-[#F1F8E1] flex flex-col items-center justify-center z-[100] overflow-hidden"
    >
      {/* Responsive Background Ripple - Scaled for Screen Size */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1.5], opacity: [0, 0.15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] border border-[#2C5DA7] rounded-full"
      />

      <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-md">
        {/* Logo & Brand Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-10 md:mb-14"
        >
          {/* Responsive Logo Sizing */}
          <img
            src={Logo}
            alt={COMPANY.name}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain mb-6 drop-shadow-2xl"
          />
          
          <div className="inline-flex flex-col items-center font-display">
            {/* Scalable Text: Text sizes adjust from mobile to desktop */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none whitespace-nowrap flex">
              <span className="text-[#7CB35B]" style={{ filter: "drop-shadow(2px 2px 0px rgba(26, 54, 93, 0.12))" }}>Ion</span>
              <span className="mx-1"></span>
              <span className="text-[#2C5DA7]" style={{ filter: "drop-shadow(2px 2px 0px rgba(26, 54, 93, 0.12))" }}>Pure</span>
            </h3>
            
            <div className="flex items-center w-full mt-3">
              <div className="h-[1.5px] md:h-[2px] flex-grow bg-gradient-to-r from-transparent to-[#7CB35B]"></div>
              <span className="px-3 text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.5em] text-[#2C5DA7] uppercase">
                Solutions
              </span>
              <div className="h-[1.5px] md:h-[2px] flex-grow bg-gradient-to-l from-transparent to-[#7CB35B]"></div>
            </div>
          </div>
        </motion.div>

        {/* Responsive Loading Bar */}
        <div className="relative w-full max-w-[240px] md:max-w-[300px] h-1 bg-[#2C5DA7]/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#2C5DA7]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>

        {/* Tagline - Responsive scaling and centered alignment */}
        <motion.p
          className="mt-8 text-[#1A365D] font-bold text-[9px] sm:text-[10px] md:text-xs text-center uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-60 leading-relaxed max-w-[280px] sm:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {COMPANY.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}