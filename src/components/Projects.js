import React from "react";
import Appearances from "./Appearances";
import OSSProjects from "./OSSProjects";
import GuestWriting from "./GuestWriting";

const Projects = (props) => {
  return (
    <section className="bg-white py-8" id="projects">
      <div className="container mx-auto flex flex-wrap pt-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Projects
        </h2>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p className="mx-auto inline-block text-black no-underline text-center"> Miscellaneous places to find me and my projects on the interwebs.</p>
      </div>
      <Appearances />
      {/* <OSSProjects /> */}
      <GuestWriting />
    </section>
  );
};

export default Projects;
