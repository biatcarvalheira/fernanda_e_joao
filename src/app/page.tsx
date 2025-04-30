"use client";

import { useState, useRef } from "react";
import Navbar from "../components/navbar";
import { Lora } from "next/font/google";
import { Parisienne } from "next/font/google";


// Fonts
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400", // Parisienne only comes in 400
});

export default function Home() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setShowWebsite(true);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const getVideoSource = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return "/videos/intro_mobile.mp4";
    }
    return "/videos/intro_desktop.mp4";
  };

  return (
    <>
      {/* Video Intro */}
      {!showWebsite && (
  <div
    className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
      videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
  >
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      src={getVideoSource()}
      autoPlay
      muted
      onEnded={() => {
        setVideoEnded(true);
        setTimeout(() => setShowWebsite(true), 2000); // match fade duration
      }}
    />
  </div>
)}

      {/* Main Website */}
      {showWebsite && (
        <div>
          <Navbar />
          <main className="pt-15">
            {/* Hero Section */}
            <section id="hero" style={{ backgroundColor: "#aaa3c5" }} className="h-screen flex flex-col justify-center items-center">
            <h1 className={`${parisienne.className} text-6xl md:text-8xl`}>
  Barbara & Bruno
</h1>       <p className="mt-4 text-xl">Nosso grande dia</p>
            </section>

            {/* Temporario */}
            <section id="temp" className="min-h-screen flex flex-col justify-center items-center bg-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">EM CONSTRUÇÃO</h2>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
