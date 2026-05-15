"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ConsultationForm from "./ConsultationForm";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  heroImages: string[];
}

const Header: React.FC<HeaderProps> = ({ heroImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="homeHeader relative overflow-hidden min-h-screen">
      {/* Hero image stack — crossfade with Ken Burns */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentImageIndex}
          >
            <Image
              src={image}
              alt="Countify UAE — Chartered Accountants Dubai | VAT, Corporate Tax & R&D Advisory"
              fill
              className={`object-cover object-center motion-safe:animate-hero-zoom ${
                index === currentImageIndex ? "" : ""
              }`}
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="100vw"
              quality={75}
            />
          </div>
        ))}
      </div>

      {/* Overlay gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-[#0a112d]/60 to-[#0a112d]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a112d]/80 via-transparent to-[#0a112d]/50"
      />

      {/* Soft ambient gold */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#dca958]/10 blur-[120px] z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between min-h-screen container mx-auto px-6 lg:px-8 pt-28 lg:pt-0 pb-20 lg:pb-0 gap-10 lg:gap-12">
        {/* Left — Copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Eyebrow with gold line */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
            <span className="hidden lg:block w-12 h-[2px] bg-gradient-to-r from-transparent to-[#dca958]" />
            <p className="text-xs sm:text-sm font-semibold text-[#dca958] uppercase tracking-[0.25em]">
              {t("home.hero.eyebrow", "Chartered Accountants · UAE")}
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            {t(
              "home.hero.h1.line1",
              "Big 4 expertise."
            )}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#dca958] via-[#e69c31] to-[#dca958]">
              {t("home.hero.h1.line2", "Founder pricing.")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl mt-6 text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t(
              "home.hero.subtitle",
              "ACCA-qualified accountants delivering VAT, Corporate Tax, R&D Advisory and Company Formation services across Dubai, Abu Dhabi and Sharjah."
            )}
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            {[
              t("home.hero.badge.fcca", "FCCA Qualified"),
              t("home.hero.badge.big4", "Big 4 Alumni"),
              t("home.hero.badge.fta", "FTA Compliant"),
              t("home.hero.badge.rd", "R&D Specialists"),
            ].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/5 border border-white/15 backdrop-blur-sm rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">20+</p>
              <p className="text-[11px] sm:text-xs text-white/60 uppercase tracking-wider mt-1">{t("home.hero.stats.years", "Years Combined")}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">7+</p>
              <p className="text-[11px] sm:text-xs text-white/60 uppercase tracking-wider mt-1">{t("home.hero.stats.rd", "R&D Specialists")}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">2</p>
              <p className="text-[11px] sm:text-xs text-white/60 uppercase tracking-wider mt-1">{t("home.hero.stats.jurisdictions", "Jurisdictions")}</p>
            </div>
          </div>
        </div>

        {/* Right — Consultation Form */}
        <div className="w-full lg:w-[440px] xl:w-[480px] flex-shrink-0">
          <div className="relative">
            {/* Gold accent corner */}
            <div
              aria-hidden="true"
              className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[#dca958]/50 rounded-tr-2xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[#dca958]/50 rounded-bl-2xl pointer-events-none"
            />
            <ConsultationForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 group flex flex-col items-center gap-2 text-white/60 hover:text-[#dca958] transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{t("home.hero.scroll", "Scroll")}</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-[#dca958] motion-safe:animate-scroll-line" />
        </span>
      </button>
    </header>
  );
};

export default Header;
