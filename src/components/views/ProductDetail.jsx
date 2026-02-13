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
  Share2,
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
  const handleShareProduct = async () => {
    const shareData = {
      title: product.name,
      text: `Check out the ${product.name} from Ion Pure Solutions: ${product.tagline}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Product link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing product:", err);
    }
  };

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
            {/* REDESIGNED ACTION SECTION */}
            <div className="pt-8 md:pt-12">
              <div className="flex flex-row items-stretch gap-3 md:gap-4 h-16 md:h-20">
                {/* Main Quote CTA - Takes up most space */}
                <button
                  onClick={() => handleWhatsAppQuote(product.name)}
                  className="group relative flex-[4] md:flex-[5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 active:scale-[0.98] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D] via-[#2C5DA7] to-[#1A365D] bg-[length:200%_auto] group-hover:bg-right transition-all duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-4 text-white text-[9px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                    <Globe
                      size={18}
                      className="hidden sm:block animate-spin-slow opacity-70"
                    />
                    Secure Instant Quote
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </span>
                </button>

                {/* Universal Share Button - Premium Square Style */}
                <button
                  onClick={handleShareProduct}
                  className="flex-1 rounded-2xl md:rounded-[2rem] bg-gray-50 text-[#1A365D] border border-gray-100 flex flex-col items-center justify-center gap-1 hover:bg-white hover:border-[#2C5DA7]/30 hover:text-[#2C5DA7] hover:shadow-xl transition-all duration-300 group"
                  title="Share Product"
                >
                  <Share2
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[7px] md:text-[8px] font-black uppercase tracking-tighter opacity-60 group-hover:opacity-100">
                    Share
                  </span>
                </button>
              </div>

              {/* Subtle Trust Caption */}
              <p className="mt-4 text-center lg:text-left text-[9px] font-bold uppercase tracking-widest text-[#1A365D]/30">
                ✦ Authorized Ion-Pure technical dispatch
              </p>
            </div>
          </div>
        </div>

        {/* --- COMPACT SECTION: RELATED DISCOVERY (AESTHETIC UPGRADE) --- */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between mb-10 md:mb-12">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#7CB35B]">
                <Sparkles size={14} className="animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  Related Discovery
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1A365D] tracking-tighter">
                Curated{" "}
                <span className="italic font-light opacity-50 text-2xl md:text-3xl">
                  Collection.
                </span>
              </h2>
            </div>

            <button
              onClick={handleBackNavigation}
              className="hidden sm:flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 text-[10px] font-black uppercase tracking-widest text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-all duration-500 shadow-sm"
            >
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleRelatedProductClick(p.id)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Shorter, Wider Image Container */}
                <div className="relative aspect-[16/10] bg-[#F8FAFC] rounded-[2rem] overflow-hidden border border-gray-100 group-hover:border-[#2C5DA7]/20 transition-all duration-700 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2C5DA7]/5 via-transparent to-transparent" />

                  <img
                    src={p.image || "/SampleProductImage.jpg"}
                    alt={p.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-1000 z-10 relative"
                  />

                  {/* Minimalist Floating Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-sm z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7CB35B]" />
                    <span className="text-[8px] font-black uppercase tracking-tighter text-[#1A365D]">
                      {p.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2C5DA7] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-lg z-20">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Content Section below image */}
                <div className="mt-5 px-2">
                  <h3 className="text-lg font-black text-[#1A365D] tracking-tighter uppercase italic leading-tight group-hover:text-[#2C5DA7] transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[11px] text-[#1A365D]/50 font-medium leading-relaxed line-clamp-2">
                    {p.tagline ||
                      "Advanced ionization technology for premium cellular hydration and pH balance."}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[9px] font-black uppercase text-[#2C5DA7] tracking-widest group-hover:gap-3 transition-all">
                    Explore Details <ArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <button
            onClick={handleBackNavigation}
            className="sm:hidden mt-10 w-full py-4 rounded-2xl bg-gray-50 text-[10px] font-black uppercase tracking-widest text-[#1A365D] flex items-center justify-center gap-2"
          >
            View All <ArrowRight size={14} />
          </button>
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
