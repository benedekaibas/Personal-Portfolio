import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gradient-to-b from-gray-700 to-gray-800 text-white"
    >
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Experience & Leadership
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience Items */}
        <div className="hover:translate-x-2 transition-transform duration-300">
          <p className="text-lg md:text-xl">
            • Team Member – Nationally Ranked Men’s Tennis Team
          </p>
        </div>
        <div className="hover:translate-x-2 transition-transform duration-300">
          <p className="text-lg md:text-xl">
            • Developer – AI Static Analyzer for C/C++ Vulnerabilities
          </p>
        </div>
        <div className="hover:translate-x-2 transition-transform duration-300">
          <p className="text-lg md:text-xl">
            • Researcher – Aquatic Health via Sensor-Equipped ROVs
          </p>
        </div>
        <div className="hover:translate-x-2 transition-transform duration-300">
          <p className="text-lg md:text-xl">
            • Maintainer – SwingVision AI-based tennis recording system
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;