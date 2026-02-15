// src/data/knowledgeBase.js
export const KNOWLEDGE_BASE = [
  // --- GREETINGS & INTRO ---
  {
    trigger: [
      "hello",
      "hi",
      "hey",
      "namaste",
      "good morning",
      "good afternoon",
      "good evening",
      "hola",
      "salut",
      "kaise ho",
      "kya haal hai",
      "kya chal raha",
      "sup",
      "yo",
    ],
    response:
      "Namaste ji! 😊 Feeling fresh & hydrated today? How can your Ion Pure buddy help with alkaline magic or hydrogen power?",
  },
  {
    trigger: [
      "how are you",
      "how r u",
      "tum kaise ho",
      "aap kaise ho",
      "feeling",
    ],
    response:
      "I'm sparkling like hydrogen-rich water—full of energy! ⚡ How about you? Ready to talk pH levels or just chilling?",
  },
  {
    trigger: ["ok", "okay", "k", "kk", "achha", "thik hai"],
    response:
      "Cool cool! 😄 So... what's next? Products, benefits, or shall we dive into some wellness vibes?",
  },
  {
    trigger: ["yes", "haan", "yup", "sure", "ha ji"],
    response:
      "Awesome! 😊 Tell me more—what are you curious about today? Our Flow Max, H2 Pro, or something else?",
  },
  {
    trigger: ["no", "nahi", "nah", "nope"],
    response:
      "No worries at all! 😌 Change of mind? Just say the word—I'm here for alkaline chats whenever you're ready.",
  },
  {
    trigger: ["thank you", "thanks", "dhanyavaad", "thx", "shukriya"],
    response:
      "You're most welcome! 🙏 Anytime you need hydration tips or product info, I'm just a message away.",
  },

  // --- PRODUCT OVERVIEW & CATALOGUE ---
  {
    trigger: [
      "products",
      "product list",
      "what do you sell",
      "catalogue",
      "shop",
      "items",
      "list",
      "sab products",
      "product dikhao",
    ],
    response: `Our current wellness lineup:

Alkaline Ionizers
──────────────────────

1. FLOW MAX
   → Flagship model
   → 7–11 plates
   → pH up to 11.5
   → ORP up to -800 mV
   → 10" touch display


2. FLOW
   → Everyday reliable
   → 7–11 plates
   → pH up to 10.5
   → ORP up to -600 mV
   → 4.3" display


3. FLOW PLUS
   → Compact & lightweight (10 kg)
   → 7–11 plates
   → pH up to 10.5
   → ORP up to -600 mV


Hydrogen Bottles
──────────────────────

4. IPS-HT
   → 1400–2000 PPB
   → 380 ml glass
   → With inhaler


5. IPS H2 Pro
   → 2000–8000 PPB
   → 280 ml stainless steel
   → Durable & eco-friendly


6. IPS H2
   → 1500–2000 PPB
   → 460 ml glass + steel
   → Large daily capacity


Which one would you like to know more about?
Or just type the name for full details 😊`
  },
  {
    trigger: ["compare products", "differences", "which is best", "recommend"],
    response:
      "It depends on your needs! For high-performance home use, go with ION PURE FLOW MAX (up to -800mV ORP, 11 plates). For portability, IPS H2 Pro offers 8000 PPB hydrogen. For compact setups, ION PURE FLOW PLUS is great. Tell me more about your usage for a better recommendation.",
  },

  // --- DETAILED PRODUCT INFO: IONIZERS ---
  {
    trigger: ["flow max", "ion pure flow max", "flowmax"],
    response:
      "The ION PURE FLOW MAX is our flagship alkaline water ionizer. Key specs: 7/9/11 plates, pH 7.5-11.5, ORP up to -800mV, 10-inch touch display, 230W power. Benefits: Strong antioxidants, customizable hydration. Great for families seeking premium wellness.",
  },
  {
    trigger: ["flow", "ion pure flow"],
    response:
      "The ION PURE FLOW is a trusted companion for daily wellness. Specs: 7/9/11 plates, pH 7.5-10.5, ORP up to -600mV, 4.3-inch display, 230V power. It produces ionized, hydrogen-rich water for better hydration and balance.",
  },
  {
    trigger: ["flow plus", "ion pure flow plus"],
    response:
      "The ION PURE FLOW PLUS is compact and powerful. Specs: 7/9/11 plates, pH 7.5-10.5, ORP up to -600mV, touch display, 10kg weight, size 18x27x33cm. Perfect for smaller spaces with efficient ionization.",
  },

  // --- DETAILED PRODUCT INFO: HYDROGEN BOTTLES ---
  {
    trigger: ["ips-ht", "ht", "hydrogen bottle ht"],
    response:
      "The IPS-HT is a portable hydrogen bottle with 1400-2000 PPB concentration, 380ml capacity, high borosilicate glass, fully automatic with inhaler. USB charging, available in black/white. Ideal for on-the-go antioxidant support.",
  },
  {
    trigger: ["h2 pro", "ips h2 pro", "h2pro"],
    response:
      "The IPS H2 Pro is our elite hydrogen bottle: 2000-8000 PPB, 280ml, stainless steel/BPA-free Tritan/aluminum alloy. Scratch-resistant, eco-friendly, fully automatic. Built for durability and high-performance hydration.",
  },
  {
    trigger: ["h2", "ips h2"],
    response:
      "The IPS H2 is an everyday hydrogen companion: 1500-2000 PPB, 460ml, stainless steel + high borosilicate glass, fully automatic. Larger capacity for convenient daily use and general wellness.",
  },

  // --- TECHNICAL SPECS & FEATURES ---
  {
    trigger: ["ph", "alkaline", "acidic", "levels", "ph levels"],
    response:
      "Our ionizers offer adjustable pH from 7.5 to 11.5 (depending on model). Higher pH supports alkaline benefits for wellness, while neutral is great for daily drinking. Always consult a professional for health advice.",
  },
  {
    trigger: ["orp", "antioxidant", "negative orp", "oxidation"],
    response:
      "ORP measures antioxidant potential. Our systems deliver up to -800mV (negative ORP), helping combat oxidative stress. For example, FLOW MAX hits -800mV for strong protection.",
  },
  {
    trigger: ["hydrogen", "h2", "ppb", "concentration", "hydrogen output"],
    response:
      "Hydrogen concentration varies: Ionizers produce hydrogen-rich water via electrolysis. Bottles like H2 Pro reach 8000 PPB for portable boosts. Pure H2 output up to 99.99%, no chlorine or ozone.",
  },
  {
    trigger: ["plates", "electrodes", "titanium", "platinum", "coating"],
    response:
      "We use medical-grade Titanium electrodes with Platinum Carbon Catalyst coating. Options: 7, 9, or 11 plates. No calcification for up to 5 years, no degradation for long-lasting performance.",
  },
  {
    trigger: ["micro-clustered", "micro clustering", "structure"],
    response:
      "Our ionization process creates micro-clustered water, which may improve absorption and hydration. It's part of the wellness benefits in our alkaline systems.",
  },
  {
    trigger: ["input tds", "tds", "water quality"],
    response:
      "Recommended input TDS: 70-150 for optimal performance. Ensures clean, efficient ionization without issues.",
  },
  {
    trigger: ["power", "input power", "standby"],
    response:
      "Most models use 230W input, with efficient 24V DC, 3A standby power for energy savings.",
  },

  // --- HEALTH & WELLNESS BENEFITS (GENERAL, NON-MEDICAL) ---
  {
    trigger: [
      "benefits",
      "health benefits",
      "wellness",
      "why use",
      "advantages",
    ],
    response:
      "Our products support better hydration, antioxidant properties, and balanced living. May aid skin wellness, sleep, and vitality through alkaline and hydrogen-rich water. Not a medical treatment—consult your doctor.",
  },
  {
    trigger: ["anti-aging", "skin", "sleep", "vitality"],
    response:
      "Users report improved skin hydration, better sleep, and daily energy from our hydrogen-rich water. It's about supporting overall wellness with pure, ionized hydration.",
  },

  // --- COMPANY & TRUST ---
  {
    trigger: ["company", "about us", "who we are", "mission", "vision"],
    response:
      "Ion Pure Solutions, established in 2026, focuses on wellness through alkaline ionizers and hydrogen bottles. Mission: Enhance health with quality hydration. Vision: Lead in healthy water solutions. Tagline: Change Your Water | Change Your Life.",
  },
  {
    trigger: ["where", "location", "address", "gurugram", "office"],
    response:
      "Our office is at First Floor, Block CB1, Shop No.-FF-03, Signature Global Proxima, Sector 89, Gurugram, Haryana – 122505. We're a GST-registered (06HGRPS8803R2Z2) MSME.",
  },
  {
    trigger: ["certification", "certified", "iso", "ce", "gmp", "rohs", "fcc"],
    response:
      "We're certified by MQA (UK): CE, FCC, GMP, ISO 9001, ISO 13485 (Medical Devices), ISO 14001, RoHS. Valid until 2029. Verify at www.mqacertification.com.",
  },
  {
    trigger: [
      "warranty",
      "guarantee",
      "last",
      "durability",
      "calcification",
      "degradation",
    ],
    response:
      "Plates resist calcification for up to 5 years with no degradation. We focus on high-grade components for reliability. Contact us for warranty details.",
  },
  {
    trigger: ["why choose", "trust", "quality"],
    response:
      "Choose us for premium tech, quality purity, health focus, customer service, and value. Trusted by 50,000+ families with global standards.",
  },

  // --- SALES, CONTACT & SUPPORT ---
  {
    trigger: ["price", "cost", "how much", "buy", "quote", "order", "purchase"],
    response:
      "Pricing varies by model and configuration (e.g., plates). For a personalized quote, chat with our team on WhatsApp at +91 8130134145 or email info@ionpuresolutions.com.",
  },
  {
    trigger: ["contact", "phone", "email", "whatsapp", "talk", "support"],
    response:
      "Reach us at +91 8130855487 (phone), +91 8130134145 (WhatsApp), or info@ionpuresolutions.com. We're here 24/7 for wellness support!",
  },
  {
    trigger: ["faq", "questions", "common questions"],
    response:
      "Common FAQs: How does ionization work? It uses electrolysis for alkaline water. Is it safe? Yes, medical-grade certified. For more, ask specifics or contact us.",
  },
  {
    trigger: ["complaint", "issue", "problem", "support ticket"],
    response:
      "Sorry to hear that! Please describe the issue, and I'll guide you or connect you to our support team via WhatsApp at +91 8130134145.",
  },

  // --- CASUAL / NONSENSE / PLAYFUL / Hinglish Triggers ---
  {
    trigger: ["aree", "arre", "arey", "arree", "abe", "yaar", "bhai", "bro"],
    response:
      "Arre waah! 😄 Kya baat hai? Bol na, kya chahiye—hydrogen bottle ya kuch wellness gyaan?",
  },
  {
    trigger: ["hattt", "hatt", "hutt", "hato", "bas kar", "enough"],
    response:
      "Hatt hatt! 😂 Just kidding—main toh bas help karna chahta hoon. Ab seriously, kya poochna hai?",
  },
  {
    trigger: [
      "la la la",
      "lalala",
      "blah blah",
      "bla bla",
      "whatever",
      "bored",
    ],
    response:
      "La la la yourself! 🎶 Feeling playful today? Come on, tell me something real—products, pH, or just why you're laughing? 😏",
  },
  {
    trigger: ["😂", "🤣", "haha", "lol", "funny", "mazaa aa raha"],
    response:
      "Hahaha same here! 😂 What's making you laugh? Share karo, ya phir hydrogen water ke benefits sunau?",
  },
  {
    trigger: [
      "boring",
      "booring",
      "bor",
      "bore",
      "boring ho",
      "you are boring",
    ],
    response:
      "Ouch! 😅 Am I boring? Let me spice it up—did you know our H2 Pro bottle makes 8000 PPB hydrogen? That's seriously energizing! Want to hear more or switch topics?",
  },
  {
    trigger: ["funny", "mazedaar", "hasi aa rahi", "you are funny"],
    response:
      "Hehe thank you! 😜 I try to keep the vibes light like micro-clustered water. Ab batao—what's next on your mind?",
  },

  // --- HANDLING RUBBISH/OFF-TOPIC/ABUSE ---

  {
    trigger: [
      "fuck",
      "f**k",
      "shit",
      "asshole",
      "bitch",
      "idiot",
      "stupid",
      "off",
      "fuck off",
      "bakwas",
      "bewakoof",
      "nikal",
    ],
    response:
      "Arre arre, thoda chill! 😅 No need for that—I'm just a friendly hydration helper. Frustrated? Tell me what's up, I'll sort it out nicely.",
  },
  {
    trigger: ["fuck off dear", "fuck you", "go away", "band kar"],
    response:
      "Okay okay, message received! 😌 If you change your mind and want real talk about better water, I'm still here. Take care!",
  },
  {
    trigger: ["test", "random", "blah", "nonsense", "asdf"], // For nonsense
    response:
      "That seems a bit random! If you're testing me, I'm ready. Ask about pH levels, products, or anything wellness-related.",
  },
  // Add more for off-topic, e.g., weather, but redirect
  {
    trigger: ["weather", "news", "joke", "fun"],
    response:
      "Fun question! But I'm specialized in Ion Pure wellness. For example, did you know hydrogen water can boost vitality? What about our products?",
  },
  {
    trigger: [
      "how are you",
      "how r u",
      "tum kaise ho",
      "aap kaise ho",
      "feeling",
    ],
    response: [
      // Array!
      "I'm sparkling like hydrogen-rich water—full of energy! ⚡ How about you?",
      "Super hydrated and ready to chat! 😊 Kaise ho aap?",
    ],
  },
  // In handleSend: if Array, reply = entry.response[Math.floor(Math.random() * entry.response.length)];

  // New triggers
  {
    trigger: [
      "speek",
      "speak properly",
      "properly",
      "rephrase",
      "samajh nahi aaya",
    ],
    response:
      "Oops, maybe a typo? 😅 Let me help— what did you mean? Try again, I'll get it this time!",
  },
  {
    trigger: ["quiet", "be quiet", "chup", "shut up", "silent"],
    response:
      "Shhh... okay, going quiet mode! 🤫 But if you need me, just type anything. Hydration tips waiting!",
  },
];
