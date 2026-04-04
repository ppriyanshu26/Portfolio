import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 reveal-up">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Priyanshu
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#14b8a6] leading-tight min-h-[2.5rem]">
            <span className="text-[#dce8f6]">I am a </span>
            <ReactTypingEffect
              text={[
                'Android Developer',
                'Data Scientist',
                'Py-Flask Developer',
                'Database Architect',
                'Cyber Enthusiast',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#14b8a6]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#9ab2c9] mb-10 mt-8 leading-relaxed max-w-xl">
            A Software Engineer with hands-on experience in building 
            Android applications, creating and testing APIs, and working with 
            relational database systems. I focus on delivering reliable, 
            user-friendly, and performance-optimized applications through my 
            projects and academic work.
          </p>
          {/* Resume Button */}
          <a
            href="https://ppriyanshu26.online/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-8 mt-2 text-base md:text-lg"
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#14b8a6]/70 rounded-full shadow-[0_0_80px_rgba(20,184,166,0.2)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Priyanshu Priyam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_14px_28px_rgba(20,184,166,0.35)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
