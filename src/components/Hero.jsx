import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6" id="hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Your Name</h2>
      <p className="text-xl max-w-xl mb-6">
        I'm a Computer Science graduate passionate about Embedded Systems, AI, and Robotics.
      </p>
      <a href="#projects" className="bg-blue-600 text-white px-5 py-3 rounded-2xl shadow hover:bg-blue-700">
        See My Work
      </a>
    </section>
  );
};

export default Hero;
