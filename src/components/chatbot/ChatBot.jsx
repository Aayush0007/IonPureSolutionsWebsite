import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Activity,
  BrainCircuit,
} from "lucide-react";
import { KNOWLEDGE_BASE } from "../../data/knowledgeBase";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Namaste! I'm your Ion Pure AI guide. How can I assist with your hydration journey today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  // Levenshtein Logic
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
          if (lowerInput === triggerLower) {
            highestScore = 999;
            bestMatch = entry;
          } else if (lowerInput.includes(triggerLower)) {
            const score = triggerLower.length;
            if (score > highestScore) {
              highestScore = score;
              bestMatch = entry;
            }
          }
        });
      });

      if (highestScore < 3 && lowerInput.length > 3) {
        const fuzzyEntry = KNOWLEDGE_BASE.find((e) =>
          e.trigger.some((t) => levenshtein(lowerInput, t.toLowerCase()) <= 2),
        );
        if (fuzzyEntry) bestMatch = fuzzyEntry;
      }

      if (bestMatch) {
        const reply = Array.isArray(bestMatch.response)
          ? bestMatch.response[Math.floor(Math.random() * bestMatch.response.length)]
          : bestMatch.response;
        setMessages((prev) => [...prev, { role: "bot", text: reply }]);
        setFallbackCount(0);
      } else {
        if (fallbackCount === 0) {
          setMessages((prev) => [...prev, { role: "bot", text: "Hmm… thoda sa samajh nahi aaya 😅 Products, benefits, ya price ke baare mein poocho?" }]);
          setFallbackCount(1);
        } else {
          setMessages((prev) => [...prev, { role: "bot", text: "Chalo expert se baat karwa deta hoon! 😊 WhatsApp: +91 8130134145" }]);
          setFallbackCount(0);
        }
      }
      setIsLoading(false);
    }, 400); // Reduced delay for faster feel
  };

  return (
    <div className="relative flex flex-col items-end selection:bg-ionBlue/20 group z-[1000]">
      {/* ☁️ HOVER LABEL - Desktop Only */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 0 }} // Hidden by default
            whileHover={{ opacity: 1, scale: 1, x: 0 }} // Visible on hover
            className="hidden md:flex mb-4 mr-2 cursor-pointer items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl rounded-br-none transition-all group-hover:opacity-100"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ionBlue/10 text-ionBlue">
              <BrainCircuit size={16} />
            </div>
            <span className="text-sm font-bold text-ionMidnight whitespace-nowrap">
              Ask Ion Pure AI anything
            </span>
            {/* Simple Tail */}
            <div 
                className="absolute -bottom-1.5 right-0 w-4 h-4 bg-white/90 border-r border-b border-white/40 rotate-[15deg]"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🤖 CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 w-[92vw] max-w-[380px] h-[70vh] max-h-[580px] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-ionMidnight to-ionBlue text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <h4 className="text-xs font-black uppercase tracking-widest">Ion Pure AI</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto bg-slate-50/50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-ionBlue text-white rounded-br-none shadow-md"
                        : "bg-white text-ionMidnight rounded-bl-none border border-gray-100 shadow-sm whitespace-pre-line"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1 ml-2">
                  <span className="w-1.5 h-1.5 bg-ionBlue/40 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-ionBlue/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-ionBlue/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-white">
              {["Products", "Benefits", "Price"].map((txt) => (
                <button
                  key={txt}
                  onClick={() => handleSend(null, txt)}
                  className="px-3 py-1 rounded-full border border-ionBlue/10 text-[10px] font-bold uppercase text-ionBlue hover:bg-ionBlue hover:text-white transition-colors"
                >
                  {txt}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-50 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask us anything..."
                className="flex-1 px-4 py-2 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-ionBlue/20"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-ionBlue text-white rounded-xl flex items-center justify-center disabled:opacity-50 transition-all active:scale-90"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-ionMidnight to-ionBlue text-white shadow-2xl flex items-center justify-center relative"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        {!isOpen && (
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
        )}
      </motion.button>
    </div>
  );
}