import HeroText from "../components/heroText";
import Navbar from "../components/navbar";
import React from "react";
import Fortalecendo from "./components/fortalecendo";
import Footer from "../components/footer";

export default function Uberrima() {
  return (
    <>
      <Navbar active="uberrima" />
      <section className="bg-gray-900" id="home">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center items-center flex flex-col justify-center lg:py-16">
          <img src="uberrima.png" className="mb-4 rounded-full" alt="cedulas" />
          <HeroText
            title="A primeira moeda local do Brasil!"
            subtitle='"Desenvolvida com objetivo de fortalecer a economia local, fruto de uma parceria entre a Prefeitura Municipal de Resplendor/MG e o Sebrae/MG. Esta cédula possui validade apenas no território do Município de Resplendor/MG."'
          />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              target="_blank"
              href="https://valor.globo.com/financas/noticia/2024/04/19/cidade-mineira-cria-a-propria-moeda-a-uberrima-para-fomentar-economia-local.ghtml"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Leia Sobre
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
      <div className="mx-auto max-w-screen-lg my-8 text-center">
				<HeroText title="Como podemos melhorar?" dark={true} biggest={true}/>
        <img src="uberrima_apps.png" />
      </div>
      <Fortalecendo />
      <Footer />
    </>
  );
}
