"use client";
import React, { useState, useEffect } from "react";
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
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="absolute bg-black opacity-50 inset-0 z-10"></div>
      <div className="flex flex-col justify-center items-center h-full lg:flex-row lg:justify-between lg:items-start lg:gap-8 z-10">
        <div className="bg-transparent lg:h-screen mt-20 lg:mt-0 relative z-20 flex justify-center items-center container mx-auto py-20">
          <div className="text-white text-center mx-6">
            <h1 className="text-6xl mt-8 pb-2 font-bold tracking-tight text-center sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Countify
            </h1>
              <p className="text-xl mt-2 text-white text-center font-bold tracking-[7px]">
              {t("home.hero.title","Expert Accounting & Business Setup Services in the UAE")}
              </p>
            {/* <p className="text-xl lg:text-3xl text-slate-50 text-center pt-3">
            15+ Years of Chartered Accountancy Excellence in Sharjah and Beyond </p> */}
            
          </div>
        </div>
        <div className="bg-transparent lg:h-screen mb-10 lg:mb-0 relative z-20 flex justify-center items-center container mx-auto py-20">
          <ConsultationForm />
        </div>
      </div>
      <div className="w-full h-36 bg-gradient-to-t from-tertiary-color absolute bottom-0"></div>
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
