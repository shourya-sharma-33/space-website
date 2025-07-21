import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center text-white z-10"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold z-20" data-aos="fade-right" data-aos-delay="100">
              Orbit The Earth
            </h1>
            <p className="z-20" data-aos="fade-right" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio
              exercitationem praesentium asperiores alias eius accusantium voluptate a amet,
              repudiandae iure recusandae, voluptatibus officiis cumque ipsum delectus expedita
              nihil nesciunt?
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md max-w-fit z-20"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Moon surface foreground image */}
      <img
        src={MountainPng}
        alt="Moon surface"
        className="absolute bottom-0 w-full brightness-50 z-10 pointer-events-none"
        data-aos="fade-up"
        data-aos-delay="500"
      />

      {/* Gradient overlay for smoother transition */}
      <div
        className="absolute bottom-0 w-full h-[50px] bg-gradient-to-b from-transparent to-black z-20"
        data-aos="fade-in"
        data-aos-delay="600"
      />
    </>
  );
};

export default Hero;
