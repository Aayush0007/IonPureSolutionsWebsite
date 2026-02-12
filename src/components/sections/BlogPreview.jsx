import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function BlogPreview({ blogs, setView }) {
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setConstraints({
        left: -(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth),
        right: 0
      });
    }
  }, [blogs]);

  const handleBlogClick = (e, blogId) => {
    // Stop propagation to ensure only this specific ID is processed
    e.stopPropagation();
    e.preventDefault();
    
    // Using the unique hash format for your App.jsx router
    const newTabUrl = `${window.location.origin}/#${blogId}`;
    window.open(newTabUrl, '_blank');
  };

  return (
    <section id="blog" className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-[#7CB35B]/5 blur-[80px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[#2C5DA7]/5 blur-[80px] rounded-full" />

      <div className="section-container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-4 md:mb-6"
          >
            <BookOpen size={12} className="text-[#2C5DA7]" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">Science Insights</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-[#1A365D]">
            Knowledge That{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-1">
              Matters.
            </span>
          </h2>
        </div>

        <div className="relative overflow-visible cursor-grab active:cursor-grabbing" ref={carouselRef}>
          <motion.div 
            drag="x"
            dragConstraints={constraints}
            className="flex gap-4 md:gap-6 py-4"
          >
            {blogs.map((blog) => (
              <motion.article
                key={blog.id}
                // Attached click handler to the whole card for better UX
                onClick={(e) => handleBlogClick(e, blog.id)}
                className="min-w-[260px] md:min-w-[340px] group bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(26,54,93,0.04)] hover:shadow-xl transition-all duration-500 flex flex-col pointer-events-auto"
              >
                {/* SINGLE IMAGE/PLACEHOLDER HEADER */}
                <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden">
                  {blog.image ? (
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#2C5DA7]/10 text-5xl md:text-7xl font-black italic">
                       {blog.category?.charAt(0)}
                    </div>
                  )}
                  
                  {/* Glassmorphism Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-md rounded-lg border border-white/50 shadow-sm">
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-[#2C5DA7]">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#1A365D]/40 mb-4">
                    <div className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={12} /> {blog.readTime}</div>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#1A365D] mb-3 md:mb-4 tracking-tighter uppercase italic group-hover:text-[#2C5DA7] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#1A365D]/60 mb-6 line-clamp-2 font-medium leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center gap-2 mt-auto pt-4 md:pt-6 border-t border-gray-50">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#2C5DA7]">Read Insight</span>
                    <ArrowRight size={14} className="text-[#2C5DA7] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 