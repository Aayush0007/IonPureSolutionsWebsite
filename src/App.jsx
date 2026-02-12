import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import ConcentricRipple from "./components/effects/ConcentricRipple"; // 1. Import it
import ProductDetail from "./components/views/ProductDetail";
import BlogDetail from "./components/views/BlogDetail";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import TermsConditions from "./components/views/TermsConditions";

import ChatBot from "./components/chatbot/ChatBot";
import WhatsAppButton from "./components/ui/WhatsAppButton";

import { PRODUCTS } from "./data/products";
import { BLOGS } from "./data/blogs";

function App() {
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  // Add this inside your App component in App.jsx
  // Add/Update this inside your App component in App.jsx
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#")) {
        const targetId = hash.substring(1);

        // 1. Check for Legal Pages (NEW)
        if (targetId === "privacy-policy" || targetId === "terms-conditions") {
          setView(targetId);
          return;
        }

        // 2. Check if it's a valid Product ID
        const productExists = PRODUCTS.some((p) => p.id === targetId);
        if (productExists) {
          setView(targetId);
          return;
        }

        // 3. Check if it's a valid Blog ID
        const blogExists = BLOGS.some((b) => b.id === targetId);
        if (blogExists) {
          setView(targetId);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const currentProduct = PRODUCTS.find((p) => p.id === view);
  const currentBlog = BLOGS.find((b) => b.id === view);

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

  if (isLoading) return <SplashScreen />;

  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFD]">
      <ConcentricRipple />
      {/* 2. UI LAYER */}
      <div style={{ position: "relative", zIndex: 50 }}>
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

      <ChatBot />

      {/* 3. CONTENT LAYER */}
      <main className="relative" style={{ zIndex: 10 }}>
        <AnimatePresence mode="wait" initial={false}>
          {view === "privacy-policy" && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PrivacyPolicy onBack={() => setView("home")} />
            </motion.div>
          )}

          {view === "terms-conditions" && (
            <motion.div
              key="terms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TermsConditions onBack={() => setView("home")} />
            </motion.div>
          )}

          {currentProduct && view !== "home" && (
            <motion.div
              key={`prod-${currentProduct.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductDetail
                product={currentProduct}
                onBack={() => setView("home")}
              />
            </motion.div>
          )}

          {currentBlog && view !== "home" && (
            <motion.div
              key={`blog-${currentBlog.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BlogDetail blog={currentBlog} onBack={() => setView("home")} />
            </motion.div>
          )}

          {view === "home" && (
            <motion.div
              key="home-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
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

      {/* 4. FOOTER LAYER */}
      <div style={{ position: "relative", zIndex: 20 }}>
        <Footer scrollTo={scrollTo} setView={(v) => setView(v)} />
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default App;
