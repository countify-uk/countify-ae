"use client";
import services from "@/data/services.json";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
const ServiceSection = () => {
  const { t, language } = useLanguage();

  return (
    <div
      className={`bg-white bg-no-repeat bg-cover bg-center bg-effect-06 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {" "}
      <section className="py-16 lg:py-24 bg-no-repeat bg-cover bg-center text-gray-900">
        <div className="text-center mb-12 lg:mb-16 px-5">
          <p className="text-sm font-medium text-[#dca958] uppercase tracking-widest mb-3 relative z-10">
            {language === "ar" ? "ما نقدمه" : "What We Offer"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight relative z-10">
            {t("servicessection.title", "Services")}
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            {t(
              "servicessection.subtitle",
              "Expert accounting, tax and business setup services across the UAE"
            )}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#dca958] to-[#e69c31] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group z-30"
            >
              <article
                className={`overflow-hidden border border-gray-100 h-[320px] rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                role="article"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <div className="absolute z-20 bottom-0 px-6 py-6 space-y-2 w-full flex flex-col justify-end">
                    <h2 className="font-bold text-xl text-white group-hover:text-[#dca958] duration-300 transition">
                      {service.title[language]}
                    </h2>
                    <p className="text-sm font-normal text-white/70 line-clamp-2">
                      {service.description[language]}
                    </p>
                  </div>
                  <div className="bg-gradient-to-t from-[#0a112d] via-[#0a112d]/60 to-transparent w-full h-full absolute rounded-2xl group-hover:from-[#0a112d]/95 transition duration-500 z-10"></div>
                  <Image
                    alt={service.title[language]}
                    loading="lazy"
                    width={612}
                    height={344}
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full object-cover h-full rounded-2xl group-hover:scale-105 duration-700 transition ease-out"
                    src={service.image}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="text-center pt-14">
          <Link
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#0a112d] border border-white/20 rounded-full hover:bg-[#dca958] hover:border-[#dca958] transition-all duration-300"
            href="/services"
          >
            {t("servicessection.button", "View All")}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
