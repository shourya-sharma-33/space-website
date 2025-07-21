import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

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
          <div data-aos="fade-up" data-aos-delay="100">
            <img src={sateliteImg} alt="" />
          </div>

          <div
            className="
              space-y-3 xl:pr-36
              p-4 border-r-2 border-b-2
              border-r-sky-800
              border-b-sky-800
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p
              className="
                text-sky-800
                uppercase
              "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Our Mission
            </p>
            <h1
              className="
                uppercase text-5xl
              "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestiae.
              Nesciunt doloribus nemo amet consequatur cum minima sapiente, rerum tempore
              velit officiis animi reiciendis, possimus mollitia laudantium non vel. Cupiditate.
            </p>
            <button className="primary-button" data-aos="fade-up" data-aos-delay="600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
