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
    // Navigation
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
    //servicessection
    "servicessection.title": "Our Services",
    "servicessection.subtitle": "Expert accounting, tax and business setup services across the UAE",
    "servicessection.button": "View All",
    //.. Faq Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our services, processes, and business solutions.",
    // Home Page
    'home.hero.title': 'Expert Accounting & Business Setup Services in the UAE',
    'home.hero.h1': 'Expert Accountants in UAE — VAT, Corporate Tax, R&D & Company Formation',
    'home.hero.subtitle': 'Countify brings Big 4 expertise to growing businesses across Dubai, Abu Dhabi and Sharjah. ACCA-qualified. FTA-compliant. Results-driven.',
    'home.hero.trust': 'Trusted by businesses across the UAE │ UK-backed expertise since 2021',
    'home.hero.description': 'Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care.',
    'home.hero.subtext': 'Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth.',
    'home.services.title': 'What We Do Best',
    'home.intro': 'Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care. Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth.',
    //choosecard

    // Form Translations
    'form.title': 'Request a Consultation',
    'form.subtitle': 'Learn how our sustainable solutions can help your business',
    'form.name': 'Your Name',
    'form.email': 'Email Address',
    'form.service': "I'm interested in...",
    'form.submit': 'Get Started',
    'form.disclaimer': 'By submitting this form, you agree to our',
    'form.privacy': 'Privacy Policy',
    'form.phone': 'Phone Number (UAE)',
    'form.message': 'Message',
    'form.submitting': 'Sending...',
    'form.whatsapp': 'Or chat on WhatsApp',
    'form.services.bookkeeping': 'Bookkeeping',
    'form.services.company-formation': 'Company Formation',
    'form.services.payroll-services': 'Payroll Services',
    'form.services.vat-return': 'VAT Return',
    'form.services.year-end-accounts': 'Year-end Accounts',
    'form.services.rd-advisory': 'R&D Advisory',
    'form.services.audit-preparation': 'Audit Preparation',
  //
    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.point1': 'Qualified Chartered Accountant (15+ Years of Experience)',
    'why.point2': 'Fully FTA & IFRS Compliant Services',
    'why.point3': 'Trusted by Startups, Freezone Companies & SMEs',
    'why.point4': 'Transparent Pricing, Personalised Support',
    'why.point5': 'Based in Sharjah – Serving All Emirates',
    
    // CTA
    'cta.title': 'Start with a Free Consultation',
    'cta.description': 'Let\'s simplify your finance, tax, and compliance.',
    'cta.subtext': 'Contact us now for expert support and personalised solutions.',
    'cta.email': 'Email',
    'cta.whatsapp': 'WhatsApp',
    'cta.visit': 'Visit us in UAE',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.contact': 'Contact Info',
    'footer.address': 'Office Address',
    'footer.follow': 'Follow Us',
    'footer.quick': 'Quick Links',
    'footer.cta': 'Let’s work together',
    'footer.description':
      'Countify is your trusted partner for accounting, tax, and business solutions in the UAE and beyond. We simplify your financial processes so you can focus on growing your business.',
    
    // Buttons
    'button.readMore': 'Read More',
    'button.contactUs': 'Contact Us',
    'button.learnMore': 'Learn More',
    'button.getQuote': 'Get a Quote',
    'button.send': 'Send Message',
    //services page
    'services.para': "Discover our expert accounting, tax, and business setup services, tailored to your unique needs. We offer personalized solutions designed to simplify your financial processes, ensure compliance, and drive business growth. Let us help you achieve your goals with our trusted expertise and commitment to excellence."

  },
  
  ar: {
    // Navigation (Arabic placeholders - to be replaced with actual translations)
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.contact": "اتصل بنا",
    "nav.team": "فريقنا",
    "nav.blog": "المدونة",
    "services.bookkeeping.title": "خدمات مسك الدفاتر",
    "services.formation.title": "تأسيس الشركات",
    "services.payroll.title": "خدمات الرواتب",
    "services.vat.title": "الإقرار الضريبي",
    "services.accounts.title": "الحسابات السنوية",
    "services.corporate-tax.title": "الضريبة على الشركات",
    "services.rd.title": "استشارات البحث والتطوير",
    "services.audit.title": "خدمات التدقيق",

    // Home Page
    'home.hero.title': 'خدمات المحاسبة وتأسيس الأعمال الاحترافية في الإمارات العربية المتحدة',
    'home.hero.h1': 'محاسبون خبراء في الإمارات — ضريبة القيمة المضافة وضريبة الشركات والبحث والتطوير وتأسيس الشركات',
    'home.hero.subtitle': 'تجلب Countify خبرة Big 4 للشركات النامية في دبي وأبوظبي والشارقة. مؤهل ACCA. متوافق مع الهيئة الاتحادية للضرائب. نتائج ملموسة.',
    'home.hero.trust': 'موثوق من قبل الشركات في الإمارات │ خبرة مدعومة من المملكة المتحدة منذ 2021',
    'home.hero.description': 'مرحبًا بكم في شريككم الموثوق لخدمات المحاسبة، الضرائب، وتأسيس الأعمال في جميع أنحاء الإمارات العربية المتحدة. مدعومين بأكثر من 15 عامًا من الخبرة في المحاسبة القانونية، نخدم الشركات الناشئة، والشركات الصغيرة والمتوسطة، والمؤسسات الراسخة بدقة والتزام واهتمام.',
    'home.hero.subtext': 'سواء كنت بحاجة إلى مساعدة في تأسيس شركتك، أو إدارة المحاسبة الشهرية، أو تقديم ضريبة القيمة المضافة أو الضريبة على الشركات، أو إنهاء حسابات نهاية العام، فريقنا المتمرس يضمن بقاءك ملتزمًا بالقوانين ومركزًا على النمو.',
    'home.services.title': 'ما نتميز به',
    'home.intro':'مرحبًا بك مع شريكك الموثوق به لخدمات المحاسبة والضرائب وتأسيس الأعمال في جميع أنحاء دولة الإمارات. بدعم من أكثر من 15 عامًا من الخبرة في المحاسبة القانونية، نخدم الشركات الناشئة، والشركات الصغيرة والمتوسطة، والمؤسسات القائمة بدقة وامتثال وعناية.سواء كنت بحاجة إلى مساعدة في تأسيس شركتك، أو إدارة الدفاتر الشهرية، أو تقديم إقرارات ضريبة القيمة المضافة أو الضريبة على الشركات، أو إعداد الحسابات الختامية، فإن فريقنا الخبير يضمن لك الالتزام التام والتركيز على النمو.', 
      // ...existing Arabic translations...
      "servicessection.title": "خدماتنا",
      "servicessection.subtitle": "خدمات محاسبة وضرائب وتأسيس أعمال متخصصة في جميع أنحاء الإمارات",
      "servicessection.button": "عرض الكل",
      //.. Faq Section
      "faq.title": "الأسئلة الشائعة",
      "faq.subtitle": "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا وعملياتنا وحلول الأعمال.",
    // Form Translations (Arabic placeholders - replace with actual translations)
    'form.title': 'طلب استشارة',
    'form.subtitle': 'تعرف على كيف يمكن لحلولنا المستدامة أن تساعد عملك',
    'form.name': 'اسمك',
    'form.email': 'عنوان البريد الإلكتروني',
    'form.service': 'أنا مهتم بـ...',
    'form.submit': 'ابدأ الآن',
    'form.disclaimer': 'بتقديم هذا النموذج، فإنك توافق على',
    'form.privacy': 'سياسة الخصوصية',
    'form.phone': 'رقم الهاتف (الإمارات)',
    'form.message': 'الرسالة',
    'form.submitting': 'جارٍ الإرسال...',
    'form.whatsapp': 'أو تواصل عبر واتساب',
    'form.services.bookkeeping': 'مسك الدفاتر',
    'form.services.company-formation': 'تأسيس الشركات',
    'form.services.payroll-services': 'خدمات الرواتب',
    'form.services.vat-return': 'الإقرار الضريبي',
    'form.services.year-end-accounts': 'الحسابات السنوية',
    'form.services.rd-advisory': 'استشارات البحث والتطوير',
    'form.services.audit-preparation': 'خدمات التدقيق',
    
    // Why Choose Us
    'why.title': 'لماذا تختارنا؟',
    'why.point1': 'محاسب قانوني مؤهل (أكثر من 15 عامًا من الخبرة)',
    'why.point2': 'خدمات متوافقة تمامًا مع الهيئة الاتحادية للضرائب والمعايير الدولية للتقارير المالية',
    'why.point3': 'موثوق به من قبل الشركات الناشئة، وشركات المنطقة الحرة، والشركات الصغيرة والمتوسطة',
    'why.point4': 'أسعار شفافة، ودعم شخصي',
    'why.point5': 'مقرنا في الشارقة – نخدم جميع الإمارات',
    
    // CTA
    'cta.title': 'ابدأ باستشارة مجانية',
    'cta.description': 'دعنا نبسط التمويل والضرائب والامتثال لديك.',
    'cta.subtext': 'اتصل بنا الآن للحصول على دعم متخصص وحلول مخصصة.',
    'cta.email': 'البريد الإلكتروني',
    'cta.whatsapp': 'واتساب',
    'cta.visit': 'زيارتنا في الشارقة',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.contact': 'معلومات الاتصال',
    'footer.address': 'عنوان المكتب',
    'footer.follow': 'تابعنا',
    'footer.quick': 'روابط سريعة',
    'footer.cta': 'دعنا نعمل معًا',
    'footer.description': 'Countify هو شريكك الموثوق به لخدمات المحاسبة والضرائب وحلول الأعمال في الإمارات العربية المتحدة وما بعدها. نحن نبسط عملياتك المالية حتى تتمكن من التركيز على تنمية عملك.',
    // Buttons
    'button.readMore': 'قراءة المزيد',
    'button.contactUs': 'اتصل بنا',
    'button.learnMore': 'معرفة المزيد',
    'button.getQuote': 'احصل على عرض سعر',
    'button.send': 'إرسال رسالة',
    //services page
   'services.para':"اكتشف خدماتنا المتخصصة في المحاسبة والضرائب وتأسيس الأعمال المصممة خصيصًا لتلبية احتياجاتك الفريدة. نقدم حلولًا مخصصة تهدف إلى تبسيط عملياتك المالية وضمان الامتثال وتعزيز نمو أعمالك. دعنا نساعدك في تحقيق أهدافك من خلال خبرتنا الموثوقة والتزامنا بالتميز."


  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage); 

  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    document.cookie = `language=${newLang};path=/;max-age=31536000`;
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
