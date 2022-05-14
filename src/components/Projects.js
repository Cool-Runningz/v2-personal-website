import React from "react";
import ProjectCard from "./ProjectCard";

//Images
import roadTripFMImg from '../images/roadTrip-fm.jpeg'
import smashingMagazineCat from '../images/The-Smashing-Cat.svg'
import digitalOceanLogo from '../images/DO-logo-blue.png'
import rangeInputImg from "../images/range-input-css.png";
import shortcutSearchImg from "../images/shortcut-search.png";

const Projects = (props) => {
  return (
    <section className="bg-white py-8" id="projects">
      <div className="container mx-auto flex flex-wrap pt-12 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Projects
        </h2>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex w-full justify-around flex-wrap">
          <ProjectCard
            imgSrc={rangeInputImg}
            title="range-input.css"
            description="Range Input CSS Generator"
            btnText="View Website"
            altText="Project - Range Input CSS Generator"
            onClick={() => window.open("https://range-input-css.netlify.app/", "_blank", "noopener, noreferrer")}
          />
          <ProjectCard
            imgSrc={smashingMagazineCat}
            title="Smashing Magazine"
            description="Guest Blog Post"
            btnText="View Article"
            altText="Smashing Magazine Guest Blog Post"
            onClick={() => window.open("https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/", "_blank", "noopener, noreferrer")}
          />
           <ProjectCard
            imgSrc={digitalOceanLogo}
            title="DigitalOcean"
            description="Guest Blog Post"
            btnText="View Article"
            altText="DigitalOcean Guest Blog Post"
            onClick={() =>
              window.open("https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library", "_blank", "noopener, noreferrer")
            }
          />
           <ProjectCard
            imgSrc={roadTripFMImg}
            title="RoadTrip.FM"
            description="Locate nearby radio stations."
            btnText="View Website"
            altText="Project - RoadTrip.FM"
            onClick={() => window.open("https://www.roadtripfm.live/", "_blank", "noopener, noreferrer")}
          />
         <ProjectCard
            imgSrc={shortcutSearchImg}
            title="Keyboard Shortcut Search"
            description="Shortcuts to help boost productivity"
            btnText="View Website"
            altText="Project - Keyboard Shortcut Search"
            onClick={() => window.open("https://keyboard-shortcut-search.vercel.app/", "_blank", "noopener, noreferrer")}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
