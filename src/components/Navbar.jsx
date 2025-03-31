import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Benedek Kaibas</h1>
        <ul className="flex space-x-4 text-sm font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
