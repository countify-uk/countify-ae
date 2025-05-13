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
      <section className="pt-16 bg-no-repeat bg-cover bg-center text-gray-900">
        <div className="text-center mb-8 lg:mb-12 px-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight relative z-10">
            {t("servicessection.title", "Services")}
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-3xl mx-auto relative z-10">
            {t(
              "servicessection.subtitle",
              "Comprehensive IT services tailored to your business needs"
            )}
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group inset-0 z-30"

            >
              <article
                className={`card-wrapper flex gap-4 group overflow-hidden border border-slate-50/40 h-[300px] rounded-xl transition duration-300 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                role="article"
              >
                <div className="text-left relative w-full card-content overflow-hidden">
                  <div className="absolute z-20 bottom-5 px-5 space-y-2 h-auto w-full transition-all duration-300 inset-0 flex flex-col justify-end">
                    <h2 className="font-bold relative text-xl text-white group-hover:text-[#dca958] duration-300 transition">
                      {service.title[language]}{" "}
                    </h2>
                    <p className="text-sm font-normal relative text-white/80">
                      {service.description[language]}{" "}
                    </p>
                  </div>
                  <div className="bg-gradient-to-t from-[#0a112d] w-full h-full absolute rounded-b-xl group-hover:opacity-100 opacity-70 transition duration-300 z-10"></div>
                  <Image
                    alt={`Image of ${service.title[language]}`}
                    loading="lazy"
                    width={612}
                    height={344}
                    decoding="async"
                    className="w-full object-cover h-full rounded-xl group-hover:scale-110 duration-500 transition"
                    src={service.image}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="text-center py-12 ">
          <Link
            className="relative border border-white/60 bg-[#0a112d] inline-flex items-center tracking-wider justify-center px-6 py-2 uppercase overflow-hidden rounded-full  text-white   group"
            href="/services"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-700 transform skew-x-[-20deg] bg-gradient-to-r from-[#f5222200] via-[rgba(255,255,255,0.25)] to-[#f5000000] group-hover:left-[-150%] left-[100%]"></span>
            <span className="relative z-10">
              {" "}
              {t("servicessection.button", "View All")}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
