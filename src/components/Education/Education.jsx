import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="section-title">EDUCATION</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">
          My academic journey shaped how I build, solve problems, and grow as an engineer.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-[#14b8a6] via-[#6a8aac] to-[#f59e0b] h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative mb-10 md:mb-14"
          >
            {/* Timeline Milestone */}
            <div className="absolute left-4 md:left-1/2 top-10 md:top-12 -translate-x-1/2 z-10">
              <div className="h-4 w-4 rounded-full bg-[#14b8a6] ring-4 ring-[#0d2237] shadow-[0_0_16px_rgba(20,184,166,0.6)]"></div>
            </div>

            {/* Content Section */}
            <div
              className={`w-[calc(100%-3rem)] md:w-[46%] p-5 sm:p-7 rounded-2xl glass-card ml-10 md:ml-0 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(20,184,166,0.18)] reveal-up ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Top Row */}
              <div className="flex items-start gap-4 sm:gap-6">
                {/* School Logo/Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-[#d8e4ef]">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, Date */}
                <div className="flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base text-[#ccdbec] mt-1">
                      {edu.school}
                    </h4>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#12314a] text-[#b9d9f4] border border-[#486886]">
                      {edu.date}
                    </span>
                    {edu.date.includes("Expected") && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#193229] text-[#8ff0cf] border border-[#2d7763]">
                        Ongoing
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#3f5a74]">
                <p className="text-[#cce7f0] font-semibold">Grade: {edu.grade}</p>
                <p className="mt-3 text-[#9ab2c9] leading-relaxed text-sm sm:text-base">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
