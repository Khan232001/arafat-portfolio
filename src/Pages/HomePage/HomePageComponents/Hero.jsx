import React from "react";
import Container from "../../../Shared/Container";
import me from "../../../assets/me2.png";
import { FaEnvelope, FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative max-md:px-2 text-white text-sm bg-top bg-no-repeat ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center md:pl-[7%]">
          {/* left */}
          <div className="left min-h-[70vh] mt-6 lg:mt-0 w-full flex flex-col items-center justify-center text-center">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
              This is Arafat Khan
            </h1>
            <p className="text-slate-300 md:text-base max-md:px-2 max-w-2xl mt-3">
              Computer Science Student & Frontend Developer Intern
            </p>

            {/* social */}
            <div className="mt-4 space-x-2">
              <a
                href="https://www.linkedin.com/in/arafatkhancs/"
                target="_blank"
                className="btn bg-white/10 border border-white/15 text-white"
              >
                <FaLinkedin className="text-xl"></FaLinkedin> LinkedIn
              </a>
              <a
                href="https://github.com/Khan232001"
                target="_blank"
                className="btn bg-white/10 border border-white/15 text-white"
              >
                <FaGithub className="text-xl"></FaGithub> Github
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4">
              <p className="flex items-center gap-3 text-slate-300 md:text-base max-md:px-2 mt-3">
                <FaLocationArrow /> Dallas, Texas, USA
              </p>
              <p className="flex items-center gap-3 text-slate-300 md:text-base max-md:px-2 mt-3">
                <FaWhatsapp />
                <a
                  href="https://wa.me/17472709082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d031b6]"
                >
                  +1 7472709082
                </a>
              </p>
              <p className="flex items-center gap-3 text-slate-300 md:text-base max-md:px-2 mt-3">
                <FaEnvelope />
                <a
                  href="mailto:arafatk538@gmail.com"
                  target="_blank"
                  className="hover:text-[#d031b6]"
                >
                  arafatk538@gmail.com
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-2 mt-8 text-sm">
              <a
                href="https://docs.google.com/document/d/1phrC3HeiIOp24r3IV26Vx6GCnhUTlU4I/edit"
                target="_blank"
                className="px-6 py-2.5 bg-[#AB499A] hover:bg-[#d031b6] transition rounded-full flex items-center gap-2"
              >
                Download Resume <FaDownload />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5"
              >
                <span>Contact With Me!</span>
                <svg
                  className="mt-0.5"
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25.5 4.75 4l-3.5 3.5"
                    stroke="currentColor"
                    strokeOpacity=".4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* right */}
          <div className="right w-full flex justify-center items-center">
            <div className="relative w-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0E010C]/50 rounded-xl z-10"></div>
              {/* Image */}
              <img
                className="w-[60%] mx-auto rounded-xl relative z-0 hidden lg:block"
                src={me}
                alt="Arafat Khan"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
