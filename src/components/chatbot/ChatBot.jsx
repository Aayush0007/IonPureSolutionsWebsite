import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Activity,
  Sparkles,
  BrainCircuit,
} from "lucide-react";
import { KNOWLEDGE_BASE } from "../../data/knowledgeBase";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Namaste! I'm your Ion Pure AI guide. How can I assist with your hydration journey today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastTopic, setLastTopic] = useState(null);
  const [fallbackCount, setFallbackCount] = useState(0);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Restored: Levenshtein Logic
  const levenshtein = (a, b) => {
    const matrix = Array(b.length + 1)
      .fill(null)
      .map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator,
        );
      }
    }
    return matrix[b.length][a.length];
  };

  // Restored: Full functionality handleSend
  const handleSend = (e, suggestionText = null) => {
    if (e) e.preventDefault();
    const messageText = suggestionText || input.trim();
    if (!messageText) return;

    setMessages((prev) => [...prev, { role: "user", text: messageText }]);
    setInput("");
    setIsLoading(true);

    const lowerInput = messageText.toLowerCase();

    setTimeout(() => {
      let bestMatch = null;
      let highestScore = 0;

      KNOWLEDGE_BASE.forEach((entry) => {
        entry.trigger.forEach((t) => {
          const triggerLower = t.toLowerCase();

          // Exact match gets highest priority
          if (lowerInput === triggerLower) {
            highestScore = 999;
            bestMatch = entry;
          }
          // Partial keyword match: calculate "Strength" of match
          else if (lowerInput.includes(triggerLower)) {
            const score = triggerLower.length;
            if (score > highestScore) {
              highestScore = score;
              bestMatch = entry;
            }
          }
        });
      });

      // Fuzzy logic fallback if no strong keyword was found
      if (highestScore < 3 && lowerInput.length > 3) {
        const fuzzyEntry = KNOWLEDGE_BASE.find((e) =>
          e.trigger.some((t) => levenshtein(lowerInput, t.toLowerCase()) <= 2),
        );
        if (fuzzyEntry) bestMatch = fuzzyEntry;
      }

      if (bestMatch) {
        const reply = Array.isArray(bestMatch.response)
          ? bestMatch.response[
              Math.floor(Math.random() * bestMatch.response.length)
            ]
          : bestMatch.response;

        setMessages((prev) => [...prev, { role: "bot", text: reply }]);
        setFallbackCount(0);
      } else {
        // Fallback logic
        if (fallbackCount === 0) {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              text: "Hmm… thoda sa samajh nahi aaya 😅 Products, benefits, ya price ke baare mein poocho?",
            },
          ]);
          setFallbackCount(1);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              text: "Chalo expert se baat karwa deta hoon! 😊 WhatsApp: +91 8130134145",
            },
          ]);
          setFallbackCount(0);
        }
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="relative flex flex-col items-end selection:bg-ionBlue/20">
      {/* ☁️ AESTHETIC CLOUD LABEL (Integrated Trigger) */}
      <AnimatePresence>
        {!isOpen && showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="mb-8 relative z-[1000]"
          >
            <div
              onClick={() => setIsOpen(true)}
              className="group cursor-pointer relative px-6 py-4 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(44,93,167,0.15)] rounded-[2.5rem] rounded-br-none flex items-center gap-4 hover:bg-white/90 transition-all"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ionBlue/10 text-ionBlue group-hover:rotate-[15deg] transition-transform">
                <BrainCircuit size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ionBlue/40 leading-none mb-1">
                  Ion Pure AI
                </span>
                <span className="text-sm font-bold text-ionMidnight">
                  Ask Ion Pure AI anything
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLabel(false);
                }}
                className="ml-2 p-1.5 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={14} />
              </button>
              {/* Cloud Tail */}
              <div
                className="absolute -bottom-2 right-0 w-6 h-6 bg-white/70 backdrop-blur-2xl border-r border-b border-white/40 rotate-[15deg]"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🤖 MODERN CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[92vw] max-w-[400px] h-[75vh] max-h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-[1001]"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-ionMidnight to-ionBlue text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity size={20} className="text-ionGreen" />
                <h4 className="text-sm font-black uppercase italic tracking-widest">
                  Ion Pure AI
                </h4>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/30 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm font-medium shadow-sm ${
                      msg.role === "user"
                        ? "bg-ionBlue text-white rounded-br-none"
                        : "bg-white text-ionMidnight rounded-bl-none border border-gray-100 whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="animate-pulse text-xs text-ionBlue/40 ml-2">
                  Ion Pure is thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ✨ NEW: QUICK SUGGESTION BUTTONS */}
            <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar bg-white border-t border-gray-50">
              {["Products", "Benefits", "Price", "WhatsApp"].map((txt) => (
                <button
                  key={txt}
                  onClick={() => handleSend(null, txt)}
                  className="px-4 py-1.5 rounded-full border border-ionBlue/10 text-[10px] font-black uppercase tracking-wider text-ionBlue hover:bg-ionBlue hover:text-white transition-all whitespace-nowrap"
                >
                  {txt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 bg-white flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pH, hydrogen..."
                className="flex-1 px-5 py-3 bg-gray-50 rounded-2xl text-sm outline-none focus:ring-1 focus:ring-ionBlue/20"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-12 h-12 bg-ionBlue text-white rounded-2xl flex items-center justify-center shadow-md active:scale-90"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-3xl bg-gradient-to-br from-ionMidnight to-ionBlue text-white shadow-2xl flex items-center justify-center z-[1002]"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
