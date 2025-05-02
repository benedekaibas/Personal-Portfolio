import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800 text-white">
      <h3 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Email */}
        <div>
          <p className="text-lg md:text-xl">
            Email:{" "}
            <a
              href="mailto:kaibas01@allegheny.edu"
              className="text-blue-400 hover:underline"
            >
              kaibas01@allegheny.edu
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div>
          <p className="text-lg md:text-xl">
            GitHub:{" "}
            <a
              href="https://github.com/benedekaibas"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/benedekaibas
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="text-lg md:text-xl">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kaibas-benedek-222644a5/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kaibas-benedek
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;