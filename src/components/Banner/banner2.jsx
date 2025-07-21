import React from "react";
import sateliteImg from "../../assets/satelite2.jpg";

const Banner = () => {
  return (
    <div
      className="
        bg-black text-white
        pb-1 
      "
    >
      <div
        className="
          container justify-self-center m-10
        "
      >
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2 gap-4
            items-center 
          "
        >
          <div
            className="
              space-y-3 xl:pr-36
              p-4 border-l-2 border-b-2
              border-l-sky-800
              border-b-sky-800
            "
            data-aos="fade-up"
          >
            <p
              className="
                text-sky-800
                uppercase
              "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Mission
            </p>
            <h1
              className="
                uppercase text-5xl
              "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae.
              Nesciunt doloribus nemo amet consequatur cum minima sapiente, rerum tempore
              velit officiis animi reiciendis, possimus mollitia laudantium non vel. Cupiditate.
            </p>
            <button className="primary-button" data-aos="fade-up" data-aos-delay="400">
              Learn More
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <img src={sateliteImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
