import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import {
  Instagram,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY } from "../../data/company";

export default function InstagramShowcase() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const dragX = useMotionValue(0);

  const instagramPosts = [
    "https://www.instagram.com/p/DVA-UPijt3_/",
    "https://www.instagram.com/p/DTpWx_LkQoc/",
    "https://www.instagram.com/p/DTYSbgEEgGq/",
  ];

  // Auto-slide logic with pause-on-interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % instagramPosts.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [instagramPosts.length]);

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % instagramPosts.length);
  const handlePrev = () =>
    setIndex(
      (prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length,
    );

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50 && index < instagramPosts.length - 1) handleNext();
    else if (x >= 50 && index > 0) handlePrev();
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white selection:bg-ionBlue/10">
      {/* 1. BRANDED AMBIENCE */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ionBlue/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ionGreen/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* 2. REFINED HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-6">
            {/* TOP TAG */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ionBlue/5 border border-ionBlue/10"
            >
              <Instagram size={12} className="text-[#ee2a7b]" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-ionBlue italic">
                Clinical Community
              </span>
            </motion.div>

            {/* GRADIENT HEADING - Balanced size (4xl to 6xl) */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-ionBlue uppercase italic">
              Social 
              <span className="bg-gradient-to-r from-ionGreen via-ionBlue to-ionGreen bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent pr-2">
                Pulse.
              </span>
            </h2>

            {/* SUBTEXT */}
            <p className="text-ionBlue/50 font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} className="text-ionGreen shrink-0" />
              Experience Purity in Motion
            </p>
          </div>

          <a
            href={`https://www.instagram.com/${COMPANY.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white border border-ionBlue/10 rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] shadow-sm hover:shadow-xl hover:bg-ionBlue hover:text-white transition-all group"
          >
            Visit Profile{" "}
            <ExternalLink
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>

        {/* 3. SHOWROOM ENGINE */}
        <div className="relative group max-w-[380px] mx-auto">
          {/* NAVIGATION ARROWS (Hidden on small touch devices) */}
          <div className="hidden lg:block">
            <button
              onClick={handlePrev}
              className="absolute left-[-110px] top-1/2 -translate-y-1/2 p-5 rounded-full bg-white shadow-2xl text-ionBlue border border-ionBlue/5 transition-all active:scale-95 hover:bg-ionBlue hover:text-white z-30"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[-110px] top-1/2 -translate-y-1/2 p-5 rounded-full bg-white shadow-2xl text-ionBlue border border-ionBlue/5 transition-all active:scale-95 hover:bg-ionBlue hover:text-white z-30"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* GESTURE SLIDER */}
          <div className="relative cursor-grab active:cursor-grabbing overflow-visible">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragX }}
              animate={{ translateX: `-${index * 100}%` }}
              onDragEnd={onDragEnd}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="flex w-full"
            >
              {instagramPosts.map((postUrl, i) => (
                <div key={i} className="min-w-full px-4">
                  <motion.div
                    animate={{
                      scale: index === i ? 1 : 0.85,
                      opacity: index === i ? 1 : 0.3,
                    }}
                    className="relative aspect-[9/16] w-full bg-white rounded-[4rem] border-[8px] border-white shadow-[0_50px_100px_rgba(44,93,167,0.15)] overflow-hidden"
                  >
                    {/* The Iframe Portal */}
                    <div className="absolute inset-0 bg-ionBlue/5 animate-pulse" />
                    <iframe
                      src={`${postUrl}embed`}
                      title={`Reel ${i}`}
                      className="absolute inset-0 w-full h-full border-none z-10"
                      scrolling="no"
                      allowtransparency="true"
                      onLoad={() => setIsLoaded(true)}
                    />

                    {/* Interaction Hint (Overlay) */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-ionBlue/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 4. TERMINAL PROGRESS DOTS */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {instagramPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-700 rounded-full ${
                i === index ? "w-16 bg-ionBlue" : "w-3 bg-ionBlue/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
