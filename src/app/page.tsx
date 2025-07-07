"use client";

import { useState, useRef } from "react";
import Navbar from "../components/navbar";
import { Cinzel } from "next/font/google";

// Fonts

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
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
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
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

            {/* Section Intro */}
            <section
              id="intro"
              className="relative min-h-screen bg-[url('/images/intro-mobile.png')] sm:bg-[url('/images/intro-full.png')] bg-cover bg-center flex justify-center items-center px-2 py-16"
            >
              <div className="w-[80%] sm:w-[70%] md:w-[55%] lg:w-[30%] flex items-center justify-center px-2 sm:px-4 md:px-6">
                <div
                  className={`
        ${cinzel.className} text-[#3b2a1a]
        text-xs sm:text-sm md:text-base
        leading-relaxed text-justify
        overflow-visible
        pt-6
      `}
                >
                  <p className="font-bold first-letter:text-7xl first-letter:font-bold first-letter:text-[#6f2079] first-letter:leading-[1] first-letter:mr-3 first-letter:tracking-tight ml-[-0.25rem]">
                    Queridos amigos e família, estamos nos aproximando do nosso tão sonhado casamento. Esse dia, assim como nosso amor, foi pensado e concebido nos mínimos detalhes.
                  </p>
                  <p className="mt-6 font-bold">
                    Esperamos que vocês possam sentir a energia mágica do nosso conto de fadas escocês e estejam muito dispostos a celebrar essa união conosco. Aqui, vocês encontrarão tudo o que precisam saber sobre a nossa celebração.
                  </p>
                </div>
              </div>
            </section>

            {/* Programa 1 - Text on Right */}
            <section id="programa-direita" className="relative min-h-screen flex items-center justify-center">
              {/* Background Video - Mobile */}
              <video
                className="absolute inset-0 w-full h-full object-cover md:hidden"
                src="/videos/program-1-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Background Video - Desktop */}
              <video
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
                src="/videos/program-1-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Text Block - Right Side */}
              <div className="relative z-10 w-full md:w-[35%] max-w-md ml-[15%] px-6 py-12">
                <div className={`${cinzel.className} text-[#3b2a1a] font-bold text-lg sm:text-xl md:text-2xl leading-relaxed text-justify`}>

                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#6f2079] first-letter:leading-[1] first-letter:mr-2 first-letter:tracking-tight ml-[-0.5rem]">
                    A cerimonia será às 16hrs do dia 15/11/25 na àrea externa da Vinicola Vale dos Desejos.
                  </p>
                  <p className="mt-6">
                    A festa ocorrerá seguida, às 17:30, no mesmo local.
                  </p>
                </div>
              </div>
            </section>

            {/* Programa 2 - Text on Left */}
            <section className="relative min-h-screen flex items-center justify-center">
              {/* Background Video - Mobile */}
              <video
                className="absolute inset-0 w-full h-full object-cover md:hidden"
                src="/videos/program-2-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Background Video - Desktop */}
              <video
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
                src="/videos/program-2-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Text Block - Left Side */}
              <div className="relative z-10relative z-10 w-[80%] sm:w-[70%] md:w-[35%] max-w-md mr-[10%] mt-16 px-6 py-12 w-full md:w-[35%] max-w-md mr-[10%] mt-16 px-6 py-12">
                <div className={`${cinzel.className} text-[#3b2a1a] font-bold text-lg sm:text-xl md:text-2xl leading-relaxed text-justify`}>
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#6f2079] first-letter:leading-[1] first-letter:mr-2 first-letter:tracking-tight ml-[-0.5rem]">
                    Traje sugerido: pedimos que usem roupas em branco ou off-white
                  </p>
                </div>
              </div>
            </section>

            {/* Hoteis */}
            <section
              id="hoteis"
              className="relative min-h-screen w-full bg-[url('/images/hoteis-mobile.png')] md:bg-[url('/images/hoteis-desktop.png')] bg-cover bg-center flex items-center justify-center"
            >
              <div className="text-center px-4">
                <a
                  href="/hospedagem"
                  className={`${cinzel.className} text-[#6f2079] hover:text-[#3b2a1a] font-bold transition duration-300 text-5xl sm:text-6xl md:text-7xl leading-tight`}
                >
                  <span className="text-6xl sm:text-7xl md:text-8xl font-bold align-middle leading-none">H</span>ospedagem
                </a>
              </div>
            </section>
            {/* Cabelo & Make */}
            <section
              id="cabelo-make"
              className="relative min-h-screen w-full bg-black flex items-center justify-center"
            >
              {/* Background Video - Mobile */}
              <video
                className="absolute inset-0 w-full h-full object-cover md:hidden"
                src="/videos/cabelo-make-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Background Video - Desktop */}
              <video
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
                src="/videos/cabelo-make-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Content */}
              <div className="relative z-10 text-center px-4">
                <a
                  href="/cabelo-make"
                  className={`${cinzel.className} text-[#6f2079] hover:text-[#3b2a1a] font-bold transition duration-300 text-5xl sm:text-6xl md:text-7xl leading-tight`}
                >
                  <span className="text-6xl sm:text-7xl md:text-8xl font-bold align-middle leading-none">C</span>abelo & Make
                </a>
              </div>
            </section>
          




            {/* Presentes */}
            <section
              id="presentes"
              className="relative min-h-screen w-full bg-[url('/images/presentes-mobile.png')] md:bg-[url('/images/presentes-desktop.png')] bg-cover bg-center flex items-center justify-center px-4 py-16"
            >
              {/* Title at the top */}
              <a
                href="https://www.listapresentesbarbaraebruno.com/" // Replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                className={`${cinzel.className} absolute top-10 left-1/2 transform -translate-x-1/2 text-[#684778] font-bold text-5xl md:text-7xl hover:text-[#6f2079] transition duration-300`}
              >
                PRESENTES
              </a>

              {/* Spacer div to maintain layout */}
              <div className="relative z-10 text-center"></div>
            </section>

            {/* RSVP Section */}
            <section
              id="rsvp-intro"
              className="relative min-h-screen w-full bg-[url('/images/rsvp-mobile.png')] md:bg-[url('/images/rsvp-desktop.png')] bg-cover bg-center flex items-center justify-center px-4 py-16"
            >
              <div className="relative z-10 text-center">
                <a
                  href="/rsvp"
                  className={`${cinzel.className} text-[#684778] font-bold text-5xl md:text-7xl hover:text-[#6f2079] transition duration-300`}
                >
                  RSVP
                </a>
              </div>
            </section>



          </main>
        </div>
      )}
    </>
  );
}
