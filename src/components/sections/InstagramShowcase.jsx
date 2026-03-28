import { motion, useMotionValue, useAnimation } from "framer-motion";
import {
  Instagram,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { COMPANY } from "../../data/company";

export default function InstagramShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);
  const controls = useAnimation();

  const instagramPosts = [
    "https://www.instagram.com/p/DWEe2Lbj13d/",
    "https://www.instagram.com/p/DVygpf4DzWA/",
    "https://www.instagram.com/p/DVQt0GCj1ju/",
    "https://www.instagram.com/p/DV7XL-vCsrg/",
    "https://www.instagram.com/reel/DVjDfb3Aagh/",
  ];

  const handleIndexChange = useCallback(
    (newIndex) => {
      const total = instagramPosts.length;
      const wrappedIndex = (newIndex + total) % total;
      setActiveIndex(wrappedIndex);
    },
    [instagramPosts.length],
  );

  const goToNext = () => handleIndexChange(activeIndex + 1);
  const goToPrev = () => handleIndexChange(activeIndex - 1);

  const onDragEnd = (event, info) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x;

    if (distance < -50 || velocity < -500) {
      handleIndexChange(activeIndex + 1);
    } else if (distance > 50 || velocity > 500) {
      handleIndexChange(activeIndex - 1);
    } else {
      controls.start({ x: `-${activeIndex * 100}%` });
    }
  };

  useEffect(() => {
    controls.start({
      x: `-${activeIndex * 100}%`,
      transition: {
        type: "spring",
        damping: 28,
        stiffness: 150,
        mass: 0.5,
        restDelta: 0.001,
      },
    });
  }, [activeIndex, controls]);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-80 h-80 bg-ionBlue/5 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ionGreen/5 blur-[70px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ionBlue/6 border border-ionBlue/12 text-xs"
            >
              <Instagram size={14} className="text-[#E1306C]" />
              <span className="font-black uppercase tracking-wider text-ionBlue italic text-[10px]">
                Community
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-ionBlue uppercase italic">
              Social{" "}
              <span className="bg-gradient-to-r from-ionGreen via-ionBlue to-ionGreen bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                Pulse
              </span>
              .
            </h2>

            <p className="text-ionBlue/70 font-medium text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
              <Sparkles size={13} className="text-ionGreen" />
              Real moments • Real impact
            </p>
          </div>

          <a
            href={`https://www.instagram.com/${COMPANY.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 bg-white border border-ionBlue/12 rounded-xl font-bold uppercase tracking-wider text-[11px] shadow-sm hover:shadow-md hover:border-ionBlue/30 transition-all"
          >
            View Instagram
            <ExternalLink
              size={13}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
        </div>

        <div className="relative mx-auto max-w-[360px] sm:max-w-[400px] md:max-w-[440px]">
          {/* Arrows - Now visible on both Mobile and Desktop */}
          <div className="block">
            <button
              onClick={goToPrev}
              className="absolute -left-4 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-md text-ionBlue hover:bg-white hover:shadow-lg transition-all duration-300 z-30 active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft
                size={20}
                className="md:w-6 md:h-6"
                strokeWidth={2.5}
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-4 md:-right-14 lg:-right-16 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-md text-ionBlue hover:bg-white hover:shadow-lg transition-all duration-300 z-30 active:scale-90"
              aria-label="Next"
            >
              <ChevronRight
                size={20}
                className="md:w-6 md:h-6"
                strokeWidth={2.5}
              />
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl touch-pan-y">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              style={{ x: dragX }}
              animate={controls}
              onDragEnd={onDragEnd}
            >
              {instagramPosts.map((postUrl, idx) => {
                // Logic: Only load the active slide and its neighbors (+/- 1)
                const isVisible = Math.abs(activeIndex - idx) <= 1;

                return (
                  <div key={postUrl} className="min-w-full px-3 relative">
                    <motion.div
                      animate={{
                        scale: activeIndex === idx ? 1 : 0.94,
                        opacity: activeIndex === idx ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-[9/16] w-full rounded-3xl border-8 border-white shadow-xl overflow-hidden bg-white"
                    >
                      {isVisible ? (
                        <iframe
                          src={`${postUrl}embed`}
                          title={`Instagram post ${idx + 1}`}
                          className="absolute inset-0 w-full h-full border-none"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          loading="lazy"
                        />
                      ) : (
                        /* Professional Placeholder while slide is not in focus */
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
                          <Instagram
                            size={32}
                            className="text-ionBlue/10 mb-2"
                          />
                          <div className="w-24 h-1 bg-ionBlue/5 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-ionBlue/10 animate-shimmer" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2.5 mt-6">
            {instagramPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => handleIndexChange(i)}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === activeIndex
                    ? "w-10 bg-gradient-to-r from-ionBlue to-ionGreen"
                    : "w-4 bg-ionBlue/25 hover:bg-ionBlue/45"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
