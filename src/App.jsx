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
import { MessageCircle } from "lucide-react";

// Data
import { PRODUCTS } from "./data/products";
import { BLOGS } from "./data/blogs";

function App() {
  // --- 1. HOOKS AT THE TOP (Strict) ---
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const currentProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === view),
    [view],
  );
  const currentBlog = useMemo(() => BLOGS.find((b) => b.id === view), [view]);

  // Loading Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // View scroll reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  // Hash Listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      if (hash === "privacy-policy" || hash === "terms-conditions") {
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

  // Footer Observer Logic
  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  // --- 2. EARLY RETURN ---
  if (isLoading) return <SplashScreen />;

  // --- 3. LOGIC ---
  const scrollTo = (sectionId) => {
    setMobileMenuOpen(false);
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

  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFD] overflow-x-hidden">
      <ConcentricRipple />

      <div className="relative z-[100]">
        <Navbar
          scrollTo={scrollTo}
          toggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          isDetailView={view !== "home"}
          goHome={() => setView("home")}
        />
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          scrollTo={scrollTo}
        />
      </div>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === "privacy-policy" && (
            <PrivacyPolicy key="privacy" onBack={() => setView("home")} />
          )}
          {view === "terms-conditions" && (
            <TermsConditions key="terms" onBack={() => setView("home")} />
          )}
          {currentProduct && view !== "home" && (
            <ProductDetail
              key={currentProduct.id}
              product={currentProduct}
              onBack={() => setView("home")}
            />
          )}
          {currentBlog && view !== "home" && (
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
              <Hero scrollToProducts={() => scrollTo("products")} />
              <About />
              <FeaturedProducts products={PRODUCTS} setView={setView} />
              <WhyChooseUs />
              <Certifications />
              <Testimonials />
              <BlogPreview blogs={BLOGS} setView={setView} />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FLOATING ACTION BUTTONS */}
      {/* LEFT SIDE: WHATSAPP ONLY */}
      <div
        className={`fixed bottom-6 left-6 z-[9999] transition-all duration-700 ease-in-out pointer-events-auto ${
          isFooterVisible
            ? "opacity-0 translate-y-32 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <WhatsAppButton />
      </div>

      {/* RIGHT SIDE: CHATBOT ONLY */}
      <div
        className={`fixed bottom-6 right-6 z-[9999] transition-all duration-700 ease-in-out pointer-events-auto ${
          isFooterVisible
            ? "opacity-0 translate-y-32 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <ChatBot />
      </div>

      <Footer ref={footerRef} scrollTo={scrollTo} setView={setView} />
    </div>
  );
}

export default App;
