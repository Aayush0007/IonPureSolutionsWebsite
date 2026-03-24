import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '918130134145';
  const message = encodeURIComponent("Hello! I'm interested in your wellness products.");
  
  // Using the official WhatsApp API link format
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.12, 
        boxShadow: '0 20px 40px -10px rgba(37, 211, 102, 0.35)' 
      }}
      whileTap={{ scale: 0.95 }}
      // Fixed positioning and styling
      className="fixed bottom-8 right-6 z-[9999] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center border-none cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
      
      {/* Optional: Simple pulse effect to show it's interactive */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
}