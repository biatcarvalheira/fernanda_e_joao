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
      João & Fernanda
    </h1> */}
  </div>
</section>


{/* Section Intro */}
<section
  id="intro"
  className="relative min-h-screen flex items-center justify-center 
             bg-[url('/images/intro-bg-mobile.png')] md:bg-[url('/images/intro-bg-desktop.png')]
             bg-cover bg-center bg-no-repeat"
>
  {/* TEXT BOX */}
  <div
    className="
      relative z-10 text-center
      w-[90%] sm:w-[80%] md:max-w-2xl
      px-4
      /* XS (≤400px): make it much smaller and taller */
      max-[400px]:max-w-[160px]
      max-[400px]:min-h-[260px]
      max-[400px]:px-2
      max-[400px]:py-4
      max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center
      /* better wrapping on tiny widths */
      [overflow-wrap:anywhere] [word-break:break-word] [hyphens:auto]
    "
  >
    <p className="text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed
                  max-[400px]:leading-snug">
      Queridos familiares e amigos, é com imensa alegria que compartilhamos com vocês os preparativos
      e as informações sobre o nosso casamento.
    </p>
    <p className="mt-6 text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed
                  max-[400px]:mt-3 max-[400px]:leading-snug">
      Tudo está sendo preparado com muito carinho para que este momento seja inesquecível, e será
      ainda mais especial com a presença de cada um de vocês.
    </p>
  </div>
</section>









        {/* Programacao */}
        <section
  id="programacao"
  className="relative min-h-screen flex items-center justify-center 
             bg-[url('/images/programacao-bg-mobile.png')] md:bg-[url('/images/programacao-bg-desktop.png')]
             bg-cover bg-center bg-no-repeat"
>
  {/* TEXT BOX */}
  <div
    className="
      relative z-10 text-center
      w-[90%] sm:w-[80%] md:max-w-2xl
      px-4
      /* XS (≤400px): make it much smaller and taller */
      max-[400px]:max-w-[160px]
      max-[400px]:min-h-[260px]
      max-[400px]:px-2
      max-[400px]:py-4
      max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center
      /* better wrapping on tiny widths */
      [overflow-wrap:anywhere] [word-break:break-word] [hyphens:auto]
    "
  >
    <p className="text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed
                  max-[400px]:leading-snug">
   A cerimônia será às 14h30 do dia 20/04/2026 na Represa de Jurumirim Avaré, Anexo Golf.

    </p>
    <p className="mt-6 text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed
                  max-[400px]:mt-3 max-[400px]:leading-snug">
   A festa ocorrerá em seguida, após a cerimônia, no mesmo local.
Traje: social.
    </p>
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
