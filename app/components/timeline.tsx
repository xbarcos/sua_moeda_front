export default function Timeline() {
  return (
    <>
      <ol className="relative border-s border-gray-700 mb-8 mx-4">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <p className="text-normal font-bold leading-none text-gray-900 mb-1">
            RECARGA
          </p>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            Usuário abastece o saldo da conta digital.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-4 text-normal font-bold leading-none text-gray-900">
            VENDA
          </time>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            Usuário consome no(s) estabelecimento(s) credenciados.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="text-normal font-bold leading-none text-gray-900 mb-1">
            REPASSE
          </time>
          <p className="text-base font-normal text-gray-200 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg">
            Receba o valor da recarga no ato da compensação bancária.
          </p>
        </li>
      </ol>
    </>
  );
}
