// src/data/products.js
//Electric Water Softner Images
import softner1 from "../assets/Products/Electric Water Softner/Main.jpg";
import softner2 from "../assets/Products/Electric Water Softner/2.jpg";
import softner3 from "../assets/Products/Electric Water Softner/3.jpg";
import softner4 from "../assets/Products/Electric Water Softner/4.jpg";
import softner5 from "../assets/Products/Electric Water Softner/5.jpg";
import softner6 from "../assets/Products/Electric Water Softner/6.jpg";
import softner7 from "../assets/Products/Electric Water Softner/7.jpg";
import softner8 from "../assets/Products/Electric Water Softner/8.jpg";

//H2 Images
import h2_1 from "../assets/Products/H2/main image.png";
import h2_2 from "../assets/Products/H2/1.png";
import h2_3 from "../assets/Products/H2/2.jpg";
import h2_4 from "../assets/Products/H2/3.jpg";
import h2_5 from "../assets/Products/H2/4.jpg";
import h2_6 from "../assets/Products/H2/5.jpg";
import h2_7 from "../assets/Products/H2/6.jpg";

//H2 Pro
import h2Pro1 from "../assets/Products/H2 Pro/Main.jpg";
import h2Pro2 from "../assets/Products/H2 Pro/2.jpg";
import h2Pro3 from "../assets/Products/H2 Pro/3.jpg";
import h2Pro4 from "../assets/Products/H2 Pro/4.jpg";
import h2Pro5 from "../assets/Products/H2 Pro/5.jpg";
import h2Pro6 from "../assets/Products/H2 Pro/6.jpg";
import h2Pro7 from "../assets/Products/H2 Pro/7.jpg";

//IP Flow
import ipFlow1 from "../assets/Products/IP FLOW/1.jpg";
import ipFlow2 from "../assets/Products/IP FLOW/2.jpg";
import ipFlow3 from "../assets/Products/IP FLOW/3.jpg";
import ipFlow4 from "../assets/Products/IP FLOW/4.jpg";
import ipFlow5 from "../assets/Products/IP FLOW/5.jpg";
import ipFlow6 from "../assets/Products/IP FLOW/6.jpg";
import ipFlow7 from "../assets/Products/IP FLOW/7.jpg";

//IP Flow Plus
import flowPlus1 from "../assets/Products/IP FLOW PLUS/1.jpg";
import flowPlus2 from "../assets/Products/IP FLOW PLUS/2.jpg";
import flowPlus3 from "../assets/Products/IP FLOW PLUS/3.jpg";
import flowPlus4 from "../assets/Products/IP FLOW PLUS/4.jpg";
import flowPlus5 from "../assets/Products/IP FLOW PLUS/5.jpg";
import flowPlus6 from "../assets/Products/IP FLOW PLUS/6.jpg";
import flowPlus7 from "../assets/Products/IP FLOW PLUS/7.jpg";
import flowPlus8 from "../assets/Products/IP FLOW PLUS/8.jpg";

//IP Flow Max
import flowMax1 from "../assets/Products/IP FLOW MAX/1.jpg";
import flowMax2 from "../assets/Products/IP FLOW MAX/2.jpg";
import flowMax3 from "../assets/Products/IP FLOW MAX/3.jpg";
import flowMax4 from "../assets/Products/IP FLOW MAX/4.jpg";
import flowMax5 from "../assets/Products/IP FLOW MAX/5.jpg";
import flowMax6 from "../assets/Products/IP FLOW MAX/6.jpg";
import flowMax7 from "../assets/Products/IP FLOW MAX/7.jpg";
import flowMax8 from "../assets/Products/IP FLOW MAX/8.jpg";
import flowMax9 from "../assets/Products/IP FLOW MAX/9.jpg";

// Reviews
import h2ProReviewVid from "../assets/Products/H2 Pro/H2ProReview.mp4";
import { TESTIMONIALS } from "./testimonials";

export const PRODUCTS = [
  {
    id: "flow",
    name: "ION PURE FLOW",
    category: "Alkaline Water Ionizer",
    thumbnail: ipFlow1,
    gallery: [ipFlow1, ipFlow2, ipFlow3, ipFlow4, ipFlow5, ipFlow6, ipFlow7],
    shortDescription: "Reliable everyday alkaline water ionizer with 4.3-inch display and flexible plate options.",
    description: "ION PURE FLOW is a reliable alkaline water ionizer delivering ionized, alkaline, antioxidant, hydrogen-rich, and micro-clustered water suitable for daily use.",
    tagline: "Trusted Daily Wellness Companion",
    technicalSpecifications: {
      "Input Power": "230 V",
      "Standby Power": "24V DC, 3A",
      "Input TDS": "70-150",
      "Net Weight": "12 kg",
      "Body Size": "18 x 34 x 36 cm",
      "Screen Type": "4.3 Inch",
      "Plates": "Titanium Plates(Size: 50 x 100 mm) with 1-micron Platinum Coating",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5",
      "ORP Level": "Up to -600 mV"
    },
    keyFeatures: [
      "Produces ionized, alkaline, antioxidant, hydrogen-rich water",
      "Compact 4.3-inch display",
      "Titanium Plates(Size: 50 x 100 mm) with 1-micron Platinum Coating",
      "Efficient standby power"
    ],
    wellnessBenefits: [
      "Supports improved hydration with micro-clustered water",
      "Offers antioxidant support through hydrogen-rich properties",
      "Contributes to general wellness via alkaline ionization"
    ]
  },
  {
    id: "flow-plus",
    name: "ION PURE FLOW PLUS",
    category: "Alkaline Water Ionizer",
    thumbnail: flowPlus1,
    gallery: [flowPlus1, flowPlus2, flowPlus3, flowPlus4, flowPlus5, flowPlus6, flowPlus7, flowPlus8 ],
    shortDescription: "Compact and efficient ionizer ideal for homes and offices with space constraints.",
    description: "ION PURE FLOW PLUS is a compact alkaline water ionizer providing balanced pH options and efficient design suitable for home or office use.",
    tagline: "Elegant Compact Power",
    technicalSpecifications: {
      "Input Power": "230 W (Advance SMPS)",
      "Standby Power": "24V DC, 3A",
      "Input TDS": "70-150",
      "Net Weight": "6 kg",
      "Body Size": "18 x 27 x 33 cm",
      "Screen Type": "7 inch Screen Touch Display",
      "Plates": "Available in 3 plates/5 plates/7 Plates",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5",
      "ORP Level": "Up to -700 mV"
    },
    keyFeatures: [
      "Compact body size for easier placement",
      "Touch Display interface",
      "Titanium Plates(Size: 50 x 100 mm) with 1-micron Platinum Coating",
      "Lower net weight of 6 kg"
    ],
    wellnessBenefits: [
      "Aids in better hydration with ionized alkaline water",
      "Supports general wellness through balanced pH levels"
    ]
  },
  {
    id: "flow-max",
    name: "ION PURE FLOW MAX",
    category: "Alkaline Water Ionizer",
    thumbnail: flowMax1,
    gallery: [flowMax1, flowMax2, flowMax3, flowMax4, flowMax5, flowMax6, flowMax7, flowMax8, flowMax9],
    shortDescription: "Advanced flagship alkaline water ionizer with 10-inch touch display and maximum performance for daily wellness.",
    description: "ION PURE FLOW MAX is an advanced alkaline water ionizer that produces ionized, hydrogen-rich water with strong antioxidant properties through electrolysis. It features a large touch screen and multiple plate options for customizable pH and ORP levels.",
    tagline: "The Ultimate Hydration Masterpiece",
    technicalSpecifications: {
      "Input Power": "230 W",
      "Standby Power": "24V DC, 3A",
      "Input TDS": "70-150",
      "Net Weight": "12 kg",
      "Body Size": "18 x 34 x 36 cm",
      "Screen Type": "10 Inch Touch Display",
      "Plates": "Titanium Plates(Size: 70 x 140 mm) with 2-micron Platinum Coating",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5 / 11.5",
      "ORP Level": "Up to -800 mV"
    },
    keyFeatures: [
      "10 Inch Touch Display for easy operation",
      "Titanium Plates(Size: 70 x 140 mm) with 2-micron Platinum Coating configuration",
      "Strong negative ORP up to -800 mV",
      "Multiple pH levels up to 11.5",
      "High-performance ionization",
      "Energy-efficient standby mode"
    ],
    wellnessBenefits: [
      "Supports better hydration through ionized water",
      "Provides antioxidant properties via negative ORP",
      "Promotes general wellness with micro-clustered water structure"
    ]
  },
  {
    id: "ips-h2",
    name: "H₂",
    category: "Hydrogen Water Bottle",
    thumbnail: h2_1,
    gallery: [h2_1, h2_2, h2_3, h2_4, h2_5, h2_6, h2_7],
    shortDescription: "Rechargeable hydrogen bottle with Platinum-coated Titanium electrodes.",
    description: "IPS H₂ is a high-quality hydrogen-rich water bottle featuring a Tritan body and advanced electrolysis plates for consistent antioxidant support.",
    tagline: "Everyday Hydrogen Companion",
    technicalSpecifications: {
      "Hydrogen Output": "1500-2000 PPB",
      "ORP": "Up to -350 mV",
      "Capacity": "400 ml",
      "Material": "Tritan Body with Platinum Coated Titanium Electrodes",
      "Input Power": "USB Rechargeable Battery",
      "Dimensions": "8 cm (L) x 8 cm (W) x 24.1 cm (H)",
      "Weight": "Approx. 350 g",
      "Screen Type": "Button"
    },
    keyFeatures: [
      "Larger 400 ml capacity",
      "Platinum-Coated Titanium Electrolysis Plates",
      "BPA-Free Tritan body",
      "USB rechargeable for portability",
      "High hydrogen concentration"
    ],
    wellnessBenefits: [
      "Supports better hydration",
      "Provides general antioxidant support"
    ]
  },
  {
    id: "ips-h2-pro",
    name: "H₂ Pro",
    category: "Hydrogen Water Bottle",
    thumbnail: h2Pro1,
    gallery: [h2Pro1, h2Pro2, h2Pro3, h2Pro4, h2Pro5, h2Pro6, h2Pro7],
    reviews: [
      {
        video: h2ProReviewVid,
        ...TESTIMONIALS.find(t => t.id === 1) 
      }
    ],
    shortDescription: "Professional grade hydrogen bottle with SPE & PEM technology.",
    description: "The H₂ Pro utilizes advanced SPE & PEM electrolysis technology and a premium platinum carbon catalyst coating to deliver pure 99.99% hydrogen water without residual gases.",
    tagline: "Elite Hydrogen Performance",
    technicalSpecifications: {
      "Hydrogen Concentration": "1500-5000 PPB",
      "ORP": "Up to -650 mV",
      "Technology": "Advanced SPE & PEM electrolysis",
      "Capacity": "280 ml",
      "Electrodes": "Medical grade Titanium",
      "Purity": "99.99% Pure H2 (No Chlorine/Ozone)",
      "Screen": "LED Display Screen"
    },
    keyFeatures: [
      "No calcification or degradation of plates",
      "Premium platinum carbon Catalyst coating",
      "Intelligent Switch & LED Display",
      "Superior quality membrane",
      "Zero residual gas (No Ozone/Chlorine)"
    ],
    wellnessBenefits: [
      "High-concentration antioxidant support",
      "Improved cellular hydration",
      "Medical-grade safety standards"
    ]
  },
  
  {
    id: "ips-water-softener",
    name: "Ion Pure Water Softner",
    category: "Hydrogen Water Softner",
    thumbnail: softner1,
    gallery: [softner1, softner2, softner3, softner4, softner5, softner6, softner7, softner8],
    shortDescription: "High-capacity Cathode-Anode technology water softener.",
    description: "An efficient industrial-grade water softener featuring Cathode-Anode technology, 5000 LPH capacity, and an intelligent 4.3\" screen display.",
    tagline: "Advanced Scale Protection",
    technicalSpecifications: {
      "Capacity": "5000 LPH",
      "Technology": "Cathode-Anode Technology",
      "Power Settings": "Low | Medium | High",
      "Power Consumption": "1 unit per 2 hours",
      "Input Voltage": "230 V ac",
      "Rod Size": "30 x 1000 mm",
      "Pipe Inlet/Outlet": "1.5 inch",
      "Screen Type": "4.3\" Screen Display",
      "Weight": "10-12 Kg"
    },
    keyFeatures: [
      "Auto-Clean Mode enabled",
      "High-flow 5000 LPH capacity",
      "Adjustable power settings",
      "Real-time display screen",
      "Compact and efficient design"
    ],
    wellnessBenefits: [
      "Reduces scale buildup in plumbing",
      "Protects appliances from hard water damage",
      "Provides softened water for skin and hair"
    ]
  }
];