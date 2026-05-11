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
const {t} = useLanguage();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

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
      <div
        className="absolute inset-0 w-full h-full z-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          direction: "ltr",
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <Image
              src={image}
              alt="Countify UAE — Chartered Accountants"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[#0a112d]"></div>
      <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:justify-between lg:items-center lg:gap-12 z-10">
        <div className="bg-transparent lg:h-screen mt-24 lg:mt-0 relative z-20 flex justify-center items-center container mx-auto py-20 lg:py-0">
          <div className="text-white text-center mx-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-8 pb-3 font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 leading-tight">
              {t("home.hero.h1", "Expert Accountants in UAE — VAT, Corporate Tax, R&D & Company Formation")}
            </h1>
            <p className="text-base sm:text-lg mt-4 text-white/90 text-center font-medium leading-relaxed tracking-wide">
              {t("home.hero.subtitle","Countify brings Big 4 expertise to growing businesses across Dubai, Abu Dhabi and Sharjah. ACCA-qualified. FTA-compliant. Results-driven.")}
            </p>
            <p className="text-xs sm:text-sm mt-5 text-white/50 text-center tracking-wider uppercase">
              {t("home.hero.trust", "Trusted by businesses across the UAE │ UK-backed expertise since 2021")}
            </p>
          </div>
        </div>
        <div className="bg-transparent lg:h-screen mb-10 lg:mb-0 relative z-20 flex justify-center items-center container mx-auto py-10 lg:py-0">
          <ConsultationForm />
        </div>
      </div>
      <div className="w-full h-40 bg-gradient-to-t from-[#0a112d] absolute bottom-0 z-10"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full text-white bg-transparent border shadow-lg"
          aria-label="Scroll Down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>

    </header>
  );
};

export default Header;
