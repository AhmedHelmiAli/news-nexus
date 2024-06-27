import { useState } from "react";

export default function AppNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="p-1 border-gray-200 bg-slate-100">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            NewsNexus
          </span>
        </div>

        <div className="flex space-x-3 md:order-2 md:space-x-0">
          <button
            type="button"
            className="hidden px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Get started
          </button>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 s md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
