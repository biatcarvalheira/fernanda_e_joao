"use client";

import { useState, useRef } from "react";
import Navbar from "../components/navbar";
import { Lora, Uncial_Antiqua } from "next/font/google";

// Fonts

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Intro Video */}
      {!showWebsite && (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
            videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Mobile Intro */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover md:hidden"
            src="/videos/intro_mobile.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setVideoEnded(true);
              setTimeout(() => setShowWebsite(true), 2000);
            }}
          />
          {/* Desktop Intro */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover hidden md:block"
            src="/videos/intro_desktop.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setVideoEnded(true);
              setTimeout(() => setShowWebsite(true), 2000);
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
            <section id="hero" className="relative h-screen w-full overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover md:hidden"
                src="/videos/hero-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
                src="/videos/hero-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </section>

            {/* Intro Section */}
            <section
              id="intro"
              className="relative min-h-screen bg-[url('/images/intro-full.png')] bg-cover bg-center flex justify-center items-center px-2 py-16"
            >
              <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[30%] flex items-center justify-center px-4 sm:px-6 md:px-10">
                <div
                  className={`${uncial.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl leading-relaxed text-justify`}
                >
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#6f2079] first-letter:leading-[1] first-letter:mr-2 first-letter:tracking-tighter first-letter:align-top first-letter:pt-1 ml-[-0.5rem]">
                    Queridos amigos e família, estamos nos aproximando do nosso tão sonhado casamento. Esse dia, assim como nosso amor, foi pensado e concebido nos mínimos detalhes.
                  </p>
                  <p className="mt-6">
                    Esperamos que vocês possam sentir a energia mágica do nosso conto de fadas escocês e estejam muito dispostos a celebrar essa união conosco. Aqui, vocês encontrarão tudo o que precisam saber sobre a nossa celebração.
                  </p>
                </div>
              </div>
            </section>

            {/* RSVP Section */}
            <section
              id="rsvp"
              className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-16"
            >
              <h2
                className={`${lora.className} text-3xl md:text-5xl font-bold mb-6 text-center`}
              >
                RSVP
              </h2>

              <div className="w-full max-w-3xl">
                <iframe
                  src="https://sistema.assessoriavip.com.br/rsvpUnico/e9816b60-087a-11ef-a198-0bece7b34b19"
                  title="RSVP Form"
                  width="100%"
                  height="600"
                  style={{ border: "none" }}
                  allow="geolocation; microphone; camera; fullscreen"
                  loading="lazy"
                />
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
