import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Activity, Sparkles } from "lucide-react";
import { KNOWLEDGE_BASE } from "../../data/knowledgeBase";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Namaste! I'm your Ion Pure assistant 😊 How can I help you with alkaline water, hydrogen bottles, or wellness today?",
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
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Levenshtein (unchanged)
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
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    return matrix[b.length][a.length];
  };

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
      let currentTopic = null;

      const entry = KNOWLEDGE_BASE.find((e) =>
        e.trigger.some((t) => {
          const cleanedTrigger = t.toLowerCase();
          const distance = levenshtein(lowerInput, cleanedTrigger);
          const isCloseEnough = distance <= 3 || lowerInput.includes(cleanedTrigger);
          if (isCloseEnough) {
            currentTopic = t;
            return true;
          }
          return false;
        })
      );

      if (entry) {
        reply = entry.response;
        if (lastTopic && Math.random() > 0.6) {
          reply = `Continuing from ${lastTopic}: ${reply}`;
        }
        matched = true;
        setLastTopic(currentTopic);
      }

      if (!matched && /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}]/u.test(input)) {
        reply = "Haha, loving the energy! 😂 What's making you smile today — or shall we talk hydrogen water?";
        matched = true;
      }

      const badWords = ["fuck", "shit", "asshole", "bitch", "idiot", "stupid", "bakwas", "bewakoof"];
      if (!matched && badWords.some((w) => lowerInput.includes(w))) {
        reply = "Arre yaar, thoda chill karo 😅 I'm just here to help with better water & wellness. Kya baat hai — batao?";
        matched = true;
      }

      if (!matched) {
        if (lowerInput.includes("talk") || lowerInput.includes("speak") || lowerInput.includes("chat")) {
          reply = "Haan ji, full-on baat karte hain! 😄 Ask me about pH, ORP, hydrogen PPB, products — ya kuch bhi wellness se related!";
          matched = true;
        } else if (fallbackCount === 0) {
          reply = "Hmm… thoda sa samajh nahi aaya 😅 Kya poochna chahte ho? Products, benefits, price, contact — ya kuch aur?";
          setFallbackCount(1);
        } else if (fallbackCount === 1) {
          reply = "Ab bhi nahi pakda? No tension! 😊 Try saying 'products', 'benefits', 'price' ya 'whatsapp' — ya seedha expert se connect kar du?";
          setFallbackCount(2);
        } else {
          reply = "Lagta hai aaj mood thoda alag chal raha hai 😂 Chalo reset karte hain — type 'products' for list or 'help' to see what I can do. Ya WhatsApp pe baat karein? +91 8130134145";
          setFallbackCount(0);
        }
      } else {
        setFallbackCount(0);
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply || "I'm still learning — connecting you to a human expert soon!" },
      ]);
      setIsLoading(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      {/* Floating label */}
      <AnimatePresence>
        {!isOpen && showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              boxShadow: [
                "0 6px 20px rgba(44, 93, 167, 0.12)",
                "0 10px 30px rgba(44, 93, 167, 0.28)",
                "0 6px 20px rgba(44, 93, 167, 0.12)",
              ],
            }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              boxShadow: { duration: 3, repeat: Infinity, repeatType: "reverse" },
            }}
            className={`
              mb-5 relative
              px-5 py-3
              bg-white/85 backdrop-blur-xl
              text-[#1A365D] font-medium text-sm sm:text-base
              rounded-xl shadow-xl border border-[#2C5DA7]/20
              flex items-center gap-3
              max-w-[260px] sm:max-w-none
            `}
          >
            <Sparkles size={16} className="text-[#7CB35B] animate-pulse" />
            <span className="flex-1">Ask Ion Pure AI anything</span>
            <button
              onClick={() => setShowLabel(false)}
              className="
                p-1.5 rounded-full 
                hover:bg-gray-200/60 transition-colors
                text-gray-600 hover:text-[#1A365D]
              "
              aria-label="Hide assistant prompt"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className={`
              mb-4 w-[90vw] max-w-[380px] sm:w-96 
              h-[80vh] max-h-[85vh] sm:h-[70vh] sm:max-h-[620px]
              bg-white rounded-3xl shadow-2xl 
              border border-blue-100/60 overflow-hidden flex flex-col
            `}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#2C5DA7] to-[#1A365D] p-4 sm:p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/12 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Activity size={18} className="text-[#7CB35B]" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm sm:text-base italic leading-none">
                    Ion Pure AI
                  </h4>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-75 mt-0.5">
                    Your Wellness Buddy
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto bg-gradient-to-b from-[#F8FAFC] to-white space-y-4 sm:space-y-5">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[82%] px-4 py-3 rounded-2xl text-sm sm:text-base leading-relaxed font-medium shadow-sm
                      ${msg.role === "user"
                        ? "bg-[#2C5DA7] text-white rounded-br-none"
                        : "bg-white text-[#1A365D] rounded-bl-none border border-gray-200/80 whitespace-pre-line"  // ← THIS LINE FIXES IT
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[82%] px-4 py-3 rounded-2xl text-sm bg-white text-gray-500 rounded-bl-none border border-gray-200 shadow-sm">
                    Typing...
                  </div>
                </div>
              )}

              {/* Quick suggestions */}
              {!isLoading && messages.length > 1 && messages[messages.length - 1].role === "bot" && (
                <div className="flex flex-wrap gap-2 mt-3 justify-start">
                  {["products", "benefits", "price", "contact"].map((q) => (
                    <button
                      key={q}
                      onClick={() => setInput(q)}
                      className="px-4 py-1.5 bg-blue-50/80 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-full border border-blue-200 transition-colors"
                    >
                      {q.charAt(0).toUpperCase() + q.slice(1)}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 sm:p-4 bg-white border-t border-gray-100 flex gap-2 sm:gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pH, hydrogen, products..."
                className="flex-1 px-4 sm:px-5 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#2C5DA7]/30 transition-all outline-none text-[#1A365D]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#2C5DA7] text-white rounded-2xl flex items-center justify-center hover:bg-[#1A365D] transition-all disabled:opacity-50 active:scale-95 shadow-md"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          aria-label="Open chat assistant"
        >
          <div className="absolute inset-0 bg-[#2C5DA7] blur-xl opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-700" />
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1A365D] to-[#2C5DA7] text-white shadow-2xl border border-white/10 group-hover:border-[#2C5DA7]/60 transition-all duration-300">
            {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
            <Sparkles
              size={14}
              className="absolute -top-1 -right-1 text-[#7CB35B] opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
}