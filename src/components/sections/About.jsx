import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Award,
  CheckCircle2,
  Droplets,
  Zap,
  Settings,
  Microscope,
  Layers,
  Thermometer,
  CloudLightning
} from "lucide-react";
import Lottie from "lottie-react";
import aboutAnimation from "../../assets/animations/about us.json";
import { COMPANY } from "../../data/company";

// Import integrated sections
import WhyChooseUs from "../sections/WhyChooseUs";
import Certifications from "../sections/Certifications";
import Testimonials from "../sections/Testimonials";

export default function About() {
  const stats = [
    { icon: <ShieldCheck size={18} />, label: "Medical Grade", detail: "Titanium Electrodes" },
    { icon: <Activity size={18} />, label: "Antioxidant", detail: "Up to -800mV ORP" },
    { icon: <Award size={18} />, label: "Certified", detail: "ISO & CE Standards" },
  ];

  // Technical Build Quality Data (Section 5 from Documentation)
  const techSpecs = [
    { icon: Microscope, title: "Platinum Coating", desc: "Premium Catalyst for efficiency" },
    { icon: Layers, title: "No Plate Degradation", desc: "High-grade components" },
    { icon: CloudLightning, title: "99.99% H₂ Output", desc: "High-purity hydrogen" },
    { icon: ShieldCheck, title: "Residual Free", desc: "No Ozone or Chlorine gas" }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO STORY SECTION */}
      <section className="relative py-12 md:py-24 overflow-hidden selection:bg-ionBlue/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-ionBlue/5 to-ionGreen/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: VISUAL TECHNOLOGY */}
            <div className="relative order-2 lg:order-1 flex flex-col items-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative w-full max-w-[500px]">
                <Lottie animationData={aboutAnimation} loop={true} className="w-full h-auto drop-shadow-2xl" />
                <div className="absolute -top-10 -right-6 p-7 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/40 shadow-xl">
                  <span className="text-4xl font-black text-ionBlue italic tracking-tighter uppercase">H₂</span>
                </div>
              </motion.div>

              {/* FLOATING STATS */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-ionMint/20 rounded-2xl border border-ionBlue/5 shadow-sm hover:shadow-md transition-all group">
                    <div className="p-2.5 bg-white text-ionGreen rounded-xl shadow-sm group-hover:bg-ionGreen group-hover:text-white transition-all transform group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-ionBlue/40 mb-0.5">{stat.label}</p>
                      <p className="text-xs font-bold text-ionBlue">{stat.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: WHO WE ARE */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-ionBlue/5 border border-ionBlue/10 text-ionBlue text-[11px] font-black uppercase tracking-[0.3em] mb-8">
                <Zap size={14} className="text-ionGreen" /> Science-Backed Purity
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-10 text-ionBlue uppercase italic">
                Change Your Water, <br />
                <span className="text-ionGreen">Change Your Life.</span>
              </h2>

              <div className="space-y-10">
                <p className="text-xl text-ionBlue/60 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {COMPANY.name} is a wellness-focused company dedicated to improving everyday hydration through advanced Alkaline Water Ionizers and Hydrogen-Rich Bottles.
                </p>
                <div className="grid grid-cols-1 gap-5 text-left max-w-lg mx-auto lg:mx-0">
                  <div className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-ionGreen rounded-full" />
                    <p className="text-ionBlue/80 font-bold">Trusted technology committed to quality and purity.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-2 h-2 bg-ionGreen rounded-full" />
                    <p className="text-ionBlue/80 font-bold">Empowering families through sustainable practices.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TECHNOLOGY & BUILD QUALITY DIAGRAM (New Extended Section) */}
      <section className="py-20 bg-ionMint/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-ionBlue italic tracking-tighter uppercase mb-4">The Science of Ionization</h3>
            <p className="text-ionBlue/60 font-medium tracking-widest uppercase text-[10px]">Medical-Grade Engineering</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSpecs.map((spec, i) => (
              <motion.div 
                whileHover={{ y: -10 }} 
                key={i} 
                className="bg-white p-8 rounded-[2.5rem] border border-ionBlue/5 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-ionBlue/5 flex items-center justify-center mb-6 text-ionBlue">
                  <spec.icon size={32} />
                </div>
                <h4 className="text-lg font-black text-ionBlue uppercase italic mb-2 tracking-tighter">{spec.title}</h4>
                <p className="text-xs text-ionBlue/50 font-medium uppercase tracking-wider">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* DIAGRAMMATIC DETAIL CARDS */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-[3rem] bg-white border border-ionBlue/10 flex gap-6 items-start">
               <Settings size={40} className="text-ionGreen shrink-0" />
               <div>
                  <h5 className="text-xl font-black text-ionBlue uppercase italic tracking-tighter mb-2">No Calcification</h5>
                  <p className="text-sm text-ionBlue/60">Designed to resist mineral buildup, ensuring consistent output and reduced maintenance for up to 5 years.</p>
               </div>
            </div>
            <div className="p-8 rounded-[3rem] bg-white border border-ionBlue/10 flex gap-6 items-start">
               <Thermometer size={40} className="text-ionBlue shrink-0" />
               <div>
                  <h5 className="text-xl font-black text-ionBlue uppercase italic tracking-tighter mb-2">Thermal Stability</h5>
                  <p className="text-sm text-ionBlue/60">Medical-grade titanium electrodes for safe and efficient operation under daily wellness hydration usage.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED SECTIONS (Ordered per request) */}
      <div className="bg-white">
        <WhyChooseUs />
        <div className="bg-ionMint/10">
          <Certifications />
        </div>
        {/* <Testimonials /> */}
      </div>

      {/* 4. MISSION & VISION OVERLAY */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
           <div className="p-10 rounded-[3.5rem] bg-ionBlue text-white shadow-xl">
              <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-6">Our Mission</h4>
              <p className="text-lg opacity-80 italic leading-relaxed">"To enhance everyday health by providing reliable alkaline water ionizers that promote better hydration."</p>
           </div>
           <div className="p-10 rounded-[3.5rem] bg-ionGreen text-white shadow-xl">
              <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-6">Our Vision</h4>
              <p className="text-lg opacity-80 italic leading-relaxed">"To empower families and individuals to adopt a wellness-focused lifestyle through innovative water technology."</p>
           </div>
        </div>
      </section>
    </div>
  );
}