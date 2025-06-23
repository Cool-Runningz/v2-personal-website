import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import SVGSymbols from '../util/SVGSymbols'

const Ahref = (props) => {
  return (
    <a
    href={props.url}
    className={props.section === "landing" ? "mr-8" : "mr-10"}
    target="_blank" 
    rel="noopener noreferrer"
  >
   {props.children}
  </a> 
  )
}

const SocialIcons = (props) => { 
  return (
    <>
    <Ahref url="https://github.com/Cool-Runningz" section={props.section}>
       <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faGithub}
          size="2x"
          title="GitHub"
        />
    </Ahref>
    <Ahref url="https://codesandbox.io/u/Cool-Runningz/sandboxes" section={props.section}>
    <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faCodepen}
          size="2x"
          title="CodeSandbox"
        />
    </Ahref>
    <Ahref url="https://www.notion.so/Alyssa-Holland-Resume-0180e242c3824570a5c362a731ae8ce6" section={props.section}>
    <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faFileAlt}
          size="2x"
          title="Resume"
        />
    </Ahref>
    <Ahref url="https://www.linkedin.com/in/alyssa-samuels-holland" section={props.section}>
    <FontAwesomeIcon
         
          className="text-gray-800 hover:text-gray-500"
          icon={faLinkedinIn}
          size="2x"
          title="Linkedin"
        />
    </Ahref>
    <Ahref url="https://blog.alyssaholland.me/" section={props.section}>
     <svg aria-label="Blog" className="w-8 h-8 text-gray-800 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="337" height="337" viewBox="0 0 337 337" fill="none">
          {SVGSymbols["hashnode"]["content"]}
        </svg>
    </Ahref>
    </>
  );
};

SocialIcons.propTypes = {
  classes: PropTypes.object,
  section: PropTypes.oneOf(["landing", "footer"]),
};

export default SocialIcons;
