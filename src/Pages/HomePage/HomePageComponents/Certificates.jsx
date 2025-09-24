import React, { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import SectionTitle from "../../../Shared/SectionTitle";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    fetch("/Certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);
  return (
    <div className="my-20" id="certificates">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle
            text={"Certificates"}
            subTitle={"Certificates That Define My Skills"}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:h-[400px] w-full mt-10 mx-auto">
          {certificates.map((certificate) => (
            <div
              key={certificate?.id}
              className="relative group flex-grow transition-all w-full md:w-56 h-[400px] duration-500 hover:w-full hover:cursor-pointer rounded-lg"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={certificate?.image}
                alt="image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className="text-3xl">{certificate?.name}</h1>
                <p className="text-sm">{certificate?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Certificates;
