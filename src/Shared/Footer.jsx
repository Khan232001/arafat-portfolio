import React from "react";
import logo from "../assets/arafat white.png";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gradient-to-b from-[#23011c] to-[#200113] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <a href="/">
              <img alt="Arafat Khan" className="max-w-[200px]" src={logo} />
            </a>
          </div>
          <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
            A passionate Web Developer crafting responsive, user-friendly, and
            scalable applications with modern technologies.
          </p>
        </div>
        <div className="w-[80%] mx-auto border-t border-[#511648]">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            <a
              className="text-[#d031b6] font-semibold"
              href="https://www.linkedin.com/in/arafatkhancs/"
              target="_blank"
            >
              Arafat Khan
            </a>{" "}
            ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
