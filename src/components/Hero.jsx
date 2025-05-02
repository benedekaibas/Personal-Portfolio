import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat relative"
      id="hero"
      style={{
        backgroundImage: "url('/images/image.png')", // Ensure the image is in the public/images folder
        backgroundSize: "cover", // Ensures the image covers the entire section
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hi, I'm Benedek Kaibas
        </h2>
        <p className="text-xl max-w-xl mb-6 text-white">
          I'm a Computer Science student at Allegheny College who is passionate about Embedded Systems, AI, static analysis, compiler programming, and Robotics.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-5 py-3 rounded-2xl shadow hover:bg-blue-700"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;