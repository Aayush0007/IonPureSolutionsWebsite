import {
  MessageCircle,
  Mail,
  Globe,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Instagram,
} from "lucide-react";
import { COMPANY } from "../../data/company";
// ADD THESE TWO IMPORTS BELOW
import { CERTIFICATIONS, CERTIFICATION_NOTE } from "../../data/certifications";
import Logo from "../../assets/images/Logo.png";

export default function Footer({ scrollTo, setView }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdfdfd] pt-24 pb-12 border-t border-ionBlue/20 font-body">
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
                  {/* Combined Ion Pure with Animated Gradient */}
                  <span
                    className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={{
                      filter: "drop-shadow(2px 2px 0px rgba(26, 54, 93, 0.15))",
                    }}
                  >
                    Ion Pure
                  </span>
                </h3>

                {/* Solutions row with framed lines */}
                <div className="flex items-center w-full mt-2">
                  {/* Line gradient matches the moving text flow */}
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

            <p className="text-[#1A365D] mb-8 max-w-sm leading-relaxed text-base font-medium">
              {COMPANY.fullName} specializes in advanced Alkaline Water Ionizers
              and Hydrogen-Rich technology to support superior health and
              hydration.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-all shadow-lg flex items-center justify-center"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href={`https://instagram.com/${COMPANY.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:scale-110 transition-all shadow-lg flex items-center justify-center"
              >
                <Instagram size={24} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY.email}`}
                target="_blank"
                rel="noreferrer"
                title="Compose in Gmail"
                className="p-3 bg-[#2C5DA7] text-white rounded-full hover:bg-[#1A365D] hover:scale-110 transition-all shadow-xl flex items-center justify-center group"
              >
                <Mail
                  size={24}
                  className="group-hover:animate-pulse text-white"
                />
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h4 className="text-[#1A365D] font-display font-black text-base mb-8 uppercase tracking-[0.2em] border-b-2 border-[#2C5DA7] pb-2 w-fit">
              Company
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Products", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollTo(item.toLowerCase().replace(" ", ""))
                    }
                    className="text-[#1A365D]/80 hover:text-[#2C5DA7] font-bold transition-colors text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Legal & Support */}
          <div>
            <h4 className="text-[#1A365D] font-display font-black text-base mb-8 uppercase tracking-[0.2em] border-b-2 border-[#2C5DA7] pb-2 w-fit">
              Legal & Support
            </h4>
            <ul className="space-y-5">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      `${window.location.origin}/#privacy-policy`,
                      "_blank",
                    )
                  }
                  className="text-[#1A365D]/80 hover:text-[#2C5DA7] active:scale-95 font-bold transition-all duration-300 text-base flex items-center gap-3 group text-left"
                >
                  <div className="p-2 bg-ionBlue/5 rounded-lg group-hover:bg-ionBlue/10 transition-colors">
                    <ShieldCheck
                      size={20}
                      className="text-[#2C5DA7] shrink-0"
                    />
                  </div>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      `${window.location.origin}/#terms-conditions`,
                      "_blank",
                    )
                  }
                  className="text-[#1A365D]/80 hover:text-[#2C5DA7] active:scale-95 font-bold transition-all duration-300 text-base flex items-center gap-3 group text-left"
                >
                  <div className="p-2 bg-ionBlue/5 rounded-lg group-hover:bg-ionBlue/10 transition-colors">
                    <FileText size={20} className="text-[#2C5DA7] shrink-0" />
                  </div>
                  Terms & Conditions
                </button>
              </li>
              <li className="pt-4 border-t border-gray-100">
                <span className="text-[11px] font-black text-[#7CB35B] uppercase block mb-1 tracking-widest">
                  Corporate Office
                </span>
                <span className="text-sm text-[#1A365D] leading-snug block font-semibold">
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Professional Trust Ribbon - Mobile Friendly & Dynamic */}
        <div className="py-10 md:py-14 border-y border-gray-100 mb-10 bg-gray-50/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            {/* Responsiveness Update: 
      - grid-cols-2 for small mobile.
      - sm:grid-cols-3 for tablets.
      - lg:flex for desktop wrapping.
      - justify-items-center to keep the grid balanced.
    */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-start gap-x-4 gap-y-10 md:gap-x-12">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="group flex flex-col items-center text-center gap-2 transition-all duration-300 w-full lg:w-auto"
                  title={`${cert.name} | Issued by ${cert.issuer}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle2
                      size={20}
                      className="text-[#7CB35B] shrink-0 transition-transform group-hover:scale-110"
                      fill="rgba(124, 179, 91, 0.15)"
                    />
                    <span className="text-[11px] md:text-[13px] font-black text-[#1A365D] uppercase tracking-widest leading-tight max-w-[140px]">
                      {cert.code === "CE"
                        ? "CE MACHINERY"
                        : cert.code === "RoHS"
                          ? "ROHS COMPLIANT"
                          : cert.code.replace("-", " ")}
                    </span>
                  </div>

                  {/* ID display: 
            Visible on mobile for transparency as requested, 
            Desktop reveals on hover for a cleaner look. 
          */}
                  <span className="text-[9px] font-bold text-[#2C5DA7] opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity tracking-tighter">
                    ID: {cert.id}
                  </span>
                </div>
              ))}
            </div>

            {/* Official Verification Note - Centered and Readable */}
            <div className="mt-12 pt-8 border-t border-gray-100/50">
              <p className="text-center px-4 text-[10px] font-medium text-[#1A365D]/60 tracking-tight italic leading-relaxed max-w-2xl mx-auto">
                {CERTIFICATION_NOTE}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-bold text-[#1A365D] uppercase tracking-[0.2em]">
          <p>
            © {COMPANY.establishmentYear} {COMPANY.name}
          </p>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-[#2C5DA7] text-white rounded-full font-black shadow-md uppercase">
              GST: {COMPANY.gst}
            </span>
            <span className="text-gray-300">|</span>
            <p className="text-[#7CB35B] font-black uppercase">
              Eco-Tech Purification
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
