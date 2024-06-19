import { faAlignCenter, faClock, faSlidersH, faWallet } from "@fortawesome/free-solid-svg-icons";
import ShowCaseCard from "./showCaseCard";

export default function Vantagens() {
	return <>
<div className="bg-black">
        <section
          id="showcase"
          className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Vantagens de ter sua própria moeda digital
            </h2>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <ShowCaseCard
              title="Centralizar"
              icon={faAlignCenter}
              li1="Administre todo o recurso em uma única conta bancária."
            />
            <ShowCaseCard
              title="Antecipar:"
              icon={faClock}
              li1="As recargas são recebidas imediatamente após a compensação bancária."
            />
            <ShowCaseCard
              title="Controlar:"
              icon={faSlidersH}
              li1="Controle e retenha os recursos destinados ao seu negócio."
            />
          </div>
        </section>
      </div>
	</>
}