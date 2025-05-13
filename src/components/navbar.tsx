"use client";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { NavMenu } from "@/data/navItems";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const menuItems = NavMenu();
  const firstMenuWithChildren = menuItems.findIndex((menu) => menu.children);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<number | null>(
    firstMenuWithChildren !== -1 ? firstMenuWithChildren : null
  );

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  const handleToggle = () => setOpen((prev) => !prev);
  const toggleMobileMenu = (index: number) => {
    setMobileMenuOpen((prev) => (prev === index ? null : index));
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-color shadow-md text-white" : "bg-transparent"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-5 lg:w-auto w-full">
          <div className="flex items-center justify-between lg:w-auto w-full">
            <Link href="/" className="">
              <Image
                src={
                  isScrolled
                    ? "/images/countify-logo-light.png"
                    : "/images/countify-logo-light.png"
                }
                className={`${isScrolled ? "w-28" : ""} ${
                  language === "ar" ? "ml-12" : "mr-12"
                } object-cover`}
                alt="Countify"
                width={140}
                height={100}
                priority
              />
            </Link>
            <button
              type="button"
              aria-label="Mobile Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={handleToggle}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <Menu className="w-8 h-8 text-secondary-color" />
            </button>
          </div>
        </div>
        <nav className="hidden lg:flex flex-1 space-x-6 text-sm relative mx-auto justify-center">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Parent Menu Item */}
              <Link href={menu.href || "#"}>
                <span
                  className={`${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-[#dca958] font-medium text-lg relative`}
                >
                  {menu.label}
                </span>
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {menu.children && activeMenu === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-max mt-3 max-w-none bg-white shadow-lg p-6 rounded-lg z-50"
                    style={{
                      [language === "ar" ? "right" : "left"]: 0,
                    }}
                  >
                    <div className="space-y-2 gap-4">
                      {menu.children?.map(
                        (
                          child: { label: string; href: string },
                          idx: number
                        ) => (
                          <div key={idx}>
                            <ul className="mt-2 space-y-2">
                              <li className="text-gray-800 hover:text-[#dca958] transition-colors duration-300 p-1">
                                <Link href={child.href}>
                                  <span className="">{child.label}</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-4 lg:px-8 py-2 bg-[#dca958] hover:bg-[#e69c31] text-white rounded-full text-lg __className_962c5a"
          >
            {language === "en" ? "العربية" : "English"}
          </motion.button>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-auto z-50"
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="fixed inset-0 bg-tertiary-color opacity-55"
                  onClick={() => setOpen(false)}
                />
              </Transition.Child>

              {/* Sliding panel */}
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={
                  language === "en" ? "-translate-x-full" : "translate-x-full"
                }
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo={
                  language === "en" ? "-translate-x-full" : "translate-x-full"
                }
              >
                <div className="relative flex max-w-xs flex-col overflow-y-auto bg-white shadow-xl h-full">
                  {/* Close button */}
                  <div className="relative w-full flex justify-end pt-4">
                    <button
                      type="button"
                      className="mr-5"
                      onClick={() => setOpen(false)}
                    >
                      <X className="h-8 w-8 text-black" aria-hidden="true" />
                    </button>
                  </div>
                  <Link href="/" className="cursor-pointer px-6">
                    <Image
                      src="/images/countify-logo.webp"
                      alt="Countify Logo"
                      className="backHome lg:w-52 w-40 cursor-pointer"
                      width={192}
                      height={162}
                      title="Countify Logo"
                    />
                  </Link>
                  <div className="relative flex flex-1 flex-col gap-y-6 py-6 px-6">
                    <ul className="flex flex-col gap-y-4">
                      {menuItems.map((menu, index) => (
                        <div key={index} className="group">
                          {/* Main Navigation Link */}
                          <div className="flex justify-between items-center">
                            <Link
                              href={menu.href || "#"}
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-tertiary-color hover:text-primary-color font-medium text-sm">
                                {menu.label}
                              </span>
                            </Link>
                            {menu.children && (
                              <button
                                onClick={() => toggleMobileMenu(index)}
                                className="text-gray-600 hover:text-primary-color"
                              >
                                {mobileMenuOpen === index ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            )}
                          </div>

                          {/* Render children if they exist */}
                          {menu.children && mobileMenuOpen === index && (
                            <div className="relative mt-2">
                              <ul className="flex flex-col gap-y-2 pl-4">
                                {menu.children.map((child, childIndex) => (
                                  <li key={childIndex}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setOpen(false)}
                                      className="text-gray-600 hover:text-primary-color text-sm"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="block lg:hidden items-center space-y-4 mt-6">
                        <Link href="/contact-us" onClick={() => setOpen(false)}>
                          <motion.button
                            type="button"
                            className="py-2.5 flex items-center gap-2 text-sm max-h-max text-gray-800 rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:text-primary-color"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <PhoneCall className="bg-white text-gray-800 rounded-full p-1.5 w-8 h-8" />
                            +971 50 123 4567
                          </motion.button>
                        </Link>
                        <div className="mb-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleLanguage}
                            className="py-2.5 px-6 flex items-center gap-2 text-sm max-h-max bg-secondary-color text-white rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-primary-color hover:text-white"
                          >
                            {language === "en" ? "العربية" : "English"}
                          </motion.button>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </header>
  );
};

export default Navbar;
