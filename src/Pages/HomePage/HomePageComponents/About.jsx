import React from "react";
import Container from "../../../Shared/Container";
import me from "../../../assets/me.png";
import SectionTitle from "../../../Shared/SectionTitle";

const About = () => {
  return (
    <div className="text-white mb-5" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* left */}
          <div className="left">
            <img className="w-8/12 mx-auto" src={me} alt="" />
          </div>

          {/* right */}
          <div className="right w-full">
            <div className="title mb-10">
              <SectionTitle
                text={"About Me"}
                subTitle={"A Glimpse Into My Journey."}
              ></SectionTitle>
            </div>
           <div className="info bg-zinc-800/70 p-5 rounded-md border border-[#65275b74]">
  <p className="text-justify">
    I am a final-year Computer Science student at UT Dallas (graduating Dec
    2025) with a strong passion for building impactful digital solutions.
    Currently working as a Frontend Developer Intern at{" "}
    <span className="text-[#d846c0] font-semibold">BlueCiate (SMSNXT)</span>,
    where I design and develop responsive, user-friendly, and scalable web
    applications.
  </p>
  <br />
  <p className="text-justify">
    💡 Skilled in{" "}
    <span className="text-[#d846c0] font-semibold">
      MERN Stack (MongoDB, Express, React, Node.js), Java, Python, SQL, and C++
    </span>
    , I have built full-stack projects including E-commerce platforms, DBMS
    applications, and management systems. I love solving challenging problems,
    collaborating in teams, and continuously learning new technologies to grow
    as a professional.
  </p>
  <br />
  <p className="text-justify">
    My ultimate goal is to design solutions that are not only technically sound
    but also meaningful and impactful to people’s lives.
  </p>
</div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
