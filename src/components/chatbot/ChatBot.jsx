import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Activity, Sparkles } from "lucide-react";
import { KNOWLEDGE_BASE } from "../../data/knowledgeBase";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! I'm your Ion Pure assistant. How may I help you with alkaline water, hydrogen bottles, or wellness today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [fallbackCount, setFallbackCount] = useState(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const lowerInput = input.trim().toLowerCase();
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      let reply = "";
      let matched = false;

      // 1. Precise Knowledge Base Match (flexible: any trigger in input)
      const entry = KNOWLEDGE_BASE.find((e) =>
        e.trigger.some((t) => lowerInput.includes(t))
      );

      if (entry) {
        reply = entry.response;
        matched = true;
      }

      // 2. Special Handling for Abuse/Nonsense (if not matched)
      const badWords = ["fuck", "shit", "asshole", "bitch", "idiot", "stupid"]; // Expand as needed
      if (!matched && badWords.some((word) => lowerInput.includes(word))) {
        reply = "Let's keep things positive! I'm here for Ion Pure questions. How about our hydrogen bottles?";
        matched = true;
      }

      // 3. Contextual Fallbacks
      if (!matched) {
        if (lowerInput.includes("talk") || lowerInput.includes("speak") || lowerInput.includes("chat")) {
          reply = "Sure, let's chat! I'm the Ion Pure AI—ask about pH levels, -800mV ORP, or our 8000 PPB hydrogen bottles for some smart talk.";
          matched = true;
        } else if (fallbackCount >= 2) {
          // Third failure: Strong redirect
          reply = "Hmm, I'm having trouble understanding. Let's try our product list or contact an expert on WhatsApp at +91 8130134145. What do you say?";
          setFallbackCount((prev) => prev + 1);
        } else if (fallbackCount === 1) {
          // Second failure: Suggest topics
          reply = "Didn't catch that—maybe a typo? Try asking about 'products', 'benefits', or 'contact'. I can explain our Flow Max ionizer!";
          setFallbackCount((prev) => prev + 1);
        } else {
          // First failure: Gentle guide
          reply = "Not sure about that one. Could you rephrase? I'm great at wellness topics like alkaline water or hydrogen benefits.";
          setFallbackCount((prev) => prev + 1);
        }
      }

      if (matched) {
        setFallbackCount(0);
      }

      setMessages((prev) => [...prev, { role: "bot", text: reply || "I'm still learning—let's connect you to a human expert!" }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="relative flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[85vw] sm:w-96 bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(26,54,93,0.15)] border border-blue-50 overflow-hidden flex flex-col"
          >
            {/* Header - Brand Aligned */}
            <div className="bg-gradient-to-br from-[#2C5DA7] to-[#1A365D] p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Activity size={20} className="text-[#7CB35B]" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm italic leading-none">
                    Ion Pure AI
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1">
                    Smart Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[400px] min-h-[300px] space-y-6 bg-[#F8FAFC]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-5 py-3.5 rounded-[1.5rem] text-sm leading-relaxed font-medium ${
                      msg.role === "user"
                        ? "bg-[#2C5DA7] text-white rounded-br-none shadow-lg shadow-blue-900/10"
                        : "bg-white text-[#1A365D] rounded-bl-none border border-gray-100 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-5 py-3.5 rounded-[1.5rem] text-sm bg-white text-[#1A365D] rounded-bl-none border border-gray-100 shadow-sm">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSend}
              className="p-4 bg-white border-t border-gray-50 flex gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pH or H₂ levels..."
                className="flex-1 px-5 py-3.5 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#2C5DA7]/10 transition-all outline-none text-[#1A365D]"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-[#2C5DA7] text-white rounded-2xl flex items-center justify-center hover:bg-[#1A365D] transition-all disabled:opacity-30 active:scale-90"
                disabled={!input.trim() || isLoading}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button - Matches WhatsApp Style */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#2C5DA7] blur-2xl opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-700" />
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-[#1A365D] text-white shadow-2xl overflow-hidden transition-all duration-700 border border-white/10 group-hover:border-[#2C5DA7]/50">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2C5DA7] to-[#1A365D]" />
          <div className="relative z-10">
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            <Sparkles
              size={12}
              className="absolute -top-2 -right-3 text-[#7CB35B] opacity-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </motion.button>
    </div>
  );
}