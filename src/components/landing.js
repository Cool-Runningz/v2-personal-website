import React from "react";
import PropTypes from "prop-types";

import SocialIcons from "./socialIcons";
import avatar from "../images/avatar.png";

const Landing = (props) => {
  return (
    <section className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center vh-50 justify-center">
        <div className="flex flex-col md:w-2/5 justify-center text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-gray-800">
            Hey, I'm <span className="text-gray-100"> Alyssa </span>
          </h1>
          <h4 className="text-2xl text-gray-800 mb-3 font-mono">
            👩🏽‍💻 UI Developer
          </h4>
          <h4 className="text-2xl text-gray-800 mb-3 font-mono">
            🏃🏽‍♀️ Avid Runner
          </h4>
          <h4 className="text-2xl text-gray-800 mb-3 font-mono">
            🎷 Former Band Geek
          </h4>
          <div className="z-20">
            <SocialIcons section="landing" />
          </div>
        </div>
        <img className="hidden md:block md:h-64" src={avatar} alt="avatar" />
      </div>
    </section>
  );
};

/*Landing.propTypes = {

};*/

export default Landing;
