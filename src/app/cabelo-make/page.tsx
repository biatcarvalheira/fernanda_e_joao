// app/cabelo-make/page.tsx
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

export default function cabeloMakePage() {
  return (
    <section
      className="relative min-h-screen w-full bg-[url('/images/texture-bg.png')] md:bg-[url('/images/texture-bg.png')] bg-cover bg-center px-6 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full space-y-16">
        {/* Lista 1 */}
        <div>
          <h2 className={`${cinzel.className} text-3xl md:text-4xl font-bold mb-6 text-center text-black`}>
            <span className="text-6xl align-top font-bold leading-none mr-1 text-[#6f2079]">C</span>abelo & Make
          </h2>

          <ul className={`${lora.className} text-[#3b2a1a] text-xl sm:text-2xl md:text-3xl leading-relaxed text-center space-y-8 list-none max-w-3xl mx-auto px-4`}>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/barbarabullmakeup" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Barbara Bull
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/lllorena.alves" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Lorena Alves
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/espacobsalaodebeleza/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Espaço B
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/manusalgadomake/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Manu Salgado
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/carolinem.beauty/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Caroline Beauty
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/aureadamiao" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Aurea Damião
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/laysacruz_makeup/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Laysa Cruz
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} className="text-[#6f2079] mr-2" />
              <a href="https://www.instagram.com/grazibento_makeup/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6f2079]">
                Grazi Bento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
