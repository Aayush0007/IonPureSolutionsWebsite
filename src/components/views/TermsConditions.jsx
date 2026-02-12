import { motion } from "framer-motion";
import { FileText, Scale, Copyright, AlertTriangle, ArrowLeft, ShieldAlert, Gavel } from "lucide-react";
import { COMPANY } from "../../data/company";

export default function TermsConditions({ onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white min-h-screen py-24 px-6 font-body text-[#1A365D]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Animated Back Button */}
        <button 
          onClick={onBack} 
          className="group mb-12 flex items-center gap-2 text-[#2C5DA7] font-bold uppercase text-xs tracking-widest transition-all hover:gap-4"
        >
          <ArrowLeft size={16} /> Return to Home
        </button>

        {/* Premium Header */}
        <header className="mb-20">
          <h1 className="text-5xl font-display font-black text-[#2C5DA7] mb-6 tracking-tighter uppercase">
            Terms <span className="text-[#7CB35B] italic font-light">of</span> Service
          </h1>
          <div className="h-1.5 w-24 bg-[#7CB35B] rounded-full"></div>
          <p className="mt-6 text-sm font-bold text-[#7399C6] uppercase tracking-widest">
            Last Updated: January 13, 2026
          </p>
        </header>

        <div className="grid gap-16">
          {/* 01. Legal Agreement */}
          <div className="group border-l-4 border-gray-100 pl-8 hover:border-[#2C5DA7] transition-colors">
            <h2 className="text-xl font-black text-[#2C5DA7] uppercase tracking-widest mb-4 flex items-center gap-3">
              <Gavel size={20} /> 01. Binding Agreement
            </h2>
            <p className="text-[#1A365D]/70 leading-relaxed">
              By accessing the {COMPANY.name} digital platform, you enter into a legally binding agreement to comply with these Terms of Service. Our ecosystem is dedicated exclusively to the distribution of professional-grade water purification and wellness technology.
            </p>
          </div>

          {/* 02. Wellness Disclaimer */}
          <div className="group border-l-4 border-gray-100 pl-8 hover:border-[#7CB35B] transition-colors">
            <h2 className="text-xl font-black text-[#2C5DA7] uppercase tracking-widest mb-4 flex items-center gap-3">
              <ShieldAlert size={20} /> 02. Wellness & Medical Disclaimer
            </h2>
            <p className="text-[#1A365D]/70 leading-relaxed">
              Hydrogen-rich and alkaline water systems are wellness-support tools and are not substitutes for professional medical diagnosis or clinical treatment. {COMPANY.fullName} products are not intended to diagnose, treat, or cure any disease.
            </p>
          </div>

          {/* 03. Intellectual Property */}
          <div className="group border-l-4 border-gray-100 pl-8 hover:border-[#2C5DA7] transition-colors">
            <h2 className="text-xl font-black text-[#2C5DA7] uppercase tracking-widest mb-4 flex items-center gap-3">
              <Copyright size={20} /> 03. Proprietary Intellectual Rights
            </h2>
            <p className="text-[#1A365D]/70 leading-relaxed">
              All architectural designs, molecular UI animations, logo marks, and content are the exclusive intellectual property of {COMPANY.name}. Unauthorized reproduction or commercial distribution of these assets is strictly prohibited under international copyright law.
            </p>
          </div>

          {/* 04. Limitation of Liability */}
          <div className="group border-l-4 border-gray-100 pl-8 hover:border-[#7CB35B] transition-colors">
            <h2 className="text-xl font-black text-[#2C5DA7] uppercase tracking-widest mb-4 flex items-center gap-3">
              <Scale size={20} /> 04. Limitation of Liability
            </h2>
            <p className="text-[#1A365D]/70 leading-relaxed">
              {COMPANY.fullName} shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our hydration systems beyond the direct replacement value of the technology purchased.
            </p>
          </div>

          {/* High-Budget Call to Action Box */}
          <div className="mt-12 p-12 bg-[#F8FAFC] rounded-[2rem] border border-gray-100 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#1A365D] mb-4 uppercase tracking-tight">Legal Inquiry?</h3>
            <p className="text-[#1A365D]/60 mb-8 max-w-md mx-auto">
              If you require detailed clarification regarding our corporate compliance or service terms, contact our legal desk directly.
            </p>
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY.email}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#2C5DA7] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1A365D] transition-all shadow-lg shadow-[#2C5DA7]/20"
            >
              Contact Legal Department
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}