import React, { useEffect, useRef } from "react";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub, FaNpm,
  FaBootstrap, FaSass, FaNode
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiRedux,
  SiMui, SiPostman, SiMongodb, SiExpress,
  SiJsonwebtokens, SiNodedotjs
} from "react-icons/si";
import './about.css';

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.tech-item');
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
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "npm", icon: FaNpm, color: "#CB3837" }
  ];

  return (
    <section id="about" className="about py-20 bg-gray-50 text-gray-800" ref={observerRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center slide-in">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-600 mb-16 text-center slide-in">
          <p className="mb-6">
            I am a MERN Stack Developer specializing in building full-stack web applications
            with MongoDB, Express.js, React, and Node.js. I create scalable and
            efficient solutions with modern web technologies.
          </p>
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
                style={{ '--delay': `${index * 100}ms` }}
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
