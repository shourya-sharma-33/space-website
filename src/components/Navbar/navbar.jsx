import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div
      className="
        fixed top-0 right-0
        w-full z-50 bg-black/10
        backdrop-blur-sm py-4
        sm:py-4    
      "
      data-aos="fade-down"
    >
      <div
        className="
          container justify-self-center
        "
      >
        <div
          className="
            flex gap-10 mx-5 sm:justify-between
            items-center
          "
        >
          <div
            className="
              flex text-white items-center
              gap-4 font-bold text-2xl
            "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={Logo}
              alt=""
              className="
                w-10
              "
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <span>TCJ SPACE</span>
          </div>

          {/* <div className="
                        text-white
                    ">
                        <ul className="
                            flex items-center
                            gap-6 text-xl py-4
                        ">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Techology</a>
                            </li>
                            <li>
                                <a href="#">Galaxy</a>
                            </li>
                            <li>
                                <a href="#">Satellite</a>
                            </li>
                      </ul>
                    </div> */}

          <div data-aos="fade-left" data-aos-delay="200">
            <button
              className="
                text-white border-2
                border-white px-3
                py-1 rounded-md
              "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
