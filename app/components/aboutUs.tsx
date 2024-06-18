export default function AboutUs() {
  return (
    <>
      <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16" id="about">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-8">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Sobre Nós
              </h2>
              <h4 className="bg-pink">Since 2008</h4>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Somos uma empresa de serviço e tecnologia com mais de 15 anos de
                experiência e atuante em todas as regiões do brasil.
              </p>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Oferecemos a conta digital do estabelecimento e uma moeda de
                circulação digital própria. Estabelecimento e usuário tem acesso
                on-line para controlar suas recargas e compras.
              </p>

            </div>

            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="iuupi-carrinho.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
