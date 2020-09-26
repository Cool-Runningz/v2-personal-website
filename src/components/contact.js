import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <section id="contact" className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Contact
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-50 my-0 py-0 rounded-t bg-gray-800"></div>
      </div>
      <p className="my-4 text-3xl leading-tight text-gray-800 text-center">
        If you’d like to get in touch with me or just say “Hi” 👋🏽 <br />
        you can reach me via <br />
        📧 &nbsp;
        <a className="underline" href="mailto:HeyAHolland@gmail.com">
          Email
        </a>
      </p>
    </section>
  );
};

export default Contact;
