import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Logo from '../../assets/images/Logo.png';
import { COMPANY } from '../../data/company';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Why Us', id: 'why-choose-us' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

export default function MobileMenu({ isOpen, onClose, scrollTo }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#1A365D]/40 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-[85%] bg-[#FDFDFD] shadow-2xl"
          >
            <div className="flex flex-col h-full p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-16">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
                <button 
                  onClick={onClose} 
                  className="p-2 rounded-full bg-gray-50 text-[#1A365D]"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation Links with Staggered Fade */}
              <nav className="flex-1 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                      scrollTo(link.id);
                      onClose();
                    }}
                    className="flex items-center justify-between w-full text-2xl font-black text-[#1A365D] uppercase tracking-tighter group hover:text-[#7CB35B] transition-colors"
                  >
                    {link.label}
                    <ArrowRight size={20} className="text-[#2C5DA7] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </motion.button>
                ))}
              </nav>

              {/* Bottom Branding */}
              <div className="mt-auto border-t pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2C5DA7] mb-2">
                  Eco-Tech Purification
                </p>
                <p className="text-xs font-bold text-[#1A365D]/60 uppercase">
                  © {COMPANY.establishmentYear} {COMPANY.name}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}