import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            src="/images/about-me.jpg" // Replace with your image path
            alt="Benedek Kaibas"
            className="rounded-lg shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-lg leading-relaxed">
            I am a third-year international student-athlete at Allegheny College. Thanks to a school scholarship, I am able to continue my tennis career
            and pursue my studies in the United States after my home country, Hungary. I have been interested in the world of computers and programming since
            high school, which is why I chose computer science as my major. I have already completed small projects and internships, but I am eager to learn
            new skills and expand my career in the field of computer science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;