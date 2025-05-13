"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useFooterLinks } from "@/data/footerLinks";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const footerLinks = useFooterLinks();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    footerLinks.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );
  const { t } = useLanguage();
  const toggleSection = (section: number) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer
      className="relative 
        bg-inherit
        text-white py-0 px-0  h-full 
        bg-gradient-to-r from-[#020B2D] to-[#0A2A88]
        "
    >
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 z-10 relative py-0 xl:px-20">
        <div className="text-center block py-16 lg:py-24">
          <motion.h2
            className="text-3xl md:text-6xl lg:text-8xl font-bold mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("footer.cta", "Let’s work together")}
          </motion.h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              className="flex items-center justify-center md:mt-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/contact">
                <button className="rounded-full bg-gray-400  text-xl mx-auto px-12 inline-flex items-center w-auto p-4 py-4 space-x-1 font-semibold text-white transition-all duration-300 shadow-md hover:from-[#dca958] hover:via-[#ffa424] uppercase hover:to-[#e69c31] bg-gradient-to-tr from-[#dca958] via-[#fbbc57] to-[#e69c31]">
                  {t("button.contactUs", "Contact Us")}
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-4 gap-12 border-t border-t-white/15 py-10">
            <div>
              <div className="mb-4">
                <Image
                  alt="Countify Footer Logo"
                  src="/images/countify-logo-light.png"
                  width={120}
                  height={90}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-white">
                {t("footer.description" , "Countify is your trusted partner for accounting, tax, and business solutions in the UAE and beyond. We simplify your financial processes so you can focus on growing your business.")}
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary-color transition-colors"
                >
                  <Facebook className="text-xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary-color transition-colors"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a
                  href="mailto:info@countify.ae"
                  className="text-white hover:text-secondary-color transition-colors"
                >
                  <Mail className="text-xl" />
                </a>
              </div>
            </div>
            {footerLinks.map((section, index) => (
              <div key={index} className="hidden lg:block">
                <h2 className="text-lg font-bold">{section.title}</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-gray-300 transition-colors relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:hidden flex flex-col gap-6">
            {footerLinks.map((section, index) => (
              <div key={index} className="mb-6">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left text-lg font-bold flex justify-between items-center"
                >
                  {section.title}
                  <span className="text-sm">
                    {openSections[index] ? "-" : "+"}
                  </span>
                </button>
                {openSections[index] && (
                  <ul className="mt-4 space-y-2 text-sm">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="hover:text-gray-300 transition-colors relative group"
                        >
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4 flex">
                Locate Us
              </h4>
              <div className="mt-4 text-gray-300 flex items-start">
               
                Office 123, Business Bay, Dubai, UAE
              </div>
              <h4 className="text-white text-md font-bold mt-4 flex">
                Main Office
              </h4>
              <div className="mt-2 text-gray-300 flex items-start">
               
                3rd Floor, St. Georges Building, 5 St. Vincent Place, Glasgow, G1 2DH</div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Write to us</h4>
              <a
                href="mailto:info@countify.ae"
                className="text-white transition-colors relative group"
              >
                info@countify.ae
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
              </a>
              <p className="mt-4 text-gray-300">
                or call
                <br />
                <a
                  href="tel:+97112345678"
                  className="text-white mt-4 transition-colors relative group"
                >
                  +971 123 456 78
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </a>
              </p>
              {/* <Link
                className="mt-4 inline-block border duration-300 transition hover:bg-gray-100 hover:text-secondary-color px-4 py-1.5 rounded-full"
                href="/contact"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
       

          <div className="mt-8 border-t border-t-white/15 pt-8">
            <p className="text-sm text-center">
              Countify © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
