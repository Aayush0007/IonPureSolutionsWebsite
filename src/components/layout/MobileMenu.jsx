import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY } from "../../data/company";

export default function MobileMenu({ isOpen, onClose, scrollTo }) {
  const menuLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Products", id: "products" },
    { label: "Certifications", id: "certifications" },
    { label: "Wellness Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Pure Opacity (GPU) - No Blur to prevent lag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-ionMidnight/50 lg:hidden"
            style={{ willChange: "opacity" }}
          />

          {/* Drawer - Hardware Accelerated Transform */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.25,
            }}
            className="fixed right-0 top-0 bottom-0 z-[120] w-[85%] max-w-[400px] bg-white lg:hidden flex flex-col"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Header with Tagline */}
            <div className="p-6 pt-10 border-b border-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase italic leading-none text-ionBlue">
                    Ion<span className="text-ionGreen ml-1">Pure</span>
                  </h3>
                  <p className="text-[10px] font-bold text-ionMidnight/40 uppercase tracking-[0.2em] mt-2 leading-tight">
                    Change Your Water <br />
                    <span className="text-ionBlue">Change Your Life</span>
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 rounded-xl bg-ionMint/50 text-ionMidnight active:scale-95 transition-transform"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <nav className="flex flex-col gap-1">
                
                {menuLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      // Close menu first for visual speed
                      onClose();
                      // Trigger the specialized navigation logic
                      scrollTo(link.id);
                    }}
                    className="flex items-center justify-between w-full p-4 rounded-2xl active:bg-ionMint/30 transition-colors text-left group"
                  >
                    <span className="text-lg font-bold text-ionMidnight group-active:text-ionBlue">
                      {link.label}
                    </span>
                   
                  </button>
                ))}
              </nav>
            </div>

            {/* Rich Footer Content */}
            <div className="p-6 bg-gray-50 mt-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} className="text-ionGreen" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-ionMidnight uppercase tracking-wider">
                    Pure Hydrogen Tech
                  </p>
                  <p className="text-[9px] font-medium text-ionMidnight/50 uppercase">
                    Certified Excellence
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-medium text-ionMidnight/60 leading-relaxed">
                  Experience the pinnacle of water purification technology
                  designed for your wellness.
                </p>
                <div className="h-[1px] w-full bg-gray-200" />
                <p className="text-[9px] font-bold text-ionMidnight/30 uppercase tracking-[0.2em]">
                  © {COMPANY.establishmentYear} {COMPANY.name}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
