import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import Logo from '../../assets/images/Logo.png';
import { COMPANY } from '../../data/company';

export default function MobileMenu({ isOpen, onClose, scrollTo, isBannerVisible }) {
  const menuLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Products', id: 'products' },
    { label: 'Why Ion Pure', id: 'why-choose-us' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Wellness Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay - Optimized with darker tint for better focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-ionMidnight/40 backdrop-blur-md lg:hidden"
          />

          {/* Drawer - Optimized Width and Responsiveness */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed right-0 top-0 bottom-0 z-[120] w-[85%] max-w-[400px] bg-white shadow-2xl lg:hidden flex flex-col"
          >
            {/* Header - Fixed height to ensure navigation is scrollable */}
            <div className="flex items-center justify-between p-6 pt-8">
              <div className="flex flex-col">
                <h3 className="text-xl font-black uppercase italic leading-none">
                  <span className="text-ionBlue">Ion</span>
                  <span className="text-ionGreen ml-1">Pure</span>
                </h3>
                <span className="text-[7px] font-black tracking-[0.4em] text-ionBlue/50 uppercase mt-1">
                  Solutions
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 rounded-2xl bg-ionMint text-ionMidnight active:scale-90 transition-transform"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Area for Links - Prevents cutoff on small screens */}
            <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
              {/* Tagline - Refined for mobile readability */}
              <div className="mb-8 px-2 border-l-2 border-ionGreen/30">
                <p className="text-[10px] font-bold text-ionMidnight/60 uppercase tracking-widest leading-relaxed">
                  Change Your Water <br />
                  <span className="text-ionBlue italic">Change Your Life</span>
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {menuLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => {
                      scrollTo(link.id);
                      onClose();
                    }}
                    className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-ionMint active:bg-ionMint/70 group transition-all text-left"
                  >
                    <span className="text-lg font-display font-bold text-ionMidnight group-hover:text-ionBlue transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight 
                      size={18} 
                      className="text-ionBlue opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" 
                    />
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Sticky Footer inside Mobile Menu */}
            <div className="p-6 bg-ionMint/30 border-t border-ionBlue/5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <ExternalLink size={16} className="text-ionBlue" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-ionBlue uppercase tracking-widest">
                    Pure Hydrogen Tech
                  </p>
                  <p className="text-[9px] font-medium text-ionMidnight/40 uppercase mt-0.5">
                    Certified Excellence
                  </p>
                </div>
              </div>
              <p className="text-[9px] font-bold text-ionMidnight/30 uppercase tracking-[0.2em]">
                © {COMPANY.establishmentYear} {COMPANY.name}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}