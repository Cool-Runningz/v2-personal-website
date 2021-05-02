import React from "react";
import PropTypes from "prop-types";

//Components
import ProjectCard from "./projectCard";

//Images
import ipsumImg from "../images/dark-bass-bg.jpg";
import bgSopranoImg from "../images/bg-headshot.png";
import rangeInputImg from "../images/range-input-css.png";
import photonRacerImg from "../images/photon-racer-editor-view.png";
import shortcutSearchImg from "../images/shortcut-search.png";

const Projects = (props) => {
  return (
    <section className="bg-white py-8" id="projects">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
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
            onClick={() => window.open("https://range-input-css.netlify.app/", "_blank", "noopener, noreferrer")}
          />
          <ProjectCard
            imgSrc={photonRacerImg}
            title="Photon Racer"
            description="Custom VSCode Theme"
            btnText="View Theme"
            onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=CodeRunnings.photon-racer", "_blank", "noopener, noreferrer")}
          />
          <ProjectCard
            imgSrc={shortcutSearchImg}
            title="Keyboard Shortcut Search"
            description="Shortcuts to help boost productivity"
            btnText="View Website"
            onClick={() => window.open("https://keyboard-shortcut-search.vercel.app/", "_blank", "noopener, noreferrer")}
          />
          <ProjectCard
            imgSrc={ipsumImg}
            title="Jazz Ipsum"
            description="Lorem ipsum quotes from jazz legends"
            btnText="View Website"
            onClick={() => window.open("https://www.jazzipsum.club/", "_blank", "noopener, noreferrer")}
          />
          <ProjectCard
            imgSrc={bgSopranoImg}
            title="Brianna Grace Soprano"
            description="Music Portfolio Website"
            btnText="View Website"
            onClick={() =>
              window.open("http://www.briannagracesoprano.com/", "_blank", "noopener, noreferrer")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
