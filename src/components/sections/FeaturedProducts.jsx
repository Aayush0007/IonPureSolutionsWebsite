import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Plus 
} from 'lucide-react';

export default function FeaturedProducts({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  // 1. Memoized Data for Performance
  const categories = useMemo(() => {
    return ["All", ...new Set(products.map(p => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return activeCategory === "All" 
      ? products 
      : products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // 2. Navigation & CTA Logic
  const handleProductClick = (productId) => {
    const newTabUrl = `${window.location.origin}/#${productId}`;
    window.open(newTabUrl, '_blank');
  };

  const handleQuickQuote = (e, productName) => {
    e.stopPropagation();
    const message = `Hello Ion Pure Solutions, I'd like a quick quote for the ${productName}.`;
    window.open(`https://wa.me/918130134145?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="relative py-20 md:py-32 overflow-hidden bg-white selection:bg-ionBlue/10">
      {/* Optimized Background Glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-ionBlue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-ionGreen/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-6 md:mb-8"
          >
            <Activity size={14} className="text-ionGreen animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-ionBlue">Medical Grade Tech 2026</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter text-ionBlue italic mb-8 md:mb-12">
            The Future of <br />
            <span className="bg-gradient-to-r from-ionGreen via-ionBlue to-ionGreen bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent pb-2 block sm:inline">
               Cellular Purity.
            </span>
          </h2>

          {/* RESPONSIVE CATEGORY TOGGLE - Enhanced Horizontal Scroll */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-6 pt-2 no-scrollbar -mx-4 px-4 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(3);
                }}
                className={`px-6 py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border shrink-0 ${
                  activeCategory === cat 
                    ? "bg-ionBlue text-white border-ionBlue shadow-xl shadow-ionBlue/20 scale-105" 
                    : "bg-white text-ionBlue/60 border-gray-100 hover:border-ionBlue/20 hover:text-ionBlue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID - Optimized for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative flex flex-col bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 border border-gray-100 hover:border-ionBlue/20 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(44,93,167,0.1)] cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                {/* 3. Optimized Image Area with Lazy Loading */}
                <div className="relative aspect-square bg-gray-50 rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-ionMint/20 to-transparent opacity-50" />
                  
                  <img 
                    src={product.thumbnail || "/SampleProductImage.jpg"} 
                    alt={product.name}
                    loading="lazy" // Native Lazy Loading
                    decoding="async" // Smooth Rendering
                    className="w-[85%] h-[85%] object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl z-10"
                  />
                  
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-100 shadow-sm z-20">
                    <span className="text-[8px] font-black uppercase text-ionBlue/40 tracking-wider">{product.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-ionBlue uppercase italic tracking-tighter leading-none mb-3 group-hover:text-ionGreen transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-ionBlue/60 font-medium italic leading-relaxed mb-6 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Technical Specs Summary */}
                  <div className="grid grid-cols-2 gap-3 mb-6 py-5 border-y border-gray-50">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-ionGreen shrink-0" />
                      <span className="text-[9px] font-bold uppercase text-ionMidnight/40 truncate">
                        {product.technicalSpecifications?.["Input Power"] || "High Eff."}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 border-l border-gray-100 pl-3">
                      <ShieldCheck size={14} className="text-ionBlue shrink-0" />
                      <span className="text-[9px] font-bold uppercase text-ionMidnight/40 truncate">Certified</span>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="mt-auto flex items-center justify-between">
                    <button 
                      onClick={(e) => handleQuickQuote(e, product.name)}
                      className="text-[10px] font-black uppercase tracking-widest text-ionBlue hover:text-ionGreen transition-all flex items-center gap-2 group/btn"
                    >
                      Instant Quote <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-ionBlue/5 flex items-center justify-center text-ionBlue group-hover:bg-ionBlue group-hover:text-white transition-all duration-300"
                    >
                      <Plus size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE / SEE MORE */}
        {filteredProducts.length > visibleCount && (
          <div className="mt-12 md:mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-10 md:px-12 py-4 md:py-5 bg-white border border-gray-200 text-ionBlue rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-ionBlue hover:text-white hover:border-ionBlue transition-all shadow-xl shadow-gray-100"
            >
              Discover More Solutions
            </motion.button>
          </div>
        )}

        {/* STATS FOOTER */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-gray-100">
           <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-ionBlue uppercase text-center">99.99% Hydrogen Purity</span>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-ionBlue uppercase text-center">Medical Grade Plates</span>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-ionBlue uppercase text-center">ISO 13485:2016</span>
           </div>
        </div>
      </div>
    </section>
  );
}