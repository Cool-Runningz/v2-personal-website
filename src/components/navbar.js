import React from "react";
import PropTypes from "prop-types";

import SVGSymbols from './SVGSymbols'

const Navbar = (props) => {
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-white shadow"
    >
      <div className="w-full container flex items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center w-full sm:w-auto justify-center">
          <a
            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"
            href="#home"
          >
            <svg width="250" height="75" viewBox="0 0 398 188">
              {SVGSymbols["logo"]["content"]}
            </svg>
          </a>
        </div>

        <div>
          <ul className="list-reset hidden sm:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500 "
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500"
                href="#blog"
              >
                Blog
              </a>
            </li>
            <li className="mr-3">
              <a
                className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="mr-3">
              <a
                className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
