import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full mb-4 p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full mb-4 p-2"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full mb-4 p-2"
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
