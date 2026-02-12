import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Activity } from 'lucide-react';
import { KNOWLEDGE_BASE } from '../../data/knowledgeBase';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! I'm your Ion Pure assistant. How may I help you with alkaline water, hydrogen bottles, or wellness today?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simple keyword matching from knowledge base
    setTimeout(() => {
      let reply = "I'm not sure about that — would you like to speak with a human advisor on WhatsApp?";

      const lowerInput = input.toLowerCase();

      for (const entry of KNOWLEDGE_BASE) {
        if (entry.trigger.some((t) => lowerInput.includes(t.toLowerCase()))) {
          reply = entry.response;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-blue-100/70 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <Activity size={18} />
                </div>
                <div>
                  <h4 className="font-semibold">Ion Pure Assistant</h4>
                  <p className="text-xs opacity-90">Ask anything about our products</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto max-h-[420px] space-y-5 bg-slate-50/40">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white shadow-sm rounded-bl-none border border-blue-50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-blue-100/60 bg-white flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pH, hydrogen levels, installation..."
                className="flex-1 px-5 py-3.5 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                type="submit"
                className="p-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-5 rounded-full shadow-2xl shadow-blue-300/40 hover:shadow-blue-400/50 transition-all"
        aria-label="Open chat assistant"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}