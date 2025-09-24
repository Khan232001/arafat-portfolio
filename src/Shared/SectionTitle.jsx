import React from "react";

const SectionTitle = ({ text, subTitle }) => {
  return (
    <div
      className="flex items-center"
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
    >
      <div className="h-20 w-2 bg-[#AB499A] mr-4 mt-4"></div>
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#745272] text-transparent bg-clip-text">
          {text}
        </h1>
        <p className="text-gray-400 mt-2 text-lg">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
