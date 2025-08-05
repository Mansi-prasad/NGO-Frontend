import React from "react";
import bannerImage from "../../assets/images/BannerImage.png";
const Home = () => {
  return (
    <section id="home" className="px-6 py-10 mt-6 md:mt-26">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Together, We Make a <p className="py-3 text-blue-800">Difference</p>
          </h2>
          <p className="text-sm md:text-lg text-gray-700">
            We believe in a world where every individual has the opportunity to
            live with dignity, hope, and purpose. Through our programs in
            education, healthcare, environment, and women empowerment, we work
            hand-in-hand with communities to create sustainable change.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImage}
            alt="image"
            className="w-full h-auto max-w-md rounded-lg object-contain"
          />
        </div>
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0 md:ml-22">
        <button className="border p-2 px-6 rounded bg-blue-800 text-white hover:bg-blue-700 transition hover:cursor-pointer">
          Donate Now
        </button>
      </div>
    </section>
  );
};
export default Home;
