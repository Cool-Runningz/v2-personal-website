import React from "react";
import PropTypes from "prop-types";

//Images
import waveTop from "../images/waveTop.svg";
import waveBottom from "../images/waveBottom.svg";

//Components
import Landing from "./landing";
import Navbar from "./navbar";
import About from "./about";
import Blog from "./blog";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <main className="leading-normal tracking-normal text-white wedding-blue-bg">
      {children}

      <Navbar />
      <Landing />

      {/* Waves SVG */}
      <div className="relative -mt-12 lg:-mt-16">
        <img src={waveBottom} alt="wave bottom" />
      </div>

      <Blog />
      <About />
      <Projects />

      {/* Waves SVG */}
      <img src={waveTop} alt="wave Top" />
      <Contact />
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
