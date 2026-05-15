'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  isRTL: boolean;
}

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact Us",
    "nav.team": "Our Team",
    "nav.blog": "Blog",

    "services.bookkeeping.title": "Bookkeeping Services",
    "services.formation.title": "Company Formation",
    "services.payroll.title": "Payroll Services",
    "services.vat.title": "VAT Return",
    "services.accounts.title": "Year-End Accounts",
    "services.corporate-tax.title": "Corporate Tax",
    "services.rd.title": "R&D Advisory",
    "services.audit.title": "Audit Preparation",

    "home.hero.eyebrow": "Chartered Accountants · UAE",
    "home.hero.h1.line1": "Big 4 expertise.",
    "home.hero.h1.line2": "Founder pricing.",
    "home.hero.subtitle": "ACCA-qualified accountants delivering VAT, Corporate Tax, R&D Advisory and Company Formation services across Dubai, Abu Dhabi and Sharjah.",
    "home.hero.badge.fcca": "FCCA Qualified",
    "home.hero.badge.big4": "Big 4 Alumni",
    "home.hero.badge.fta": "FTA Compliant",
    "home.hero.badge.rd": "R&D Specialists",
    "home.hero.stats.years": "Years Combined",
    "home.hero.stats.rd": "R&D Specialists",
    "home.hero.stats.jurisdictions": "Jurisdictions",
    "home.hero.scroll": "Scroll",
    "home.intro": "Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care. Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth.",

    "intro.eyebrow": "Who We Are",
    "intro.title.line1": "Trusted accountants for the",
    "intro.title.line2": "UAE's growing businesses",
    "intro.cta": "Explore Our Services",
    "intro.card.corporate.title": "UAE Corporate Tax",
    "intro.card.corporate.body": "Charged on taxable income above AED 375,000. All businesses, including freezone entities, must register with the FTA.",
    "intro.card.vat.title": "VAT Compliance",
    "intro.card.vat.body": "Standard rate on most supplies. Mandatory registration above AED 375,000 turnover. Quarterly returns to the FTA.",
    "intro.card.rd.title": "R&D Tax Incentives",
    "intro.card.rd.body": "Enhanced deductions above qualifying expenditure. End-to-end advisory from one of UAE's few dedicated R&D teams.",

    "servicessection.eyebrow": "What We Offer",
    "servicessection.title": "Accounting & Tax Services",
    "servicessection.subtitle": "End-to-end accounting, tax and business setup services across the UAE — delivered by ACCA-qualified specialists.",
    "servicessection.button": "View All Services",
    "servicessection.learnmore": "Learn more",
    "servicessection.featured": "Featured",

    "process.eyebrow": "How We Work",
    "process.title": "Four steps to a clear, compliant partnership",
    "process.step1.title": "Discovery Call",
    "process.step1.description": "Free 30-minute consultation to understand your business, current setup and compliance needs.",
    "process.step2.title": "Tailored Proposal",
    "process.step2.description": "Custom scope, timeline and fixed-fee proposal based on your business size and complexity.",
    "process.step3.title": "Onboarding & Setup",
    "process.step3.description": "We handle FTA registrations, system setup, and migration of your existing financial records.",
    "process.step4.title": "Ongoing Partnership",
    "process.step4.description": "Dedicated account manager, regular reporting and proactive advisory as your business grows.",

    "why.eyebrow": "Why Countify",
    "why.title": "Institutional-grade expertise. Founder-friendly delivery.",
    "why.description": "We pair Big 4 rigor with the responsiveness of a boutique firm. The result: institutional methodology, transparent fixed fees, and a partner who actually picks up the phone.",
    "why.founders": "Founders Background",
    "why.benefit1.title": "Big 4 Background",
    "why.benefit1.description": "Our founders trained at KPMG UK and bring institutional-grade methodology to every engagement — without the Big 4 price tag.",
    "why.benefit2.title": "ACCA Qualified",
    "why.benefit2.description": "Both founding partners are ACCA qualified. You get chartered accountancy expertise on every engagement — never junior staff.",
    "why.benefit3.title": "20+ Years Combined Experience",
    "why.benefit3.description": "Over 20 years of combined practice across UK and UAE markets. We understand both jurisdictions inside out.",
    "why.benefit4.title": "Dedicated R&D Specialists",
    "why.benefit4.description": "One of the very few UAE firms offering compliant end-to-end R&D advisory. Led by specialists with 7+ years of focused R&D experience.",
    "why.benefit5.title": "UAE & FTA Compliant",
    "why.benefit5.description": "Full working knowledge of FTA regulations, UAE Corporate Tax law, VAT amendments 2026 and IFRS reporting requirements.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Questions, answered.",
    "faq.subtitle": "Common questions about UAE Corporate Tax, VAT, R&D incentives, and how we work with growing businesses.",
    "faq.cta.title": "Still have questions?",
    "faq.cta.body": "Speak directly to one of our chartered accountants. Initial consultation is free.",
    "faq.cta.link": "Contact us",

    "form.title": "Request a Consultation",
    "form.subtitle": "Learn how our sustainable solutions can help your business",
    "form.name": "Your Name",
    "form.email": "Email Address",
    "form.service": "I'm interested in...",
    "form.submit": "Get Started",
    "form.disclaimer": "By continuing, you agree to our",
    "form.privacy": "Privacy Policy",
    "form.phone": "Phone Number (UAE)",
    "form.message": "Message",
    "form.submitting": "Continuing...",
    "form.whatsapp": "Or chat on WhatsApp",
    "form.services.bookkeeping": "Bookkeeping",
    "form.services.company-formation": "Company Formation",
    "form.services.payroll-services": "Payroll Services",
    "form.services.vat-return": "VAT Return",
    "form.services.year-end-accounts": "Year-end Accounts",
    "form.services.rd-advisory": "R&D Advisory",
    "form.services.audit-preparation": "Audit Preparation",
    "form.error.name": "Name must be at least 2 characters",
    "form.error.email": "Invalid email address",
    "form.error.service": "Please select a service",

    "footer.cta": "Let's work together",
    "footer.ready": "Ready to get started?",
    "footer.description": "Countify is your trusted partner for accounting, tax, and business solutions in the UAE and beyond. We simplify your financial processes so you can focus on growing your business.",
    "footer.map": "View on Google Maps",
    "footer.uaeAddress1": "Meydan Grandstand, 6th floor,",
    "footer.uaeAddress2": "Meydan Road, Nad Al Sheba, Dubai, UAE",
    "footer.ukAddress1": "3rd Floor, St. Georges Building",
    "footer.ukAddress2": "5 St. Vincent Place",
    "footer.ukAddress3": "Glasgow, G1 2DH",
    "footer.locate": "Locate Us",
    "footer.ukOffice": "UK Office",
    "footer.getInTouch": "Get in Touch",
    "footer.orCall": "or call",
    "footer.rights": "All rights reserved",
    "footer.tagline": "Chartered Accountants · Dubai · Abu Dhabi · Sharjah",
    "footer.quick": "Quick Links",
    "footer.services": "Services",

    "button.readMore": "Read More",
    "button.contactUs": "Contact Us",
    "button.learnMore": "Learn More",
    "button.getQuote": "Get a Quote",
    "button.send": "Send Message",

    "services.para": "Discover our expert accounting, tax, and business setup services, tailored to your unique needs. We offer personalized solutions designed to simplify your financial processes, ensure compliance, and drive business growth.",
    "services.title": "Our Services",
    "services.description": "Explore our comprehensive range of accounting, tax, and business setup services tailored to meet your needs.",
    "services.notFound.title": "Can't find what you're looking for?",
    "services.notFound.body": "Get in touch for a free consultation and we'll help you find the right solution for your business.",

    "cookie.text": "We use cookies to improve your experience. By continuing to use this site, you agree to our",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline",
    "cookie.policy": "Privacy Policy",
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل معنا",
    "nav.team": "فريقنا",
    "nav.blog": "المدونة",

    "services.bookkeeping.title": "خدمات مسك الدفاتر",
    "services.formation.title": "تأسيس الشركات",
    "services.payroll.title": "خدمات الرواتب",
    "services.vat.title": "إقرار ضريبة القيمة المضافة",
    "services.accounts.title": "حسابات نهاية السنة",
    "services.corporate-tax.title": "ضريبة الشركات",
    "services.rd.title": "استشارات البحث والتطوير",
    "services.audit.title": "التحضير للتدقيق",

    "home.hero.eyebrow": "محاسبون قانونيون · الإمارات",
    "home.hero.h1.line1": "خبرة الشركات الأربع الكبرى.",
    "home.hero.h1.line2": "أسعار مناسبة للمؤسسين.",
    "home.hero.subtitle": "محاسبون مؤهلون من ACCA يقدمون خدمات ضريبة القيمة المضافة، وضريبة الشركات، واستشارات البحث والتطوير، وتأسيس الشركات في دبي وأبوظبي والشارقة.",
    "home.hero.badge.fcca": "مؤهل FCCA",
    "home.hero.badge.big4": "خبرة Big 4",
    "home.hero.badge.fta": "متوافق مع الهيئة الاتحادية للضرائب",
    "home.hero.badge.rd": "متخصصون في البحث والتطوير",
    "home.hero.stats.years": "سنوات خبرة مشتركة",
    "home.hero.stats.rd": "متخصصون في البحث والتطوير",
    "home.hero.stats.jurisdictions": "نطاقان قضائيان",
    "home.hero.scroll": "انتقل للأسفل",
    "home.intro": "مرحبًا بك في شريكك الموثوق لخدمات المحاسبة والضرائب وتأسيس الأعمال في دولة الإمارات. بخبرة تتجاوز 15 عامًا في المحاسبة القانونية، نخدم الشركات الناشئة والصغيرة والمتوسطة والمؤسسات القائمة بدقة وامتثال وعناية. سواء كنت تحتاج إلى تأسيس شركتك، أو إدارة مسك الدفاتر الشهري، أو تقديم ضريبة القيمة المضافة أو ضريبة الشركات، أو إعداد حسابات نهاية السنة، يضمن فريقنا بقاءك ملتزمًا ومركزًا على النمو.",

    "intro.eyebrow": "من نحن",
    "intro.title.line1": "محاسبون موثوقون لخدمة",
    "intro.title.line2": "الشركات النامية في الإمارات",
    "intro.cta": "استكشف خدماتنا",
    "intro.card.corporate.title": "ضريبة الشركات في الإمارات",
    "intro.card.corporate.body": "تُفرض على الدخل الخاضع للضريبة الذي يتجاوز 375,000 درهم. يجب على جميع الشركات، بما في ذلك شركات المناطق الحرة، التسجيل لدى الهيئة الاتحادية للضرائب.",
    "intro.card.vat.title": "الامتثال لضريبة القيمة المضافة",
    "intro.card.vat.body": "النسبة القياسية على معظم التوريدات هي 5%. التسجيل إلزامي عند تجاوز 375,000 درهم من المبيعات الخاضعة للضريبة، مع تقديم إقرارات ربع سنوية للهيئة.",
    "intro.card.rd.title": "حوافز ضريبية للبحث والتطوير",
    "intro.card.rd.body": "خصومات معززة على النفقات المؤهلة. نقدم استشارات شاملة عبر أحد الفرق القليلة المتخصصة في البحث والتطوير داخل الإمارات.",

    "servicessection.eyebrow": "ما نقدمه",
    "servicessection.title": "خدمات المحاسبة والضرائب",
    "servicessection.subtitle": "خدمات شاملة في المحاسبة والضرائب وتأسيس الأعمال داخل الإمارات يقدمها متخصصون مؤهلون من ACCA.",
    "servicessection.button": "عرض جميع الخدمات",
    "servicessection.learnmore": "اعرف المزيد",
    "servicessection.featured": "مميز",

    "process.eyebrow": "كيف نعمل",
    "process.title": "أربع خطوات لشراكة واضحة ومتوافقة",
    "process.step1.title": "مكالمة استكشاف",
    "process.step1.description": "استشارة مجانية لمدة 30 دقيقة لفهم نشاطك التجاري ووضعك الحالي واحتياجات الامتثال.",
    "process.step2.title": "عرض مخصص",
    "process.step2.description": "نطاق عمل وجدول زمني ورسوم ثابتة مصممة حسب حجم عملك ودرجة تعقيده.",
    "process.step3.title": "الإعداد والانطلاق",
    "process.step3.description": "نتولى التسجيلات الضريبية وإعداد الأنظمة وترحيل السجلات المالية الحالية.",
    "process.step4.title": "شراكة مستمرة",
    "process.step4.description": "مدير حساب مخصص وتقارير منتظمة واستشارات استباقية مع نمو أعمالك.",

    "why.eyebrow": "لماذا Countify",
    "why.title": "خبرة مؤسسية. تنفيذ مرن مناسب للمؤسسين.",
    "why.description": "نجمع بين صرامة Big 4 وسرعة استجابة الشركات المتخصصة. النتيجة: منهجية مؤسسية، ورسوم ثابتة واضحة، وشريك يتابع معك فعليًا.",
    "why.founders": "خلفية المؤسسين",
    "why.benefit1.title": "خلفية Big 4",
    "why.benefit1.description": "تدرب مؤسسونا في KPMG بالمملكة المتحدة ويطبقون منهجية مؤسسية في كل تعامل، دون تكلفة الشركات الكبرى.",
    "why.benefit2.title": "مؤهلون من ACCA",
    "why.benefit2.description": "الشريكان المؤسسان مؤهلان من ACCA، لذلك تحصل على خبرة محاسبة قانونية مباشرة في كل مشروع.",
    "why.benefit3.title": "أكثر من 20 عامًا من الخبرة المشتركة",
    "why.benefit3.description": "خبرة مشتركة تتجاوز 20 عامًا في أسواق المملكة المتحدة والإمارات، مع فهم عميق لكلا النظامين.",
    "why.benefit4.title": "متخصصون في البحث والتطوير",
    "why.benefit4.description": "من بين القلة في الإمارات الذين يقدمون استشارات بحث وتطوير متوافقة وشاملة بقيادة متخصصين بخبرة مركزة تتجاوز 7 سنوات.",
    "why.benefit5.title": "متوافقون مع متطلبات الإمارات والهيئة",
    "why.benefit5.description": "معرفة عملية بلوائح الهيئة الاتحادية للضرائب، وقانون ضريبة الشركات، وتعديلات ضريبة القيمة المضافة لعام 2026، ومتطلبات IFRS.",

    "faq.eyebrow": "الأسئلة الشائعة",
    "faq.title": "أسئلة وإجابات واضحة.",
    "faq.subtitle": "إجابات على الأسئلة الشائعة حول ضريبة الشركات، وضريبة القيمة المضافة، وحوافز البحث والتطوير، وطريقة عملنا مع الشركات النامية.",
    "faq.cta.title": "هل لديك سؤال آخر؟",
    "faq.cta.body": "تحدث مباشرة مع أحد محاسبينا القانونيين. الاستشارة الأولية مجانية.",
    "faq.cta.link": "تواصل معنا",

    "form.title": "اطلب استشارة",
    "form.subtitle": "اكتشف كيف يمكن لخدماتنا أن تساعد عملك",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.service": "أنا مهتم بـ...",
    "form.submit": "ابدأ الآن",
    "form.disclaimer": "بالمتابعة، فإنك توافق على",
    "form.privacy": "سياسة الخصوصية",
    "form.phone": "رقم الهاتف في الإمارات",
    "form.message": "الرسالة",
    "form.submitting": "جارٍ المتابعة...",
    "form.whatsapp": "أو تحدث معنا عبر واتساب",
    "form.services.bookkeeping": "مسك الدفاتر",
    "form.services.company-formation": "تأسيس الشركات",
    "form.services.payroll-services": "خدمات الرواتب",
    "form.services.vat-return": "إقرار ضريبة القيمة المضافة",
    "form.services.year-end-accounts": "حسابات نهاية السنة",
    "form.services.rd-advisory": "استشارات البحث والتطوير",
    "form.services.audit-preparation": "التحضير للتدقيق",
    "form.error.name": "يجب أن يتكون الاسم من حرفين على الأقل",
    "form.error.email": "يرجى إدخال بريد إلكتروني صحيح",
    "form.error.service": "يرجى اختيار خدمة",

    "footer.cta": "دعنا نعمل معًا",
    "footer.ready": "هل أنت مستعد للبدء؟",
    "footer.description": "Countify هو شريكك الموثوق لخدمات المحاسبة والضرائب وحلول الأعمال في الإمارات وخارجها. نبسط عملياتك المالية لتتمكن من التركيز على نمو عملك.",
    "footer.map": "عرض الموقع على خرائط Google",
    "footer.uaeAddress1": "ميدان جراندستاند، الطابق السادس،",
    "footer.uaeAddress2": "طريق ميدان، ند الشبا، دبي، الإمارات",
    "footer.ukAddress1": "الطابق الثالث، مبنى سانت جورج",
    "footer.ukAddress2": "5 سانت فنسنت بليس",
    "footer.ukAddress3": "غلاسكو، G1 2DH",
    "footer.locate": "موقعنا",
    "footer.ukOffice": "مكتب المملكة المتحدة",
    "footer.getInTouch": "تواصل معنا",
    "footer.orCall": "أو اتصل على",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.tagline": "محاسبون قانونيون · دبي · أبوظبي · الشارقة",
    "footer.quick": "روابط سريعة",
    "footer.services": "الخدمات",

    "button.readMore": "اقرأ المزيد",
    "button.contactUs": "تواصل معنا",
    "button.learnMore": "اعرف المزيد",
    "button.getQuote": "احصل على عرض سعر",
    "button.send": "إرسال الرسالة",

    "services.para": "اكتشف خدماتنا المتخصصة في المحاسبة والضرائب وتأسيس الأعمال، المصممة لتلبية احتياجاتك. نقدم حلولًا مخصصة تبسط عملياتك المالية وتضمن الامتثال وتدعم نمو أعمالك.",
    "services.title": "خدماتنا",
    "services.description": "استكشف مجموعة خدماتنا الشاملة في المحاسبة والضرائب وتأسيس الأعمال، المصممة لتلبية احتياجاتك.",
    "services.notFound.title": "لم تجد ما تبحث عنه؟",
    "services.notFound.body": "تواصل معنا للحصول على استشارة مجانية وسنساعدك في اختيار الحل المناسب لعملك.",

    "cookie.text": "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرارك في استخدام الموقع فإنك توافق على",
    "cookie.accept": "موافق",
    "cookie.decline": "رفض",
    "cookie.policy": "سياسة الخصوصية",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage === 'en' || savedLanguage === 'ar') {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'ar' ? 'ar-AE' : 'en-AE';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.cookie = `language=${lang};path=/;max-age=31536000`;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const t = (key: string, fallback?: string): string => {
    return translations[language]?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
