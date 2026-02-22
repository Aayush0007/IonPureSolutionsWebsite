import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import SplashScreen from "./components/layout/SplashScreen";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import Certifications from "./components/sections/Certifications";
import Testimonials from "./components/sections/Testimonials";
import BlogPreview from "./components/sections/BlogPreview";
import Contact from "./components/sections/Contact";
import ConcentricRipple from "./components/effects/ConcentricRipple";
import ProductDetail from "./components/views/ProductDetail";
import BlogDetail from "./components/views/BlogDetail";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import TermsConditions from "./components/views/TermsConditions";
import ChatBot from "./components/chatbot/ChatBot";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import InstagramShowcase from "./components/sections/InstagramShowcase";
import PromoBanner from "./components/sections/PromoBanner";

// Data
import { PRODUCTS } from "./data/products";
import { BLOGS } from "./data/blogs";

function App() {
  // --- 1. STATE & REFS ---
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Banner State
  const footerRef = useRef(null);

  // --- 2. MEMOIZED DATA ---
  const currentProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === view),
    [view],
  );
  const currentBlog = useMemo(() => BLOGS.find((b) => b.id === view), [view]);

  // --- 3. EFFECTS ---
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setView("home");
        return;
      }
      const standalonePages = ["about", "privacy-policy", "terms-conditions"];
      if (standalonePages.includes(hash)) {
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

  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  // --- 4. NAVIGATION LOGIC ---
  const handleNavigation = (sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId === "about") {
      window.open(`${window.location.origin}/#about`, "_blank");
      return;
    }
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) return <SplashScreen />;

  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFD] overflow-x-hidden font-body">
      <ConcentricRipple />

      {/* 1. Banner stays at absolute top: 0 */}
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
        scrollToProducts={handleNavigation}
      />

      {/* 2. Content Wrapper shifts down based on Banner visibility */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isBannerVisible ? "pt-[52px] md:pt-[60px]" : "pt-0"
        }`}
      >
        <div className="relative z-[100]">
          <Navbar
            scrollTo={handleNavigation}
            toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
            isDetailView={view !== "home"}
            goHome={() => setView("home")}
            // If your Navbar is 'fixed', you may need to pass 'isBannerVisible' to it
            // to adjust its 'top' property (e.g., top-0 vs top-[60px])
            isBannerVisible={isBannerVisible}
          />
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            scrollTo={handleNavigation}
          />
        </div>

        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {view === "about" && (
              <motion.div
                key="about-page"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="pt-20"
              >
                <About />
                <div className="flex justify-center pb-20">
                  <button
                    onClick={() => setView("home")}
                    className="px-8 py-3 bg-ionBlue text-white rounded-full font-bold uppercase tracking-widest text-[10px]"
                  >
                    Back to Home
                  </button>
                </div>
              </motion.div>
            )}

            {view === "privacy-policy" && (
              <PrivacyPolicy key="privacy" onBack={() => setView("home")} />
            )}
            {view === "terms-conditions" && (
              <TermsConditions key="terms" onBack={() => setView("home")} />
            )}

            {currentProduct && !["home", "about"].includes(view) && (
              <ProductDetail
                key={currentProduct.id}
                product={currentProduct}
                onBack={() => setView("home")}
              />
            )}
            {currentBlog && !["home", "about"].includes(view) && (
              <BlogDetail
                key={currentBlog.id}
                blog={currentBlog}
                onBack={() => setView("home")}
              />
            )}

            {view === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero scrollToProducts={() => handleNavigation("products")} />
                <FeaturedProducts products={PRODUCTS} setView={setView} />
                <Certifications />
                <Testimonials />
                <BlogPreview blogs={BLOGS} setView={setView} />
                <InstagramShowcase />
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer ref={footerRef} scrollTo={handleNavigation} setView={setView} />
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div
        className={`fixed bottom-6 left-6 z-[9999] transition-all duration-700 ease-in-out pointer-events-auto ${isFooterVisible ? "opacity-0 translate-y-32" : "opacity-100 translate-y-0"}`}
      >
        <WhatsAppButton />
      </div>
      <div
        className={`fixed bottom-6 right-6 z-[9999] transition-all duration-700 ease-in-out pointer-events-auto ${isFooterVisible ? "opacity-0 translate-y-32" : "opacity-100 translate-y-0"}`}
      >
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
