import HeroText from "@/app/components/heroText";

export default function Fortalecendo() {
  return (
    <>
      <div className="my-8 flex flex-col lg:flex-row justify-center mb-8 mx-auto max-w-screen-lg gap-24 text-center">
        <div className="flex flex-col">
          <HeroText title="FORTALECENDO A ECONOMIA" dark={true} biggest={false}/>
          <img
            alt="ciclo de fortalecimento"
            src="fortalecendo_cycle.png"
            className="h-96"
          />
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg mt-4 m-2">
            Grandes pólos econômicos movimentam bilhões com sua economia local,
            estimulando e circulando seu dinheiro interno e retendo ele na
            região.
          </p>
        </div>
        <div className="flex flex-col">
          <HeroText title="MOEDA LOCAL VALIOSA" dark={true} />
          <img
            alt="ciclo de fortalecimento"
            src="moeda_valiosa.png"
            className="h-96"
          />
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg mt-4 m-2">
            Com o <strong>Cashback</strong> o dinheiro digital se torna mais vantajoso que o
            dinheiro real, estimulando o setor privado a investir e somar o
            montante.
          </p>
        </div>
      </div>
    </>
  );
}
