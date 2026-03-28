import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const totalReviews = TESTIMONIALS.length;
  const currentReview = TESTIMONIALS[currentIndex];
  const charLimit = 300;

  const paginate = (newDirection) => {
    setIsExpanded(false); // Reset "read more" when switching slides
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + totalReviews) % totalReviews,
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
    }),
    center: { zIndex: 1, x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (direction) => ({
      position: "absolute",
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-20 overflow-hidden bg-white"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[-5%] w-64 h-64 bg-ionBlue/5 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-64 h-64 bg-ionGreen/5 blur-[80px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* 2. HEADER WITH REVIEW COUNT */}
        <div className="relative z-20 flex flex-col items-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ionBlue/5 border border-ionBlue/10 mb-4"
          >
            <Heart size={12} className="text-ionGreen" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-ionBlue">
              Real Impact
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-ionBlue text-center leading-tight mb-4">
            Trusted <span className="text-ionGreen italic pr-1">Wellness.</span>
          </h2>

          {/* New Review Counter */}
          <div className="flex items-center gap-2 bg-ionBlue/5 px-4 py-2 rounded-2xl border border-ionBlue/5">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  fill="#EAB308"
                  className="text-yellow-500"
                />
              ))}
            </div>
            <span className="text-xs font-bold text-ionBlue/60">
              {totalReviews}+ Global Client Reviews
            </span>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-30 hidden md:flex p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-30 hidden md:flex p-2.5 rounded-xl bg-white border border-ionBlue/10 text-ionBlue hover:bg-ionBlue hover:text-white transition-all active:scale-90 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

          <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
                className="w-full px-2 md:px-16 cursor-grab active:cursor-grabbing"
              >
                <div className="relative bg-gradient-to-br from-white to-ionMint/10 border border-ionBlue/5 p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(44,93,167,0.05)] overflow-hidden">
                  <Quote className="absolute top-4 right-6 text-ionBlue/5 -rotate-12 w-20 h-20 md:w-24 md:h-24" />

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={
                            i < currentReview.rating ? "#7CB35B" : "transparent"
                          }
                          className="text-ionGreen"
                        />
                      ))}
                    </div>

                    <div className="text-base md:text-xl font-medium text-ionBlue/80 leading-relaxed mb-8 italic">
                      "
                      {isExpanded || currentReview.text.length <= charLimit
                        ? currentReview.text
                        : `${currentReview.text.substring(0, charLimit)}...`}
                      {currentReview.text.length > charLimit && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="ml-2 text-ionBlue font-black text-sm uppercase tracking-wider hover:text-ionGreen transition-colors italic"
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-ionBlue text-white flex items-center justify-center font-black text-sm md:text-base shadow-md">
                        {currentReview.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-ionBlue uppercase tracking-tight italic leading-none">
                          {currentReview.name}
                        </h4>
                        <p className="text-[10px] font-bold text-ionGreen uppercase tracking-widest mt-1">
                          {currentReview.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4. PROFESSIONAL PAGINATION (PROGRESS BAR STYLE) */}
        {/* 4. DYNAMIC PROGRESS PAGINATION */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center gap-4">
            {/* Dynamic Current Number */}
            <div className="w-4 flex justify-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] font-black text-ionBlue italic"
                >
                  {String(currentIndex + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress Bar Track */}
            <div className="w-48 md:w-64 h-[2px] bg-ionBlue/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-ionBlue"
                initial={false}
                animate={{
                  width: `${((currentIndex + 1) / totalReviews) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>

            {/* Total Number */}
            <span className="text-[10px] font-black text-ionBlue/40 italic">
              {String(totalReviews).padStart(2, "0")}
            </span>
          </div>

          {/* Sub-label */}
          <div className="text-[10px] font-black text-ionBlue/60 uppercase tracking-widest">
            Review {currentIndex + 1} of {totalReviews}
          </div>
        </div>
      </div>
    </section>
  );
}
