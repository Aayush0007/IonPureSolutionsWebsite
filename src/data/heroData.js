// src/data/heroData.js
import h2_1 from "../assets/HeroProducts/4.png";
import h2Pro1 from "../assets/HeroProducts/5.png"; 
import ipFlow1 from "../assets/HeroProducts/1.png";
import flowPlus1 from "../assets/HeroProducts/2.png";
import flowMax1 from "../assets/HeroProducts/3.png";
import Conditioner from "../assets/HeroProducts/6.png";

export const heroProducts = [
  { id: "flow", src: ipFlow1, alt: "ION PURE FLOW" },
  { id: "flow-plus", src: flowPlus1, alt: "ION PURE FLOW PLUS" },
  { id: "flow-max", src: flowMax1, alt: "ION PURE FLOW MAX" },
  { id: "ips-h2", src: h2_1, alt: "IPS H₂" },
  { id: "ips-h2-pro", src: h2Pro1, alt: "IPS H₂ PRO" },
  { id: "ips-water-conditioner", src: Conditioner, alt: "WATER CONDITIONER" },
];