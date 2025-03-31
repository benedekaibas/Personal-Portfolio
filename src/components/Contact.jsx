import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
      <div className="text-center space-y-4">
        <p>Email: <a href="mailto:youremail@example.com" className="text-blue-600">youremail@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-600" target="_blank">github.com/yourusername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-blue-600" target="_blank">linkedin.com/in/yourusername</a></p>
      </div>
    </section>
  );
};

export default Contact;
