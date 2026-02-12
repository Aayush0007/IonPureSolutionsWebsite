import { motion } from 'framer-motion';
import { ShoppingCart, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FeaturedProducts({ products, setView }) {
  
  const handleProductClick = (e, productId) => {
    // Standard aesthetic: Prevents event bubbling
    e.stopPropagation();

    // 1. URL FORMATTING: /product/#id
    const newTabUrl = `${window.location.origin}/product/#${productId}`;
    
    // 2. OPEN IN NEW TAB
    window.open(newTabUrl, '_blank');

    // 3. INTERNAL STATE: Optional, but keeps current tab synced if needed
    // setView(productId); 
  };

  return (
    <section id="products" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#2C5DA7]/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#7CB35B]/5 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10 px-6">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-6"
          >
            <ShoppingCart size={12} className="text-[#2C5DA7]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">Precision Collection 2026</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-[#1A365D]">
            The Future of{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Cellular Hydration.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer relative"
              onClick={(e) => handleProductClick(e, product.id)}
            >
              <div className="relative h-full bg-white border border-gray-100 rounded-[3rem] p-6 lg:p-8 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(26,54,93,0.06)] hover:-translate-y-2 flex flex-col overflow-hidden">
                
                <div className="relative aspect-square bg-gray-50 rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <img 
                    src={product.image || "/SampleProductImage.jpg"} 
                    alt={product.name}
                    className="w-[75%] h-[75%] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#2C5DA7] block mb-2">{product.category}</span>
                  <h3 className="text-2xl font-black text-[#1A365D] tracking-tighter uppercase italic mb-3 leading-none">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#1A365D]/50 font-medium leading-relaxed mb-6 line-clamp-2 italic">
                    {product.tagline}
                  </p>

                  <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-50">
                     <div className="flex items-center gap-2">
                        <Zap size={14} className="text-[#7CB35B]" />
                        <span className="text-[9px] font-bold uppercase text-[#1A365D]/40 tracking-widest">H₂ Tech</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-[#2C5DA7]" />
                        <span className="text-[9px] font-bold uppercase text-[#1A365D]/40 tracking-widest">Medical</span>
                     </div>
                  </div>
                </div>

                {/* THE REFINED AESTHETIC ARROW */}
                <div className="mt-auto flex justify-end">
                  <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1A365D] group-hover:bg-[#2C5DA7] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A365D]/20">
            Certified Ionization Technology • 2026 Fleet Standard
          </p>
        </div>
      </div>
    </section>
  );
}