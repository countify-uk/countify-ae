"use client";
import { useLanguage } from "@/context/LanguageContext";
import MainHeader from "@/components/mainHeader";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const qualifies = {
  en: [
    "Technology and software development companies",
    "Pharmaceutical and life sciences companies",
    "Manufacturing businesses developing new materials or processes",
    "Engineering firms solving technical challenges",
    "Any business investing in innovation to advance knowledge",
  ],
  ar: [
    "شركات التكنولوجيا وتطوير البرمجيات",
    "شركات الأدوية وعلوم الحياة",
    "شركات التصنيع التي تطور مواد أو عمليات جديدة",
    "شركات الهندسة التي تحل تحديات تقنية",
    "أي شركة تستثمر في الابتكار لتطوير المعرفة",
  ],
};

const process = {
  en: [
    { step: "Initial Assessment", desc: "We evaluate your business activities to determine R&D eligibility under UAE Corporate Tax law." },
    { step: "Technical Review", desc: "Deep dive into your projects to identify qualifying R&D activities and expenditure." },
    { step: "Financial Analysis", desc: "Quantify eligible costs including staff, materials, subcontractors and overheads." },
    { step: "Claim Preparation", desc: "Prepare comprehensive documentation and technical narratives for your R&D claim." },
    { step: "FTA Submission", desc: "Submit your claim to the Federal Tax Authority with full supporting evidence." },
    { step: "Ongoing Advisory", desc: "Continuous support for future claims and compliance with evolving R&D regulations." },
  ],
  ar: [
    { step: "التقييم الأولي", desc: "نقيّم أنشطة عملك لتحديد أهلية البحث والتطوير بموجب قانون ضريبة الشركات الإماراتي." },
    { step: "المراجعة التقنية", desc: "تحليل معمق لمشاريعك لتحديد أنشطة ونفقات البحث والتطوير المؤهلة." },
    { step: "التحليل المالي", desc: "تحديد التكاليف المؤهلة بما في ذلك الموظفين والمواد والمقاولين من الباطن والنفقات العامة." },
    { step: "إعداد المطالبة", desc: "إعداد توثيق شامل وسرد تقني لمطالبتك بالبحث والتطوير." },
    { step: "التقديم للهيئة", desc: "تقديم مطالبتك للهيئة الاتحادية للضرائب مع أدلة داعمة كاملة." },
    { step: "الاستشارات المستمرة", desc: "دعم مستمر للمطالبات المستقبلية والامتثال للوائح البحث والتطوير المتطورة." },
  ],
};

const whyUs = {
  en: [
    "7+ Years Specialist R&D Advisory Experience (Hannan Khokhar FCCA)",
    "Big 4 Background — Institutional-Grade Methodology",
    "ACCA Qualified — Chartered Accountancy Expertise on Every Claim",
    "End-to-End Service — From Technical Assessment to FTA Submission",
    "FTA-Compliant Documentation and Processes",
    "One of Very Few UAE Firms Offering Genuine R&D Advisory",
  ],
  ar: [
    "أكثر من 7 سنوات من الخبرة المتخصصة في استشارات البحث والتطوير (حنان خوخار FCCA)",
    "خلفية Big 4 — منهجية بمستوى المؤسسات الكبرى",
    "مؤهل ACCA — خبرة محاسبة قانونية في كل مطالبة",
    "خدمة شاملة — من التقييم التقني إلى التقديم للهيئة الاتحادية للضرائب",
    "توثيق وإجراءات متوافقة مع الهيئة الاتحادية للضرائب",
    "من القلائل في الإمارات الذين يقدمون استشارات حقيقية للبحث والتطوير",
  ],
};

const faqs = {
  en: [
    { q: "Can freezone companies claim R&D incentives?", a: "Yes, freezone entities can claim R&D deductions on qualifying expenditure, provided they meet the relevant conditions under UAE Corporate Tax law. The incentive applies regardless of whether you are on the mainland or in a freezone." },
    { q: "How much can I claim?", a: "Qualifying R&D expenditure may attract enhanced deductions of 30% to 50% above the actual cost. The exact rate depends on the nature of the R&D and whether conditions for the higher rate are met." },
    { q: "I already have an accountant — can Countify just handle R&D?", a: "Absolutely. We work alongside existing accountants and tax advisors. Many of our R&D clients have their own finance teams or external accountants — we simply plug in as the specialist R&D advisor." },
    { q: "What records do I need to support an R&D claim?", a: "You will need project descriptions, timesheets, financial records of R&D expenditure, and technical narratives explaining the advance sought. Countify prepares all of this as part of our end-to-end service." },
  ],
  ar: [
    { q: "هل يمكن لشركات المناطق الحرة المطالبة بحوافز البحث والتطوير؟", a: "نعم، يمكن لكيانات المناطق الحرة المطالبة بخصومات البحث والتطوير على النفقات المؤهلة، بشرط استيفاء الشروط ذات الصلة بموجب قانون ضريبة الشركات الإماراتي." },
    { q: "كم يمكنني المطالبة به؟", a: "قد تحصل نفقات البحث والتطوير المؤهلة على خصومات معززة تتراوح بين 30% إلى 50% فوق التكلفة الفعلية. يعتمد المعدل الدقيق على طبيعة البحث والتطوير." },
    { q: "لدي محاسب بالفعل — هل يمكن لـ Countify التعامل مع البحث والتطوير فقط؟", a: "بالتأكيد. نحن نعمل جنبًا إلى جنب مع المحاسبين والمستشارين الضريبيين الحاليين. نقوم ببساطة بدور المستشار المتخصص في البحث والتطوير." },
    { q: "ما هي السجلات التي أحتاجها لدعم مطالبة البحث والتطوير؟", a: "ستحتاج إلى أوصاف المشاريع، وسجلات الوقت، والسجلات المالية لنفقات البحث والتطوير، والسرد التقني. تقوم Countify بإعداد كل هذا كجزء من خدمتنا الشاملة." },
  ],
};

export default function RDAdvisoryPage() {
  const { language } = useLanguage();
  const lang = language;

  const title = lang === "ar" ? "استشارات ضريبة البحث والتطوير في الإمارات" : "R&D Tax Advisory UAE";
  const description = lang === "ar"
    ? "احصل على حوافز ضريبة البحث والتطوير في الإمارات. خصومات معززة تصل إلى 30-50% فوق التكلفة للنفقات المؤهلة."
    : "Claim your UAE R&D tax incentives. Enhanced deductions of 30–50% above cost for qualifying R&D expenditure.";

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
              <span className="text-white/60">{lang === "ar" ? "استشارات البحث والتطوير" : "R&D Advisory"}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-6 pb-10 mb-12 rounded-lg bg-white text-black shadow">
        <div className="prose mt-8 max-w-none">
          <h1 className="text-[#1a3a8f] font-bold text-3xl mb-4">
            {lang === "ar"
              ? "استشارات ضريبة البحث والتطوير في الإمارات — احصل على حوافز البحث والتطوير"
              : "R&D Tax Advisory UAE — Claim Your Research & Development Incentives"}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {lang === "ar"
              ? "قدمت دولة الإمارات حوافز البحث والتطوير كجزء من إطار ضريبة الشركات، وتقدم للشركات المؤهلة خصومات ضريبية معززة تتراوح بين 30% إلى 50% فوق نفقات البحث والتطوير المؤهلة. تعد Countify واحدة من القلائل في الإمارات التي تقدم استشارات شاملة للبحث والتطوير، بقيادة حنان خوخار FCCA مع أكثر من 7 سنوات من الخبرة المتخصصة."
              : "The UAE has introduced R&D incentives as part of its Corporate Tax framework, offering qualifying businesses enhanced tax deductions of 30% to 50% above qualifying R&D expenditure. Countify is one of the very few UAE accountancy firms offering genuine end-to-end R&D advisory, led by Hannan Khokhar FCCA with over 7 years of specialist R&D experience."}
          </p>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "من يتأهل؟" : "Who Qualifies?"}
          </h2>
          <ul className="space-y-4 pl-4 pb-6">
            {qualifies[lang].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#dca958] mt-1 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "عمليتنا" : "Our Process"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {process[lang].map((item, i) => (
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

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "لماذا تختار Countify للبحث والتطوير؟" : "Why Choose Countify for R&D?"}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {whyUs[lang].map((item, i) => (
              <li key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#dca958] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-[#1a3a8f] font-bold text-2xl my-4">
            {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6 my-6">
            {faqs[lang].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 text-lg">{faq.q}</h3>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>

          <section className="bg-gradient-to-tl from-[rgb(45,79,142)] via-[#0a112d] to-[#1a3a8f] p-8 rounded-xl text-white mt-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {lang === "ar" ? "ابدأ مطالبتك بالبحث والتطوير اليوم" : "Start Your R&D Claim Today"}
              </h2>
              <p className="text-lg mb-6">
                {lang === "ar"
                  ? "هل أنت مستعد للمطالبة بحوافز ضريبة البحث والتطوير؟ اتصل بـ Countify اليوم للحصول على تقييم أولي. سيحدد فريقنا المتخصص نفقاتك المؤهلة ويحقق لك أقصى فائدة."
                  : "Ready to claim your R&D tax incentives? Contact Countify today for an initial assessment. Our specialist team will identify your qualifying expenditure and maximise your benefit."}
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
