import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useMemo } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Droplets,
  Zap,
  Heart,
  ArrowRight,
  Check,
  Activity,
  Expand,
  Share2,
  Sparkles,
  Info,
  Plus // ADDED THIS TO FIX THE REFERENCE ERROR
} from "lucide-react";
import { PRODUCTS } from "../../data/products";

export default function ProductDetail({ product, onBack, setView }) {
  // 1. STATE & REFS
  const [activeImg, setActiveImg] = useState(product?.thumbnail || "/SampleProductImage.jpg");
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [showZoom, setShowZoom] = useState(false);
  const imgContainerRef = useRef(null);

  // 2. DATA CALCULATION
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.id !== product?.id).slice(0, 3);
  }, [product?.id]);

  if (!product) return null;

  const specs = product.technicalSpecifications || {};
  const features = product.keyFeatures || [];
  const benefits = product.wellnessBenefits || [];
  const gallery = product.gallery || [product.thumbnail];

  // 3. ENHANCED ZOOM LOGIC (Responsive Optimized)
  const handleMouseMove = (e) => {
    if (!imgContainerRef.current) return;
    const { left, top, width, height } = imgContainerRef.current.getBoundingClientRect();
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    
    setZoomPos({ x, y });
  };

  const handleWhatsAppQuote = (productName) => {
    const message = `Hello Ion Pure Solutions, I am interested in obtaining a formal quotation for the ${productName}. Please share the technical brochure and pricing details.`;
    window.open(`https://wa.me/918130134145?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#FCFCFC] min-h-screen selection:bg-ionBlue/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP NAVIGATION */}
        <button
          onClick={() => { window.history.pushState({}, "", "/"); onBack(); }}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-ionBlue mb-8 md:mb-12 hover:gap-5 transition-all"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>

        {/* MAIN PRODUCT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 md:mb-32">
          
          {/* LEFT: INTERACTIVE GALLERY (Responsive Switch) */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-32 order-1">
            <div className="flex flex-col md:flex-row gap-4">
              
              {/* Lazy-Loaded Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar pb-2 md:pb-0 md:max-h-[500px]">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setActiveImg(img)}
                    onClick={() => setActiveImg(img)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all shrink-0 p-1.5 bg-white
                      ${activeImg === img ? 'border-ionBlue shadow-lg scale-95' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} loading="lazy" className="w-full h-full object-contain" alt="Thumbnail" />
                  </button>
                ))}
              </div>

              {/* Main Stage with Functional Amazon Zoom */}
              <div 
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                className="relative flex-1 aspect-square rounded-[2rem] md:rounded-[3rem] bg-white border border-gray-100 shadow-xl flex items-center justify-center p-6 md:p-12 overflow-hidden cursor-crosshair group/stage"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ionBlue/5 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeImg}
                      loading="eager"
                      decoding="async"
                      className={`w-full h-full object-contain transition-transform duration-200 ease-out z-10
                        ${showZoom ? 'scale-[2.2]' : 'scale-100'}`}
                      style={{ transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }}
                      alt={product.name}
                    />
                  </motion.div>
                </AnimatePresence>

                {!showZoom && (
                  <div className="absolute top-6 right-6 p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 pointer-events-none md:opacity-0 group-hover/stage:opacity-100 transition-opacity">
                    <Expand size={18} className="text-ionBlue" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 p-4 bg-ionBlue/5 rounded-2xl border border-ionBlue/5">
               <div className="flex items-center gap-2 px-2">
                 <ShieldCheck size={16} className="text-ionGreen shrink-0" />
                 <span className="text-[9px] font-black uppercase text-ionBlue/60 leading-tight">5-Year Plate Protection</span>
               </div>
               <div className="flex items-center gap-2 px-2 border-l border-ionBlue/10">
                 <Sparkles size={16} className="text-ionGreen shrink-0" />
                 <span className="text-[9px] font-black uppercase text-ionBlue/60 leading-tight">Certified Excellence</span>
               </div>
            </div>
          </div>

          {/* RIGHT: DETAILS & SPECS */}
          <div className="lg:col-span-6 space-y-10 order-2 mt-8 lg:mt-0">
            <header className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-ionMint/50 text-ionBlue rounded-full text-[10px] font-black uppercase tracking-widest border border-ionBlue/5">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm">
                  <Activity size={12} className="text-ionGreen" />
                  <span className="text-[10px] font-black text-ionBlue/40 uppercase tracking-widest">Medical Grade</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-ionMidnight tracking-tighter italic uppercase leading-[0.95] md:leading-[0.9]">
                {product.name}
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-ionBlue/50 italic border-l-4 border-ionGreen pl-6 py-2">
                {product.tagline}
              </p>

              <div className="p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 text-ionMidnight/80 leading-relaxed shadow-sm font-medium">
                {product.description}
              </div>
            </header>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => handleWhatsAppQuote(product.name)}
                className="flex-[4] py-5 rounded-full bg-ionMidnight text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs shadow-2xl hover:bg-ionBlue transition-all flex items-center justify-center gap-3"
              >
                Claim Launch Offer <ArrowRight size={18} />
              </motion.button>
              <button className="flex-1 py-5 rounded-full bg-white border border-gray-200 text-ionBlue flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm">
                <Share2 size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-ionMidnight/40">
                <Info size={14} /> Engineering Matrix
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all group">
                    <span className="text-[8px] md:text-[9px] font-black text-ionBlue/30 uppercase tracking-widest block mb-1 group-hover:text-ionGreen">{key}</span>
                    <span className="text-xs md:text-sm font-bold text-ionMidnight">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EXTENDED TECHNICAL TRUST BLOCK */}
        <div className="p-8 sm:p-12 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-ionMidnight text-white relative overflow-hidden mb-24 md:mb-32">
           <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-ionBlue/10 blur-[120px] rounded-full" />
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ionGreen/10 border border-ionGreen/20">
                  <Sparkles size={14} className="text-ionGreen animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-ionGreen">Platinum-Titanium Standard</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight">Technical <br className="hidden md:block"/>Longevity.</h3>
                <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">
                  Every system is engineered to exceed global health standards. Utilizing 99.99% pure platinum-coated titanium electrodes ensures your molecular hydrogen output remains consistent without plate degradation for 5+ years.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:pl-10">
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <h5 className="text-ionGreen font-black text-3xl mb-1">99.9%</h5>
                    <p className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-black">H₂ Purity</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <h5 className="text-ionGreen font-black text-3xl mb-1">0%</h5>
                    <p className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-black">Plate Erosion</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <h5 className="text-ionGreen font-black text-3xl mb-1">100+</h5>
                    <p className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-black">Tests Conducted</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <h5 className="text-ionGreen font-black text-3xl mb-1">5yr</h5>
                    <p className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-black">Plate Assured</p>
                 </div>
              </div>
           </div>
        </div>

        {/* CURATED COLLECTION (Fixed ReferenceError) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl sm:text-4xl font-black text-ionMidnight tracking-tighter italic uppercase">Curated <span className="opacity-30 font-light">Collection.</span></h2>
            <button onClick={() => { window.history.pushState({}, "", "/"); onBack(); }} className="text-[10px] font-black uppercase text-ionBlue tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Explore Full Collection <ArrowRight size={14}/></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {relatedProducts.map((p) => (
              <motion.div 
                key={p.id} 
                whileHover={{ y: -8 }}
                onClick={() => window.open(`${window.location.origin}/#${p.id}`, "_blank")} 
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-50 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 mb-6 p-6 flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:bg-white group-hover:border-ionBlue/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-ionBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={p.thumbnail} loading="lazy" className="w-[85%] h-[85%] object-contain transition-transform duration-700 z-10" alt={p.name} />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                     <span className="text-[8px] font-black uppercase text-ionBlue/30 tracking-widest">{p.category}</span>
                     <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-ionBlue opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <Plus size={16} />
                     </div>
                  </div>
                </div>
                <h4 className="text-base md:text-lg font-black uppercase italic text-ionMidnight group-hover:text-ionBlue transition-colors px-2 leading-tight">{p.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}