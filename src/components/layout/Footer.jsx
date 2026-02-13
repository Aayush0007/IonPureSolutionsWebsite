import { forwardRef } from "react"; // Import forwardRef
import {
  MessageCircle,
  Mail,
  Instagram,
  Phone,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { COMPANY } from "../../data/company";
import { CERTIFICATIONS, CERTIFICATION_NOTE } from "../../data/certifications";
import Logo from "../../assets/images/Logo.png";

const Footer = forwardRef(({ scrollTo, setView }, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="bg-[#fdfdfd] pt-24 pb-32 md:pb-12 border-t border-ionBlue/20 font-body relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* 1. Brand Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img
                src={Logo}
                alt={COMPANY.name}
                className="h-16 w-auto object-contain"
              />
              <div className="inline-flex flex-col items-center font-display">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none whitespace-nowrap flex">
                  <span
                    className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={{
                      filter: "drop-shadow(2px 2px 0px rgba(26, 54, 93, 0.15))",
                    }}
                  >
                    Ion Pure
                  </span>
                </h3>
                <div className="flex items-center w-full mt-2">
                  <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-[#7CB35B]/60"></div>
                  <span className="px-3 text-[12px] font-black tracking-[0.4em] text-[#2C5DA7] uppercase leading-none">
                    Solutions
                  </span>
                  <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-[#7CB35B]/60"></div>
                </div>
              </div>
            </div>

            <p className="text-[#1A365D] font-black text-xl mb-4 tracking-tight uppercase">
              {COMPANY.tagline}
            </p>

            <p className="text-[#1A365D]/70 mb-8 max-w-sm leading-relaxed text-base font-medium italic">
              {COMPANY.fullName} specializes in advanced Alkaline Water Ionizers
              and Hydrogen-Rich technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#25D366] text-white rounded-xl hover:scale-110 transition-all shadow-lg"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href={`https://instagram.com/${COMPANY.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-xl hover:scale-110 transition-all shadow-lg"
              >
                <Instagram size={22} />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="p-3 bg-[#2C5DA7] text-white rounded-xl hover:bg-[#1A365D] hover:scale-110 transition-all shadow-xl"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h4 className="text-[#1A365D] font-display font-black text-base mb-8 uppercase tracking-[0.2em] border-b-2 border-[#2C5DA7] pb-2 w-fit">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Products", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-[#1A365D]/80 hover:text-[#2C5DA7] font-bold transition-colors text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect & Registration */}
          <div>
            <h4 className="text-[#1A365D] font-display font-black text-base mb-8 uppercase tracking-[0.2em] border-b-2 border-[#2C5DA7] pb-2 w-fit">
              Connect
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#7CB35B] mt-1 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-[#1A365D] font-bold hover:text-[#2C5DA7]"
                  >
                    {COMPANY.phone}
                  </a>
                  <span className="text-[10px] font-black text-[#1A365D]/40 uppercase">
                    Support Line
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold">
                <Briefcase size={18} className="text-[#2C5DA7] mt-1 shrink-0" />
                <div>
                  <p className="uppercase">GST: {COMPANY.gst}</p>
                  <p className="uppercase mt-1">UDYAM: {COMPANY.udyam}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Trust Ribbon */}
        <div className="py-10 border-y border-gray-100 mb-10 bg-gray-50/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-8">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="flex flex-col items-center text-center gap-1 group"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#7CB35B]"
                  fill="rgba(124, 179, 91, 0.15)"
                />
                <span className="text-[11px] font-black text-[#1A365D] uppercase tracking-widest">
                  {cert.code}
                </span>
                <span className="text-[9px] font-bold text-[#2C5DA7] opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: {cert.id}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <div className="text-center md:text-left">
            <p className="text-[12px] font-black text-[#1A365D] uppercase tracking-[0.2em]">
              © {currentYear} {COMPANY.name}
            </p>
            <p className="text-[10px] text-[#1A365D]/40 font-bold uppercase tracking-widest mt-1 max-w-xs">
              {COMPANY.address}
            </p>
          </div>

          {/* UPDATED: LINKS OPEN IN NEW TAB WITH SEPARATE URLS */}
          <div className="flex items-center gap-4 mb-10 md:mb-0">
            <a
              href="/#privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black text-[#1A365D]/60 hover:text-[#2C5DA7] uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="/#terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black text-[#1A365D]/60 hover:text-[#2C5DA7] uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
