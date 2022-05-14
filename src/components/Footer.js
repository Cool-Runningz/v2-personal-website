import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = (props) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-center flex-wrap w-full">
         <SocialIcons section="footer" /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
