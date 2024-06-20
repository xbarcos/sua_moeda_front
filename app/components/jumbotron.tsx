import HeroText from "./heroText";

export default function Jumbotron() {
  return (
    <>
      <section
        className="relative bg-gray-900"
        id="home"
      >
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
             style={{ backgroundImage: 'url(bg-network.jpg)' }}
        ></div>
        <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <HeroText
            title="Crie moedas digitais!"
            subtitle="A Sua Moeda veio para solucionar todos os problemas na hora de criar sua
        própria moeda social e digital. Escolha seu nome, sua aparência, e o
        resto deixa com a gente."
          />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="https://wa.link/t4h1on"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            >
              Crie sua Moeda
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
