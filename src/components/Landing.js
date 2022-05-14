import React from "react";
import SocialIcons from "./SocialIcons";
import avatar from "../images/avatar.svg";

const Landing = (props) => {
  return (
    <section id="home" className="pt-24 pb-20">
      <div className="container mx-auto px-3 flex justify-center max-w-7xl">
        <div className="flex flex-col md:w-2/5 justify-center text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-gray-800">
            Hey, I'm Alyssa 
          </h1>
          <p className="text-2xl text-gray-800 mb-3 font-mono">
            👩🏽‍💻 UI Developer
          </p>
          <p className="text-2xl text-gray-800 mb-3 font-mono">
            🏃🏽‍♀️ Avid Runner
          </p>
          <p className="text-2xl text-gray-800 mb-3 font-mono">
            🎷 Former Band Geek
          </p>
          <div className="flex z-20">
            <SocialIcons section="landing" />
          </div>
        </div>
        <img className="hidden md:block md:h-64" src={avatar} alt="avatar" />
      </div>
    </section>
  );
};

export default Landing;
