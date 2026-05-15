"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { NavMenu } from "@/data/navItems";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const menuItems = NavMenu();
  const firstMenuWithChildren = menuItems.findIndex((menu) => menu.children);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<number | null>(
    firstMenuWithChildren !== -1 ? firstMenuWithChildren : null
  );
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (index: number) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const handleToggle = () => setOpen((prev) => !prev);
  const toggleMobileMenu = (index: number) => {
    setMobileMenuOpen((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top announcement bar ── */}
      <div className="hidden lg:flex items-center justify-center bg-[#0a112d] border-b border-white/5 py-2 px-5 text-[11px] font-medium tracking-widest uppercase text-white/40 gap-6">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dca958] animate-pulse" />
          FTA Registered · UAE Compliant
        </span>
        <span className="text-white/20">·</span>
        <span>Dubai · Abu Dhabi · Sharjah</span>
        <span className="text-white/20">·</span>
        <a
          href="tel:+97158511790"
          className="hover:text-[#dca958] transition-colors duration-200"
        >
          +971 58 511 7901
        </a>
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050e26]/98 backdrop-blur-xl shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
        style={{ top: isScrolled ? 0 : 32 }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {/* Scroll progress line */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dca958] to-transparent transition-all duration-100"
          style={{ width: `${scrollProgress}%`, opacity: scrollProgress > 2 ? 1 : 0 }}
        />

        {/* Subtle top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          } bg-gradient-to-r from-transparent via-[#dca958]/30 to-transparent`}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[60] focus:bg-white focus:text-black focus:p-2"
        >
          {language === "ar" ? "تجاوز إلى المحتوى الرئيسي" : "Skip to main content"}
        </a>

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5">
          {/* Logo */}
          <div className="flex items-center gap-5 lg:w-auto w-full">
            <div className="flex items-center justify-between lg:w-auto w-full">
              <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-85">
                <Image
                  src="/images/countify-logo-light.png"
                  className={`transition-all duration-500 h-auto object-contain ${
                    isScrolled ? "w-24" : "w-[116px]"
                  } ${language === "ar" ? "ml-10" : "mr-10"}`}
                  alt={
                    language === "ar"
                      ? "Countify الإمارات - محاسبون قانونيون"
                      : "Countify UAE — Chartered Accountants"
                  }
                  width={140}
                  height={100}
                  priority
                />
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label="Mobile Menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={handleToggle}
                className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#dca958]/30 transition-all duration-200"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex flex-1 items-center justify-center"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-1">
              {menuItems.map((menu, index) => {
                const isActive =
                  pathname === menu.href ||
                  (menu.href !== "/" && pathname?.startsWith(menu.href || ""));

                return (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={menu.href || "#"}>
                      <span
                        className={`
                          relative flex items-center gap-1.5 px-4 py-2 rounded-lg
                          text-[13.5px] font-medium tracking-wide transition-all duration-200
                          ${
                            isActive
                              ? "text-[#dca958]"
                              : "text-white/75 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        {menu.label}
                        {menu.children && (
                          <ChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              activeMenu === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavUnderline"
                            className="absolute bottom-1 left-4 right-4 h-px bg-[#dca958] rounded-full"
                          />
                        )}
                      </span>
                    </Link>

                    <AnimatePresence>
                      {menu.children && activeMenu === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full mt-3 min-w-[220px] z-50"
                          style={{ [language === "ar" ? "right" : "left"]: 0 }}
                        >
                          {/* Card with premium glass styling */}
                          <div className="relative bg-[#050e26]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                            {/* Gold top accent */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dca958]/60 to-transparent" />
                            <div className="p-2">
                              {menu.children?.map(
                                (child: { label: string; href: string }, idx: number) => (
                                  <Link key={idx} href={child.href}>
                                    <div className="group/item flex items-center justify-between px-4 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 text-[13px] font-medium">
                                      <span>{child.label}</span>
                                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-60 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200" />
                                    </div>
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone */}
            <a
              href="tel:+97158511790"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/60 hover:text-white text-[13px] font-medium transition-colors duration-200 hover:bg-white/5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#dca958]" />
              <span className="hidden xl:inline">+971 58 511 7901</span>
            </a>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10" />

            {/* Language toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={toggleLanguage}
              className="relative px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #dca958 0%, #e69c31 50%, #c8922a 100%)",
                boxShadow: "0 2px 16px rgba(220,169,88,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span className="relative z-10 text-[#0a112d]">
                {language === "en" ? "العربية" : "الإنجليزية"}
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-auto z-[60]" onClose={setOpen}>
          <div className="absolute inset-0 overflow-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-400"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-[#020812]/80 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-[cubic-bezier(0.16,1,0.3,1)] duration-500"
              enterFrom={language === "en" ? "-translate-x-full" : "translate-x-full"}
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-400"
              leaveFrom="translate-x-0"
              leaveTo={language === "en" ? "-translate-x-full" : "translate-x-full"}
            >
              <div className="relative flex w-[300px] max-w-[85vw] flex-col overflow-y-auto bg-[#050e26] shadow-2xl h-full border-r border-white/5">
                {/* Gold top edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#dca958]/80 via-[#e69c31] to-transparent" />

                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/countify-logo-light.png"
                      alt="Countify Logo"
                      className="w-28 h-auto object-contain"
                      width={140}
                      height={60}
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <X className="h-4 w-4 text-white/70" />
                  </button>
                </div>

                <div className="h-px mx-6 bg-white/5 mb-2" />

                <nav className="flex flex-1 flex-col px-4 py-4 gap-1">
                  {menuItems.map((menu, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between rounded-xl overflow-hidden">
                        <Link
                          href={menu.href || "#"}
                          onClick={() => !menu.children && setOpen(false)}
                          className={`flex-1 px-4 py-3 text-[14px] font-medium transition-colors duration-200 ${
                            pathname === menu.href
                              ? "text-[#dca958]"
                              : "text-white/75 hover:text-white"
                          }`}
                        >
                          {menu.label}
                        </Link>
                        {menu.children && (
                          <button
                            onClick={() => toggleMobileMenu(index)}
                            className="px-3 py-3 text-white/40 hover:text-[#dca958] transition-colors"
                          >
                            {mobileMenuOpen === index ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {menu.children && mobileMenuOpen === index && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 pr-2"
                          >
                            {menu.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between px-4 py-2.5 text-[13px] text-white/50 hover:text-white/80 transition-colors border-l border-white/5 hover:border-[#dca958]/30"
                                >
                                  {child.label}
                                  <ArrowUpRight className="w-3 h-3 opacity-40" />
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Mobile bottom CTA area */}
                <div className="px-5 pb-8 pt-4 border-t border-white/5 flex flex-col gap-3">
                  <a
                    href="tel:+97158511790"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white/70 text-sm hover:border-[#dca958]/20 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#dca958]" />
                    +971 58 511 7901
                  </a>
                  <button
                    onClick={toggleLanguage}
                    className="px-4 py-3 rounded-xl text-[13px] font-semibold text-[#0a112d] transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #dca958 0%, #e69c31 100%)",
                    }}
                  >
                    {language === "en" ? "العربية" : "الإنجليزية"}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Navbar;