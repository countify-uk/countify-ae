"use client";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  CheckCircle,
  ChartLine,
  ShieldCheck,
  Users,
} from "lucide-react";

const WhyChooseCard = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      title: t("why.benefit1.title", "Big 4 Background"),
      description: t("why.benefit1.description", "Our founders trained at KPMG UK and bring institutional-grade methodology to every engagement — without the Big 4 price tag."),
      icon: Briefcase,
    },
    {
      title: t("why.benefit2.title", "ACCA Qualified"),
      description: t("why.benefit2.description", "Both founding partners are ACCA qualified. You get chartered accountancy expertise on every engagement — never junior staff."),
      icon: CheckCircle,
    },
    {
      title: t("why.benefit3.title", "20+ Years Combined Experience"),
      description: t("why.benefit3.description", "Over 20 years of combined practice across UK and UAE markets. We understand both jurisdictions inside out."),
      icon: Users,
    },
    {
      title: t("why.benefit4.title", "Dedicated R&D Specialists"),
      description: t("why.benefit4.description", "One of the very few UAE firms offering compliant end-to-end R&D advisory. Led by specialists with 7+ years of focused R&D experience."),
      icon: ChartLine,
    },
    {
      title: t("why.benefit5.title", "UAE & FTA Compliant"),
      description: t("why.benefit5.description", "Full working knowledge of FTA regulations, UAE Corporate Tax law, VAT amendments 2026 and IFRS reporting requirements."),
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="why-choose-countify"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Subtle grid + orb */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#dca958]/8 blur-[140px] pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Section intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#dca958]" />
              <p className="text-xs font-semibold text-[#dca958] uppercase tracking-[0.25em]">
                {t("why.eyebrow", "Why Countify")}
              </p>
            </div>
            <h2
              id="why-choose-countify"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              {t("why.title", "Institutional-grade expertise. Founder-friendly delivery.")}
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              {t("why.description", "We pair Big 4 rigor with the responsiveness of a boutique firm. The result: institutional methodology, transparent fixed fees, and a partner who actually picks up the phone.")}
            </p>

            {/* Founders signature card */}
            <div className="relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#dca958] to-[#e69c31] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#0a112d]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#dca958] uppercase tracking-wider mb-1">
                    {t("why.founders", "Founders Background")}
                  </p>
                  <p className="text-sm text-white/80">
                    KPMG UK · FCCA · ACCA · 20+ years combined
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Benefits list */}
          <div className="lg:col-span-7 space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={index}
                  className="group relative flex gap-5 p-5 lg:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#dca958]/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  {/* Numbered + Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#dca958]/20 to-[#dca958]/5 border border-[#dca958]/30 group-hover:border-[#dca958]/60 transition-all">
                      <Icon className="w-6 h-6 text-[#dca958]" aria-hidden="true" />
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute -top-1 -right-1 text-[10px] font-bold text-[#dca958] bg-[#0a112d] px-1.5 py-0.5 rounded-md border border-white/10"
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover gold dot indicator */}
                  <div
                    aria-hidden="true"
                    className={`absolute top-1/2 -translate-y-1/2 w-1 h-12 bg-[#dca958] opacity-0 group-hover:opacity-100 rounded-r transition-opacity duration-300 ${
                      language === "ar" ? "right-0" : "left-0"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCard;
