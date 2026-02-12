import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Heart,
  ShieldCheck,
  Sparkles,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { BLOGS } from "../../data/blogs";

export default function BlogDetail({ blog, onBack }) {
  const [liked, setLiked] = useState(false);

  // Safety guard for smooth transitions
  if (!blog) return null;

  const relatedBlogs = BLOGS.filter((b) => b.id !== blog.id).slice(0, 3);

  const handleBackNavigation = () => {
    // Reset URL to base domain upon return
    window.history.pushState({}, "", window.location.origin + "/");
    onBack();
  };

  const handleRelatedClick = (id) => {
    // Deep link to new blog in separate tab
    window.open(`${window.location.origin}/#${id}`, "_blank");
  };

  const handleShare = () => {
    const text = `Reading "${blog.title}" from Ion Pure Solutions`;
    window.open(
      `https://wa.me/9351044351?text=${encodeURIComponent(text + " " + window.location.href)}`,
      "_blank"
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-28 pb-16 md:pb-24 bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Navigation */}
        <button
          onClick={handleBackNavigation}
          className="group flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#2C5DA7] mb-8 md:mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Insights
        </button>

        <article className="mb-20">
          {/* Metadata Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#1A365D]/40 mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-[#7CB35B]" /> {blog.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-[#2C5DA7]" /> {blog.readTime}
              </div>
              <span className="px-3 py-1 bg-[#F1F8E1] text-[#7CB35B] rounded-lg border border-[#7CB35B]/10">
                {blog.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-[#1A365D] leading-[1.1] md:leading-[1] tracking-tighter mb-10 uppercase italic">
              {blog.title}
            </h1>
          </header>

          {/* HI-TECH HERO IMAGE CONTAINER */}
          <div className="relative w-full aspect-[21/9] rounded-[2rem] md:rounded-[3.5rem] mb-12 overflow-hidden border border-gray-100 shadow-2xl bg-gray-50">
            {blog.image ? (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Sparkles size={40} className="text-[#2C5DA7]/10 mb-2" />
                <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] text-[#2C5DA7]/20">
                  Pure Science Publication
                </p>
              </div>
            )}
            {/* Subtle overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* ARTICLE CONTENT */}
          <div className="prose prose-sm md:prose-lg max-w-none mb-12 md:mb-16 text-[#1A365D]/80 leading-relaxed">
            {/* Abstract/Excerpt Section */}
            <p className="text-lg md:text-2xl font-medium text-[#1A365D] mb-10 leading-relaxed italic border-l-4 border-[#7CB35B] pl-6 py-2 bg-gray-50/50 rounded-r-2xl">
              {blog.excerpt}
            </p>
            
            <div className="whitespace-pre-line text-base md:text-lg space-y-6">
              {blog.content}
            </div>
          </div>

          {/* INTERACTIVE ACTION BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 md:py-8 border-t border-b border-gray-100 gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-black text-[8px] md:text-[9px] uppercase tracking-widest shadow-sm ${
                  liked 
                    ? "bg-red-50 text-red-500 border border-red-100" 
                    : "bg-gray-50 text-[#1A365D]/40 hover:bg-gray-100 border border-transparent"
                }`}
              >
                <Heart size={16} fill={liked ? "currentColor" : "none"} />
                {liked ? "Saved to Library" : "Like Insight"}
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E2EBF5] text-[#2C5DA7] font-black text-[8px] md:text-[9px] uppercase tracking-widest hover:bg-[#D0E0F0] transition-all shadow-sm"
              >
                <Share2 size={16} /> WhatsApp Share
              </button>
            </div>

            <div className="flex items-center gap-3 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#1A365D]">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shadow-inner">
                <ShieldCheck size={16} className="text-[#7CB35B]" />
              </div>
              Verified By: {blog.author}
            </div>
          </div>
        </article>

        {/* RELATED DISCOVERY SECTION */}
        <div className="pt-16 md:pt-24 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[#7CB35B] mb-4">
            <LayoutGrid size={16} />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
              Related Discovery
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#1A365D] tracking-tighter mb-10 md:mb-12">
            Continue Your <span className="italic font-light opacity-50">Purity Journey.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {relatedBlogs.map((b, idx) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleRelatedClick(b.id)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-50 rounded-[1.5rem] md:rounded-[2.5rem] p-0 mb-4 md:mb-6 overflow-hidden border border-transparent group-hover:border-[#2C5DA7]/10 transition-all shadow-sm group-hover:shadow-xl">
                  {b.image ? (
                    <img 
                      src={b.image} 
                      alt={b.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#2C5DA7]/10 text-6xl font-black italic">
                      {b.category?.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#2C5DA7] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-md">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <h4 className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-[#7CB35B] mb-1 md:mb-2">
                  {b.category}
                </h4>
                <h3 className="text-base md:text-lg font-black text-[#1A365D] tracking-tighter uppercase italic line-clamp-2 leading-tight group-hover:text-[#2C5DA7] transition-colors">
                  {b.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}