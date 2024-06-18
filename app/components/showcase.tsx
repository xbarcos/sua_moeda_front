import { faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowCaseCard from "./showCaseCard";

export default function Showcase() {
  return (
    <>
      <div className="bg-black">
        <section
          id="showcase"
          className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Vantagens de ter sua própria moeda digital
            </h2>
            {/* <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              veritatis atque numquam et dignissimos officia nostrum iusto rem
              ullam dolor, accusantium dolorum debitis eveniet, incidunt aperiam
              nihil, unde consequuntur culpa.
            </p> */}
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <ShowCaseCard
              title="Fortalecimento da Economia local com a moeda própria:"
              icon={faWallet}
              li1="Incentive o uso só na cidade;"
              li2="Circule e retenha o dinheiro da região;"
              li3="Economia local favorecida."
            />
            <ShowCaseCard
              title="Apoio do setor privado, com o estímulo do cashback:"
              icon={faWallet}
              li1="Empatia com o comércio local;"
              li2="Estímulo com vantagem na compra;"
              li3="Sua moeda vale mais que o real (pelo mercado)."
            />
            <ShowCaseCard
              title="Visibilidade política e diferencial tecnológico da cidade: "
              icon={faWallet}
              li1="Político visionário e influente no comércio local;"
              li2="Cidade atualizada e divulgada na mídia, apelo turístico;"
              li3="Economia orgânica e digital."
            />
            <ShowCaseCard
              title="Controle financeiro e análises social e do mercado:"
              icon={faWallet}
              li1="Controle o caminho do dinheiro;"
              li2="Veja os estabelecimentos mais parceiros;"
              li3="Padrões de consumo social."
            />
            <ShowCaseCard
              title="Inclusão social e financeiro, controlado e transparente:"
              icon={faWallet}
              li1="Acessibilidade a todos os cidadãos;"
              li2="Assistência social controlada;"
              li3="Transparência e eficiência da gestão."
            />
          </div>
        </section>
      </div>
    </>
  );
}
