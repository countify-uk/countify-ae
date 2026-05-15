"use client";
import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { faqData } from "@/data/faq";
import Link from "next/link";

const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(0);
  const { t, language } = useLanguage();

  const toggleDropdown = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-labelledby="faq-heading"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Subtle pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#0a112d_1px,transparent_0)] bg-[size:32px_32px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Intro + CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#dca958]" />
              <p className="text-xs font-semibold text-[#dca958] uppercase tracking-[0.25em]">
                {t("faq.eyebrow", "FAQ")}
              </p>
            </div>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a112d] tracking-tight leading-[1.1] mb-5"
            >
              {t("faq.title", "Questions, answered.")}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              {t(
                "faq.subtitle",
                "Common questions about UAE Corporate Tax, VAT, R&D incentives, and how we work with growing businesses."
              )}
            </p>

            {/* CTA card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0a112d] to-[#1a3a8f] text-white shadow-xl overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#dca958]/20 blur-2xl"
              />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#dca958] mb-4">
                  <MessageCircle className="w-5 h-5 text-[#0a112d]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t("faq.cta.title", "Still have questions?")}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  {t("faq.cta.body", "Speak directly to one of our chartered accountants. Initial consultation is free.")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#dca958] hover:text-white transition-colors"
                >
                  {t("faq.cta.link", "Contact us")}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-8">
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {faqData.map((faqItem, index) => {
                const isOpen = selected === index;
                return (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="w-full text-left py-5 lg:py-6 flex items-start gap-4 lg:gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dca958]/40 rounded-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 mt-1 text-xs font-bold text-[#dca958]/60 group-hover:text-[#dca958] transition-colors w-6"
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`flex-1 text-base lg:text-lg font-semibold leading-snug transition-colors ${
                          isOpen ? "text-[#0a112d]" : "text-[#0a112d]/85 group-hover:text-[#0a112d]"
                        }`}
                      >
                        {faqItem.question[language]}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex-shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? "bg-[#dca958] border-[#dca958] text-[#0a112d]"
                            : "border-gray-300 text-gray-500 group-hover:border-[#dca958] group-hover:text-[#dca958]"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 lg:pb-8 pl-10 lg:pl-12 pr-12">
                            <p className="text-base text-gray-600 leading-relaxed">
                              {faqItem.answer[language]}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
