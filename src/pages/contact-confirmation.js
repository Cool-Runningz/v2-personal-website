import React from 'react'
import { Link } from "gatsby"
import SVGSymbols from '../util/SVGSymbols'


export default function ContactConfirmation() {
    return (
        <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
            <svg width="250" height="75" viewBox="0 0 398 188">
              {SVGSymbols["logo"]["content"]}
            </svg>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Thanks for reaching out!</h1>
                  <p className="mt-1 text-base text-gray-500">Your submission was successful 📧 </p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"> 
                  <Link className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-grey-800 bg-[#74c7d5] hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" to="/">Go back home</Link>
                </div>
              </div>
            </main>
          </div>
        </div>
    )
  }
  