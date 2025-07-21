import React from "react";
import wave from "../../assets/wave Gif.gif";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description: "Used for astronomical observations, capturing stunning images of the universe",
    aosDelay: "300",
  },
  { 
    title: "JWST",
    content: "1.5 million km",
    description: "Infrared space observatory exploring the early universe",
    aosDelay: "400",
  },
  {
    title: "Spitzer",
    content: "568 km",
    description: "Infrared telescope observing cool regions of space",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className="
    bg-black text-white
     py-10 relative z-50">
      <div className="
      max-w-6xl mx-auto px-4">
        <div className="
        grid grid-cols-1 
        sm:grid-cols-3 gap-6">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="
              min-h-[180px] flex flex-col justify-center
              items-center bg-sky-900/60 rounded-xl
              backdrop-blur-sm text-center 
              p-6 hover:scale-105 transition-transform 
              duration-300"
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            >
              <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
              <p className="mb-2">{data.content}</p>
              <p className="text-sm">{data.description}</p>
            </div>
          ))}
        </div>
            <img src={wave} alt="" 
            className="
                h-[200px] w-full object-cover
                mix-blend-screen -translate-y-24
                relative z-[0] opacity-75
            "/>
      </div>
    </div>
  );
};

export default Services;
