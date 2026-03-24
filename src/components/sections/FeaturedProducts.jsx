import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  Activity,
  Plus,
  ShoppingBag,
  Cpu,
  Truck,
  Clock,
} from "lucide-react";

export default function FeaturedProducts({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleProductClick = (productId) => {
    window.open(`${window.location.origin}/#${productId}`, "_blank");
  };

  const handleQuickQuote = (e, productName) => {
    e.stopPropagation();
    const message = `Hello Ion Pure Solutions, I'd like a quick quote for the ${productName}.`;
    window.open(
      `https://wa.me/918130134145?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="products"
      className="relative py-16 md:py-24 overflow-hidden bg-[#F8FAFC] selection:bg-ionBlue/10"
    >
      {/* Premium Ambient Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-ionBlue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-ionGreen/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="p-2 bg-ionBlue rounded-lg">
                <ShoppingBag size={14} className="text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ionBlue/60">
                Premium Catalog 2026
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-ionBlue leading-[0.9]">
              ENGINEERED <br />
              <span className="text-ionGreen italic">PURITY.</span>
            </h2>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(3);
                }}
                className={`relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? "text-white border-transparent"
                    : "text-ionBlue/60 border-gray-200 bg-white hover:border-ionBlue/30"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-ionBlue rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col bg-white rounded-[2rem] p-4 border border-gray-100 hover:border-ionBlue/10 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(44,93,167,0.15)] cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                {/* IMPROVED: Removed "Box in a Box" background and zoom effect */}
                <div className="relative aspect-square flex items-center justify-center p-2 mb-2">
                  <div className="absolute top-2 left-2 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-gray-100 rounded-lg text-[9px] font-bold text-ionBlue uppercase tracking-tight shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain drop-shadow-xl"
                  />
                </div>

                {/* Info Section */}
                <div className="px-3 py-4">
                  <div className="flex flex-col items-center mb-2 text-center">
                    <h3 className="text-xl font-black text-ionBlue uppercase tracking-tighter leading-tight w-full">
                      {product.name}
                    </h3>
                    {/* <div className="mt-2 flex items-center gap-1 text-ionGreen bg-ionGreen/5 px-2 py-0.5 rounded-md w-fit">
                      <Activity size={10} />
                      <span className="text-[8px] font-bold uppercase">
                        Active
                      </span>
                    </div> */}
                  </div>

                  <p className="text-[11px] text-ionBlue/50 font-medium leading-relaxed mb-4 line-clamp-2 italic">
                    {product.tagline}
                  </p>

                  {/* PRICE + MRP + DELIVERY */}
                  <div className="mb-5 space-y-2 text-sm">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xl md:text-2xl font-black text-ionMidnight">
                        ₹{product.sellingPrice?.toLocaleString("en-IN") || "—"}
                      </span>
                      <span className="text-base text-gray-400 line-through">
                        ₹{product.mrp?.toLocaleString("en-IN") || "—"}
                      </span>
                      <span className="text-[10px] font-medium text-ionGreen bg-ionGreen/10 px-2 py-0.5 rounded">
                        All incl.
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ionBlue/70">
                      <div className="flex items-center gap-1.5">
                        <Truck size={13} className="text-ionGreen" />
                        <span>
                          Delivery:{" "}
                          <strong>{product.deliveryTime || "—"}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-ionGreen" />
                        <span>
                          Ships: <strong>{product.shippingTime || "—"}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spec Bar */}
                  <div className="flex items-center gap-4 mb-6 border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Cpu size={12} className="text-ionBlue/40" />
                      <span className="text-[9px] font-bold text-ionBlue/60 uppercase">
                        {product.technicalSpecifications?.[
                          "Input Power"
                        ]?.split(" ")[0] || "Advanced"}
                      </span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-ionBlue/40" />
                      <span className="text-[9px] font-bold text-ionBlue/60 uppercase tracking-tighter truncate max-w-[80px]">
                        Medical Grade
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => handleQuickQuote(e, product.name)}
                    className="w-full py-4 bg-gray-50 group-hover:bg-ionBlue transition-all duration-300 rounded-xl flex items-center justify-center gap-3 group/btn"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ionBlue group-hover:text-white transition-colors">
                      Inquire Now
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-ionBlue group-hover:text-white group-hover:translate-x-1 transition-all"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION */}
        {filteredProducts.length > visibleCount && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white border border-gray-200 rounded-full overflow-hidden transition-all hover:border-ionBlue"
            >
              <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-ionBlue group-hover:text-white transition-colors duration-300">
                Show More Models
              </span>
              <div className="absolute inset-0 bg-ionBlue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Plus
                size={16}
                className="relative z-10 text-ionBlue group-hover:text-white transition-colors duration-300"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
