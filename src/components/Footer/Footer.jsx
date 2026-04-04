import React from "react";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-[#45627f]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-[#14b8a6]">
          Priyanshu Priyam
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Certifications", id: "certifications" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#14b8a6] text-sm sm:text-base text-[#ccdbec] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Copyright Text */}
        <p className="text-sm text-[#8ea6bf] mt-6">
          © 2026 Priyanshu Priyam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
