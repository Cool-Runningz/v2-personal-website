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
            I earned my Computer Science degree from Florida State University and have been working as a software developer since 2014.
            Much of my focus has been on front-end development, especially component libraries and accessibility. 
            That work has taught me how much thoughtful design and implementation can shape someone’s experience of the web.
            <br /><br />
             I’ve always believed that the best way to learn is to teach, which is why I write regularly about what I’m exploring — from technical deep dives to productivity tools. 
             My writing has appeared in places like <a className="hover:underline font-bold decoration-wavy decoration-[#74c7d5]"
                               target="_blank" rel="noopener noreferrer"
                               href="https://www.smashingmagazine.com/author/alyssa-holland/">Smashing Magazine</a>, 
                               <a className="hover:underline font-bold decoration-wavy decoration-[#74c7d5]"
                               target="_blank" rel="noopener noreferrer"
                               href="https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library">&nbsp;DigitalOcean</a>, and 
                               <a className="hover:underline font-bold decoration-wavy decoration-[#74c7d5]"
                               target="_blank" rel="noopener noreferrer"
                               href="https://blog.logrocket.com/author/alyssaholland/">&nbsp;LogRocket</a>, and I also created a course called 
                               <a className="hover:underline font-bold decoration-wavy decoration-[#74c7d5] italic"
                               target="_blank" rel="noopener noreferrer"
                               href="https://www.newline.co/courses/the-approachable-guide-to-accessible-components">&nbsp;The Approachable Guide to Accessible Components</a> to help others build more inclusive UIs.

            <br /><br />
             Beyond development, I co-host a podcast with my sister called <a className="hover:underline font-bold decoration-wavy decoration-[#74c7d5]"
                               target="_blank" rel="noopener noreferrer"
                               href="https://cultureinbetween.com/">Culture In Between</a>, where we explore the unique experiences of people who’ve grown up in a culture different from their parents’.
            <br /><br />
             These days, I split my time between writing, coding, and building things that (hopefully) make the web a little better for the next person who comes along.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};
export default About;
