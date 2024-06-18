import Logo from "./logo";

export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Logo />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/home" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:underline me-4 md:me-6">
                  Sobre Nós
                </a>
              </li>
              {/* <li>
                <a href="/#showcase" className="hover:underline me-4 md:me-6">
                  Vantagens
                </a>
              </li> */}
              {/* <li>
                <a href="/uberrima" className="hover:underline">
                  Ubérrima
                </a>
              </li> */}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Sua Moeda™
            </a>
            . Todos os direitos reservados. Desenvolvido por{" "}
            <a href="https://iuupi.com.br" className="hover:underline">
              IUUPI™
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
