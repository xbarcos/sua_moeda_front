export default function AboutUs() {
  return (
    <>
      <section
        className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 mb-16"
        id="about"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-8">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-blue-900 sm:text-4xl lg:text-5xl">
                Sobre Nós
              </h2>
              <h4 className="text-gray-500">Since 2008</h4>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Somos uma empresa de serviço e tecnologia de pagamento, com mais
                de{" "}
                <strong className="text-blue-900">
                  15 anos de experiência
                </strong>{" "}
                e atuante em todas as regiões do Brasil.
              </p>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Oferecemos a conta digital do estabelecimento e uma{" "}
                <strong className="text-blue-900">
                  moeda de circulação digital própria
                </strong>
                . Estabelecimento e usuário tem acesso on-line para controlar
                suas recargas e compras.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-8">
              <img
                className="relative w-48"
                src="icon_sua_moeda.png"
                alt="Logo Iuupi"
              />
              <span className="text-black text-4xl font-normal">X</span>
              <img
                className="relative w-48"
                src="Logo Iuupi.png"
                alt="Logo Iuupi"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
