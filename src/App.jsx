// App.jsx
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import SplashScreen from "./components/layout/SplashScreen";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import BlogPreview from "./components/sections/BlogPreview";
import Contact from "./components/sections/Contact";
import ProductDetail from "./components/views/ProductDetail";
import BlogDetail from "./components/views/BlogDetail";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import TermsConditions from "./components/views/TermsConditions";
import ChatBot from "./components/chatbot/ChatBot";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import InstagramShowcase from "./components/sections/InstagramShowcase";

import Watermark from "./components/effects/Watermark";
import MaintenanceMode from "./components/layout/MaintenanceMode";

import { PRODUCTS } from "./data/products";
import { BLOGS } from "./data/blogs";
import { heroProducts } from "./data/heroData";

function App() {
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const footerRef = useRef(null);

  // Memoized data
  const currentProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === view),
    [view],
  );
  const currentBlog = useMemo(() => BLOGS.find((b) => b.id === view), [view]);

  // Loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Reset scroll on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  // Hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setView("home");
        return;
      }
      if (["about", "privacy-policy", "terms-conditions"].includes(hash)) {
        setView(hash);
      } else if (
        PRODUCTS.some((p) => p.id === hash) ||
        BLOGS.some((b) => b.id === hash)
      ) {
        setView(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Footer observer
  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  // Update this function inside App.jsx
  // Inside App.jsx
  const handleNavigation = (sectionId) => {
    // Close mobile menu immediately for better UX
    setMobileMenuOpen(false);

    // Special case: About Us opens in new tab
    if (sectionId === "about") {
      const url = `${window.location.origin}/#about`;
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // For all other sections → Normal smooth scroll on same page
    if (view !== "home") {
      // If we're on a detail page, first go back to home
      setView("home");
      // Wait for the transition, then scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 350);
    } else {
      // Already on home → just scroll
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading) return <SplashScreen />;

  return (
    // <div className="relative min-h-screen w-full bg-[#FDFDFD] overflow-x-hidden font-body">
    //   {/* Navbar + Mobile Menu */}
    //   <div className="relative z-[100]">
    //     <Navbar
    //       scrollTo={handleNavigation}
    //       toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
    //       isDetailView={view !== "home"}
    //       goHome={() => setView("home")}
    //       // No more banner prop needed
    //     />

    //     <MobileMenu
    //       isOpen={mobileMenuOpen}
    //       onClose={() => setMobileMenuOpen(false)}
    //       scrollTo={handleNavigation}
    //     />
    //   </div>
    // <Watermark />

    //   {/* Main Content */}
    //   <main className="relative z-10">
    //     <AnimatePresence mode="wait">
    //       {view === "about" && (
    //         <motion.div
    //           key="about-page"
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: -20 }}
    //           className="pt-20"
    //         >
    //           <About />
    //           <div className="flex justify-center pb-20">
    //             <button
    //               onClick={() => setView("home")}
    //               className="px-8 py-3 bg-ionBlue text-white rounded-full font-bold uppercase tracking-widest text-[10px]"
    //             >
    //               Back to Home
    //             </button>
    //           </div>
    //         </motion.div>
    //       )}

    //       {view === "privacy-policy" && (
    //         <PrivacyPolicy key="privacy" onBack={() => setView("home")} />
    //       )}
    //       {view === "terms-conditions" && (
    //         <TermsConditions key="terms" onBack={() => setView("home")} />
    //       )}

    //       {currentProduct && !["home", "about"].includes(view) && (
    //         <ProductDetail
    //           key={currentProduct.id}
    //           product={currentProduct}
    //           onBack={() => setView("home")}
    //         />
    //       )}

    //       {currentBlog && !["home", "about"].includes(view) && (
    //         <BlogDetail
    //           key={currentBlog.id}
    //           blog={currentBlog}
    //           onBack={() => setView("home")}
    //         />
    //       )}

    //       {view === "home" && (
    //         <motion.div
    //           key="home"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //         >
    //           <Hero
    //             scrollToProducts={() => handleNavigation("products")}
    //             heroProducts={heroProducts}
    //           />
    //           <FeaturedProducts products={PRODUCTS} setView={setView} />
    //           <Certifications />
    //           <Testimonials />
    //           <BlogPreview blogs={BLOGS} setView={setView} />
    //           <InstagramShowcase />
    //           <Contact />
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </main>

    //   <Footer ref={footerRef} scrollTo={handleNavigation} setView={setView} />

    //   {/* Floating Buttons */}
    //   <div
    //     className={`fixed bottom-6 left-6 z-[9999] transition-all duration-700 ${
    //       isFooterVisible
    //         ? "opacity-0 translate-y-32 pointer-events-none"
    //         : "opacity-100 translate-y-0 pointer-events-auto"
    //     }`}
    //   >
    //     <WhatsAppButton />
    //   </div>

    //   <div
    //     className={`fixed bottom-6 right-6 z-[9999] transition-all duration-700 ${
    //       isFooterVisible
    //         ? "opacity-0 translate-y-32 pointer-events-none"
    //         : "opacity-100 translate-y-0 pointer-events-auto"
    //     }`}
    //   >
    //     <ChatBot />
    //   </div>
    // </div>
    <>
      <Watermark />
      <MaintenanceMode />
    </>
  );
}

export default App;
