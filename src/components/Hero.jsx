import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Profile-pic.jpg";
import resume from "../assets/akash_sharma_Resume.pdf"; // Ensure your resume is placed in the assets folder

const Hero = () => {
  return (
    <section
      id="home"
      className="hero min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white/10 -top-32 -left-32"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white/10 -bottom-32 -right-32"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left text-white z-10 md:w-1/2 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Hi, I'm Akash
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
        >
          Full Stack developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl font-semibold mb-6 text-gray-100"
        >
          Building Scalable Solutions with Creativity, Precision, and Passion
          for Innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-x-4"
        >
          <a
            href={resume}
            download="Akash_Resume.pdf"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
          >
            My Resume
          </a>
          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
          >
            Hire Me
          </motion.button> */}
          <motion.button
            id="contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white px-6 py-2 rounded-lg shadow-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 p-8 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50"
          />
          <img
            src={heroImage}
            alt="Akash"
            className="rounded-full relative z-10 border-4 border-white shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
