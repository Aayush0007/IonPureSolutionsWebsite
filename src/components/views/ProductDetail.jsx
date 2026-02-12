import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Droplets,
  Zap,
  Heart,
  ArrowRight,
  Check,
  Activity,
  Globe,
  Package,
  MessageCircle,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { PRODUCTS } from "../../data/products";

export default function ProductDetail({ product, onBack, setView }) {
  // Guard clause to prevent errors if product is undefined during transition
  if (!product) return null;

  const specs = product.technicalSpecifications || {};
  const features = product.keyFeatures || [];
  const benefits = product.wellnessBenefits || [];

  // Filter 3 related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(
    0,
    3,
  );

  const handleBackNavigation = () => {
    window.history.pushState({}, "", window.location.origin + "/");
    onBack();
  };

  const handleRelatedProductClick = (id) => {
    // FIX: Using Root Hash so App.jsx useEffect can catch it in the new tab
    const productUrl = `${window.location.origin}/#${id}`;
    window.open(productUrl, "_blank");
  };

  const handleWhatsAppQuote = (productName) => {
    const message = `Hello Ion Pure Solutions, I am interested in obtaining a formal quotation for the ${productName}. Please share the technical brochure and pricing details.`;
    window.open(
      `https://wa.me/918130134145?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-28 pb-16 md:pb-24 bg-white min-h-screen"
    >
      <div className="section-container px-4 md:px-6">
        {/* Navigation */}
        <button
          onClick={handleBackNavigation}
          className="group flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#2C5DA7] mb-8 md:mb-16 hover:gap-5 transition-all"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Collection
        </button>

        {/* MAIN PRODUCT LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start mb-20 md:mb-32">
          {/* LEFT COLUMN: VISUALS */}
          <div className="lg:col-span-5 space-y-6 md:space-y-10 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl flex items-center justify-center p-6 md:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/5 to-transparent" />
              <img
                src={product.image || "/SampleProductImage.jpg"}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl z-10"
              />
              <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 md:py-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg z-20 whitespace-nowrap">
                <span className="text-[8px] md:text-[10px] font-black text-[#1A365D] uppercase tracking-widest">
                  Medical Grade Engineering
                </span>
              </div>
            </motion.div>

            {/* Thumbnail Placeholder */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl md:rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-[#F1F8E1] hover:border-[#7CB35B]/30 transition-all cursor-pointer group"
                >
                  <Activity
                    size={20}
                    className="text-[#2C5DA7]/20 group-hover:text-[#7CB35B] transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="lg:col-span-7 space-y-10 md:space-y-16">
            <header>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="px-3 md:px-4 py-1 md:py-1.5 bg-[#F1F8E1] text-[#7CB35B] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-[#7CB35B]/10">
                  {product.category}
                </span>
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-300" />
                <span className="text-[9px] md:text-[10px] font-black text-[#2C5DA7] uppercase tracking-widest">
                  In Stock 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#1A365D] leading-[0.95] md:leading-[0.9] tracking-tighter mb-6 md:mb-8 italic uppercase">
                {product.name}
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#1A365D]/60 italic mb-6 md:mb-10 leading-snug">
                {product.tagline}
              </p>

              <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#FDFDFD] border border-gray-100 text-base md:text-lg text-[#1A365D]/80 leading-relaxed font-medium shadow-sm">
                {product.description}
              </div>
            </header>

            {/* TECHNICAL MATRIX */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2C5DA7] flex items-center justify-center text-white">
                  <Zap size={18} />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-[#1A365D]">
                  Engineering Matrix
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {Object.entries(specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <span className="text-[8px] md:text-[9px] font-black text-[#1A365D]/40 uppercase tracking-widest mb-1">
                      {key}
                    </span>
                    <span className="text-sm md:text-base font-bold text-[#1A365D]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES & BENEFITS GRID */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-gray-100">
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#7CB35B] flex items-center gap-2">
                  <ShieldCheck size={18} /> Core Tech
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-[#7CB35B]/30 flex items-center justify-center shrink-0 group-hover:bg-[#7CB35B] transition-colors">
                        <Check
                          size={12}
                          className="text-[#7CB35B] group-hover:text-white"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-[#1A365D]/70">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#2C5DA7] flex items-center gap-2">
                  <Heart size={18} /> Wellness
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-[#2C5DA7]/30 flex items-center justify-center shrink-0 group-hover:bg-[#2C5DA7] transition-colors">
                        <Droplets
                          size={12}
                          className="text-[#2C5DA7] group-hover:text-white"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-[#1A365D]/70">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACTION SECTION */}
            <div className="pt-6 md:pt-10">
              <button
                onClick={() => handleWhatsAppQuote(product.name)}
                className="group relative w-full py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA7] via-[#1A365D] to-[#2C5DA7] bg-[length:200%_auto] animate-gradient-text" />
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em]">
                  <Globe size={18} className="animate-spin-slow" />
                  Secure Instant Quote
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* --- COMPACT SECTION: RELATED DISCOVERY --- */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#7CB35B] mb-2">
                <LayoutGrid size={14} />
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">
                  Related Discovery
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#1A365D] tracking-tighter leading-none">
                Explore the{" "}
                <span className="italic font-light opacity-50">
                  Collection.
                </span>
              </h2>
            </div>
            <button
              onClick={handleBackNavigation}
              className="px-5 py-2.5 rounded-xl bg-gray-50 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-all flex items-center gap-2 w-fit"
            >
              View All <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {relatedProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => handleRelatedProductClick(p.id)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 mb-3 overflow-hidden border border-transparent group-hover:border-[#2C5DA7]/10 transition-all shadow-sm group-hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={p.image || "/SampleProductImage.jpg"}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 z-10 relative"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-white/80 backdrop-blur-md flex items-center justify-center text-[#2C5DA7] opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 shadow-md z-20">
                    <ArrowRight size={16} />
                  </div>
                </div>
                <h4 className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-[#2C5DA7] mb-1">
                  {p.category}
                </h4>
                <h3 className="text-base md:text-lg font-black text-[#1A365D] tracking-tighter uppercase italic leading-tight group-hover:text-[#2C5DA7] transition-colors">
                  {p.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>{/* --- GRAND SECTION: THE EXTENDED COLLECTION --- */}
<div className="mt-24 md:mt-40 pt-16 md:pt-24 border-t border-gray-100">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
    <div>
      <div className="flex items-center gap-3 text-[#7CB35B] mb-4">
        <LayoutGrid size={18} />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Boutique Discovery</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-[#1A365D] tracking-tighter leading-[0.9]">
        The Ion Pure <br />
        <span className="italic font-light opacity-40">Master-Collection.</span>
      </h2>
    </div>
    <button 
      onClick={handleBackNavigation}
      className="px-10 py-5 rounded-2xl bg-[#1A365D] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-[#2C5DA7] transition-all flex items-center gap-4 w-fit shadow-xl shadow-blue-900/10 active:scale-95"
    >
      Explore All Systems <ArrowRight size={16} />
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
    {relatedProducts.map((p, idx) => (
      <motion.div
        key={p.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1, duration: 0.8 }}
        onClick={() => handleRelatedProductClick(p.id)}
        className="group cursor-pointer"
      >
        {/* Card uses Grand Scale Radii */}
        <div className="relative aspect-square bg-gray-50 rounded-[3rem] md:rounded-[4rem] p-10 md:p-12 mb-8 overflow-hidden border border-transparent group-hover:border-[#2C5DA7]/10 transition-all duration-700 shadow-sm group-hover:shadow-[0_40px_80px_rgba(26,54,93,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <img 
            src={p.image || "/SampleProductImage.jpg"} 
            alt={p.name} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 z-10 relative drop-shadow-2xl" 
          />
          
          {/* Aesthetic Floating Action Arrow */}
          <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2C5DA7] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg z-20">
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="px-4">
          <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#7CB35B] mb-3">{p.category}</h4>
          <h3 className="text-2xl md:text-3xl font-black text-[#1A365D] tracking-tighter uppercase italic leading-none group-hover:text-[#2C5DA7] transition-colors">
            {p.name}
          </h3>
          <div className="mt-4 w-12 h-1 bg-gray-100 group-hover:w-24 group-hover:bg-[#2C5DA7] transition-all duration-500 rounded-full" />
        </div>
      </motion.div>
    ))}
  </div>
</div>

        {/* --- TRUST ANCHORS --- */}
        <div className="mt-20 md:mt-32 p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3.5rem] bg-[#F8FAFC] border border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <Package className="text-[#2C5DA7]" size={28} md:size={32} />
            <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-[#1A365D]">
              Global Shipping
            </h4>
            <p className="text-xs md:text-sm text-[#1A365D]/60 font-medium leading-relaxed">
              Professional installation support and global delivery logistics
              for every system.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <Sparkles className="text-[#7CB35B]" size={28} md:size={32} />
            <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-[#1A365D]">
              5-Year Plate Warranty
            </h4>
            <p className="text-xs md:text-sm text-[#1A365D]/60 font-medium leading-relaxed">
              Premium Platinum-Titanium plates backed by half a decade of
              performance assurance.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <MessageCircle className="text-[#1A365D]" size={28} md:size={32} />
            <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-[#1A365D]">
              24/7 Expert Support
            </h4>
            <p className="text-xs md:text-sm text-[#1A365D]/60 font-medium leading-relaxed">
              Direct access to wellness advisors via WhatsApp for technical or
              health inquiries.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
