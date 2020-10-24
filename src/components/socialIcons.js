import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import SVGSymbols from './SVGSymbols'

const SocialIcons = (props) => {
  return (
    <>
      <a
        href="https://github.com/Cool-Runningz"
        className={props.section === "landing" ? "mr-8" : "mr-16"}
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faGithub}
          size="2x"
        />
      </a>
      <a
        href="https://codesandbox.io/u/Cool-Runningz/sandboxes"
        className={props.section === "landing" ? "mr-8" : "mr-16"}
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faCodepen}
          size="2x"
        />
      </a>
      <a
        href="https://www.notion.so/Alyssa-Holland-Resume-0180e242c3824570a5c362a731ae8ce6"
        className={props.section === "landing" ? "mr-8" : "mr-16"}
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faFileAlt}
          size="2x"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/alyssa-samuels-holland"
        className={props.section === "landing" ? "mr-8" : "mr-16"}
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-gray-800 hover:text-gray-500"
          icon={faLinkedinIn}
          size="2x"
        />
      </a>
      <a
        href="https://blog.alyssaholland.me/"
        className={props.section === "landing" ? "mr-8" : "mr-16"}
        target="_blank"
      >
        <svg className="w-8 h-8 text-gray-800 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="337" height="337" viewBox="0 0 337 337" fill="none">
          {SVGSymbols["hashnode"]["content"]}
        </svg>
      </a>
    </>
  );
};

SocialIcons.propTypes = {
  classes: PropTypes.object,
  section: PropTypes.oneOf(["landing", "footer"]),
};

export default SocialIcons;
