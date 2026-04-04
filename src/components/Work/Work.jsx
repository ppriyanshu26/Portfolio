import React, { useEffect, useState } from "react";
import { projects } from "../../constants";
import toast from "react-hot-toast";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="section-title">PROJECTS</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_18px_35px_rgba(20,184,166,0.25)]"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[#a4bdd5] mb-4 pt-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#010912]/90 p-4"
          onClick={handleCloseModal} // close if overlay clicked
        >
          <div
            className="glass-card rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
          >
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close project modal"
              className="absolute top-3 right-3 z-20 h-9 w-9 rounded-full bg-[#0b2236]/90 border border-[#5f7d9c] text-[#dce8f6] hover:text-white hover:bg-[#12314a] transition-colors"
            >
              X
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#0d2237] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-[#bad0e5] mb-6 lg:text-base text-xs leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 btn-outline lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm"
                  >
                    Code
                  </a>
                  <a
                    href={selectedProject.webapp || "#"}
                    target={selectedProject.webapp ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.webapp) {
                        e.preventDefault();
                        toast("Demo will be added shortly.", {
                          style: {
                            background: "#0d2237",
                            color: "#dce8f6",
                            border: "1px solid rgba(245,158,11,0.35)",
                          },
                        });
                      }
                    }}
                    className="w-1/2 btn-primary lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
