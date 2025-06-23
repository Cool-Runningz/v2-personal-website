import React from 'react'
import ProjectCard from "./ProjectCard";

//Images
import smashingMagazineCat from '../images/The-Smashing-Cat.svg'
import digitalOceanLogo from '../images/DO-logo-blue.png'
import logRocket from "../images/LogRocket.png"

export default function GuestWriting() {
  return (
    <section className="bg-white py-8" id="guest-writing">
      <div className="container mx-auto max-w-7xl flex flex-wrap pt-12 pb-12">
        <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Guest Writing
        </h3>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex w-full justify-around flex-wrap">
          <ProjectCard
            imgSrc={smashingMagazineCat}
            title="Smashing Magazine"
            description="Guest Blog Post"
            linkText="View Article"
            altText="Smashing Magazine Guest Blog Post"
            href="https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/"
          />
           <ProjectCard
            imgSrc={digitalOceanLogo}
            title="DigitalOcean"
            description="Guest Blog Post"
            linkText="View Article"
            altText="DigitalOcean Guest Blog Post"
            href="https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library"
          />
           <ProjectCard 
            imgSrc={logRocket}
            title="LogRocket"
            description="Guest Blog Post"
            linkText="View Article"
            altText="LogRocket Guest Blog Post"
            href="https://blog.logrocket.com/building-design-system-radix/"
          />
        </div>
      </div>
    </section>
  )
}
