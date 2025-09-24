import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/arafat white.png";
import { FaDownload } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Container>
        <header className="z-40 flex items-center justify-between px-8 py-4 md:py-4 bg-white/5 border border-[rgba(171,73,154,0.2)] shadow max-w-5xl rounded-full mx-auto w-full  relative">
          {/* Logo */}
          <a href="/">
            <img className="w-[150px]" src={logo} alt="Arafat Khan" />
          </a>

          {/* Nav Menu */}

          {/* {`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width]  backdrop-blur flex-col md:flex-row flex gap-8 text-white text-sm font-normal ${
            isOpen ? "flex" : "hidden"
          }`} */}
          <nav
            id="menu"
            className={`max-md:fixed max-md:inset-0 max-md:bg-gradient-to-b from-[#23011c] to-[#200113] max-md:bg-black/90 max-md:flex-col max-md:justify-center max-md:items-center transition-all duration-300 md:flex md:static md:bg-transparent md:h-auto md:w-auto flex gap-8 text-white text-sm font-normal ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d53bbc] font-semibold"
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d53bbc] font-semibold"
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d53bbc] font-semibold"
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d53bbc] font-semibold"
              href="#experience"
            >
              Experience
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="hover:text-[#d53bbc] font-semibold"
              href="#certificates"
            >
              Certificates
            </a>

            {/* Close Button (mobile) */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-[#d53bbc] cursor-pointer "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <a
              className="hidden md:flex md:items-center gap-2 border-2 border-[#AB499A] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#d031b6] transition "
              href="https://docs.google.com/document/d/1phrC3HeiIOp24r3IV26Vx6GCnhUTlU4I/edit"
              target="_blank"
            >
              Download Resume <FaDownload />
            </a>

            {/* Open Button (mobile) */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#d53bbc] cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
