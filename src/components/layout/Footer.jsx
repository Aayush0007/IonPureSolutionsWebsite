import { forwardRef } from "react";
import {
  Phone,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Waves,
  Mail,
} from "lucide-react";
import WhatsAppIcon from "../../assets/icons/whatsapp.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import GmailIcon from "../../assets/icons/gmail.png";
import { COMPANY } from "../../data/company";
import { CERTIFICATIONS } from "../../data/certifications";
import Logo from "../../assets/images/Logo.png";

import ceLogo from "../../assets/certificate/CE.jpg";
import fcLogo from "../../assets/certificate/FC.jpg";
import gmpLogo from "../../assets/certificate/GMP.jpg";
import iso9001Logo from "../../assets/certificate/ISO9001-2015.jpg";
import iso14001Logo from "../../assets/certificate/ISO14001.jpg";
import iso13485Logo from "../../assets/certificate/ISO13485.jpg";
import rohsLogo from "../../assets/certificate/RoHS.jpg";

const footerCertLogos = {
  CE: ceLogo,
  FCC: fcLogo,
  GMP: gmpLogo,
  "ISO-9001": iso9001Logo,
  "ISO-13485": iso13485Logo,
  "ISO-14001": iso14001Logo,
  RoHS: rohsLogo,
};

const Footer = forwardRef(({ scrollTo, setView }, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="bg-[#F8FAFC] pt-24 pb-32 md:pb-12 font-body relative z-20 overflow-hidden border-t border-ionBlue/10"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-ionGreen/20 via-ionBlue/20 to-ionGreen/20" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-48 bg-ionBlue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* 1. Brand Identity & Socials */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={Logo}
                  alt={COMPANY.name}
                  className="h-16 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none flex">
                    <span className="text-[#2C5DA7]">Ion</span>
                    <span className="text-[#7CB35B] ml-2">Pure</span>
                  </h3>
                  <div className="flex items-center w-full mt-1.5 gap-2">
                    <div className="h-[1px] w-4 bg-[#7CB35B]/60"></div>
                    <span className="text-[10px] font-black tracking-[0.5em] text-[#2C5DA7]/60 uppercase">
                      Solutions
                    </span>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#2C5DA7]/20"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#7CB35B] font-black text-xl tracking-tight uppercase italic drop-shadow-sm">
                {COMPANY.tagline}
              </h4>
              <p className="text-[#2C5DA7]/70 max-w-md leading-relaxed text-lg font-medium italic">
                {COMPANY.fullName} specializes in advanced Alkaline Water
                Ionization and 99.99% Pure Hydrogen technology.
              </p>
            </div>

            <div className="flex gap-5 pt-2">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="w-9 h-9 object-contain" />
              </a>
              <a
                href={`https://instagram.com/${COMPANY.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-9 h-9 object-contain" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={GmailIcon} alt="Gmail" className="w-9 h-9 object-contain" />
              </a>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-[#2C5DA7] font-black text-sm mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
              <Waves size={16} className="text-[#7CB35B]" /> Navigation
            </h4>
            <ul className="space-y-5">
              {["Home", "About", "Products", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-[#2C5DA7]/60 hover:text-[#2C5DA7] font-bold transition-all text-base uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-[2px] bg-[#7CB35B] group-hover:w-4 transition-all duration-300" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Credentials & Address */}
          <div>
            <h4 className="text-[#2C5DA7] font-black text-sm mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
              <Briefcase size={16} className="text-[#2C5DA7]" /> Credentials
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#7CB35B] shrink-0 mt-1" />
                <p className="text-[#2C5DA7]/70 text-sm font-medium leading-relaxed">
                  {COMPANY.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#7CB35B] shrink-0" />
                <p className="text-[#2C5DA7]/70 text-sm font-medium">
                  {COMPANY.phone}
                </p>
              </div>
              <div className="p-5 bg-white border border-ionBlue/5 rounded-[1.5rem] space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7CB35B]" />
                  <p className="text-xs font-black text-[#2C5DA7]/80 uppercase tracking-wider">
                    GST: {COMPANY.gst}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2C5DA7]" />
                  <p className="text-xs font-black text-[#2C5DA7]/80 uppercase tracking-tighter truncate">
                    UDYAM: {COMPANY.udyam}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Trust Ribbon */}
        <div className="py-8 md:py-12 border-y border-ionBlue/5 mb-12 bg-white/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-8 gap-x-4 md:gap-8 justify-items-center items-center">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="flex flex-col items-center text-center gap-3 group grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-[120px]"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-ionBlue/10 transition-all">
                    {footerCertLogos[cert.code] ? (
                      <img src={footerCertLogos[cert.code]} alt={cert.code} className="w-full h-full object-contain" />
                    ) : (
                      <CheckCircle2 size={24} className="text-ionGreen" />
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-black text-ionBlue uppercase tracking-widest group-hover:text-ionGreen transition-colors">
                      {cert.code}
                    </span>
                    <span className="text-[9px] font-bold text-ionBlue/30 uppercase tracking-tighter">
                      Verified Std.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Terminal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-ionBlue/5 pt-10">
          <p className="text-xs font-black text-[#2C5DA7]/30 uppercase tracking-[0.3em]">
            © {currentYear} {COMPANY.name} • Certified Excellence
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setView("privacy-policy")}
              className="text-xs font-black text-[#2C5DA7]/40 hover:text-[#2C5DA7] uppercase tracking-widest transition-all flex items-center gap-1 cursor-pointer"
            >
              Privacy Policy <ExternalLink size={12} />
            </button>

            <div className="h-4 w-[1px] bg-[#2C5DA7]/10" />

            <button
              onClick={() => setView("terms-conditions")}
              className="text-xs font-black text-[#2C5DA7]/40 hover:text-[#2C5DA7] uppercase tracking-widest transition-all flex items-center gap-1 cursor-pointer"
            >
              Terms & Conditions <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;