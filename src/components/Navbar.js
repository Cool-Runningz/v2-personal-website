import React from "react";
import { Link } from "gatsby"
import SVGSymbols from '../util/SVGSymbols'

const Navbar = (props) => {
  return (
    <nav
      id="header"
      className="sticky w-full z-30 top-0 text-white bg-white shadow"
    >
      <div className="w-full container flex items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center w-full sm:w-auto justify-center">
          <Link aria-label="Logo" to="/#home">
          <svg width="250" height="75" viewBox="0 0 398 188">
              {SVGSymbols["logo"]["content"]}
            </svg>
          </Link> 
        </div>

        <div>
          <ul className="list-reset hidden sm:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500" to="/#home">
                Home
              </Link>
            </li>
            <li className="mr-3">
              <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500" to="/#blog">
                Blog
              </Link>
            </li>
            <li className="mr-3">
              <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500"
                  to="/#about">
                About
              </Link>
            </li>
            <li className="mr-3">
              <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500" 
                 to="/#projects">Projects
                 </Link>
            </li>
            <li className="mr-3">
            <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500" 
              to="/#contact">
                Contact
            </Link>
            </li>
            <li>
              <Link className="py-2 px-4 inline-block text-black no-underline hover:text-gray-500" to="/uses/">Uses</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
