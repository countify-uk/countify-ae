'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MainHeaderProps {
  title: string;
  description: string;
  breadcrumb?: BreadcrumbItem[];
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, description, breadcrumb }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!breadcrumb || breadcrumb.length === 0) return;

    const scriptId = `schema-breadcrumb-${breadcrumb.map((item) => item.label).join("-").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    const script = existingScript || document.createElement("script");

    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.href ? { "item": `https://www.countify.ae${item.href}` } : {}),
      })),
    });

    if (!existingScript) document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [breadcrumb]);

  return (
    <section
      className="mx-auto justify-center w-full h-[200px] sm:h-[264px] text-center pt-28 font-bold relative flex flex-col items-center"
      aria-labelledby="page-title"
    >
      <div className="w-full max-w-3xl h-full flex items-center relative justify-center">
        <div className="z-20">
          <h1
            id="page-title"
            className="text-3xl text-white tracking-wider capitalize sm:text-4xl md:text-5xl lg:text-5xl px-4 font-medium"
            itemProp="headline"
          >
            {title}
          </h1>
          <p
            className="text-sm sm:text-lg px-4 font-normal pt-2 text-white"
            itemProp="description"
          >
            {description}
          </p>
          {breadcrumb && breadcrumb.length > 0 && (
            <>
              <nav aria-label={language === "ar" ? "مسار التنقل" : "Breadcrumb"} className="mt-4">
                <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm">
                  {breadcrumb.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-1.5">
                      {index > 0 && <span className="text-white/60 mx-1">/</span>}
                      {item.href ? (
                        <Link href={item.href} className="text-white hover:text-white/60 transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-white/60">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
