"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, ClipboardCheck, Briefcase, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: t("process.step1.title", "Discovery Call"),
      description: t("process.step1.description", "Free 30-minute consultation to understand your business, current setup and compliance needs."),
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: t("process.step2.title", "Tailored Proposal"),
      description: t("process.step2.description", "Custom scope, timeline and fixed-fee proposal based on your business size and complexity."),
    },
    {
      number: "03",
      icon: Briefcase,
      title: t("process.step3.title", "Onboarding & Setup"),
      description: t("process.step3.description", "We handle FTA registrations, system setup, and migration of your existing financial records."),
    },
    {
      number: "04",
      icon: TrendingUp,
      title: t("process.step4.title", "Ongoing Partnership"),
      description: t("process.step4.description", "Dedicated account manager, regular reporting and proactive advisory as your business grows."),
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[#0a112d] via-[#0f1f54] to-[#0a112d] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="process-heading"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Ambient gold orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#dca958]/8 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#1a3a8f]/25 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a112d] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#dca958]" />
            <p className="text-xs font-semibold text-[#dca958] uppercase tracking-[0.25em]">
              {t("process.eyebrow", "How We Work")}
            </p>
            <span className="w-8 h-[2px] bg-[#dca958]" />
          </div>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            {t("process.title", "Four steps to a clear, compliant partnership")}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#dca958]/25 to-transparent"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group flex h-full flex-col items-center text-center rounded-2xl px-5 py-6 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                {/* Icon + number */}
                <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dca958]/20 to-[#dca958]/0 rounded-2xl border border-[#dca958]/30 group-hover:border-[#dca958]/60 group-hover:from-[#dca958]/30 transition-all duration-300" />
                  <Icon className="w-9 h-9 text-[#dca958]" aria-hidden="true" />
                  <span aria-hidden="true" className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#dca958] text-[#0a112d] text-xs font-bold shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col items-center px-2">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="max-w-[260px] text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
