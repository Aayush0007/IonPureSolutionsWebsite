import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "../../assets/images/SplashScreenLogo.png";
import { COMPANY } from "../../data/company";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-choose-us" },
  { label: "Certifications", id: "certifications" },
  { label: "Blog", id: "blog" },
];

export default function Navbar({ scrollTo, toggleMobileMenu, goHome }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_2px_20px_rgba(26,54,93,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Width fixed using max-w-7xl and balanced padding */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo Section - Compact & Aesthetic */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={goHome}
        >
          <img
            src={Logo}
            alt={COMPANY.name}
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col font-display">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none flex">
              {/* Animated Gradient Text */}
              <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent">
                Ion Pure
              </span>
            </h3>

            {/* Solutions row - Refined width */}
            <div className="flex items-center w-full mt-1">
              <div className="h-[1.5px] flex-grow bg-gradient-to-r from-transparent to-[#2C5DA7]/40"></div>
              <span className="px-2 text-[9px] font-black tracking-[0.3em] text-[#2C5DA7]/80 uppercase leading-none">
                Solutions
              </span>
              <div className="h-[1.5px] flex-grow bg-gradient-to-l from-transparent to-[#2C5DA7]/40"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[12px] font-bold text-[#1A365D] uppercase tracking-widest hover:text-[#2C5DA7] transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7CB35B] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="relative ml-2 px-7 py-2.5 overflow-hidden rounded-full transition-all active:scale-95 group shadow-xl shadow-[#2C5DA7]/20"
          >
            {/* 1. ANIMATED GRADIENT BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA7] via-[#1A365D] to-[#2C5DA7] bg-[length:200%_auto] animate-gradient-text" />

            {/* 2. HOVER OVERLAY: Changes the feel on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

            {/* 3. CONTENT: Kept strictly white and bold for readability */}
            <span className="relative z-10 flex items-center gap-2 text-white text-[11px] font-black uppercase tracking-[0.2em]">
              Contact
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </span>

            {/* 4. THE SHIMMER: A subtle "light" sweep across the button */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-white/50 border border-white/20 hover:bg-white transition-all shadow-sm active:scale-90"
          onClick={toggleMobileMenu}
        >
          <Menu size={22} className="text-[#2C5DA7]" />
        </button>
      </div>
    </nav>
  );
}
