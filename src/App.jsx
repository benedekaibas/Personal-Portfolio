import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-gray-900 scroll-smooth"
      style={{
        backgroundImage: "url('/images/image.png')", // Ensure the image is in the public/images folder
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;