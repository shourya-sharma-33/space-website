import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-20 px-4">
      <div className="flex flex-col items-center gap-8">
        <img src={Logo} alt="Logo" className="w-20" />
        <ul className="flex flex-col items-center gap-4 text-2xl">
          <li>
            <a href="#" className="hover:text-gray-400 transition">asas</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">asas</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">asas</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
