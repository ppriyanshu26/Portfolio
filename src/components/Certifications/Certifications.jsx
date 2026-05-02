import React, { useMemo, useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { certifications } from "../../constants";

const formatCredentialId = (credentialId) => {
  if (!credentialId || credentialId.length <= 40) return credentialId;
  return `${credentialId.slice(0, 6)}...${credentialId.slice(-4)}`;
};

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certifications.length;

  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const touchStartX = useRef(0);

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

  const triggerMove = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    if (direction === "next") showNext();
    else showPrevious();
    setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 50) return;
      if (diff > 0) triggerMove("next");
      else triggerMove("prev");
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > 0 || e.deltaX > 0) triggerMove("next");
      else triggerMove("prev");
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

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

      <div className="mx-auto max-w-6xl">
        <div className="hidden sm:block relative">
          {total > 1 && (
            <>
              <button
                onClick={showPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6]"
              >
                <FiChevronLeft className="mx-auto text-xl" />
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6]"
              >
                <FiChevronRight className="mx-auto text-xl" />
              </button>
            </>
          )}

          <div
            ref={containerRef}
            className="relative min-h-[560px] flex items-center justify-center overflow-hidden px-16"
          >
            {visibleCards.map(({ cert, position }) => {
              const isCenter = position === "center";

              const translateClass =
                position === "left"
                  ? "-translate-x-[76%]"
                  : position === "right"
                  ? "translate-x-[76%]"
                  : "translate-x-0";

              const scaleClass = isCenter
                ? "scale-100 opacity-100 z-30"
                : "scale-90 opacity-45 z-10";

              return (
                <article
                  key={cert.id}
                  className={`absolute w-[430px] rounded-2xl p-8 transition-all duration-700 ${translateClass} ${scaleClass} glass-card`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-white rounded-lg overflow-hidden border">
                      <img
                        src={cert.image}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-base text-[#bad0e5] mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col items-start gap-2">
                    <span className="px-3 py-1 text-xs bg-[#12314a] text-[#b9d9f4] rounded-full">
                      Issued: {cert.issued}
                    </span>
                    {cert.credentialId && (
                      <span
                        className="px-3 py-1 text-xs bg-[#193229] text-[#8ff0cf] rounded-full"
                        title={cert.credentialId}
                      >
                        ID: {formatCredentialId(cert.credentialId)}
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-[#9ab2c9]">
                    {cert.description}
                  </p>

                  {cert.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={cert.certificateLink || cert.verifyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full text-center py-3 rounded-xl"
                    >
                      Certificate
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="block sm:hidden">
          <MobileCertList items={certifications} />
        </div>
      </div>
    </section>
  );
};

const MobileCertList = ({ items = [] }) => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const total = items.length;

  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const touchStartX = useRef(0);

  const showPrev = () => {
    setExpanded(null);
    setActive((p) => (p - 1 + total) % total);
  };

  const showNext = () => {
    setExpanded(null);
    setActive((p) => (p + 1) % total);
  };

  const triggerMove = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    if (direction === "next") showNext();
    else showPrev();
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 40) return;
      if (diff > 0) triggerMove("next");
      else triggerMove("prev");
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > 0 || e.deltaX > 0) triggerMove("next");
      else triggerMove("prev");
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const visible = [
    items[(active - 1 + total) % total],
    items[active],
    items[(active + 1) % total],
  ];

  const expandedCert = items.find((it) => it.id === expanded);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
    >
      <button
        onClick={showPrev}
        className="absolute left-2 z-40 h-10 w-10 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6]"
      >
        <FiChevronLeft className="mx-auto text-lg" />
      </button>

      <div className="relative w-full min-h-[360px] flex items-center justify-center overflow-hidden">
        {visible.map((cert, i) => {
          const position = i === 0 ? "left" : i === 2 ? "right" : "center";
          const isCenter = position === "center";
          const isExpanded = expanded === cert.id;

          const translate =
            position === "left"
              ? "-translate-x-[85%]"
              : position === "right"
              ? "translate-x-[85%]"
              : "translate-x-0";

          const scale = isCenter
            ? isExpanded
              ? "scale-105 z-40"
              : "scale-100 z-30"
            : "scale-90 opacity-40 z-10";

          return (
            <div
              key={cert.id}
              onClick={() => {
                if (!isCenter) return;
                setExpanded((prev) =>
                  prev === cert.id ? null : cert.id
                );
              }}
              className={`absolute w-[260px] rounded-xl p-4 transition-all duration-500 ${translate} ${scale} ${
                isCenter ? "glass-card shadow-lg" : "glass-card"
              }`}
            >
              <div className="text-center text-white font-semibold text-sm leading-tight">
                {cert.title}
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-white rounded-md overflow-hidden border">
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs text-[#9fb8d0]">
                  {cert.issuer}
                </div>
              </div>

              <div className="mt-3 text-center text-xs text-[#b9d9f4]">
                {cert.issued}
              </div>

              {isCenter && isExpanded && (
                <div className="mt-4 pt-3 border-t border-[#3f5a74]">
                  <p className="text-sm text-[#c7e0f6] leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={cert.certificateLink || cert.verifyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block text-center py-2 rounded-lg bg-[#14b8a6] text-white text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={showNext}
        className="absolute right-2 z-40 h-10 w-10 rounded-full border border-[#4c6c89] bg-[#0b2236]/85 text-[#dce8f6]"
      >
        <FiChevronRight className="mx-auto text-lg" />
      </button>

      {expanded !== null && expandedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setExpanded(null)}
          />

          <div className="relative w-full max-w-md max-h-[90vh] overflow-auto rounded-xl p-6 glass-card shadow-lg text-white">
            <button
              onClick={() => setExpanded(null)}
              className="absolute right-3 top-3 h-9 w-9 rounded-full bg-[#0b2236]/80 flex items-center justify-center text-[#dce8f6]"
              aria-label="Close"
            >
              <FiX />
            </button>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden border">
                  <img
                    src={expandedCert.image}
                    alt={expandedCert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{expandedCert.title}</h3>
                  <p className="text-sm text-[#b9d9f4]">{expandedCert.issuer}</p>
                </div>
              </div>

              <div className="text-xs text-[#9fb8d0]">Issued: {expandedCert.issued}</div>

              {expandedCert.credentialId && (
                <div
                  className="text-xs text-[#8ff0cf]"
                  title={expandedCert.credentialId}
                >
                  ID: {formatCredentialId(expandedCert.credentialId)}
                </div>
              )}

              <p className="text-sm text-[#c7e0f6] leading-relaxed">{expandedCert.description}</p>

              {expandedCert.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {expandedCert.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={expandedCert.certificateLink || expandedCert.verifyLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-center py-2 rounded-lg bg-[#14b8a6] text-white text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;