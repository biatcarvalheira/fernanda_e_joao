"use client";

import Navbar from "../components/navbar";
import Countdown from "../components/countdown";

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
      max-[400px]:w-[85%]
      max-[400px]:max-w-none
      max-[400px]:px-3
      max-[400px]:py-4
      max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center
      [word-break:normal] [overflow-wrap:normal]
    "
          >
            <p className="text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed sm:leading-loose max-[400px]:leading-normal">
              Queridos familiares e amigos, é com imensa alegria que compartilhamos com vocês os preparativos
              e as informações sobre o nosso casamento.
            </p>

            <p className="mt-6 text-[#1c5134] text-sm sm:text-lg md:text-xl font-semibold leading-relaxed sm:leading-loose max-[400px]:leading-normal">
              Tudo está sendo preparado com muito carinho para que este momento seja inesquecível, e será
              ainda mais especial com a presença de cada um de vocês.
            </p>

           <p
  className="font-style-script mt-2 text-[#1c5134] text-3xl sm:text-4xl md:text-5xl leading-snug tracking-wide"
  style={{
    textShadow:
      "0.5px 0.5px 0 #1c5134, -0.5px -0.5px 0 #1c5134, 0.5px -0.5px 0 #1c5134, -0.5px 0.5px 0 #1c5134",
  }}
>
  Faltam
</p>


            {/* 👉 Countdown goes here */}
            <div className="mt-8">
              <Countdown target="2026-04-20T14:30:00-03:00" />
              {/* Adjust the date/time if needed; this is 20/04/2026 14:30 in São Paulo time */}
            </div>
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
      max-[400px]:max-w-[160px]
      max-[400px]:min-h-[260px]
      max-[400px]:px-2
      max-[400px]:py-4
      max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center
    "
          >
            <h2 className="font-style-script text-[#1c5134] text-3xl sm:text-4xl md:text-5xl italic tracking-wide mb-6">
              Programação
            </h2>
            {/* 1️⃣ Pré-Wedding */}
            <div className="mb-8">
              <p className="text-[#1c5134] text-[0.7rem] sm:text-xs md:text-sm font-bold">
                18/04/2026
              </p>
              <p className="text-[#1c5134] text-xl sm:text-2xl md:text-3xl italic mt-1 font-style-script">
                Festa de Boas-Vindas
              </p>
              <div className="text-[#1c5134] text-[0.8rem] sm:text-sm md:text-base font-medium leading-relaxed mt-3 space-y-1">
                <p>Local: A definir</p>
                <p>Horário: A definir</p>
                <p>Traje: Roupas leves e de banho</p>
              </div>

            </div>

            {/* 2️⃣ Cerimônia */}
            <div className="mb-8">
              <p className="text-[#1c5134] text-[0.7rem] sm:text-xs md:text-sm font-bold">
                19/04/2026
              </p>
              <p className="text-[#1c5134] text-xl sm:text-2xl md:text-3xl italic mt-1 font-style-script">
                Dia Livre
              </p>
              <p className="text-[#1c5134] text-[0.7rem] sm:text-xs md:text-sm font-medium leading-relaxed mt-3">
                Consulte as dicas para restaurantes e atividades
              </p>
            </div>

            {/* 3️⃣ Festa */}
            <div>
              <p className="text-[#1c5134] text-[0.7rem] sm:text-xs md:text-sm font-bold">
                20/04/2026
              </p>
              <p className="text-[#1c5134] text-xl sm:text-2xl md:text-3xl italic mt-1 font-style-script">
                Casamento
              </p>
              <div className="text-[#1c5134] text-[0.8rem] sm:text-sm md:text-base font-medium leading-relaxed mt-3 space-y-1">
                <p>Local: Anexo Golf Avaré </p>
                <p>Horário: 15h</p>
                <p>Traje: Social</p>
              </div>
            </div>
          </div>
        </section>

        {/* Como chegar*/}
   
<section
  id="como-chegar"
  className="relative min-h-screen flex items-center justify-center overflow-hidden md:overflow-visible md:pt-16"
>
  {/* Background Video – Mobile */}
  <video
    className="absolute inset-0 w-full h-full object-cover md:hidden"
    src="/videos/como-chegar-mobile.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Background Video – Desktop */}
  <video
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
    src="/videos/como-chegar-desktop.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Text Box */}
  <div
    className="
      relative z-10 text-center
      w-[90%] sm:w-[80%] md:max-w-2xl
      px-4
      md:-translate-y-12
      max-[400px]:max-w-[160px]
      max-[400px]:min-h-[260px]
      max-[400px]:px-2
      max-[400px]:py-4
      max-[400px]:flex max-[400px]:flex-col max-[400px]:justify-center
      [overflow-wrap:anywhere] [word-break:break-word] [hyphens:auto]
    "
  >
    <h2 className="font-style-script text-[#1c5134] text-3xl sm:text-4xl md:text-5xl italic tracking-wide mb-6">
      Como Chegar
    </h2>

    <p className="text-[#1c5134] text-lg sm:text-xl md:text-2xl font-extrabold">
      Em Avaré
    </p>

    <p className="mt-6 text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed">
      Para quem vem de São Paulo: o trajeto leva cerca de 3 horas de carro pela Rodovia Castelo Branco.
    </p>

    <p className="mt-6 text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed">
      Para quem vem de outras cidades: há opções de ônibus até Avaré; de lá, é possível pegar um táxi ou transporte por aplicativo até o local.
    </p>

    <p className="mt-6 text-[#1c5134] text-xs sm:text-sm md:text-base font-bold leading-relaxed">
      Parada obrigatória
    </p>

    <ul className="text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed mt-2 space-y-2 mb-6">
      <li>
        <span className="font-semibold">Ida:</span> Parmegiana no Camponesa
        <br />
        <span className="italic">(Rod. Pres. Castello Branco, Km 198)</span>
      </li>
      <li>
        <span className="font-semibold">Volta:</span> Sanduíche de Parma na Quinta do Marquês
        <br />
        <span className="italic">(Rod. Pres. Castello Branco, Km 57)</span>
      </li>
    </ul>

    <p className="text-[#1c5134] text-lg sm:text-xl md:text-2xl font-extrabold">
      No Casamento
    </p>

    <ul className="text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed mt-2 space-y-2 mb-6">
      <li>
        <span className="font-semibold">Ponto de saída de vans:</span>
        <br />
        <a
          href="https://maps.google.com/?q=Hotel+Eco+Blue+Avaré" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#245a40] transition"
        >
          Hotel Eco Blue
        </a>
        <br />
        <a
          href="https://maps.google.com/?q=Estância+Avaré+Hotel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#245a40] transition"
        >
          Estância Avaré Hotel
        </a>
      </li>
    </ul>
  </div>
</section>
        {/* Dicas (link kept; no images) */}
        <section
          id="dicas"
          className="relative min-h-screen flex items-center justify-center 
             bg-[url('/images/dicas-bg-mobile.png')] md:bg-[url('/images/dicas-bg-desktop.png')]
             bg-cover bg-center bg-no-repeat"
        >
          {/* TEXT BOX */}
          <div
            className="
      relative z-10 text-center
      w-[90%] sm:w-[80%] md:max-w-2xl
      px-4 text-[#1c5134]
    "
          >
            <h2 className="font-style-script text-[#1c5134] text-3xl sm:text-4xl md:text-5xl italic tracking-wide mb-6">
              Dicas
            </h2>

            <p className="text-[#1c5134] text-lg sm:text-xl md:text-2xl font-extrabold">
              Restaurantes na cidade
            </p>
          <ul className="text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed mt-4 mb-10 space-y-4">
  <li>
    <span className="font-semibold">Manacá Café</span> | (14) 99673-1025
    <br />
    <span className="italic">Av. Prefeito Paulo Novaes, 1025, Avaré/SP</span>
  </li>

  <li>
    <span className="font-semibold">Empório Pé de Café</span>
    <br />
    <span className="italic">Av. Ouro Verde, 318, Avaré/SP</span>
  </li>

  <li>
    <span className="font-semibold">Pizzaria Paulistana</span> | (14) 3732-5318
    <br />
    <span className="italic">R. Pernambuco, 777, Avaré/SP</span>
  </li>

  <li>
    <span className="font-semibold">Bruna Gauss</span> | (14) 3731-3168
    <br />
    <span className="italic">R. Minas Gerais, 1324, Avaré/SP</span>
  </li>
</ul>

<p className="text-[#1c5134] text-lg sm:text-xl md:text-2xl font-extrabold">
  Restaurantes na represa
</p>

            <ul className="text-[#1c5134] text-xs sm:text-sm md:text-base font-medium leading-relaxed mt-4 space-y-4">
              <li>
                <span className="font-semibold">Restaurante Toa Toa </span> | (14) 99652-2591
                <br />
                <span className="italic">Rua Jurumirim - Ponta dos Cambarás</span>
              </li>
              <li>
                <span className="font-semibold">Espaço ISA </span> | (11) 98674- 5976
                <br />
                <span className="italic">Rodovia João Mellão, SP-255</span>
              </li>
            </ul>


          </div>
        </section>

        {/* Hoteis (link kept; no images) */}
<section
  id="hospedagem"
  className="
    relative min-h-screen flex items-center 
    justify-center md:justify-center
    overflow-hidden
  "
>
  {/* Background image for mobile */}
  <div className="absolute inset-0 md:hidden">
    <img
      src="/images/hospedagem-mobile.png"
      alt="Hospedagem Mobile Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Background image for desktop */}
  <div className="absolute inset-0 hidden md:block">
    <img
      src="/images/hospedagem-desktop.png"
      alt="Hospedagem Desktop Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text box */}
  <div
    className="
      relative z-10 text-center
      w-[90%] sm:w-[80%] md:max-w-lg
      px-4
      md:ml-[15%] text-[#1c5134]
    "
  >
    {/* Centered heading */}
    <h2 className="font-style-script text-[#1c5134] text-3xl sm:text-4xl md:text-5xl italic tracking-wide mb-8">
      Hospedagem
    </h2>

    {/* Centered text */}
    <div className="text-xs sm:text-sm md:text-base font-medium leading-relaxed space-y-6">
      <div>
        <p className="font-bold">Eco Blue Resort</p>
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          Rodovia João Mellão, km 273 - 5 - Represa Jurumirim, Avaré - SP, 19704-201
        </p>
      </div>

      <div>
        <p className="font-bold">Estância Avaré Hotel</p>
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          Av. Pref. Paulo Novaes, 2 - Jardim Botânico, Avaré - SP
        </p>
      </div>

      <div>
        <p className="font-bold">Jurumirim Imóveis</p>
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          Aluguel de casas na represa: (14) 3512-0967
        </p>
      </div>
    </div>
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
        <section
          id="rsvp"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background (mobile) */}
          <div className="absolute inset-0 md:hidden">
            <img
              src="/images/rsvp-bg-mobile.png"   // 👈 replace with your mobile background
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          {/* Background (desktop) */}
          <div className="absolute inset-0 hidden md:block">
            <img
              src="/images/rsvp-bg-desktop.png"  // 👈 replace with your desktop background
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          {/* Button image in the center */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeARpmW7bN3zqU3wFRnJ-QCK3IhTIA6PKQBafX2hSXsJYnfHQ/viewform?usp=header"   // 👈 replace with your Google Forms link
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 group"
          >
            <img
              src="/images/rsvp-button.png"  // 👈 replace with your button image
              alt="RSVP"
              className="block w-64 sm:w-72 md:w-80 lg:w-96 h-auto
             transition-transform duration-200
             group-hover:scale-[1.04] group-active:scale-[0.98]"
            />
          </a>
        </section>


      </main>
    </div>
  );
}
