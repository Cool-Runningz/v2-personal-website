import * as React from "react"

//Images
import waveTop from "../images/waveTop.svg";
import waveBottom from "../images/waveBottom.svg";

//Components
import Seo from "../components/Seo";
import Layout from '../components/Layout';
import Landing from '../components/Landing'
import Blog from '../components/Blog';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
   <Layout>
       <Seo />
       <main className="leading-normal tracking-normal text-white wedding-blue-bg">
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
    </main>
   </Layout>
  )
}

export default IndexPage
