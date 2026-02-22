import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Timer, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function PromoBanner({ isVisible, onClose, scrollToProducts }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isClaimed, setIsClaimed] = useState(false);

  // 1. COUNTDOWN LOGIC
  useEffect(() => {
    const target = new Date("2026-03-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference <= 0) clearInterval(interval);
      else setTimeLeft({ hours: h, minutes: m, seconds: s });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. PRODUCT REDIRECT HANDLER
  const handleClaim = () => {
    if (typeof scrollToProducts !== "function") {
      console.error("scrollToProducts function not provided to PromoBanner");
      return;
    }

    setIsClaimed(true);
    
    setTimeout(() => {
      scrollToProducts("products"); 
      setTimeout(() => setIsClaimed(false), 1000);
    }, 800); 
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          /* Removed px-2/px-4 and py-2 to make it edge-to-edge */
          className="fixed top-0 left-0 right-0 z-[120] h-[52px] md:h-[60px] selection:bg-white/20"
        >
          <div className="w-full h-full relative group">
            {/* 3. FULL-WIDTH BACKGROUND (Removed rounded-2xl) */}
            <div className="absolute inset-0 bg-ionBlue/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(44,93,167,0.2)] overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
            </div>

            {/* 4. CONTENT ALIGNED WITH SITE MAX-WIDTH */}
            <div className="max-w-7xl mx-auto relative h-full flex items-center justify-between gap-2 px-4 md:px-8">
              
              <div className="flex items-center gap-2 md:gap-5 overflow-hidden">
                <div className="hidden xs:flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 rounded-full bg-ionGreen/20 border border-ionGreen/30 shrink-0">
                  <Timer size={12} className="text-ionGreen animate-pulse" />
                  <span className="text-[9px] md:text-[10px] font-black text-ionGreen uppercase tracking-widest tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 truncate">
                  <span className="text-ionMint text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none">2026 Launch</span>
                  <p className="text-white text-[10px] md:text-sm font-bold tracking-tight truncate">
                    Premium Ionizers at commencement prices.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-6 shrink-0">
                <motion.button 
                  disabled={isClaimed}
                  onClick={handleClaim}
                  whileHover={!isClaimed ? { scale: 1.03 } : {}}
                  whileTap={!isClaimed ? { scale: 0.97 } : {}}
                  className={`relative flex items-center gap-2 px-3 md:px-6 py-1.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-500 shadow-lg
                    ${isClaimed 
                      ? 'bg-ionGreen text-ionBlue' 
                      : 'bg-gradient-to-r from-ionGreen to-ionMint text-ionBlue group/btn'
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {!isClaimed ? (
                      <motion.div 
                        key="cta"
                        className="flex items-center gap-1.5 md:gap-2"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      >
                        Claim <span className="hidden sm:inline">Offer</span> 
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="success"
                        className="flex items-center gap-2"
                        initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                      >
                        <CheckCircle2 size={14} className="animate-bounce" /> 
                        <span className="hidden xs:inline">Reserved</span>
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-white animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <button 
                  onClick={onClose}
                  className="p-1.5 text-white/30 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}