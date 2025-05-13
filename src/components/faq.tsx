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
      className="bg-primary-color pt-5 pb-10 relative min-h-screen w-full"
      style={{
        background: "url(./images/bg-effect-01.svg)"
      }}
    >
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-10 text-center pt-10 pb-6">
        <h3 className="text-white text-2xl sm:text-4xl leading-8 sm:leading-9">
       {t("faq.title", "Frequently Asked Questions")}
        </h3>
        <p className="text-white">
          {t(
            "faq.subtitle",
            "Find answers to common questions about our services, processes, and business solutions."
          )}
        </p>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-x-8">
          <div className="bg-transparent w-full mx-auto">
            <ul className="max-w-4xl mx-auto">
              {faqData.map((faqItem, index) => (
                <li className="relative my-3" key={index}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    className="leading-6 sm:text-2xl sm:leading-loose bg-gradient-to-t from-slate-50 to-slate-300 font-bold shadow text-sm md:text-lg py-2 hover:no-underline hover:text-slate-800 text-left border border-slate-300 dark:border-slate-300 w-full text-slate-600 px-5 rounded-lg"
                  >
                    <div className="btn-items flex justify-between items-center">
                      <span>
                      {faqItem.question[language]}{" "}                      
                      </span>
                      <span className="ml-6 h-7 flex items-center text-primary-color">
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 mx-2 text-slate-700 rounded-b-xl"
                  >
                    <div className="p-4 shadow-inner text-base">
                      <p>
                        {faqItem.answer[language]}{" "}
                      </p>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;