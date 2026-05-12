"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useFooterLinks } from "@/data/footerLinks";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const footerLinks = useFooterLinks();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    typeof window !== 'undefined' && window.innerWidth < 768
      ? footerLinks.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
      : footerLinks.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );
  const { t, language } = useLanguage();
  const toggleSection = (section: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B2D] via-[#061640] to-[#0A2A88]"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(/images/bg-footer.svg)", backgroundSize: "cover" }}></div>

      <section className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="text-center py-24 lg:py-36 border-b border-white/10">
          <motion.p
            className="text-sm font-medium text-[#dca958] uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("footer.cta", "Let’s work together")}
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {language === "ar" ? "هل أنت مستعد للبدء؟" : <>Ready to get<br className="hidden sm:block" /> started?</>}
          </motion.h2>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[#dca958] to-[#e69c31] hover:from-[#e69c31] hover:to-[#dca958] transition-all duration-300 shadow-lg shadow-[#dca958]/20 hover:shadow-[#dca958]/40"
            >
              {t("button.contactUs", "Contact Us")}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="mb-5">
                <Image
                  alt="Countify UAE Logo"
                  src="/images/countify-logo-light.png"
                  width={120}
                  height={90}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {t("footer.description" , "Countify is your trusted partner for accounting, tax, and business solutions in the UAE and beyond. We simplify your financial processes so you can focus on growing your business.")}
              </p>
              <div className="flex space-x-3 mt-6">
                <a
                  href="https://www.instagram.com/countifyuae/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#dca958] hover:border-[#dca958] hover:text-white transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/countify-uae/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#dca958] hover:border-[#dca958] hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@countify.ae"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#dca958] hover:border-[#dca958] hover:text-white transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index} className="hidden lg:block">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">{section.title}</h2>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-[#dca958] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:hidden flex flex-col gap-4">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full text-left text-sm font-semibold uppercase tracking-wider text-white/40 flex justify-between items-center py-2 border-b border-white/5"
                  >
                    {section.title}
                    <span className="text-white/40 text-lg">
                      {openSections[index] ? "−" : "+"}
                    </span>
                  </button>
                  {openSections[index] && (
                    <ul className="mt-3 space-y-2 text-sm pb-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-white/70 hover:text-[#dca958] transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
                {language === "ar" ? "موقعنا" : "Locate Us"}
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Meydan Grandstand, 6th floor<br />
                Meydan Road, Nad Al Sheba<br />
                Dubai, U.A.E.
              </p>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mt-6 mb-3">
                {language === "ar" ? "المكتب الرئيسي" : "UK Office"}
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                3rd Floor, St. Georges Building<br />
                5 St. Vincent Place<br />
                Glasgow, G1 2DH
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
                {language === "ar" ? "تواصل معنا" : "Get in Touch"}
              </h4>
              <a
                href="mailto:info@countify.ae"
                className="text-white/80 hover:text-[#dca958] transition-colors text-sm"
              >
                info@countify.ae
              </a>
              <p className="mt-4 text-sm text-white/50">
                {language === "ar" ? "أو اتصل" : "or call"}
              </p>
              <a
                href="tel:+971585117901"
                className="text-white font-semibold hover:text-[#dca958] transition-colors text-lg mt-1 inline-block"
              >
                +971 58 511 7901
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              Countify © {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-xs text-white/40">
              Chartered Accountants │ Dubai │ Abu Dhabi │ Sharjah
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
