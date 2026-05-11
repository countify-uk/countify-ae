'use client';
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  CheckCircle,
  ChartLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
const WhyChooseCard = () => {
  const { language } = useLanguage();

  const chooseCard = [
    {
      title: { en: "Big 4 Background", ar: "خلفية Big 4" },
      description: {
        en: "Our founders trained at KPMG UK and bring institutional-grade expertise to every client engagement — without the Big 4 price tag.",
        ar: "تدرّب مؤسسونا في KPMG بالمملكة المتحدة ويقدمون خبرة بمستوى المؤسسات الكبرى لكل عميل."
      },
      icon: Briefcase,
    },
    {
      title: { en: "ACCA Qualified", ar: "مؤهلون من ACCA" },
      description: {
        en: "Both founding partners are ACCA qualified. You get chartered accountancy expertise on every engagement, not junior staff.",
        ar: "كلا الشريكين المؤسسين حاصلان على مؤهل ACCA. تحصل على خبرة محاسبة قانونية في كل تعامل."
      },
      icon: CheckCircle,
    },
    {
      title: { en: "20+ Years Combined Experience", ar: "أكثر من 20 عامًا من الخبرة المشتركة" },
      description: {
        en: "Over 20 years of combined experience across UK and UAE markets. We understand both jurisdictions inside out.",
        ar: "أكثر من 20 عامًا من الخبرة المشتركة في أسواق المملكة المتحدة والإمارات."
      },
      icon: Users,
    },
    {
      title: { en: "R&D Specialists", ar: "متخصصون في البحث والتطوير" },
      description: {
        en: "One of the very few UAE firms offering genuine end-to-end R&D advisory. Led by Hannan Khokhar FCCA with 7+ years specialist experience.",
        ar: "من بين القلة في الإمارات التي تقدم استشارات شاملة للبحث والتطوير."
      },
      icon: ChartLine,
    },
    {
      title: { en: "UAE & FTA Compliant", ar: "متوافق مع الإمارات والهيئة الاتحادية للضرائب" },
      description: {
        en: "Full working knowledge of FTA regulations, UAE Corporate Tax, VAT amendments 2026 and IFRS requirements.",
        ar: "معرفة كاملة بلوائح الهيئة الاتحادية للضرائب وضريبة الشركات وتعديلات ضريبة القيمة المضافة."
      },
      icon: ShieldCheck,
    },
  ];
  return (
    <section
      className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="why-choose-countify"
    >
      <div className="absolute z-0 inset-0 opacity-5">
        <Image
          src="/images/svgexport-1.svg"
          alt="Subtle Countify background pattern"
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>
      <div className="container mx-auto relative z-10 px-5">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#dca958] uppercase tracking-widest mb-3">
            {language === "ar" ? "لماذا نحن" : "Why Us"}
          </p>
          <h2
            id="why-choose-countify"
            className="text-3xl text-gray-900 md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            {language === "ar"
              ? "لماذا تختار Countify؟"
              : "Why Choose Countify?"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#dca958] to-[#e69c31] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto justify-center pt-6">
          {chooseCard.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 pt-10 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a112d] to-[#1a3a8f] shadow-md">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2 text-lg font-bold mt-4">
                  {language === "ar" ? point.title.ar : point.title.en}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {language === "ar"
                    ? point.description.ar
                    : point.description.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseCard;
