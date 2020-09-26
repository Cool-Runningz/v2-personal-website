import React from "react";
import PropTypes from "prop-types";

//Components
import ProjectCard from "./projectCard";

//Images
import ipsumImg from "../images/dark-bass-bg.jpg";
import bgSopranoImg from "../images/bg-headshot.png";
import designLabImg from "../images/designlab.png";

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
            imgSrc={ipsumImg}
            title="Jazz Ipsum"
            description="Lorem ipsum quotes from jazz legends"
            btnText="View Website"
            onClick={() => window.open("https://www.jazzipsum.club/", "_blank")}
          />

          <ProjectCard
            imgSrc={bgSopranoImg}
            title="Brianna Grace Soprano"
            description="Music Portfolio Website"
            btnText="View Website"
            onClick={() =>
              window.open("http://www.briannagracesoprano.com/", "_blank")
            }
          />

          <ProjectCard
            imgSrc={designLabImg}
            title="Design 101 Course"
            description="DesignLab"
            btnText="View Projects"
            onClick={() =>
              window.open(
                "https://trydesignlab.com/certificates/design-101-v1/alyssa_holland/",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
