"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Questrial } from "next/font/google";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "programacao", label: "PROGRAMAÇÃO" },
    { id: "como-chegar", label: "COMO CHEGAR" },
    { id: "transporte", label: "TRANSPORTE" }, // logo goes right after this
    { id: "hoteis", label: "HOSPEDAGEM" },
    { id: "cabelo-make", label: "CABELO & MAKE" },
    { id: "presentes", label: "PRESENTES" },
    { id: "rsvp-intro", label: "RSVP" },
  ];

  return (
    <nav
      className={`${questrial.className} fixed top-0 left-0 w-full z-40 bg-[#307850] text-white
                  flex flex-col items-center`}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center gap-8 px-6 text-lg py-4">
        {sections.map((section) => (
          <Fragment key={section.id}>
            <a href={`#${section.id}`} className="hover:underline tracking-wider">
              {section.label}
            </a>

            {section.id === "transporte" && (
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={250}   // desktop size
                height={250}
                priority
                className="mb-[-6px]"
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile Header (logo replaces burger, smaller size) */}
      <div className="md:hidden flex items-center justify-between h-16 px-3">
        <div className="w-6" /> {/* left spacer to keep logo centered */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}    // smaller logo for mobile
            height={100}
            priority
          />
        </button>

        <div className="w-6" /> {/* right spacer */}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full mt-2 bg-[#307850] p-3 md:hidden">
          <div className="flex flex-col divide-y">
            {sections.map((section) => (
              <a
                key={`m-${section.id}`}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg text-white text-center"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
