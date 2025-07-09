// app/hospedagem/page.tsx
import { Cinzel, Lora } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HospedagemPage() {
  return (
    <section
      className="relative min-h-screen w-full bg-[url('/images/texture-bg.png')] md:bg-[url('/images/texture-bg.png')] bg-cover bg-center px-6 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full space-y-16">
        {/* Lista 1 */}
        <div>
          <h2 className={`${cinzel.className} text-3xl md:text-4xl font-bold mb-6 text-center text-black`}>
            <span className="text-6xl align-top font-bold leading-none mr-1 text-[#6f2079]">H</span>otéis
          </h2>
        <ul className={`${lora.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl leading-relaxed text-left space-y-6 list-none max-w-3xl mx-auto px-8`}>
      <li>
        <a
          href="https://www.airbnb.com.br/rooms/16486376?check_in=2021-09-25&check_out=2021-09-27&guests=1&adults=16&s=13&unique_share_id=b8f83b3e-fe23-4caa-a38f-08eaf0a8af84"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Fazenda Passatempo (2 km)
        </a>
      </li>
      <li>
        <a
          href="https://pousada-novo-xodo.negocio.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Pousada Novo Xodó (19 km)
        </a>
        <p>Tel.: 24-992236167, Reservas disponíveis pelo Booking também.</p>
      </li>
      <li>
        <a
          href="https://www.fazendadocedro.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Hotel Solar Fazenda do Cedro (23 km)
        </a>
        <p>Tel.: 24-22233618 / 24-988821378</p>
        <p>comercial@fazendadocedro.com.br</p>
      </li>
      <li>
        <a
          href="https://casamarambaia.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Casa Marambaia (46 km)
        </a>
      </li>
      <li>
        <a
          href="https://reservasgranjabrasil.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Hotel Granja Brasil Resort (36 km)
        </a>
      </li>
      <li>
        <a
          href="https://www.villaitaipava.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Villa Itaipava (42 km)
        </a>
      </li>
      <li>
        <a
          href="https://www.saison.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#6f2079]"
        >
          Saison Resort & Spa (35 km)
        </a>
      </li>
    </ul>
        </div>

        {/* Lista 2 */}
        <div>
          <h2 className={`${cinzel.className} text-3xl md:text-4xl font-bold mb-6 text-center text-black`}>
            <span className="text-6xl align-top font-bold leading-none mr-1 text-[#6f2079]">C</span>asas para locação
          </h2>
            <ul className={`${lora.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl leading-relaxed text-left space-y-6 list-none max-w-3xl mx-auto px-8`}>

                  <li>
                    <a href="https://www.airbnb.com.br/rooms/19874782?check_in=2020-08-21&check_out=2020-08-23&guests=1&adults=4&s=67&unique_share_id=68bfceee-1c5b-4569-9a28-ed1caf3a65d1"
                      target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                      Andreia – Casa 47
                    </a>
                    <p>4 quartos – 5 banheiros – 10 hóspedes</p>
                    <p>Casa em Cond. Fazenda a 15 minutos de Itaipava</p>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.br/rooms/21941372?guests=1&adults=1&s=67&unique_share_id=c58a4d8d-0471-4d2e-bf38-9e2f2c4e9ce1"
                      target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                      Roberto – Casa 202
                    </a>
                    <p>4 quartos – 5 banheiros – 8 hóspedes</p>
                    <p>Casa com Vista em Alberto Torres</p>
                  </li>
                  <li>
                    <a href="https://www.airbnb.com.br/rooms/51687957?guests=1&adults=1&s=67&unique_share_id=1c766ed8-0888-4243-9c0f-310bde3f21b8"
                      target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                      Cristiane – Casa 96
                    </a>
                    <p>3 quartos – 2 banheiros – 7 hóspedes</p>
                    <p>Recanto em Areal</p>
                  </li>
                </ul>
        </div>
      </div>
    </section>
  );
}

