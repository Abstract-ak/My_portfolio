import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaSass,
  FaNode,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiNodedotjs,
} from "react-icons/si";
import "./about.css";

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".tech-item");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const technologies = [
    // Frontend Core
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

    // MERN Stack
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNode, color: "#339933" },

    // State Management & API
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },

    // Styling
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    // { name: "Sass", icon: FaSass, color: "#CC6699" },

    // Development Tools
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#333" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "npm", icon: FaNpm, color: "#CB3837" },
  ];

  return (
    <section
      id="about"
      className="about py-20 bg-gray-50 dark:bg-zinc-950"
      ref={observerRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800 dark:text-white relative z-10 text-center ">
          <span className="relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-600/20 dark:bg-yellow-500/20 -skew-x-6 -z-10" />
          </span>
        </h2>

        <div className="max-w text-lg text-gray-600 dark:text-gray-400 mb-16 slide-in">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white gradient-text">
                Who I Am
              </h3>
              <p className="leading-relaxed text-left">
                I'm Akash, a passionate Full Stack Developer with over{" "}
                <srong className="font-bold">2 years </srong>
                of experience in designing and developing robust, scalable, and
                user-friendly applications. My expertise spans across backend
                technologies like Node.js, frontend frameworks such as React,
                and databases like MySQL and MongoDB. Whether it’s crafting
                seamless user interfaces or optimizing system performance, I
                thrive on delivering solutions that are both efficient and
                elegant.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 gradient-text">
                What Drives Me
              </h3>
              <p className="leading-relaxed text-left">
                Innovation, creativity, and precision are at the core of
                everything I do. I’m driven by the challenge of solving complex
                problems and the satisfaction of building applications that make
                a tangible impact. From brainstorming ideas to writing the last
                line of code, I immerse myself in every step of the development
                process, always striving for excellence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 gradient-text">
                My Approach
              </h3>
              <p className="leading-relaxed text-left">
                I believe in a user-first philosophy, ensuring that every
                product I create is intuitive, accessible, and designed with the
                end-user in mind. Collaboration is another pillar of my work
                ethic. I enjoy working with diverse teams, exchanging ideas, and
                learning from others to create products that stand out.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 gradient-text">
                What Sets Me Apart
              </h3>
              <p className="leading-relaxed text-left">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Full stack Expertise: </strong>
                    Proficient in both frontend and backend development,
                    allowing me to create cohesive and end-to-end solutions.
                  </li>
                  <li>
                    <strong>Problem Solver: </strong>
                    Skilled at breaking down complex challenges into actionable
                    steps, delivering effective results under tight deadlines.
                  </li>
                  <li>
                    <strong>IoT enabled software solution: </strong>
                    Experience in building IoT-enabled systems that leverage
                    real-time data for smarter solutions.
                  </li>
                  <li>
                    <strong>Scalability Focus: </strong>
                    Strong emphasis on building systems that can grow alongside
                    user needs without compromising performance.
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 gradient-text">
                Beyond Code
              </h3>
              <p className="leading-relaxed text-left">
                When I’m not coding, I enjoy exploring the latest tech trends,
                contributing to open-source projects, and learning new tools to
                expand my skillset. I’m also a firm believer in the power of
                mentorship, often guiding aspiring developers to achieve their
                goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 gradient-text">
                Looking Ahead
              </h3>
              <p className="leading-relaxed text-left">
                As I continue my journey in tech, I aim to contribute to
                impactful projects that not only push the boundaries of
                technology but also solve real-world problems. Let’s build
                something extraordinary together!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text slide-in">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-item"
                style={{ "--delay": `${index * 100}ms` }}
              >
                <div className="tech-content">
                  <div className="icon-wrapper">
                    <tech.icon size={40} color={tech.color} />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
