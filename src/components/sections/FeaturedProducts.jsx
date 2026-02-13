import { motion } from 'framer-motion';
import { ShoppingCart, Zap, ShieldCheck, ArrowRight, Activity, MessageCircle } from 'lucide-react';

export default function FeaturedProducts({ products }) {
  
  const handleProductClick = (e, productId) => {
    e.stopPropagation();
    const newTabUrl = `${window.location.origin}/#${productId}`;
    window.open(newTabUrl, '_blank');
  };

  const handleQuickQuote = (e, productName) => {
    e.stopPropagation();
    const message = `Hello Ion Pure Solutions, I am browsing your website and would like a quick quote for the ${productName}.`;
    window.open(`https://wa.me/918130134145?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Background Ambience - Ion Pulse */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-[#2C5DA7]/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-[#7CB35B]/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-6"
          >
            <Activity size={12} className="text-[#7CB35B]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#2C5DA7]">Clinical Precision 2026</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter text-[#1A365D]">
            The Future of{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Cellular Hydration.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer relative"
              onClick={(e) => handleProductClick(e, product.id)}
            >
              {/* CARD BODY */}
              <div className="relative h-full bg-white border border-gray-100 rounded-[2.5rem] p-6 lg:p-7 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(26,54,93,0.1)] hover:-translate-y-2 flex flex-col overflow-hidden">
                
                {/* IMAGE AREA WITH FLOATING TECH BADGE */}
                <div className="relative aspect-[16/11] bg-gray-50 rounded-[2rem] mb-6 overflow-hidden flex items-center justify-center border border-gray-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <img 
                    src={product.image || "/SampleProductImage.jpg"} 
                    alt={product.name}
                    className="w-[72%] h-[72%] object-contain transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl"
                  />

                  {/* Floating Medical Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
                    <div className="flex items-center gap-1.5 text-[8px] font-black uppercase text-[#7CB35B]">
                       <div className="w-1 h-1 rounded-full bg-[#7CB35B] animate-pulse" /> H₂ Active
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#2C5DA7]">{product.category}</span>
                    <ShieldCheck size={14} className="text-[#7CB35B]/40" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#1A365D] tracking-tighter uppercase italic mb-3 leading-none group-hover:text-[#2C5DA7] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-[#1A365D]/60 font-medium leading-relaxed mb-6 line-clamp-3 italic pr-4">
                    {product.tagline}
                  </p>

                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100/60">
                     <div className="flex items-center gap-2">
                        <Zap size={14} className="text-[#7CB35B]" />
                        <span className="text-[10px] font-bold uppercase text-[#1A365D]/60 tracking-wider">Ionization</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <MessageCircle size={14} className="text-[#2C5DA7]" />
                        <span className="text-[10px] font-bold uppercase text-[#1A365D]/60 tracking-wider">Expert Help</span>
                     </div>
                  </div>
                </div>

                {/* INTERACTIVE ACTION ROW */}
                <div className="mt-auto flex items-center justify-between">
                   <button 
                    onClick={(e) => handleQuickQuote(e, product.name)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#2C5DA7] hover:text-[#7CB35B] transition-colors flex items-center gap-2"
                   >
                     Instant Quote <ArrowRight size={14} />
                   </button>
                   
                   <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1A365D] group-hover:bg-[#1A365D] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                     <ArrowRight size={20} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST INDICATOR */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A365D]/30 mb-1">
              Global Standards ISO 9001:2026
            </p>
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#7CB35B]">
              Trusted by 50,000+ Health Conscious Families
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}