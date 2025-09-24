import React, { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import SectionTitle from "../../../Shared/SectionTitle";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/Skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="" id="skills">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle text={"Skills"} subTitle={"Technologies I Work With"} />
        </div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {/* Repeat the list twice for seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-zinc-800/70 border border-white/20 rounded-md py-3 px-6 min-w-[200px]"
              >
                <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-lg text-gray-100">
                    {skill?.name}
                  </p>
                  <p className="text-[14px] text-gray-300">{skill?.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
