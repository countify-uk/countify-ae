"use client";
import { useLanguage } from "@/context/LanguageContext";
import MainHeader from "@/components/mainHeader";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const whatWeDo = {
  en: [
    "Financial Records Review — Full review of your general ledger, journals and trial balance for accuracy and completeness.",
    "Bank & Intercompany Reconciliations — Ensure all accounts are reconciled with no unexplained balances.",
    "Documentation Check — Verify supporting documents for all material transactions (invoices, contracts, receipts).",
    "Internal Controls Assessment — Review key controls over financial reporting and flag any weaknesses.",
    "Auditor Liaison Support — We work directly with your appointed auditor to answer queries and provide schedules.",
  ],
  ar: [
    "مراجعة السجلات المالية — مراجعة شاملة لدفتر الأستاذ العام والقيود وميزان المراجعة للدقة والاكتمال.",
    "المطابقات البنكية وبين الشركات — التأكد من مطابقة جميع الحسابات بدون أرصدة غير مفسرة.",
    "فحص الوثائق — التحقق من المستندات الداعمة لجميع المعاملات الجوهرية (فواتير، عقود، إيصالات).",
    "تقييم الضوابط الداخلية — مراجعة الضوابط الرئيسية على التقارير المالية وتحديد أي نقاط ضعف.",
    "دعم التواصل مع المدقق — نعمل مباشرة مع المدقق المعين للإجابة على الاستفسارات وتقديم الجداول.",
  ],
};

const whoNeeds = {
  en: [
    "Businesses approaching their first statutory audit under UAE Corporate Tax",
    "Freezone companies required to submit audited financial statements annually",
    "Companies with corporate tax obligations needing FTA-compliant records",
    "Growing businesses that have outgrown their internal bookkeeping capacity",
    "Any business that wants to avoid audit qualifications or delays",
  ],
  ar: [
    "الشركات التي تقترب من أول تدقيق قانوني بموجب ضريبة الشركات الإماراتية",
    "شركات المناطق الحرة المطالبة بتقديم بيانات مالية مدققة سنوياً",
    "الشركات التي لديها التزامات ضريبية تحتاج إلى سجلات متوافقة مع الهيئة",
    "الشركات النامية التي تجاوزت قدرتها الداخلية على مسك الدفاتر",
    "أي شركة ترغب في تجنب التحفظات أو التأخيرات في التدقيق",
  ],
};

const processSteps = {
  en: [
    { step: "Initial Review", desc: "We assess your current financial records and identify gaps or issues that need resolution before audit." },
    { step: "Gap Analysis", desc: "Detailed report highlighting missing documents, unreconciled items and control weaknesses." },
    { step: "Remediation", desc: "Our team fixes issues, completes reconciliations and prepares missing documentation." },
    { step: "Final Sign-Off", desc: "Comprehensive audit-ready pack delivered to you and your auditor with full supporting schedules." },
  ],
  ar: [
    { step: "المراجعة الأولية", desc: "نقيّم سجلاتك المالية الحالية ونحدد الثغرات أو المشكلات التي تحتاج إلى حل قبل التدقيق." },
    { step: "تحليل الفجوات", desc: "تقرير مفصل يسلط الضوء على الوثائق المفقودة والبنود غير المطابقة ونقاط ضعف الضوابط." },
    { step: "المعالجة", desc: "يقوم فريقنا بإصلاح المشكلات وإكمال المطابقات وإعداد الوثائق المفقودة." },
    { step: "التوقيع النهائي", desc: "حزمة جاهزة للتدقيق يتم تسليمها لك ولمدققك مع جميع الجداول الداعمة." },
  ],
};

export default function AuditPreparationPage() {
  const { language } = useLanguage();
  const lang = language;

  const title = lang === "ar" ? "خدمات التحضير للتدقيق في الإمارات" : "Audit Preparation Services UAE";
  const description = lang === "ar"
    ? "جهّز عملك للتدقيق بشكل كامل. نعدّ سجلاتك المالية ووثائقك وضوابطك الداخلية لضمان تدقيق قانوني سلس."
    : "Get your business fully audit-ready. We prepare your financial records, documentation and internal controls to ensure a clean, smooth statutory audit.";

  return (
    <div className="bg-gradient-to-tr from-[#0a112d] to-[#1a3a8f] py-10 bg-contact bg-no-repeat bg-cover bg-center">
      <MainHeader title={title} description={description} />

      <div className="flex justify-between max-w-6xl mx-auto py-10 text-white px-7">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
            <li className="inline-flex items-center gap-1.5">
              <Link className="transition-colors text-white hover:text-white/60" href="/">
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li className="text-white/60">/</li>
            <li className="inline-flex items-center gap-1.5">
              <Link className="transition-colors text-white hover:text-white/60" href="/services">
                {lang === "ar" ? "الخدمات" : "Services"}
              </Link>
            </li>
            <li className="text-white/60">/</li>
            <li className="inline-flex items-center gap-1.5">
              <span className="text-white/60">{lang === "ar" ? "التحضير للتدقيق" : "Audit Preparation"}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-6 pb-10 mb-12 rounded-lg bg-white text-black shadow">
        <div className="prose mt-8 max-w-none">
          <h1 className="text-[#1a3a8f] font-bold text-3xl mb-4">
            {lang === "ar"
              ? "خدمات التحضير للتدقيق في الإمارات — كن مستعداً بالكامل"
              : "Audit Preparation Services UAE — Get Fully Audit-Ready"}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {lang === "ar"
              ? "مع تطبيق ضريبة الشركات في الإمارات وزيادة نشاط التدقيق من الهيئة الاتحادية للضرائب، يجب على الشركات التأكد من أن سجلاتها المالية تستوفي معايير IFRS وتتحمل التدقيق. تضمن خدمة إعداد التدقيق من Countify أن دفاترك ووثائقك وضوابطك الداخلية جاهزة تمامًا — حتى يتم تدقيقك القانوني بسلاسة وفي الوقت المحدد وبدون مفاجآت."
              : "With the introduction of UAE Corporate Tax and increased FTA audit activity, businesses must ensure their financial records meet IFRS standards and withstand scrutiny. Countify's audit preparation service gets your books, documentation and internal controls fully ready — so your statutory audit runs cleanly, on time, and without surprises."}
          </p>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "ماذا نفعل" : "What We Do"}
          </h2>
          <ul className="space-y-4 pl-4 pb-6">
            {whatWeDo[lang].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#dca958] mt-1 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "من يحتاج هذه الخدمة؟" : "Who Needs This?"}
          </h2>
          <ul className="space-y-4 pl-4 pb-6">
            {whoNeeds[lang].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#dca958] mt-1 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "عمليتنا" : "Our Process"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {processSteps[lang].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-[#0a112d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.step}</h3>
                    <p className="text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="bg-gradient-to-tl from-[rgb(45,79,142)] via-[#0a112d] to-[#1a3a8f] p-8 rounded-xl text-white mt-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {lang === "ar" ? "لا تنتظر حتى موسم التدقيق" : "Don't Wait Until Audit Season"}
              </h2>
              <p className="text-lg mb-6">
                {lang === "ar"
                  ? "لا تنتظر حتى موسم التدقيق لاكتشاف المشكلات. اتصل بـ Countify اليوم واجعل عملك مستعدًا للتدقيق بثقة."
                  : "Don't wait until audit season to discover problems. Contact Countify today and get your business audit-ready with confidence."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#dca958] hover:bg-[#e69c31] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                {lang === "ar" ? "اتصل بنا الآن" : "Contact Us Now"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
