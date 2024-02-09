import React from "react";
import profileImg from "../images/profile-image.jpeg"

const About = (props) => {
  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-12 pb-12 text-gray-800 max-w-[85%]">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          About Me
        </h2>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center pt-12 my-12 sm:my-4 items-center md:items-start">
          <figure className="polaroid md:w-auto w-1/2 mb-12">
            <img
              className="polaroid-img"
              src={profileImg}
              alt="Profile avatar"
            />
          </figure>
          <div>
            <p className="leading-8 px-8">
              I graduated from Florida State University with a degree in
              Computer Science and I work professionally as a UI Developer. My
              first love was music though as I played saxophone all throughout
              middle and high school and even minored in it my first two years
              of college.
              <br />
              <br />
              My first 5K was the catalyst to my ongoing running journey and now
              I've completed a myriad of 5K’s, 2 Half Marathons, and checked the
              Marathon off my bucket list ✅
              <br />
              <br />
              Overall, I have a strong passion for learning and striving to be
              the best I can be. Feel free to check out my Github to see the
              side projects I’m working on, along with the code that was written
              to create this website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};
export default About;
