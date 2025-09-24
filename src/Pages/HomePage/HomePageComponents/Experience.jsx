import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";
import Container from "../../../Shared/Container";

const Experience = () => {
  return (
    <div className="my-20" id="experience">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle
            text={"Experience"}
            subTitle={"Turning Challenges into Skills"}
          />
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            date="Jan 2025 – Aug 2025"
            iconStyle={{ background: "#AB499A", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Frontend Developer Intern – BlueCiate Inc. (SMSNXT)
            </h3>
            <ul className="mt-5 list-disc list-inside">
              <li>
                Developed responsive UIs using React, JavaScript, CSS, and
                Bootstrap.
              </li>
              <li>
                Built key features including a message composer, admin
                dashboard, and contact modal.
              </li>
              <li>
                Integrated APIs for real-time synchronization and optimized
                workflows.
              </li>
              <li>
                Collaborated with backend developers to ensure smooth full-stack
                alignment.
              </li>
              <li>
                Tested features, logged bugs, and authored clear documentation.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            date="2022 – 2023"
            iconStyle={{ background: "#AB499A", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Student Assistant – Dallas Community College
            </h3>

            <ul className="mt-5 list-disc list-inside">
              <li>Assisted students with research and coursework.</li>
              <li>
                Managed research materials, Excel data entry, and office
                support.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;
