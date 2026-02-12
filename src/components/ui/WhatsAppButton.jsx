import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "918130134145"; //
  const message = "Hello Ion Pure Solutions, I would like to inquire about your professional hydration systems.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] flex items-center gap-4">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* BREATHING AMBIENCE - Signature WhatsApp Green Glow on Hover */}
        <div className="absolute inset-0 bg-[#25D366] blur-2xl opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-700" />

        {/* MAIN BUTTON BODY */}
        <button
          onClick={handleClick}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-[#1A365D] text-white shadow-[0_20px_40px_rgba(37,211,102,0.1)] overflow-hidden transition-all duration-700 border border-white/10 group-hover:border-[#25D366]/50 group-hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)]"
        >
          {/* DYNAMIC BACKGROUND GRADIENT - Transitions to WhatsApp Green */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2C5DA7] to-[#1A365D] opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* ICON STACK */}
          <div className="relative z-10 flex items-center justify-center">
            {/* The SVG below uses the official WhatsApp icon path for 100% authenticity */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 md:w-8 md:h-8 fill-current group-hover:scale-110 transition-transform duration-500 ease-out"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <Sparkles 
              size={12} 
              className="absolute -top-2 -right-3 text-[#7CB35B] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-12" 
            />
          </div>

          {/* HI-TECH SWIPE EFFECT */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
        </button>

        {/* PRESTIGE TOOLTIP - Recognizable WhatsApp Messaging */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-full ml-5 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
            >
              <div className="bg-white/90 backdrop-blur-xl border border-gray-100 px-5 py-3 rounded-2xl shadow-2xl flex flex-col gap-0.5 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#25D366]">Support Active</span>
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#1A365D]">Consultation Desk</span>
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white/90 border-l border-b border-gray-100 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}