import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";

const BlogCard = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex py-4 mr-4">
      <div
        className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-tr-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url(${props.coverImage})`,
        }}
        title={props.title}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2 truncate lg:whitespace-normal">
            <a
              href={`https://blog.alyssaholland.me/${props.slug}`}
              className="hover:underline"
            >
              {props.title}
            </a>
          </div>
          <p className="text-gray-700 text-base">{props.brief}</p>
        </div>

        <p className="text-gray-600 text-sm">Published: {props.dateAdded}</p>

        <div>
          <a href={`https://blog.alyssaholland.me/${props.slug}`}>
            <p className="text-gray-800 hover:underline">
              Read Article
              <FontAwesomeIcon
                className="text-gray-800 ml-2"
                icon={faGlasses}
                size="xs"
                title={props.title}
              />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  slug: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  dateAdded: PropTypes.string.isRequired,
};

export default BlogCard;
