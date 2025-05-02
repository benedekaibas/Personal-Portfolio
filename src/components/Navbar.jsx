import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Benedek Kaibas</h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-yellow-300 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-yellow-300 transition duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;