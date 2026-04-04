import React, { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { certifications } from "../../constants";

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certifications.length;

  const visibleCards = useMemo(() => {
    if (total === 0) return [];
    if (total === 1) {
      return [{ cert: certifications[0], position: "center" }];
    }

    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      { cert: certifications[prevIndex], position: "left" },
      { cert: certifications[activeIndex], position: "center" },
      { cert: certifications[nextIndex], position: "right" },
    ];
  }, [activeIndex, total]);

  const showPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="section-title">CERTIFICATIONS</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">
          Verified certifications that reflect my learning in cloud, development,
          and real-world engineering practices.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous certification"
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6] hover:text-white hover:border-[#14b8a6] transition-colors"
            >
              <FiChevronLeft className="mx-auto text-xl" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next certification"
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6] hover:text-white hover:border-[#14b8a6] transition-colors"
            >
              <FiChevronRight className="mx-auto text-xl" />
            </button>
          </>
        )}

        <div className="relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden px-12 sm:px-16">
          {visibleCards.map(({ cert, position }) => {
            const isCenter = position === "center";
            const translateClass =
              position === "left"
                ? "-translate-x-[88%] sm:-translate-x-[76%]"
                : position === "right"
                ? "translate-x-[88%] sm:translate-x-[76%]"
                : "translate-x-0";

            const scaleClass = isCenter ? "scale-100 opacity-100 z-30" : "scale-90 opacity-45 z-10";
            const visibilityClass = !isCenter && total === 1 ? "hidden" : !isCenter ? "hidden sm:block" : "block";

            return (
              <article
                key={cert.id}
                className={`absolute w-[320px] sm:w-[430px] rounded-2xl p-7 sm:p-8 transition-[transform,opacity,filter,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${translateClass} ${scaleClass} ${visibilityClass} ${isCenter ? "glass-card shadow-[0_20px_38px_rgba(20,184,166,0.2)]" : "glass-card"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-[#d8e4ef]">
                    <img
                      src={cert.image}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#bad0e5] mt-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#12314a] text-[#b9d9f4] border border-[#486886]">
                    Issued: {cert.issued}
                  </span>
                  {cert.credentialId && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#193229] text-[#8ff0cf] border border-[#2d7763]">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <p className="mt-5 text-[#9ab2c9] text-base leading-relaxed line-clamp-4">
                  {cert.description}
                </p>

                {cert.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span key={`${cert.id}-${tag}`} className="chip !mr-0 !mb-0">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {isCenter && (
                  <div className="mt-6 pt-4 border-t border-[#3f5a74]">
                    <a
                      href={cert.certificateLink || cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary rounded-xl px-4 py-3 text-base w-full"
                    >
                      Certificate
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;