import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Database, UserCheck } from "lucide-react";
import { COMPANY } from "../../data/company";

export default function PrivacyPolicy({ onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#FDFDFD] min-h-screen py-24 px-6 font-body text-[#1A365D]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button with Hover Animation */}
        <button 
          onClick={onBack} 
          className="group mb-12 flex items-center gap-2 text-[#2C5DA7] font-bold uppercase text-xs tracking-widest transition-all hover:gap-4"
        >
          <ArrowLeft size={16} /> Back to Experience
        </button>

        {/* Header Section */}
        <header className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-5xl font-display font-black text-[#2C5DA7] mb-4 tracking-tighter">
            Privacy <span className="text-[#7CB35B]">Policy</span>
          </h1>
          <p className="text-sm font-bold text-[#7399C6] tracking-[0.2em] uppercase">
            Effective Date: January 13, 2026
          </p>
        </header>

        <div className="space-y-12 leading-relaxed">
          {/* Introduction Card */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#2C5DA7]/5 rounded-xl text-[#2C5DA7]">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-2xl font-black text-[#1A365D]">Commitment to Privacy</h2>
            </div>
            <p className="text-[#1A365D]/70">
              {COMPANY.fullName} is committed to protecting the privacy and security of our users. This policy outlines our protocols for collecting, utilizing, and safeguarding your information to ensure a transparent wellness experience.
            </p>
          </section>

          {/* 01. Information Collection */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <span className="text-[#7CB35B]">01.</span> Data Collection
            </h2>
            <p className="text-[#1A365D]/70">
              We collect information provided directly by you during interactions such as filling out inquiry forms, contacting us via WhatsApp, or sending emails. This may include:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Full Name and Personal Identifiers",
                "Contact Information (Phone & Email)",
                "WhatsApp Interaction Records",
                "Technical Usage and Device Data"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl text-sm font-bold text-[#1A365D]/80">
                  <div className="w-2 h-2 rounded-full bg-[#7CB35B]"></div> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 02. Use of Information */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <span className="text-[#7CB35B]">02.</span> Strategic Data Usage
            </h2>
            <p className="text-[#1A365D]/70">
              The information we gather is used strictly to enhance your experience with our Alkaline Water Ionizers and Hydrogen-Rich technology. Primary uses include:
            </p>
            <div className="grid gap-4">
              <div className="flex gap-4 p-5 border border-gray-100 rounded-2xl">
                <UserCheck size={20} className="text-[#2C5DA7] shrink-0" />
                <p className="text-sm">Responding to product inquiries and providing expert technical support.</p>
              </div>
              <div className="flex gap-4 p-5 border border-gray-100 rounded-2xl">
                <Database size={20} className="text-[#2C5DA7] shrink-0" />
                <p className="text-sm">Processing service orders and facilitating secure corporate communication.</p>
              </div>
            </div>
          </section>

          {/* 03. Data Security Card */}
          <div className="p-8 bg-[#1A365D] text-white rounded-3xl shadow-xl shadow-[#1A365D]/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Lock size={40} />
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-wide">Security Infrastructure</h3>
              <p className="opacity-80 text-sm leading-loose">
                We implement industry-standard security measures to safeguard your digital assets. While no internet transmission is entirely infallible, our systems are designed to maximize data integrity and prevent unauthorized access.
              </p>
            </div>
          </div>

          {/* 04. Third-Party Protocols */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3">
              <span className="text-[#7CB35B]">03.</span> External Integrations
            </h2>
            <p className="text-[#1A365D]/70">
              Our website may utilize links to third-party services such as WhatsApp or Google Analytics. These entities maintain independent privacy policies, and {COMPANY.name} is not responsible for their respective data practices.
            </p>
          </section>

          {/* Contact/Support Footer */}
          <footer className="mt-12 p-10 bg-gray-50 rounded-3xl text-center border border-gray-100">
            <h3 className="font-black text-[#1A365D] mb-4">Privacy Concerns?</h3>
            <p className="text-sm text-[#1A365D]/60 mb-6">Our compliance team is here to assist with any questions regarding your data.</p>
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY.email}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#2C5DA7] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1A365D] transition-all shadow-lg"
            >
              Contact Privacy Desk
            </a>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}