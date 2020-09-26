import React from "react";
import PropTypes from "prop-types";

import BlogCard from "./blogCard";

import { StaticQuery, graphql } from "gatsby";

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(newDate);
};

const renderBlogCards = (dataObj) => {
  const posts = dataObj.hashnode.user.publication.posts;
  posts.pop();

  return posts.map((post, index) => {
    return (
      <BlogCard
        key={`${index}-${post.slug}`}
        slug={post.slug}
        coverImage={post.coverImage}
        title={post.title}
        brief={post.brief}
        dateAdded={getFormattedDate(post.dateAdded)}
      />
    );
  });
};

const Blog = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query Hashnode {
          hashnode {
            user(username: "Code_Runnings") {
              publication {
                posts(page: 0) {
                  title
                  brief
                  slug
                  coverImage
                  dateAdded
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section id="blog" className="bg-white border-b p-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Recent Blog Posts
            </h2>
            <div className="w-full mb-12">
              <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap justify-center">
              {renderBlogCards(data)}
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Blog;
