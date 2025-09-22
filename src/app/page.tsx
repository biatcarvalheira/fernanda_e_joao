"use client";

import Navbar from "../components/navbar";

export default function Home() {
  

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="pt-15">
{/* Hero Section — video background (desktop + mobile versions) */}
<section
  id="hero"
  className="relative h-screen w-full overflow-hidden bg-black"
>
  {/* Desktop video */}
  <video
    className="absolute inset-0 hidden md:block h-full w-full object-cover opacity-100"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/images/hero_desktop_poster.jpg" // optional fallback image
    aria-hidden="true"
  >
    <source src="/videos/hero_desktop.webm" type="video/webm" />
    <source src="/videos/hero_desktop.mp4" type="video/mp4" />
  </video>

  {/* Mobile video */}
  <video
    className="absolute inset-0 md:hidden h-full w-full object-cover opacity-100"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/images/hero_mobile_poster.jpg" // optional fallback image
    aria-hidden="true"
  >
    <source src="/videos/hero_mobile.webm" type="video/webm" />
    <source src="/videos/hero_mobile.mp4" type="video/mp4" />
  </video>

  {/* Hero content (optional text/buttons) */}
  <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
    {/* Example hero heading: */}
    {/* <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
      Barbara & Bruno
    </h1> */}
  </div>
</section>



        {/* Section Intro (removed background images & custom fonts) */}
        <section id="intro" className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-neutral-50">
          <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%]">
            <div className="text-neutral-800 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              <p className="font-semibold first-letter:text-5xl first-letter:font-bold first-letter:text-neutral-700 first-letter:leading-[1] first-letter:mr-3 ml-[-0.25rem]">
                Queridos amigos e família, estamos nos aproximando do nosso tão sonhado casamento. Esse dia, assim como nosso amor, foi pensado e concebido nos mínimos detalhes.
              </p>
              <p className="mt-6 font-semibold">
                Esperamos que vocês possam sentir a energia mágica da nossa celebração e estejam muito dispostos a comemorar conosco. Aqui, vocês encontrarão tudo o que precisam saber.
              </p>
            </div>
          </div>
        </section>

        {/* Programa 1 - Text on Right (no video background) */}
        <section id="programa-direita" className="relative min-h-screen flex items-center justify-center bg-neutral-100">
          <div className="relative z-10 w-full md:w-[35%] max-w-md ml-0 md:ml-[15%] px-6 py-12">
            <div className="text-neutral-800 font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed text-justify">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-neutral-700 first-letter:leading-[1] first-letter:mr-2 ml-[-0.5rem]">
                A cerimônia será às 15:30 do dia 11/15/2025 na área externa da Vinícola Vale dos Desejos.
              </p>
              <p className="mt-6">A festa ocorrerá em seguida, às 17:30, no mesmo local.</p>
            </div>
          </div>
        </section>

        {/* Programa 2 - Text on Left (no video background) */}
        <section id="programa-esquerda" className="relative min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="relative z-10 w-[80%] sm:w-[70%] md:w-[35%] max-w-md mr-0 md:mr-[10%] mt-16 px-6 py-12">
            <div className="text-neutral-800 font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed text-justify">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-neutral-700 first-letter:leading-[1] first-letter:mr-2 ml-[-0.5rem]">
                Traje sugerido: pedimos que usem roupas brancas ou off‑white.
              </p>
            </div>
          </div>
        </section>

        {/* Como Chegar (no background images) */}
        <section id="como-chegar" className="relative min-h-screen w-full bg-neutral-100 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800">Como chegar</h2>
          </div>
        </section>

        {/* Transporte (link kept; no images) */}
        <section id="transporte" className="relative min-h-screen w-full bg-neutral-50 flex items-center justify-center">
          <div className="text-center px-4">
            <a href="/transporte" className="text-neutral-800 hover:text-neutral-600 font-bold transition duration-300 text-5xl sm:text-6xl md:text-7xl leading-tight">
              Transporte
            </a>
          </div>
        </section>

        {/* Hoteis (link kept; no images) */}
        <section id="hoteis" className="relative min-h-screen w-full bg-neutral-100 flex items-center justify-center">
          <div className="text-center px-4">
            <a href="/hospedagem" className="text-neutral-800 hover:text-neutral-600 font-bold transition duration-300 text-5xl sm:text-6xl md:text-7xl leading-tight">
              Hospedagem
            </a>
          </div>
        </section>

        {/* Cabelo & Make (no videos) */}
        <section id="cabelo-make" className="relative min-h-screen w-full bg-neutral-50 flex items-center justify-center">
          <div className="relative z-10 text-center px-4">
            <a href="/cabelo-make" className="text-neutral-800 hover:text-neutral-600 font-bold transition duration-300 text-5xl sm:text-6xl md:text-7xl leading-tight">
              Cabelo & Make
            </a>
          </div>
        </section>

        {/* Presentes (link kept) */}
        <section id="presentes" className="relative min-h-screen w-full bg-neutral-100 flex items-center justify-center px-4 py-16">
          <a
            href="https://www.listapresentesbarbaraebruno.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 font-bold text-5xl md:text-7xl hover:text-neutral-600 transition duration-300"
          >
            PRESENTES
          </a>
        </section>

        {/* RSVP Section (link kept) */}
        <section id="rsvp-intro" className="relative min-h-screen w-full bg-neutral-50 flex items-center justify-center px-4 py-16">
          <div className="relative z-10 text-center">
            <a href="/rsvp" className="text-neutral-800 font-bold text-5xl md:text-7xl hover:text-neutral-600 transition duration-300">
              RSVP
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
