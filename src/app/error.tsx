'use client';
import { useLanguage } from "@/context/LanguageContext";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a112d] text-white">
      <h2 className="text-2xl font-bold mb-4">{language === "ar" ? "حدث خطأ ما" : "Something went wrong"}</h2>
      <p className="text-white/60 mb-6">{language === "ar" ? "نعتذر عن هذا الإزعاج." : "We apologise for the inconvenience."}</p>
      <button onClick={reset} className="px-6 py-3 bg-[#dca958] rounded-lg font-medium">
        {language === "ar" ? "حاول مرة أخرى" : "Try again"}
      </button>
    </div>
  );
}
