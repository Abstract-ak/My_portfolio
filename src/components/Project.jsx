import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Bus Terminal Management System",
      description:
        "A comprehensive system for managing bus terminal operations with real-time tracking, ticket booking, and schedule management. Built with modern web technologies for optimal performance.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "REST API",
        "JWT",
        "Crypto.js",
        "Context-Api",
        "python",
      ],
      githubLink: "#",
      liveLink: "http://btms.bsabt.odisha.gov.in/",
      image: "/public/Baramunda-BSABT.jpg",
    },
    {
      title: "Food Order-APP",
      description:
        "A dynamic web application allows user to browse various meals, add items to cart, edit quantities, and complete a checkout form. Users can place orders through a dummy backend, simulating the ordering process.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      githubLink: "https://github.com/Abstract-ak/Food-Order-APP",
      liveLink: "#",
      image: "/portfolio-gen.png",
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "A powerful analytics platform providing real-time insights into sales, customer behavior, and inventory management. Includes predictive analytics for sales forecasting.",
      technologies: ["Vue.js", "Django", "Redis", "AWS", "D3.js"],
      githubLink: "#",
      liveLink: "#",
      image: "/analytics-dash.png",
    },
    {
      title: "Smart Home Automation System",
      description:
        "IoT-based home automation system with mobile app control, energy monitoring, and smart device integration. Features include voice commands and automated routines.",
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "MQTT",
        "TensorFlow",
      ],
      githubLink: "#",
      liveLink: "#",
      image: "/smart-home.png",
    },
  ];

  return (
    <section id="works" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <br />
            Projects
            <span className="text-blue-600 dark:text-yellow-500">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Showcasing my technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-gray-50 dark:bg-zinc-900/50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-blue-600 dark:text-yellow-500 font-mono mb-4 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 rounded-full text-sm border border-gray-200 dark:border-zinc-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    {project.githubLink && project.githubLink.startsWith('http') && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span className="font-medium">Source Code</span>
                      </a>
                    )}
                    {project.liveLink && project.liveLink.startsWith('http') && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-yellow-500 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-blue-600 dark:bg-yellow-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 border-2 border-blue-600 dark:border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  </div>
                </div>
              </div>

              {index !== projects.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
