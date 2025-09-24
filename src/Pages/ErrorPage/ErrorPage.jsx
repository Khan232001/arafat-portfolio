import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        404 Not Found
      </h1>
      <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
      <p className="md:text-xl text-gray-400 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="group flex items-center gap-1 bg-[#AB499A] hover:bg-[#cc31b2] px-7 py-2.5 text-white rounded-full mt-10 font-medium active:scale-95 transition-all"
      >
        Back to Home
        <FaArrowRight className="group-hover:translate-x-0.5 transition text-white text-md ml-1.5" />
      </a>
    </div>
  );
};

export default ErrorPage;
