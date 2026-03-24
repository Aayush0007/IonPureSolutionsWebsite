// components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../assets/images/SplashScreenLogo.png";
import { COMPANY } from "../../data/company";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Certifications", id: "certifications" },
  { label: "Blog", id: "blog" },
];

export default function Navbar({
  scrollTo,
  toggleMobileMenu,
  goHome,
  isDetailView,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || isDetailView
          ? "bg-white/80 backdrop-blur-xl shadow-elegant py-3"
          : "bg-transparent py-6"
      } top-0`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={goHome}
        >
          <img
            src={Logo}
            alt={COMPANY.name}
            className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
          />
          <div className="flex flex-col select-none">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none italic">
              <span className="text-ionBlue">Ion</span>
              <span className="text-ionGreen ml-1.5">Pure</span>
            </h3>
            <div className="flex items-center gap-2 mt-1 w-full">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-ionBlue/30" />
              <span className="text-[8px] font-black tracking-[0.5em] text-ionBlue/60 uppercase leading-none whitespace-nowrap">
                Solutions
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-ionBlue/30" />
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[11px] font-bold text-ionMidnight uppercase tracking-widest hover:text-ionBlue transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-ionGreen rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="group relative px-6 py-2.5 bg-ionMidnight rounded-full overflow-hidden hover:shadow-lg hover:shadow-ionBlue/20 active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ionBlue to-ionMidnight opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-ionBlue/10 transition-colors"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} className="text-ionBlue" />
        </button>
      </div>
    </nav>
  );
}