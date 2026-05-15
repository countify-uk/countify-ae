"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface IntroSectionProps {
  text: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ text }) => {
  const { t, language } = useLanguage();
  const introText = language === "ar" ? t("home.intro", text) : text;

  return (
    <section
      id="intro-section"
      className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] overflow-hidden"
    >
      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      {/* Soft gold orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#dca958]/8 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Intro statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#dca958]" />
              <p className="text-xs font-semibold text-[#dca958] uppercase tracking-[0.25em]">
                {t("intro.eyebrow", "Who We Are")}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              {t("intro.title.line1", "Trusted accountants for the")}
              <span className="block text-[#dca958]">{t("intro.title.line2", "UAE's growing businesses")}</span>
            </h2>
            <div className="relative pl-8 border-l-2 border-[#dca958]/40">
              <svg
                className="absolute -top-2 -left-3 h-8 w-8 text-[#dca958]/40 bg-[#0a112d]"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/85 animate-fade-in-up">
                {introText}
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#dca958] hover:text-[#e69c31] uppercase tracking-wider transition-colors"
              >
                {t("intro.cta", "Explore Our Services")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Info cards */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                tag: "9%",
                title: t("intro.card.corporate.title", "UAE Corporate Tax"),
                body: t("intro.card.corporate.body", "Charged on taxable income above AED 375,000. All businesses, including freezone entities, must register with the FTA."),
              },
              {
                tag: "5%",
                title: t("intro.card.vat.title", "VAT Compliance"),
                body: t("intro.card.vat.body", "Standard rate on most supplies. Mandatory registration above AED 375,000 turnover. Quarterly returns to the FTA."),
              },
              {
                tag: "30–50%",
                title: t("intro.card.rd.title", "R&D Tax Incentives"),
                body: t("intro.card.rd.body", "Enhanced deductions above qualifying expenditure. End-to-end advisory from one of UAE's few dedicated R&D teams."),
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group relative flex gap-5 p-5 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-[#dca958]/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#dca958]/20 to-[#dca958]/5 border border-[#dca958]/20">
                  <span className="text-sm font-bold text-[#dca958] tracking-tight whitespace-nowrap">
                    {card.tag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
