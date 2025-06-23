import React from 'react'
import ProjectCard from "./ProjectCard";

//Images
import roadTripFMImg from '../images/roadTrip-fm.jpeg'
import rangeInputImg from "../images/range-input-css.png"

export default function OSSProjects() {
  return (
    <section className="bg-white py-8" id="oss">
      <div className="container mx-auto max-w-7xl flex flex-wrap pt-12 pb-12">
        <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Open-Source
        </h3>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex w-full justify-around flex-wrap">
             <ProjectCard
            imgSrc={rangeInputImg}
            title="range-input.css"
            description="Range Input CSS Generator"
            linkText="View Website"
            altText="Project - Range Input CSS Generator"
            href="https://range-input-css.netlify.app/"
          />
        
           <ProjectCard
            imgSrc={roadTripFMImg}
            title="RoadTrip.FM"
            description="Locate nearby radio stations."
            linkText="View Website"
            altText="Project - RoadTrip.FM"
            href="https://www.roadtripfm.live/"
          /> 
        </div>
      </div>
    </section>
  )
}
