// src/data/heroData.js
import h2_1 from "../assets/HeroProducts/ION PURE H2.png";
import h2Pro1 from "../assets/HeroProducts/ION PURE H2 PRO.png"; 
import ipFlow1 from "../assets/HeroProducts/ION PURE FLOW.png";
import flowPlus1 from "../assets/HeroProducts/ION PURE FLOW PLUS.png";
import flowMax1 from "../assets/HeroProducts/ION PURE FLOW MAX.png";

export const heroProducts = [
  { id: "flow-max", src: flowMax1, alt: "ION PURE FLOW MAX" },
  { id: "ips-h2-pro", src: h2Pro1, alt: "IPS H₂ PRO" },
  { id: "flow-plus", src: flowPlus1, alt: "ION PURE FLOW PLUS" },
  { id: "ips-h2", src: h2_1, alt: "IPS H₂" },
  { id: "flow", src: ipFlow1, alt: "ION PURE FLOW" },
];