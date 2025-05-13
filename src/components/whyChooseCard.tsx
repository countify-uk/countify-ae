'use client';
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  CheckCircle,
  DollarSign,
  MapPin,
  Users,
} from "lucide-react";
const WhyChooseCard = () => {
  const { language } = useLanguage();

  const chooseCard = [
    {
      title: {
        en: "Qualified Chartered Accountant (15+ Years of Experience)",
        ar: "محاسب قانوني مؤهل (أكثر من 15 عامًا من الخبرة)",
      },
      description: {
        en: "Expertise you can trust for your financial needs.",
        ar: "خبرة يمكنك الوثوق بها لتلبية احتياجاتك المالية.",
      },
      icon: Briefcase,
    },
    {
      title: {
        en: "Fully FTA & IFRS Compliant Services",
        ar: "خدمات متوافقة تمامًا مع الهيئة الاتحادية للضرائب ومعايير IFRS",
      },
      description: {
        en: "Ensuring compliance with UAE regulations.",
        ar: "ضمان الامتثال للوائح دولة الإمارات.",
      },
      icon: CheckCircle,
    },
    {
      title: {
        en: "Trusted by Startups, Freezone Companies & SMEs",
        ar: "موثوق به من قبل الشركات الناشئة وشركات المناطق الحرة والشركات الصغيرة والمتوسطة",
      },
      description: {
        en: "Serving a diverse range of businesses.",
        ar: "خدمة مجموعة متنوعة من الشركات.",
      },
      icon: Users,
    },
    {
      title: {
        en: "Transparent Pricing, Personalised Support",
        ar: "تسعير شفاف ودعم مخصص",
      },
      description: {
        en: "No hidden fees, tailored to your needs.",
        ar: "بدون رسوم مخفية، مصمم لتلبية احتياجاتك.",
      },
      icon: DollarSign,
    },
    {
      title: {
        en: "Based in Dubai – Serving All Emirates",
        ar: "مقرنا في دبي - نخدم جميع الإمارات",
      },
      description: {
        en: "Providing services across the UAE.",
        ar: "تقديم الخدمات في جميع أنحاء الإمارات.",
      },
      icon: MapPin,
    },
  ];
  return (
    <section
      className="bg-white  py-12 lg:py-16 bg-effect-06 bg-center bg-cover bg-no-repeat relative "
      aria-labelledby="why-choose-countify"
    
    >
        <div className="bg-cover bg-center bg-fixed absolute z-10 inset-0"   style={{
        background: "url(./images/svgexport-1.svg)"}}></div>
      <div className="container mx-auto py-10 relative z-20 px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-semibold tracking-tight relative z-10 mb-4">
            {language === "ar"
              ? "لماذا تختار Countify؟"
              : "Why Choose Countify?"}{" "}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-color  to-tertiary-color mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 mx-auto justify-center md:gap-y-10 gap-y-16 pt-10">
          {chooseCard.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center hover:shadow-inner shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  bg-gradient-to-r from-tertiary-color to-[#0A2A88] shadow-lg shadow-secondary-color/50">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-black mb-3 text-xl font-bold lg:px-4">
                  {language === "ar" ? point.title.ar : point.title.en}
                </h1>
                {/* <p className="text-gray-700">
                  {" "}
                  {language === "ar"
                    ? point.description.ar
                    : point.description.en}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseCard;