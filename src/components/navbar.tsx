"use client";

import { useState } from "react";
import { Lora } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Parisienne } from "next/font/google";

// Fonts
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400", // Parisienne only comes in 400
});


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "programacao", label: "PROGRAMAÇÃO" },
    { id: "como-chegar", label: "COMO CHEGAR" },
    { id: "transporte", label: "TRANSPORTE" },
    { id: "hoteis", label: "HOTEIS" },
    { id: "cabelo-make", label: "CABELO & MAKE" },
    { id: "presentes", label: "PRESENTES" },
    { id: "rsvp", label: "RSVP" },
  ];

  return (
    <nav
      style={{ backgroundColor: "#1c5134" }}
      className={`${lora.className} fixed top-0 left-0 w-full z-40 p-4 flex items-center text-white`}
    >
      <h1 className={`${parisienne.className} text-lg font-bold tracking-widest mr-8`}>
        Barbara e Bruno
      </h1>
{/* Desktop Menu */}
<div className="hidden md:flex flex-1 justify-between pl-16 pr-4">
  {sections.map((section) => (
    <a key={section.id} href={`#${section.id}`} className="hover:underline tracking-wider">
      {section.label}
    </a>
  ))}
</div>


      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white border shadow-md rounded-lg flex flex-col space-y-2 p-4 md:hidden text-black">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
