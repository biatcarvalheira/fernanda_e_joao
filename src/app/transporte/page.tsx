// app/transporte/page.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cinzel, Lora } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TransportePage() {
  return (
    <section
      className="relative min-h-screen w-full bg-[url('/images/texture-bg.png')] md:bg-[url('/images/texture-bg.png')] bg-cover bg-center px-6 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full space-y-16">
        {/* Transporte Section */}
        <div>
          <h2 className={`${cinzel.className} text-3xl md:text-4xl font-bold mb-6 text-center text-black`}>
            <span className="text-6xl align-top font-bold leading-none mr-1 text-[#6f2079]">T</span>ransporte
          </h2>

         <div className={`${lora.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl text-center mb-6 space-y-3`}>
    <p>
      Os noivos disponibilizarão vans para buscarem e levarem os convidados ao local da cerimônia.
    </p>
    <p>
      O itinerário das vans incluirá os seguintes destinos:
    </p>
  </div>

          <ul className={`${lora.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl leading-relaxed text-center space-y-4 list-none max-w-3xl mx-auto px-4`}>
            <li>Fazenda Passatempo</li>
            <li>Estâncias Duvivier</li>
            <li>Condomínio Fazenda Santa Mônica</li>
            <li>Pousada Novo Xodó</li>
            <li>Hotel Solar Fazenda do Cedro</li>
          </ul>

          <h2 className={`${cinzel.className} text-lg md:text-xl font-bold mt-10 mb-4 text-center text-black`}>
            <span className="text-2xl align-top font-bold leading-none mr-1 text-[#6f2079]">M</span>otoristas
          </h2>

          <ul className={`${lora.className} text-[#3b2a1a] text-base sm:text-lg md:text-xl leading-relaxed text-center space-y-4 list-none max-w-3xl mx-auto px-4`}>
            <li>Alessandro (Motorista) | 24 99931-305</li>
            <li>Alexandre (Taxi/Uber) | 24 99228-1820</li>
            <li>Gustavo (Taxi/Uber) | 24 98827-6752</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
