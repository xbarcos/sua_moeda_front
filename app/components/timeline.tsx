export default function Timeline() {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-8 mx-4">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="text-normal font-bold leading-none text-gray-900 mb-1">
            RECARGA
          </p>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            PREFEITURA OU PRÓPRIO CIDADÃO INSERE O SALDO NA CONTA DIGITAL DO
            CIDADÃO. VALOR ENTRA COM 10% DE CASHBACK (SUBSÍDIO DO
            ESTABELECIMENTO), A RECARGA PODE SER FEITA PELO LOGIN DA CONTA
            DIGITAL.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-4 text-normal font-bold leading-none text-gray-900">
            VENDA
          </time>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            CLIENTE COMPRA NOS ESTABELECIMENTOS PARCEIROS USANDO A MOEDA LOCAL.
            O ESTABELECIMENTO PARCEIRO OFERECE 10% DE CASHBACK PARA QUEM USAR A
            MOEDA LOCAL. BASTA BAIXAR O APP.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-normal font-bold leading-none text-gray-900 mb-1">
            REPASSE
          </time>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            TODO O MONTANTE FICA ARMAZENADO EM UMA CONTA MASTER PARA REPASSES. OS
            VALORES DAS VENDAS SÃO REPASSADOS PARA OS ESTABELECIMENTOS NO MESMO
            DIA OU AJUSTADO SOB DEMANDA DO CLIENTE.
          </p>
        </li>
        {/* <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-normal font-bold leading-none text-gray-900 mb-1">
            IMPOSTO
          </time>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            TODO O VALOR GASTO VOLTA PARA OS COFRES PÚBLICOS EM UM CICLO FECHADO.
          </p>
        </li> */}
      </ol>
    </>
  );
}
