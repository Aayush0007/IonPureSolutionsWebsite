// src/data/products.js

import softner1 from "../assets/Products/Electric Water Softner/1WaterSoftner.png";

import h2_1 from "../assets/Products/H2/1H2.png";
import h2_2 from "../assets/Products/H2/2H2.jpg";
import h2_3 from "../assets/Products/H2/3H2.jpg";

import h2Pro1 from "../assets/Products/H2 Pro/1H2Pro.jpeg";
import h2Pro2 from "../assets/Products/H2 Pro/2H2Pro.jpg";
import h2Pro3 from "../assets/Products/H2 Pro/3H2Pro.jpg";
import h2Pro4 from "../assets/Products/H2 Pro/4H2Pro.jpg";
import h2Pro5 from "../assets/Products/H2 Pro/5H2Pro.jpg";

import ipFlow1 from "../assets/Products/IP FLOW/1IPflow.png";

import flowPlus1 from "../assets/Products/IP FLOW PLUS/1FlowPlus.png";

import flowMax1 from "../assets/Products/IP FLOW MAX/1FlowMax.png";

export const PRODUCTS = [
  {
    id: "flow",
    name: "ION PURE FLOW",
    category: "Alkaline Water Ionizer",
    thumbnail: ipFlow1,
    gallery: [ipFlow1],
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
    gallery: [flowPlus1],
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
    gallery: [flowMax1],
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
    gallery: [h2_1, h2_2, h2_3],
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
    gallery: [h2Pro1, h2Pro2, h2Pro3, h2Pro4, h2Pro5],
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
    gallery: [softner1],
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