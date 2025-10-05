import React from "react";

const Contact = (props) => {
  return (
    <section id="contact" className="container mx-auto text-center py-6 pb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Contact
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto w-1/6 opacity-50 my-0 py-0 rounded-t bg-white"></div>
      </div>
      <p className="my-7 text-xl sm:text-2xl md:text-3xl leading-tight text-gray-800 text-center">
        If you’d like to get in touch with me or just say “Hi” 👋🏽 <br />
        feel free to fill out the form.
      </p>


    <div className="flex justify-center">
    <div className="bg-white py-12 px-8 shadow-2xl sm:w-96 md:w-[30rem] lg:w-[35rem] rounded-md">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="https://usebasin.com/f/cfccf6403e80" method="POST" className="grid grid-cols-1 gap-y-6 text-gray-800">    
    <div>
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 text-left">
        Full name*
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="full-name"
           id="full-name"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
          required
        />
      </div>
    </div>

            
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
        Email*
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
          required
        />
      </div>
    </div>

    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-left">
        Subject
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="subject"
           id="subject"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
        />
      </div>
    </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="text-black block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                  placeholder="Message*"
                  defaultValue={''}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Submit
                </button>
              </div>
              <input type="hidden" name="_honeypot" />
            </form>
          </div>
        </div>

        </div>
        
    </section>
  );
};

export default Contact;
