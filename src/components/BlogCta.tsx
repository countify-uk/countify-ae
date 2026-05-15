"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogCta() {
  const { language } = useLanguage();

  return (
    <div className="mt-16 rounded-xl bg-[#0a112d] p-8 text-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <h2 className="text-2xl font-bold">
        {language === "ar" ? "هل تحتاج إلى مراجعة متخصصة؟" : "Need a second pair of eyes?"}
      </h2>
      <p className="mt-3 max-w-2xl text-white/70">
        {language === "ar"
          ? "تساعد Countify الشركات في الإمارات على إبقاء الحسابات والإقرارات الضريبية والامتثال واضحة منذ البداية."
          : "Countify helps UAE businesses keep their accounts, tax filings and compliance work clear from the start."}
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-full bg-[#dca958] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
      >
        {language === "ar" ? "تحدث مع Countify" : "Talk to Countify"}
      </Link>
    </div>
  );
}
