import React from "react";
import aboutImg from "../../assets/images/aboutImg2.jpg";
const About = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-16 px-6 md:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="NGO Helping People"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a non-profit organization dedicated to creating positive
            change in communities through education, healthcare, and sustainable
            development programs. Since our founding, we have impacted thousands
            of lives by connecting resources with those who need them most.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to empower individuals and communities to break the
            cycle of poverty and achieve self-sufficiency. We work hand-in-hand
            with volunteers, partners, and local leaders to ensure our
            initiatives are impactful and lasting.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-800 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700 transition duration-300"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
