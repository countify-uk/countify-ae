"use client";
import services from "@/data/services.json";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const ServiceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28 overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
      aria-labelledby="services-heading"
    >
      {/* Subtle pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#0a112d_1px,transparent_0)] bg-[size:32px_32px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#dca958]" />
            <p className="text-xs font-semibold text-[#dca958] uppercase tracking-[0.25em]">
              {t("servicessection.eyebrow", "What We Offer")}
            </p>
            <span className="w-8 h-[2px] bg-[#dca958]" />
          </div>
          <h2
            id="services-heading"
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a112d] tracking-tight leading-tight ${
              language === "ar" ? "text-right md:text-center" : ""
            }`}
          >
            {t("servicessection.title", "Accounting & Tax Services")}
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t(
              "servicessection.subtitle",
              "End-to-end accounting, tax and business setup services across the UAE — delivered by ACCA-qualified specialists."
            )}
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isFeatured = service.id === "rd-advisory";
            return (
              <Link
                key={index}
                href={service.link}
                className="group relative block"
              >
                <article className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#dca958]/50 shadow-sm hover:shadow-2xl hover:shadow-[#0a112d]/10 transition-all duration-500 hover:-translate-y-1.5">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0a112d] to-[#1a3a8f]">
                    <Image
                      src={service.image}
                      alt={service.title[language]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      quality={75}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0a112d]/40 via-transparent to-transparent"
                    />
                    {isFeatured && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0a112d] bg-[#dca958] rounded-full shadow-md">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        {t("servicessection.featured", "Featured")}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-7">
                    <h3 className="text-lg lg:text-xl font-bold text-[#0a112d] group-hover:text-[#dca958] transition-colors leading-snug mb-3">
                      {service.title[language]}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5">
                      {service.description[language]}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#dca958] group-hover:gap-2.5 transition-all">
                      {t("servicessection.learnmore", "Learn more")}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Hover accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#dca958] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 lg:mt-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0a112d] hover:bg-[#dca958] border border-[#0a112d] hover:border-[#dca958] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#dca958]/30"
          >
            {t("servicessection.button", "View All Services")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
