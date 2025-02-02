import industrial from "../src/assets/industrial.svg";
import residential from "../src/assets/residential.svg";
import lowVoltage from "../src/assets/low.svg";
import security from "../src/assets/security.svg";
import construction from "../src/assets/construction.svg";
import building from "../src/assets/building.svg";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "COMMERCIAL SERVICES",
    about:
      "We provide comprehensive electrical solutions for commercial spaces, including office wiring, lighting, and energy efficiency upgrades.",
  },
  {
    icon: industrial,
    title: "INDUSTRIAL SERVICES",
    about:
      "Our industrial services include high-voltage systems, machinery wiring, control panels, and preventive maintenance.",
  },
  {
    icon: residential,
    title: "RESIDENTIAL SERVICES",
    about:
      "From electrical installations to home automation, we ensure your home is safe, efficient, and up to code.",
  },
  {
    icon: lowVoltage,
    title: "LOW VOLTAGE SYSTEMS",
    about:
      "We specialize in low-voltage systems, including data cabling, network installations, and smart home solutions.",
  },
  {
    icon: security,
    title: "SECURITY SYSTEMS",
    about:
      "Protect your property with our advanced security systems, including surveillance cameras, access control, and alarm systems.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "We offer end-to-end construction services, from electrical design and project management to renovations and new builds.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We start with a detailed plan to ensure your project meets all requirements and stays within budget.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Our team designs efficient and innovative electrical systems tailored to your needs.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "We handle the construction and installation process with precision and professionalism.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We ensure every project is completed to the highest standards, with thorough testing and quality checks.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "MG Construction & Electrical INC. delivered exceptional service on our commercial project. Highly recommended!",
    post: "Business Owner",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Their expertise in industrial electrical systems is unmatched. They completed our project on time and within budget.",
    post: "Factory Manager",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "The team was professional and efficient. Our residential electrical system is now safer and more efficient.",
    post: "Homeowner",
  },
];