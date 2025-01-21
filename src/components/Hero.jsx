import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Profile-pic.jpg"; // Add your image to the assets folder

const Hero = () => {
  return (
    <section className="hero min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 px-6">
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left text-white"
      >
        <h1 className="text-6xl font-bold mb-3">Hi, I'm Akash</h1>
        <h2 className="text-5xl font-bold mb-4">Full Stack developer</h2>
        <p className="text-xl font-semibold mb-6">
          Building Scalable Solutions with Creativity, Precision, and Passion
          for Innovation.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200">
            Hire Me
          </button>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/4 "
      >
        <img
          src={heroImage}
          alt="Akash"
          className="rounded-full m-auto shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
