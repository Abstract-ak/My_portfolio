import React from "react";

const Projects = () => {
  return (
    <section className="projects py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="project-card p-4 bg-white shadow-lg rounded">
            <h3 className="text-2xl font-semibold mb-2">BTMS</h3>
            <p>
              Bus Terminal Management System with real-time data integration.
            </p>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
