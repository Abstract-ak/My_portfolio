import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Akash</h1>
        <p className="text-xl">Building Scalable and Impactful Software</p>
      </motion.div>
    </section>
  );
};

export default Hero;
