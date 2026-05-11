'use client';
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Classnames from "classnames";
import { useLanguage  }  from "@/context/LanguageContext";
import { faqData } from "@/data/faq";


const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t ,  language} = useLanguage();
  const toggleDropdown = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative py-16 lg:py-24 w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a112d 0%, #1a3a8f 100%)"
      }}
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/images/bg-effect-01.svg)", backgroundSize: "cover" }}></div>
      <div className="relative z-10 text-center mb-12">
        <p className="text-sm font-medium text-[#dca958] uppercase tracking-widest mb-3">
          {language === "ar" ? "أسئلة شائعة" : "FAQ"}
        </p>
        <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {t("faq.title", "Frequently Asked Questions")}
        </h3>
        <p className="text-white/60 mt-4 max-w-xl mx-auto text-base">
          {t(
            "faq.subtitle",
            "Find answers to common questions about our services, processes, and business solutions."
          )}
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#dca958] to-[#e69c31] mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <ul className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faqItem, index) => (
            <li className="relative" key={index}>
              <button
                type="button"
                onClick={() => toggleDropdown(index)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 ${
                  selected === index
                    ? "bg-white shadow-lg"
                    : "bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-semibold text-base sm:text-lg ${selected === index ? "text-[#0a112d]" : "text-white"}`}>
                    {faqItem.question[language]}
                  </span>
                  <span className={`ml-4 flex-shrink-0 ${selected === index ? "text-[#dca958]" : "text-white/60"}`}>
                    <ChevronDown
                      className={Classnames(
                        selected === index ? "-rotate-180" : "rotate-0",
                        "h-5 w-5 transform transition-transform duration-300"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: selected === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 mx-2 mt-1 bg-white/95 rounded-b-xl text-gray-700">
                  <p className="text-base leading-relaxed">
                    {faqItem.answer[language]}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;