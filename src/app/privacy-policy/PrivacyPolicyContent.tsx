"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    eyebrow: "Website policy",
    title: "Privacy Policy & Data Protection",
    intro:
      "This page explains how Countify UAE handles information shared through our website, consultation forms and direct enquiries.",
    updated:
      "Last updated: May 11, 2026. For service-specific questions, please visit our",
    contact: "contact page",
    sections: [
      {
        title: "Information we collect",
        body: "When you contact us, we may collect your name, email address, phone number, company name, service interest and any details you choose to include in your message. We also receive basic technical information such as browser, device and page interaction data through standard website analytics.",
      },
      {
        title: "How we use your information",
        body: "We use your information to respond to enquiries, arrange consultations, provide requested services, improve our website and keep basic business records. We do not sell your personal information.",
      },
      {
        title: "Sharing information",
        body: "We may share information with trusted service providers who help us operate the website, manage communications or deliver professional services. Where required, we may also share information with regulators, authorities or advisers.",
      },
      {
        title: "Keeping information secure",
        body: "We use reasonable administrative and technical measures to protect information. No website can guarantee absolute security, so please avoid sending highly sensitive documents through general contact forms unless requested through a secure channel.",
      },
      {
        title: "Your choices",
        body: "You can ask us to update, correct or delete personal information where applicable. You can also ask us to stop using your details for marketing communication.",
      },
      {
        title: "Contact",
        body: "For privacy questions, email info@countify.ae or write to Countify UAE, Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
      },
    ],
  },
  ar: {
    eyebrow: "سياسة الموقع",
    title: "سياسة الخصوصية",
    intro:
      "توضح هذه الصفحة كيف تتعامل Countify الإمارات مع المعلومات التي تتم مشاركتها عبر موقعنا ونماذج الاستشارة والاستفسارات المباشرة.",
    updated:
      "آخر تحديث: 11 مايو 2026. للأسئلة المتعلقة بخدمة محددة، يرجى زيارة",
    contact: "صفحة التواصل",
    sections: [
      {
        title: "المعلومات التي نجمعها",
        body: "عند التواصل معنا، قد نجمع اسمك وبريدك الإلكتروني ورقم هاتفك واسم الشركة والخدمة التي تهتم بها وأي تفاصيل تختار إضافتها في رسالتك. كما قد نستقبل معلومات تقنية أساسية مثل نوع المتصفح والجهاز وبيانات التفاعل مع الصفحات عبر أدوات التحليل القياسية.",
      },
      {
        title: "كيف نستخدم معلوماتك",
        body: "نستخدم معلوماتك للرد على الاستفسارات، وترتيب الاستشارات، وتقديم الخدمات المطلوبة، وتحسين موقعنا، والاحتفاظ بسجلات أعمال أساسية. لا نبيع معلوماتك الشخصية.",
      },
      {
        title: "مشاركة المعلومات",
        body: "قد نشارك المعلومات مع مزودي خدمات موثوقين يساعدوننا في تشغيل الموقع أو إدارة الاتصالات أو تقديم الخدمات المهنية. وعند الحاجة، قد نشارك المعلومات مع الجهات التنظيمية أو السلطات أو المستشارين.",
      },
      {
        title: "حماية المعلومات",
        body: "نستخدم تدابير إدارية وتقنية معقولة لحماية المعلومات. لا يمكن لأي موقع ضمان الأمان المطلق، لذلك يرجى تجنب إرسال مستندات شديدة الحساسية عبر نماذج التواصل العامة ما لم نطلبها عبر قناة آمنة.",
      },
      {
        title: "اختياراتك",
        body: "يمكنك طلب تحديث أو تصحيح أو حذف المعلومات الشخصية حيثما ينطبق ذلك. كما يمكنك أن تطلب منا التوقف عن استخدام بياناتك في الاتصالات التسويقية.",
      },
      {
        title: "التواصل",
        body: "لأسئلة الخصوصية، راسلنا على info@countify.ae أو تواصل مع Countify الإمارات في ميدان جراندستاند، الطابق السادس، طريق ميدان، ند الشبا، دبي، الإمارات.",
      },
    ],
  },
};

export default function PrivacyPolicyContent() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={language === "ar" ? "rtl" : "ltr"}>
      <section className="bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] text-white">
        <div className="container mx-auto px-5 pt-32 pb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#dca958]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-3xl text-white/70">{copy.intro}</p>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-5 py-14">
        {copy.sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a112d]">{section.title}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">{section.body}</p>
          </section>
        ))}

        <div className="mt-14 rounded-xl bg-gray-50 p-6">
          <p className="text-sm text-gray-600">
            {copy.updated}{" "}
            <Link className="text-[#1a3a8f] underline" href="/contact">
              {copy.contact}
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
