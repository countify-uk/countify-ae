'use client';

import React from "react";

interface MainHeaderProps {
  title: string;
  description: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, description }) => {
  return (
    <section
      className="mx-auto justify-center w-full h-[200px] sm:h-[264px] text-center pt-28 font-bold relative flex flex-col items-center"
      aria-labelledby="page-title"
    >
      <div className="w-full max-w-3xl h-full flex items-center relative justify-center">
        <div className="z-20">
          <h1
            id="page-title"
            className="text-3xl text-white tracking-wider capitalize sm:text-4xl md:text-5xl lg:text-5xl px-4 font-medium"
            itemProp="headline"
          >
            {title}
          </h1>
          <p
            className="text-sm sm:text-lg px-4 font-normal pt-2 text-white"
            itemProp="description"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;