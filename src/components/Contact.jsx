import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
      <div className="text-center space-y-4">
        <p>Email: <a href="mailto:kaibas01@allegheny.edu" className="text-blue-600">kaibas01@allegheny.edu</a></p>
        <p>GitHub: <a href="https://github.com/benedekaibas" className="text-blue-600" target="_blank">github.com/benedekaibas</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kaibas-benedek-222644a5/" className="text-blue-600" target="_blank">linkedin.com/in/kaibas-benedek</a></p>
      </div>
    </section>
  );
};

export default Contact;
