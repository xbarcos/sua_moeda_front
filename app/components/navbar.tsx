"use client";
import Logo from "./logo";
import React, { useState } from 'react';

export default function NavBar(props: any) {
	const { active } = props;
  return (
    <>
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${active === 'home' ? 'text-blue-700' : 'text-white hover:text-blue-700'}`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${active === 'about' ? 'text-blue-700' : 'text-white hover:text-blue-700'}`}
                >
                  Sobre Nós
                </a>
              </li>
              {/* <li>
                <a
                  href="/#showcase"
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${active === 'vantagens' ? 'text-blue-700' : 'text-white hover:text-blue-700'}`}
                >
                  Vantagens
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/uberrima"
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${active === 'uberrima' ? 'text-blue-700' : 'text-white hover:text-blue-700'}`}
                >
                  Ubérrima
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
