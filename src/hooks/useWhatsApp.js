// src/components/ui/WhatsAppButton.jsx (enhanced version)
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '918130134145'; // without +

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.12, boxShadow: '0 20px 40px -10px rgba(37, 211, 102, 0.35)' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-8 right-6 z-[1000] bg-[#25D366] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:shadow-green-400/40"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
    </motion.button>
  );
}