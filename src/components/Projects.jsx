import React from "react";

const projects = [
  {
    title: "Aquatic ROV Diagnosis System",
    description:
      "A tethered robot that collects data and uses deep learning to identify aquatic plants and assess lake health.",
    tech: "C++, Python, OpenCV, TensorFlow",
    github: "https://github.com/Underwater-Robotic-System",
  },
  {
    title: "Fat Pointers Benchmarking in C/C++/Rust",
    description:
      "The objective of this research is to implement both normal and fat pointers in the C language, Rust and analyze their benchmarking performance.",
    tech: "C++, C, Rust, Algorithm",
    github: "https://github.com/benedekaibas/Fat-Pointers-Benchmarking",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-b from-gray-700 to-gray-800 text-white"
    >
      <h3 className="text-3xl font-semibold mb-10 text-center text-gray-900">
        Projects
      </h3>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-2xl shadow bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-600 mb-2">Tech: {project.tech}</p>
            <a
              href={project.github}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;