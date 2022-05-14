import PropTypes from "prop-types";
import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 mr-1">
      <img
        className="w-full"
        src={props.imgSrc}
        alt={props.altText}
        style={{ width: "20rem", height: "20rem" }}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {props.title}
        </div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>

      <div className="max-w-sm">
        <button
          className="wedding-blue-bg hover:bg-gray-400 hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded w-full"
          onClick={props.onClick}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
