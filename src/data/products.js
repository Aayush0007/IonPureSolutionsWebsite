// src/data/products.js

import softner1 from "../assets/Products/Electric Water Softner/1WaterSoftner.jpg";

import h2_1 from "../assets/Products/H2/1H2.png";
import h2_2 from "../assets/Products/H2/2H2.jpg";
import h2_3 from "../assets/Products/H2/3H2.jpg";

import h2Pro1 from "../assets/Products/H2 Pro/1H2Pro.jpeg";
import h2Pro2 from "../assets/Products/H2 Pro/2H2Pro.jpg";
import h2Pro3 from "../assets/Products/H2 Pro/3H2Pro.jpg";
import h2Pro4 from "../assets/Products/H2 Pro/4H2Pro.jpg";
import h2Pro5 from "../assets/Products/H2 Pro/5H2Pro.jpg";

import ipFlow1 from "../assets/Products/IP FLOW/1IPflow.jpg";

import flowPlus1 from "../assets/Products/IP FLOW PLUS/1FlowPlus.jpg";

import flowMax1 from "../assets/Products/IP FLOW MAX/1FlowMax.jpg";

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
      "Plates": "Available in 7/9/11",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5",
      "ORP Level": "Up to -600 mV"
    },
    keyFeatures: [
      "Produces ionized, alkaline, antioxidant, hydrogen-rich water",
      "Compact 4.3-inch display",
      "Available in 7/9/11 plates",
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
      "Input Power": "230 W",
      "Standby Power": "24V DC, 3A",
      "Input TDS": "70-150",
      "Net Weight": "10 kg",
      "Body Size": "18 x 27 x 33 cm",
      "Screen Type": "Touch Display",
      "Plates": "Available in 7/9/11",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5",
      "ORP Level": "Up to -600 mV"
    },
    keyFeatures: [
      "Compact body size for easier placement",
      "Touch Display interface",
      "Available in 7/9/11 plates",
      "Lower net weight of 10 kg"
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
      "Plates": "Available in 7/9/11",
      "pH Levels": "7.5 / 8.5 / 9.5 / 10.5 / 11.5",
      "ORP Level": "Up to -800 mV"
    },
    keyFeatures: [
      "10 Inch Touch Display for easy operation",
      "Available in 7/9/11 plates configuration",
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
    name: "H2",
    category: "Hydrogen Water Bottle",
    thumbnail: h2_1,
    gallery: [h2_1, h2_2, h2_3],
    shortDescription: "Generous capacity stainless steel and glass hydrogen bottle.",
    description: "IPS H2 is a stainless steel and glass hydrogen-rich water bottle for generating hydrogen-infused water automatically with balanced capacity.",
    tagline: "Everyday Hydrogen Companion",
    technicalSpecifications: {
      "Hydrogen Concentration": "1500-2000 PPB",
      "Capacity": "460 ml",
      "Material": "Stainless steel + high borosilicate glass",
      "Operation": "Fully automatic"
    },
    keyFeatures: [
      "Larger 460 ml capacity",
      "Durable stainless steel + glass construction",
      "Fully automatic operation"
    ],
    wellnessBenefits: [
      "Supports better hydration",
      "Provides general antioxidant support"
    ]
  },
  {
    id: "ips-h2-pro",
    name: "H2 Pro",
    category: "Hydrogen Water Bottle",
    thumbnail: h2Pro1,
    gallery: [h2Pro1, h2Pro2, h2Pro3, h2Pro4, h2Pro5],
    shortDescription: "High-concentration durable hydrogen bottle with premium build quality.",
    description: "IPS H2 Pro is a durable hydrogen-rich water bottle producing high-concentration hydrogen water in a robust, eco-friendly build.",
    tagline: "Elite Hydrogen Performance",
    technicalSpecifications: {
      "Hydrogen Concentration": "2000-8000 PPB",
      "Capacity": "280 ml",
      "Material": "Stainless steel + BPA-free TRITAN + Aluminum alloy",
      "Build": "Scratch-resistant, shatter-safe, eco-friendly"
    },
    keyFeatures: [
      "Highest hydrogen output (up to 8000 PPB)",
      "Fully automatic",
      "Scratch-resistant & shatter-safe",
      "Eco-friendly materials"
    ],
    wellnessBenefits: [
      "Supports improved hydration",
      "Offers general antioxidant support"
    ]
  },
  
  {
    id: "ips-ht",
    name: "Ion Pure Electric Water Softner",
    category: "Hydrogen Water Bottle",
    thumbnail: softner1,
    gallery: [softner1],
    shortDescription: "Portable hydrogen-rich water bottle with inhaler feature and fully automatic operation.",
    description: "IPS-HT is a portable hydrogen-rich water bottle generating hydrogen-infused water for on-the-go use. It includes an inhaler feature and fully automatic operation.",
    tagline: "Hydrogen Anytime, Anywhere",
    technicalSpecifications: {
      "Hydrogen Concentration": "1400 to 2000 PPB",
      "Capacity": "380 ml",
      "Material": "High borosilicate glass + food-grade PC",
      "Dimensions": "70 x 210 mm",
      "Colors": "Black or White",
      "Operation": "Fully automatic",
      "Accessories": "Lid + body + base + USB power cord + premium packaging"
    },
    keyFeatures: [
      "Fully automatic operation",
      "Built-in hydrogen inhaler",
      "USB charging",
      "Food-grade materials",
      "Portable design"
    ],
    wellnessBenefits: [
      "Supports better hydration with hydrogen-rich water",
      "Provides general antioxidant support"
    ]
  }
];